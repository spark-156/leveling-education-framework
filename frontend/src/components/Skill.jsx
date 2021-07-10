
import { Grid, Row, Col } from "rsuite"
import { Divider } from 'antd';

import { Card } from "./Card";


export function Skill({ title, description, afzonderlijketaken }) {
  const keys = Object.keys(afzonderlijketaken)

  return (<Grid>
    <Row gutter={12}>
      <Divider orientation="left">{title}</Divider>
      <Col xs={24} sm={24} md={6} lg={6}>
        <Card
          title="Description"
          children={description}
          copy={description}
        />
      </Col>
      {keys.map(key => (<Col xs={24} sm={24} md={6} lg={6} key={key}>
        <Card
          key={key}
          title={key}
          children={afzonderlijketaken[key]}
          copy={afzonderlijketaken[key]}
        />
      </Col>))}
    </Row>
  </Grid>)
}