import React from "react";
import { Card } from "antd";

import styles from "../styles/Card.module.css";

export function CustomCard({ title, children, headStyle, extra = null }) {
  return <Card
    style={{ borderRadius: "5px" }}
    headStyle={headStyle}
    className={styles.displayLinebreak}
    extra={extra}
    title={title}
    size="small"
  >
    {children}
  </Card>
}
