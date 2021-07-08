import React from "react";

import { Loader } from 'rsuite';
import { NavbarHBOI } from "./Navbar";


export default function Loading() {
  return (
    <>
      <NavbarHBOI />
      <Loader size="lg" center content="loading" />
    </>
  );
}