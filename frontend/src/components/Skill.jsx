
import { Grid, Row, Col } from "rsuite"

export function Skill({ title, description, afzonderlijketaken }) {
  const keys = Object.keys(afzonderlijketaken)

  return (<Grid>
    <Row gutter={12}>
      <h4>{title}</h4>
      <Col xs={24} sm={24} md={6} lg={6}>
        <h6>Description</h6>
        <div>{description}</div>
      </Col>
      {keys.map(key => (<Col xs={24} sm={24} md={6} lg={6} key={key}>
        <h6>{key}</h6>
        <div>{afzonderlijketaken[key]}</div>
      </Col>))}
    </Row>
  </Grid>)
}