import { Redirect, useParams } from "react-router-dom";

function RedirectHboi () {
    const params = useParams()

    const searchParams = new URLSearchParams(Object.fromEntries(
        Object.entries(params).filter(([key, value]) => value !== 'undefined')
    ))
    
    return <Redirect to={`/${searchParams ? '?' : null}${searchParams.toString()}`} />
}

export default RedirectHboi;