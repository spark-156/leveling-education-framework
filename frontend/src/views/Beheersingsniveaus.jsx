import { Grid, Row, Col } from "rsuite";
import { Divider } from 'antd';

import { NavbarHBOI } from "../components/Navbar";
import { Card } from '../components/Card';

import { beheersingsniveaus } from "../data/hboi";

export default function Beheersingsniveaus() {
  const keys = Object.keys(beheersingsniveaus.Zelfstandigheid); // Same keys for "Complexiteit" and "Zelfstandigheid"
  const complexiteitKeys = Object.keys(beheersingsniveaus.Complexiteit.Taakgericht)
  return (
    <>
      <NavbarHBOI active="beheersingsniveaus" />
      <Grid>
        <h2>Beheersingsniveaus</h2>
        <div style={{ padding: "0 7px" }}>Een van de dimensies van de HBO-i-domeinbeschrijving betreft het beheersingsniveau. Deze is van belang voor het bepalen van een opleidingsniveau.Binnen het HBO-i domein kunnen opleidingen en studenten verschillende accenten leggen. Daardoor zal er variatie bestaan in het niveau waaropdeelgebieden beheerst (moeten) worden. Om binnen de diversiteit vergelijkbaarheid mogelijk te maken, onderscheiden we vier beheersingsniveaus.Het beheersingsniveau wordt bepaald door de complexiteit van context, de complexiteit van de inhoud en de zelfstandigheid bij de uitvoering van deopdracht. Een beheersingsniveau wordt bereikt als twee van deze facetten op het betreffende niveau liggen. Voor het derde beheersingsniveau kunnenbijvoorbeeld de zelfstandigheid en de complexiteit van de context niveau drie hebben, terwijl de complexiteit van de inhoud op niveau twee ligt. Maar hetkan ook zijn dat de complexiteit van de context en de inhoud op niveau drie liggen terwijl de zelfstandigheid niveau twee heeft. De typering van hetbeheersingsniveau in onderstaand overzicht sluit aan bij de niveaubeschrijving in dimensie drie van het e-CF en de niveau-indeling die door deExpertgroep protocol van de Vereniging Hogescholen is beschreven (Andriessen et al., 2014).De beschrijving van de beroepstaken per architectuurlaag is ingedeeld in vier beheersingsniveau 's. Daarbij vereist een hoger beheersingsniveau in hetalgemeen de beheersing van de beroepstaken op de onderliggende beheersingsniveau 's. In de architectuurlaag hardware interfacing is dit slechtsgedeeltelijk het geval omdat daarin beroepstaken uit de twee onderscheiden deelgebieden embedded software en procesautomatisering beschrevenworden. In een opleidingsprogramma kan, vanaf een bepaald beheersingsniveau gekozen worden voor focus op slechts één van deze deelgebieden.</div>
        <Row><Divider orientation="left">Zelfstandigheid</Divider></Row>
        <Row>
          {keys.map(key => <Col xs={24} sm={24} md={6} lg={6} key={`${key}`}><Card title={key} copy={beheersingsniveaus.Zelfstandigheid[key]}>{beheersingsniveaus.Zelfstandigheid[key]}</Card></Col>)}
        </Row>
        <Row><Divider orientation="left">Complexiteit</Divider></Row>
        <Row>
          {keys.map(key => (<Col xs={24} sm={24} md={6} lg={6} key={`${key}`}>
            <Card title={key} copy={"Context: " + beheersingsniveaus.Complexiteit[key][complexiteitKeys[0]] + " Inhoud: " + beheersingsniveaus.Complexiteit[key][complexiteitKeys[1]]}>
              {complexiteitKeys.map(complexiteitkey => (<>
                <p style={{ fontSize: 17 }}>{complexiteitkey[0].toUpperCase() + complexiteitkey.substring(1)}</p>
                {beheersingsniveaus.Complexiteit[key][complexiteitkey]}
              </>))}
            </Card>
          </Col>))}
        </Row>
      </Grid>
    </>
  );
}
