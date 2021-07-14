
import { Button, Space } from 'antd';

import { CopyCard } from './Card';

export default function SelectOutOf({ title, options, setSelectedFunction, selected }) {

  const setState = (value) => {
    if (value === selected) {
      return setSelectedFunction("undefined");
    } else {
      return setSelectedFunction(value);
    }
  }

  return <CopyCard
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
  </CopyCard >
}
