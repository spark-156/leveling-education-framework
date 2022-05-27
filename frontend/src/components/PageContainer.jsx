import React from "react";
import styles from "../styles/Container.module.css";
import { Layout } from "antd";

const { Content } = Layout

export function PageContainer({ children, className }) {
  return <Content className={`${styles.container} ${className}`}>
    {children}
  </Content>
}