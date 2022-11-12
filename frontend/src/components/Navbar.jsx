import React, { useState } from "react";
import { Drawer, PageHeader } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { TopicMenu } from "./TopicMenu";
import { useSelector } from "react-redux";
import { selectKey } from "../store/selectedKeySlice";
import { selectBreakpoint } from "../store/breakpointSlice";
import { ThemeSwitch } from "./ThemeSwitch";
import { useThemeSwitcher } from "react-css-theme-switcher";


export function Navbar () {
  const { currentTheme } = useThemeSwitcher();
  const [visible, setVisible] = useState(false);
  const title = useSelector(selectKey)
  const breakpoint = useSelector(selectBreakpoint)

  return <PageHeader
    // Bad way to manage background color, should use a better way to theme it instead.
    style={{ 
      backgroundColor: currentTheme == "light" ? "white" : "#131414", 
      position: "sticky", 
      top: 0, 
      zIndex: 1, 
      width: "100%" 
    }}
    onBack={() => setVisible(true)}
    title={title}
    backIcon={breakpoint ? <MenuOutlined /> : null}
    extra={<ThemeSwitch />}
  >
    <Drawer
      title="Menu"
      placement="left"
      onClick={() => setVisible(false)}
      onClose={() => setVisible(false)}
      open={visible}
      destroyOnClose
    > 
      <TopicMenu onClick={() => setVisible(false)} />
    </Drawer>
  </PageHeader>
}
