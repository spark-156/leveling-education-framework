import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { ReactNode, useState } from "react";

export default function Navbar({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    
    return <nav className="navbar">
        <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
        />
            <Drawer
            title="Topics"
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
            > 
                {children}
            </Drawer>
        {/* <a href="/"><img src={logo} className="logo" alt="logo" /></a>      */}
  </nav>
}