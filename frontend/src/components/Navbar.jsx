import React, { useState } from "react";
import { Drawer, PageHeader } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import { TopicMenu } from "./TopicMenu";
import { useSelector } from 'react-redux';
import { selectKey } from "../store/selectedKeySlice";

export function Navbar ({ showBackIcon = false }) {
    const [visible, setVisible] = useState(false);
    const title = useSelector(selectKey)

    return <PageHeader
            style={{ background: "#fff", position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
            onBack={() => setVisible(true)}
            title={title}
            backIcon={showBackIcon ? <MenuOutlined /> : null}
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
