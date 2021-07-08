import { Nav, Navbar, Icon, Affix } from 'rsuite';

export function NavbarHBOI({ active }) {
  return <Affix>
    <Navbar appearance={'inverse'}>
      <Navbar.Body>
        <Nav activeKey={active} >
          <Nav.Item href="/" icon={<Icon icon="home" />} eventKey="home">Home</Nav.Item>
          <Nav.Item href="/hboi/undefined/undefined" eventKey="hboi">HBO-I</Nav.Item>
          <Nav.Item href="/beheersingsniveaus" eventKey="beheersingsniveaus">Beheersingsniveaus</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  </Affix>
}
