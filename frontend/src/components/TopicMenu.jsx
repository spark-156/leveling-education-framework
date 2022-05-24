import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export function TopicMenu({ onClick, selectedKey, setSelectedKey }) {
  return <Menu 
      theme="light"
      defaultSelectedKeys={['Beroepstaken']} 
      selectedKeys={[selectedKey]} 
      mode="inline"
      onClick={onClick}
    >
      <Menu.ItemGroup 
        title="HBO-I"
      >
        <Menu.Item key="Beroepstaken" onClick={() => setSelectedKey("Beroepstaken")}>
          <Link to='/'>
            Beroepstaken
          </Link>
        </Menu.Item>
        <Menu.Item key="Beheersingsniveaus" onClick={() => setSelectedKey("Beheersingsniveaus")}>
          <Link to='/beheersingsniveaus'>
            Beheersingsniveaus
          </Link>
        </Menu.Item>
        <Menu.Item key="Professional Skills" onClick={() => setSelectedKey("Professional Skills")}>
          <Link to='/professionalskills'>
            Professional Skills
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup 
        title="Open-ICT"
      >
        <Menu.Item key="Vaardigheden" onClick={() => setSelectedKey("Vaardigheden")}>
          <Link to='/vaardigheden'>
            Vaardigheden
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
}
