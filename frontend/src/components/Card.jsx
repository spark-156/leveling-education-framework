import { Card } from 'antd';

import { CopyToClipboardButton } from './CopyToClipboardButton';
import styles from "../styles/Card.module.css";

export function CopyCard({ title, children, copy, headStyle }) {

  let extra = null;
  if (copy) extra = < CopyToClipboardButton content={copy} />

  return (
    <Card
      className={styles.displayLinebreak}
      headStyle={headStyle}
      title={title}
      size="small"
      extra={extra}
      children={children}
    />
  );
}