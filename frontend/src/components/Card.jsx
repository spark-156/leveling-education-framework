import { Card } from 'antd';

import { CopyToClipboardButton } from './CopyToClipboardButton';

export function CopyCard({ title, children, copy }) {

  let extra = null;
  if (copy) extra = < CopyToClipboardButton content={copy} />

  return (
    <Card
      title={title}
      size="small"
      extra={extra}
      children={children}
    />
  );
}