import React, { useState } from "react";
import { Drawer, PageHeader } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import { TopicMenu } from "./TopicMenu";

export function Navbar ({ pageTitle, showBackIcon = false, selectedKey, setSelectedKey }) {
    const [visible, setVisible] = useState(false);
    return <PageHeader
            style={{ background: "#fff", position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
            onBack={() => setVisible(true)}
            title={pageTitle}
            backIcon={showBackIcon ? <MenuOutlined /> : null}
        >
            <Drawer
                title="Menu"
                placement="left"
                onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                visible={visible}
            > 
                <TopicMenu onClick={() => setVisible(false)} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
            </Drawer>
        </PageHeader>
}