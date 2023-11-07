import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-warning text-white">
      <Container>
        <Image
          src='/logo.jpg'
          style={{height:"50px"}}
          roundedCircle
        />
        <Navbar.Brand href="#home" className='ms-2 text-white'>Loja Nerd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-white">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Quem somos</Nav.Link>
            <Nav.Link href="#link">Produtos</Nav.Link>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Revistas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Chaveiros</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">Action-figures</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;