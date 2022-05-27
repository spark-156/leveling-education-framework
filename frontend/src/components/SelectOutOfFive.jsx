import React from "react";
import { Button, Space } from "antd";
import { CustomCard } from "./CustomCard";


export default function SelectOutOfFive({ title, options, setSelectedFunction, selected }) {
  const setState = (value) => {
    if (value === selected) {
      return setSelectedFunction(null);
    } else {
      return setSelectedFunction(value);
    }
  }

  return <CustomCard
    headStyle={{ backgroundColor: "#1890ff", color: "#fff" }}
    title={title}
  >
    <Space direction="vertical" style={{ width: "100%" }}>
      {options.map(option => {
        let appearance = ""
        if (option === selected) {
          appearance = "primary"
        }
        return (<Button key={option} onClick={(e) => { setState(e.target.innerText) }} color="blue" type={appearance} block>
          {option}
        </Button>)
      })}
    </Space>
  </CustomCard >
}
