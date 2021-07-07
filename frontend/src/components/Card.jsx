import { Panel, Grid, Col, Row } from 'rsuite';

import { CopyToClipboardButton } from './CopyToClipboardButton';

export function Card({ title, content, copy = false }) {

  let header = title;

  if (copy) {
    header = <Grid fluid>
      <Row>
        <Col xs={18}>{title}</Col>
        <Col xs={6} style={{ textAlign: "right" }}><CopyToClipboardButton content={content} /></Col>
      </Row>
    </Grid>
  }

  return (
    <Panel
      style={{ margin: "5px 0px" }}
      bordered
      header={
        header
      }
    >
      {content}
    </Panel>
  );
}