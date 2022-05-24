import React from "react"

import useQueryString from "../lib/useQueryString";
import SelectOutOfTen from "../components/SelectOutOfTen";
import { rowStyle } from "../lib"
import { vaardigheden } from '../data/vaardigheden'
import { Row, Col, Divider } from 'antd'
import { CopyInfoCard } from "../components/CopyInfoCard";

export default function Vaardigheden() {
    const [vaardigheid, setSelectedVaardigheid] = useQueryString("vaardigheid");

    let vaardighedenHtml = Object.keys(vaardigheden).map(key => (
        <>
            <Divider orientation="left">{key}</Divider>
            <Row
                style={rowStyle}
                gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}
            >
              {Object.keys(vaardigheden[key]).map((niveau, index) => (
                <Col
                  key={vaardigheden[key][niveau]['title'] + index}
                  span={6}
                  xs={24}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                >
                  <CopyInfoCard info={vaardigheden[key][niveau]['info']} infoTitle={`${key} ${niveau}`} copy={vaardigheden[key][niveau]['title']} title={`Niveau ${niveau}`}>
                    {vaardigheden[key][niveau]['title']}
                  </CopyInfoCard>
                </Col>
              ))}
            </Row>
        </>
    ))

    if (vaardigheid) {
      vaardighedenHtml = <>
          <Divider orientation="left">{vaardigheid}</Divider>
          <Row
              style={rowStyle}
              gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}
          >
            {Object.keys(vaardigheden[vaardigheid]).map((niveau, index) => (
              <Col
                key={vaardigheden[vaardigheid][niveau]['title'] + index}
                span={6}
                xs={24}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                <CopyInfoCard info={vaardigheden[vaardigheid][niveau]['info']} infoTitle={`${vaardigheid} ${niveau}`} copy={vaardigheden[vaardigheid][niveau]['title']} title={`Niveau ${niveau}`}>
                  {vaardigheden[vaardigheid][niveau]['title']}
                </CopyInfoCard>
              </Col>
            ))}
          </Row>
      </>
    }


    return <>
        <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
            <Col 
                style={{ margin: "0 auto" }} 
                span={24}
            >
                <SelectOutOfTen
                    title="Vaardigheden"
                    options={Object.keys(vaardigheden)}
                    id="vaardigheden"
                    setSelectedFunction={setSelectedVaardigheid}
                    selected={vaardigheid}
                />
            </Col>
        </Row>
        {vaardighedenHtml}
    </>
}
