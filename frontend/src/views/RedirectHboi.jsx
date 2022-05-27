import React from "react";
import { Redirect, useParams } from "react-router-dom";


function RedirectHboi () {
  const params = useParams()

  const searchParams = new URLSearchParams(Object.fromEntries(
    // eslint-disable-next-line no-unused-vars
    Object.entries(params).filter(([_key, value]) => value !== "undefined")
  ))
    
  return <Redirect to={`/${searchParams ? "?" : null}${searchParams.toString()}`} />
}

export default RedirectHboi;