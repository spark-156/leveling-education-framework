import { Layout } from "antd";
import { ReactNode } from "react";

const { Sider } = Layout;

type Props = {
    children: ReactNode
}

export default function SideBar({ children }: Props) {
    return <Sider
        collapsible
        breakpoint="lg"
        style={{ position: "sticky", left: 0, top: 0, height: "100vh" }}
        collapsedWidth="0"
        theme="light"
        trigger={null}
    >
        {children}
    </Sider>
}