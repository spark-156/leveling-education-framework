import React from "react";
import { Divider, Row, Col } from "antd";
import { rowStyle } from "../lib";
import { CopyCard } from "./CopyCard";


export function Skill({ title, description, afzonderlijketaken }) {
  const keys = Object.keys(afzonderlijketaken)

  return (<>
    <Divider orientation="left">{title}</Divider>
    <Row style={rowStyle} gutter={[12, 12]}>
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <CopyCard
          title="Descriptie"
          copy={description}
        >
          {description}
        </CopyCard>
      </Col>
      {keys.map(key => (<Col xs={24} sm={24} md={6} lg={6} xl={6} key={key}>
        <CopyCard
          key={key}
          title={key}
          copy={afzonderlijketaken[key]}
        >
          {afzonderlijketaken[key]}
        </CopyCard>
      </Col>))}
    </Row>
  </>)
}