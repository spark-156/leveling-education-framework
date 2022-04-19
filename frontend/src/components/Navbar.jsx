import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { BookOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  return <div style={{ padding: "0 0 10px 0" }}>
    <Menu theme="light" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} mode="horizontal">
      <Menu.Item key="/" icon={<BookOutlined />}>
        <Link to='/'>
          HBO-I
        </Link>
      </Menu.Item>
      {/* <Menu.Item key="/vaardigheden">
        <Link to='/vaardigheden'>
          Vaardigheden
        </Link>
      </Menu.Item> */}
      <Menu.Item key="/beheersingsniveaus">
        <Link to='/beheersingsniveaus'>
          Beheersingsniveaus
        </Link>
      </Menu.Item>
      <Menu.Item key="/professionalskills">
        <Link to='/professionalskills'>
          Professionalskills
        </Link>
      </Menu.Item>
    </Menu>
  </div>
}
