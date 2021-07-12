import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export function NavbarHBOI({ active }) {

  return <div style={{ padding: "0 0 10px 0" }}>
    <Menu theme="light" selectedKeys={[active]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <a href="/" target="_self" rel="noopener noreferrer">
          Home
        </a>
      </Menu.Item>
      <Menu.Item key="hboi">
        <a href="/hboi/undefined/undefined" target="_self" rel="noopener noreferrer">
          HBO-I
        </a>
      </Menu.Item>
      <Menu.Item key="beheersingsniveaus">
        <a href="/beheersingsniveaus" target="_self" rel="noopener noreferrer">
          Beheersingsniveaus
        </a>
      </Menu.Item>
      <Menu.Item key="professionalskills">
        <a href="/professionalskills" target="_self" rel="noopener noreferrer">
          Professionalskills
        </a>
      </Menu.Item>
    </Menu>
  </div>
}
