import React from "react";
import { Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

export function InfoButton ({ onClick }) {
  return <Button 
    icon={<InfoCircleOutlined />}
    onClick={onClick}
  />
}