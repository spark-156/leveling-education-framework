import React from "react"

import useQueryString from "../lib/useQueryString";
import SelectOutOf from "../components/SelectOutOf";
import { rowStyle } from "../lib"
import { vaardigheden } from '../data/open-ict-vaardigheden'
import { Row, Col, Divider } from 'antd'
import { CopyCard } from "../components/Card";

export default function Vaardigheden() {
    const [vaardigheid, setSelectedVaardigheid] = useQueryString("vaardigheid");

    let vaardighedenHtml = Object.keys(vaardigheden).map(key => (
        <>
            <Divider orientation="left">{key}</Divider>
            <Row
                style={rowStyle}
                gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}
            >
              {Object.keys(vaardigheden[key]).map(niveau => (
                <Col
                  key={vaardigheden[key][niveau]}
                  span={6}
                  xs={24}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                >
                  <CopyCard copy={vaardigheden[key][niveau]['title']} title={`Niveau ${niveau}`}>
                    {vaardigheden[key][niveau]['title']}
                  </CopyCard>
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
            {Object.keys(vaardigheden[vaardigheid]).map(niveau => (
              <Col
                key={vaardigheden[vaardigheid][niveau]}
                span={6}
                xs={24}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                <CopyCard copy={vaardigheden[vaardigheid][niveau]['title']} title={`Niveau ${niveau}`}>
                  {vaardigheden[vaardigheid][niveau]['title']}
                </CopyCard>
              </Col>
            ))}
          </Row>
      </>
    }


    return <>
        <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
            <Col 
                style={{
                    margin: "0 auto"
                }} 
                span={12}
                xs={24}
                sm={24} 
                md={12} 
                lg={12} 
                xl={12}
            >
                <SelectOutOf
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
