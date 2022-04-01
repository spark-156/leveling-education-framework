import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Divider } from "antd";

import { CopyCard } from "../components/Card";

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
  const [architectuurlaag, setSelectedArchitectuurlaag] = useQueryString(
    "architectuurlaag",
    null
  );
  const [activiteit, setSelectedActiviteit] = useQueryString(
    "activiteit",
    null
  );

  useEffect(() => {
    console.log({ architectuurlaag, activiteit });
    if (!architectuurlaag && !activiteit) console.log(true, "none");
    if (architectuurlaag && activiteit) console.log(true, "both");
    if (architectuurlaag && !activiteit) console.log(true, "arch");
    if (!architectuurlaag && activiteit) console.log(true, "act");
  }, [architectuurlaag, activiteit]);

  let htmlHBOI = null;

  if (!architectuurlaag && !activiteit) {
    // none selected
    htmlHBOI = (
      <>
        {Object.keys(hboi).map((key) => (
          <>
            <Divider orientation="left">{key}</Divider>
            <Row
              style={rowStyle}
              gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}
            >
              {hboi[key].map((niveau, index) => (
                <Col
                  key={niveau}
                  span={6}
                  xs={24}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                >
                  <CopyCard copy={niveau} title={`Niveau ${index + 1}`}>
                    {niveau}
                  </CopyCard>
                </Col>
              ))}
            </Row>
          </>
        ))}
      </>
    );
  }
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
          {hboi[`${architectuurlaag} ${activiteit}`].map(
            (hboiNiveau, index) => (
              <Col
                key={hboiNiveau}
                span={6}
                xs={24}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                <CopyCard copy={hboiNiveau} title={`Niveau ${index + 1}`}>
                  {hboiNiveau}
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
            {architectuurlaagValue.map((niveau, index) => (
              <Col key={niveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
                <CopyCard copy={niveau} title={`Niveau ${index + 1}`}>
                  {niveau}
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
          {activiteitValue.map((niveau, index) => (
            <Col key={niveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
              <CopyCard copy={niveau} title={`Niveau ${index + 1}`}>
                {niveau}
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
