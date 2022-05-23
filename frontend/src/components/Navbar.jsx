import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  return <div style={{ padding: "0 0 10px 0" }}>
    <Menu 
      theme="light"
      defaultSelectedKeys={['/']} 
      selectedKeys={[location.pathname]} 
      mode="inline"
    >
      <Menu.ItemGroup 
        title="HBO-I"
      >
        <Menu.Item key="/">
          <Link to='/'>
            Beroepstaken
          </Link>
        </Menu.Item>
        <Menu.Item key="/beheersingsniveaus">
          <Link to='/beheersingsniveaus'>
            Beheersingsniveaus
          </Link>
        </Menu.Item>
        <Menu.Item key="/professionalskills">
          <Link to='/professionalskills'>
            Professional Skills
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup 
        title="Open-ICT"
      >
        <Menu.Item key="/vaardigheden">
          <Link to='/vaardigheden'>
            Vaardigheden
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  </div>
}
