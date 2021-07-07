import { Nav, Navbar, Icon } from 'rsuite';

export function NavbarHBOI({ active }) {
  return <Navbar appearance={'inverse'}>
    <Navbar.Header>
      <a href="/">HBO-I Kubus Killer</a>
    </Navbar.Header>
    <Navbar.Body>
      <Nav activeKey={active} >
        <Nav.Item href="/" icon={<Icon icon="home" />} eventKey="home">Home</Nav.Item>
        <Nav.Item href="/hboi/undefined/undefined" eventKey="hboi">HBO-I</Nav.Item>
      </Nav>
    </Navbar.Body>
  </Navbar>
}
