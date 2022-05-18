import { Button } from "antd";
import { InfoOutlined } from "@ant-design/icons";

export function InfoButton ({ onClick }) {
  return <Button 
    icon={<InfoOutlined />}
    onClick={onClick}
  />
}