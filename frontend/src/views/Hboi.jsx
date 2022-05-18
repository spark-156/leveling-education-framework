import React from "react";
import { Row, Col, Divider } from "antd";

import { CopyCard } from "../components/CopyCard";

import {
  hboi,
  architectuurlagen,
  activiteiten,
  activiteitenPointer,
  architectuurlagenPointer,
} from "../data/hboi";

import SelectOutOf from "../components/SelectOutOf";
import { rowStyle } from "../lib";

import useQueryString from "../lib/useQueryString";

export default function Hboi() {
  const [architectuurlaag, setSelectedArchitectuurlaag] = useQueryString("architectuurlaag");
  const [activiteit, setSelectedActiviteit] = useQueryString("activiteit");

  let htmlHBOI = <>
    {Object.keys(hboi).map((key) => (
      <>
        <Divider orientation="left">{key}</Divider>
        <Row
          style={rowStyle}
          gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}
        >
          {Object.keys(hboi[key]).map(niveau => (
            <Col
              key={niveau}
              span={6}
              xs={24}
              sm={12}
              md={12}
              lg={6}
              xl={6}
            >
              <CopyCard copy={hboi[key][niveau]['title']} title={`Niveau ${niveau}`}>
                {hboi[key][niveau]['title']}
              </CopyCard>
            </Col>
          ))}
        </Row>
      </>
    ))}
  </>
  if (architectuurlaag && activiteit) {
    // both selected
    htmlHBOI = (
      <>
        <Divider orientation="left">
          {architectuurlaag} {activiteit}
        </Divider>
        <Row
          style={rowStyle}
          gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}
        >
          {Object.keys(hboi[`${architectuurlaag} ${activiteit}`]).map(niveau => (
              <Col
                key={niveau}
                span={6}
                xs={24}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                <CopyCard copy={hboi[`${architectuurlaag} ${activiteit}`][niveau]['title']} title={`Niveau ${niveau}`}>
                  {hboi[`${architectuurlaag} ${activiteit}`][niveau]['title']}
                </CopyCard>
              </Col>
            )
          )}
        </Row>
      </>
    );
  }
  if (architectuurlaag && !activiteit) {
    // architectuurlaag only selected
    htmlHBOI = architectuurlagenPointer[architectuurlaag].map(
      (architectuurlaagValue, index) => (
        <>
          <Divider orientation="left">
            {architectuurlaag} {activiteiten[index]}
          </Divider>
          <Row
            style={rowStyle}
            gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}
          >
            {Object.keys(architectuurlaagValue).map(niveau => (
              <Col key={niveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
                <CopyCard copy={architectuurlaagValue[niveau]['title']} title={`Niveau ${niveau}`}>
                  {architectuurlaagValue[niveau]['title']}
                </CopyCard>
              </Col>
            ))}
          </Row>
        </>
      )
    );
  }
  if (!architectuurlaag && activiteit) {
    // activiteit only selected
    htmlHBOI = activiteitenPointer[activiteit].map((activiteitValue, index) => (
      <>
        <Divider orientation="left">
          {architectuurlagen[index]} {activiteit}
        </Divider>
        <Row
          style={rowStyle}
          gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}
        >
          {Object.keys(activiteitValue).map(niveau => (
              <Col key={niveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
                <CopyCard copy={activiteitValue[niveau]['title']} title={`Niveau ${niveau}`}>
                  {activiteitValue[niveau]['title']}
                </CopyCard>
              </Col>
            ))}
        </Row>
      </>
    ));
  }

  return (
    <>
      <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
          <SelectOutOf
            title="Architectuurlagen"
            options={architectuurlagen}
            id="architectuurlagen"
            setSelectedFunction={setSelectedArchitectuurlaag}
            selected={architectuurlaag}
          />
        </Col>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
          <SelectOutOf
            title="Activiteiten"
            options={activiteiten}
            id="activiteiten"
            setSelectedFunction={setSelectedActiviteit}
            selected={activiteit}
          />
        </Col>
      </Row>
      {htmlHBOI}
    </>
  );
}
