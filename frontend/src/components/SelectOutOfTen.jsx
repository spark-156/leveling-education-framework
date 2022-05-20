
import { Button, Row, Space, Col } from 'antd';

import { CustomCard } from './CustomCard';

export default function SelectOutOfTen({ title, options, setSelectedFunction, selected }) {
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
    <Row gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
      <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
        <Space direction="vertical" style={{ width: "100%" }}>
          {options.slice(0,5).map(option => {
            let appearance = ""
            if (option === selected) {
              appearance = "primary"
            }
            return (<Button key={option} onClick={(e) => { setState(e.target.innerText) }} color="blue" type={appearance} block>
              {option}
            </Button>)
          })}
        </Space>
      </Col>
      <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
        <Space direction="vertical" style={{ width: "100%" }}>
        {options.slice(5, 10).map(option => {
            let appearance = ""
            if (option === selected) {
              appearance = "primary"
            }
            return (<Button key={option} onClick={(e) => { setState(e.target.innerText) }} color="blue" type={appearance} block>
              {option}
            </Button>)
          })}
        </Space>
      </Col>
    </Row>
  </CustomCard >
}
