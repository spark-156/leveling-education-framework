import { Grid, Row, Col } from "rsuite";

import { NavbarHBOI } from "../components/Navbar";

export default function Home() {
  const divStyle = {
    padding: "0 7px"
  }
  return (<>
    <NavbarHBOI active={"home"} />
    <Grid>
      <Row>
        <Col>
          <br />
          <p style={divStyle}>This page holds the carbon copy of this <a href="https://www.vereniginghogescholen.nl/system/profiles/documents/000/000/242/original/HBO-i-domeinbeschrijving_2018.pdf?1563200208">pdf</a>. The purpose of this website is to make it a lot easier for any user to quickly find what they are looking for in the document without having to scroll through 26 pages of mostly useless or redundant information. This website also has small improvement of life tweaks such as a copy to clipboard button and very fast and easy to use HBO-I beroepstaken picker. The links are also shareable so you can easily send the HBO-I you are talking about to a friend without issue.</p>
          <p style={divStyle}>This site was written by Luca Bergman in React with the <a href="https://rsuitejs.com/">React Suite</a> component library. The source code can be found <a href="https://github.com/spark-156/hboi-domeinbeschrijving">here</a>.</p>
        </Col>
      </Row>
    </Grid>
  </>)
}