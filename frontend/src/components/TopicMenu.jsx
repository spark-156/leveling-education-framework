import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectKey } from "../store/selectedKeySlice";

export function TopicMenu({ onClick }) {
  const key = useSelector(selectKey)

  return <Menu 
    theme="light"
    selectedKeys={[key]} 
    mode="inline"
    onClick={onClick}
  >
    <Menu.ItemGroup 
      title="HBO-I"
    >
      <Menu.Item key="Beroepstaken">
        <Link to='/'>
            Beroepstaken
        </Link>
      </Menu.Item>
      <Menu.Item key="Beheersingsniveaus">
        <Link to='/beheersingsniveaus'>
            Beheersingsniveaus
        </Link>
      </Menu.Item>
      <Menu.Item key="Professional Skills">
        <Link to='/professionalskills'>
            Professional Skills
        </Link>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup 
      title="Open-ICT"
    >
      <Menu.Item key="Vaardigheden">
        <Link to='/vaardigheden'>
            Vaardigheden
        </Link>
      </Menu.Item>
    </Menu.ItemGroup>
  </Menu>
}
