import { Grid, Row, Col } from "rsuite";

import { NavbarHBOI } from "../components/Navbar";
import { Card } from '../components/Card';

import { beheersingsniveaus } from "../data/hboi";

export default function Beheersingsniveaus() {
  const keys = Object.keys(beheersingsniveaus);
  return (
    <>
      <NavbarHBOI active="beheersingsniveaus" />
      {keys.map(value => { console.log(beheersingsniveaus[value]["Zelfstandigheid"], "\n\n", beheersingsniveaus[value]["Complexiteit"]) })}
    </>
  );
}