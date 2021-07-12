
import { Divider, Row, Col } from 'antd';

import { CopyCard } from "./Card";


export function Skill({ title, description, afzonderlijketaken }) {
  const keys = Object.keys(afzonderlijketaken)

  return (<>
    <Divider orientation="left">{title}</Divider>
    <Row gutter={12}>
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <CopyCard
          title="Description"
          children={description}
          copy={description}
        />
      </Col>
      {keys.map(key => (<Col xs={24} sm={24} md={6} lg={6} xl={6} key={key}>
        <CopyCard
          key={key}
          title={key}
          children={afzonderlijketaken[key]}
          copy={afzonderlijketaken[key]}
        />
      </Col>))}
    </Row>
  </>)
}