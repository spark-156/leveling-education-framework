import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setKey, selectKey } from '../store/selectedKeySlice';

export function TopicMenu({ onClick }) {
  const key = useSelector(selectKey)
  const dispatch = useDispatch()

  return <Menu 
      theme="light"
      // defaultSelectedKeys={['Beroepstaken']} 
      selectedKeys={[key]} 
      mode="inline"
      onClick={onClick}
    >
      <Menu.ItemGroup 
        title="HBO-I"
      >
        <Menu.Item key="Beroepstaken" onClick={() => dispatch(setKey("Beroepstaken"))}>
          <Link to='/'>
            Beroepstaken
          </Link>
        </Menu.Item>
        <Menu.Item key="Beheersingsniveaus" onClick={() => dispatch(setKey("Beheersingsniveaus"))}>
          <Link to='/beheersingsniveaus'>
            Beheersingsniveaus
          </Link>
        </Menu.Item>
        <Menu.Item key="Professional Skills" onClick={() => dispatch(setKey("Professional Skills"))}>
          <Link to='/professionalskills'>
            Professional Skills
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup 
        title="Open-ICT"
      >
        <Menu.Item key="Vaardigheden" onClick={() => dispatch(setKey("Vaardigheden"))}>
          <Link to='/vaardigheden'>
            Vaardigheden
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
}
