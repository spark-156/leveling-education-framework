from fastapi import FastAPI, HTTPException, Query, Request, Response
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware
import json
from slowapi.errors import RateLimitExceeded
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
import uvicorn
import os


RATE_LIMIT_PER_MINUTE = os.getenv('RATE_LIMIT_PER_MINUTE', 8)


limiter = Limiter(key_func=get_remote_address)


app = FastAPI(
    responses={
        200: {
            "description": "Ok",
            "content": {
                "application/json": {

                }
            }
        },
        429: {
            "description": "Rate limit exceeded",
            "content": {
                "application/json": {
                    "example": {"error": f"Rate limit exceeded: {RATE_LIMIT_PER_MINUTE} per 1 minute"}
                }
            }
        }
    },
)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/hboi", tags=["HBO-I"])
@limiter.limit(limit_value=f"{RATE_LIMIT_PER_MINUTE}/minute")
async def hboi(
    request: Request,
    response: Response,
    architectuurlaag: str = Query(
        default=None, regex="Gebruikersinteractie|Organisatieprocessen|Infrastructuur|Software|Hardwareinterfacing"),
    activiteit: str = Query(
        default=None, regex="Analyseren|Adviseren|Ontwerpen|Realiseren|Manage & Control"),
    niveau: str = Query(default=None, regex="1|2|3|4")
):
    """Get all HBO-I
    """
    hboi = json.load(open("json/hboi.json"))

    if architectuurlaag:
        hboi = {key: value for key,
                value in hboi.items() if architectuurlaag in key}

    if activiteit:
        hboi = {key: value for key, value in hboi.items() if activiteit in key}

    if niveau:
        for key, value in hboi.items():
            hboi[key] = {niveau: value[niveau]}

    return hboi


@app.get("/vaardigheden", tags=["Open-ICT Vaardigheden"])
@limiter.limit(limit_value=f"{RATE_LIMIT_PER_MINUTE}/minute")
async def vaardigheden(request: Request, response: Response):
    """Get all vaardigheden
    """
    vaardigheden = json.load(open("json/vaardigheden.json"))
    return vaardigheden


@app.get("/vaardigheden/{vaardigheid}", description="'Juiste kennis ontwikkelen',\n'Kwalitatief product maken',\n'Overzicht creëren',\n'Kritisch oordelen',\n'Samenwerken',\n'Boodschap delen',\n'Plannen',\n'Flexibel opstellen',\n'Pro-actief handelen',\n'Reflecteren'", tags=["Open-ICT Vaardigheden"])
@limiter.limit(limit_value=f"{RATE_LIMIT_PER_MINUTE}/minute")
async def vaardigheden(request: Request, response: Response, vaardigheid: str):
    """Get specific vaardigheid
    """
    vaardigheden = json.load(open("json/vaardigheden.json"))
    if vaardigheid not in vaardigheden:
        raise HTTPException(
            status_code=404, detail="Vaardigheid: " + vaardigheid + " not found")
    return vaardigheden[vaardigheid]


def custom_openapi():
    """Generate custom open api documentation

    Returns:
        open api schema: custom open api documentation
    """
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="Leveling Education Framework",
        version="1.0",
        openapi_version="3.0.n",
        description="Leveling Education Framework public api for getting all HBO-I and Open-ICT Vaardigheden in json format.",
        routes=app.routes,
        servers=[
            {"url": "/api/v1", "description": "Production"},
            {"url": "/", "description": "Development"}
        ]
    )
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
