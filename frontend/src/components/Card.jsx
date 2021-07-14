import { Card } from 'antd';

import { CopyToClipboardButton } from './CopyToClipboardButton';

export function CopyCard({ title, children, copy, headStyle }) {

  let extra = null;
  if (copy) extra = < CopyToClipboardButton content={copy} />

  return (
    <Card
      headStyle={headStyle}
      title={title}
      size="small"
      extra={extra}
      children={children}
    />
  );
}