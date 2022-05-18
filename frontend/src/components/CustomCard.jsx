import { Card } from 'antd';

import styles from "../styles/Card.module.css";

export function CustomCard({ title, children, headStyle, extra = null }) {
  return <Card
      headStyle={headStyle}
      className={styles.displayLinebreak}
      extra={extra}
      title={title}
      size="small"
      children={children}
    />
}
