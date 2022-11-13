import { Menu } from "antd";
import Link from "next/link";

export default function TopicMenu() {
    return <Menu
        mode="inline"
        defaultSelectedKeys={['']}
    >
        <Menu.Item key="Beroepstaken">
            <Link href='/beroepstaken'>
                Beroepstaken
            </Link>
        </Menu.Item>
        <Menu.Item key="Vaardigheden">
            <Link href='/vaardigheden'>
                Vaardigheden
            </Link>
        </Menu.Item>
    </Menu>
}