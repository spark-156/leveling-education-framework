import React from "react";
import { Route } from "react-router-dom";
import { PageContainer } from "./PageContainer";
import { useDispatch } from "react-redux";
import { setKey } from "../store/selectedKeySlice";

export default function CustomRoute ({ 
  pageTitle,
  path, 
  children,
  ...props
}) {
  const dispatch = useDispatch()
  dispatch((setKey(pageTitle)))

  return <Route
    path={path}
    {...props}
  >
    <PageContainer > 
      {children}
    </PageContainer>
  </Route>
}
