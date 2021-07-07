import { Panel } from 'rsuite';

export function Card({ title, content }) {
    return (
        <Panel style={{ margin: "5px 0px"}} header={title} bordered>
          {content}
        </Panel>
      );
}