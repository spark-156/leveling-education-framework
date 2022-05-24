import { CustomCard } from './CustomCard';

import { CopyToClipboardButton } from './CopyToClipboardButton';

export function CopyCard({ title, children, copy, headStyle }) {
  return <CustomCard
      headStyle={headStyle}
      title={title}
      extra={<CopyToClipboardButton content={copy} />}
      children={children}
    />
}
