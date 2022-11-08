from typing import List
from fastapi import FastAPI, Query
import json

app = FastAPI()


@app.get("/hboi")
async def hboi(
    architectuurlaag: str = Query(
        default=None, regex="Gebruikersinteractie|Organisatieprocessen|Infrastructuur|Software|Hardwareinterfacing"),
    activiteit: str = Query(
        default=None, regex="Analyseren|Adviseren|Ontwerpen|Realiseren|Manage & Control"),
    niveau: str = Query(default=None, regex="1|2|3|4")
):
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


@app.get("/vaardigheden")
async def vaardigheden():
    vaardigheden = json.load(open("json/vaardigheden.json"))
    return vaardigheden


@app.get("/vaardigheden/{vaardigheid}")
async def vaardigheden(vaardigheid: str = Query(default=None, regex="Juiste kennis ontwikkelen|Kwalitatief product maken|Overzicht creëren|Kritisch oordelen|Samenwerken|Boodschap delen|Plannen|Flexibel opstellen|Pro-actief handelen|Reflecteren")):
    vaardigheden = json.load(open("json/vaardigheden.json"))
    return vaardigheden[vaardigheid]
