import { Row, Col } from "antd";

import { NavbarHBOI } from "../components/Navbar";
import { rowStyle } from "../lib";

export default function Home() {
  return (<>
    <NavbarHBOI active={"home"} />
    <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
      <Col span={24}>
        <p>This page holds the carbon copy of this <a href="https://www.vereniginghogescholen.nl/system/profiles/documents/000/000/242/original/HBO-i-domeinbeschrijving_2018.pdf?1563200208">pdf</a>. The purpose of this website is to make it a lot easier for any user to quickly find what they are looking for in the document without having to scroll through 26 pages of mostly useless or redundant information. This website also has small improvement of life tweaks such as a copy to clipboard button and very fast and easy to use HBO-I beroepstaken picker. The links are also shareable so you can easily send the HBO-I you are talking about to a friend without issue.</p>
        <p>This site was written by Luca Bergman in React with the <a href="https://ant.design/">ant design</a> component library. The source code can be found <a href="https://github.com/spark-156/hboi-domeinbeschrijving">here</a>.</p>
      </Col>
    </Row>
  </>)
}