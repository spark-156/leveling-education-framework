import React, { useState } from "react";
import { Drawer, PageHeader } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { TopicMenu } from "./TopicMenu";
import { useSelector } from "react-redux";
import { selectKey } from "../store/selectedKeySlice";
import { selectBreakpoint } from "../store/breakpointSlice";
import { LucaBergmanProfile } from "./LucaBergmanProfile";

export function Navbar () {
  const [visible, setVisible] = useState(false);
  const title = useSelector(selectKey)
  const breakpoint = useSelector(selectBreakpoint)

  return <PageHeader
    style={{ background: "#fff", position: "sticky", top: 0, zIndex: 1, width: "100%" }}
    onBack={() => setVisible(true)}
    title={title}
    backIcon={breakpoint ? <MenuOutlined /> : null}
    extra={<LucaBergmanProfile />}
  >
    <Drawer
      title="Menu"
      placement="left"
      onClick={() => setVisible(false)}
      onClose={() => setVisible(false)}
      visible={visible}
    > 
      <TopicMenu onClick={() => setVisible(false)} />
    </Drawer>
  </PageHeader>
}
