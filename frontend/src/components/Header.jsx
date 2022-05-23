import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PageHeader } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';

export default function Header ({ collapsed, toggleCollapsed }) {
    const routeTable = {
        "/": "Beroepstaken",
        "/beheersingsniveaus": "Beheersingsniveaus",
        "/professionalskills": "Professional skills",
        "/vaardigheden": "Vaardigheden",
    }
    const location = useLocation()
    const [title, setTitle] = useState(routeTable[location.pathname])

    useEffect(() => {
        setTitle(routeTable[location.pathname])
    }, [location])

    return <PageHeader
        style={{ background: "#fff" }}
        onBack={() => toggleCollapsed()}
        title={title}
        backIcon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    />
} 
