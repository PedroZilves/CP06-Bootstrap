import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import './Menu.scss'

function Menu() {
  return (
    <Navbar expand="lg" className="bg-warning text-white">
      <Container>
        <Navbar.Brand href="#home" className='text-white fw-bold'>
        <Image
          src='/logo.jpg'
          style={{height:"50px", marginRight:"5px"}}
          roundedCircle
          />
          Loja Nerd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ml-5">
            <Nav.Link href="#home" className='text-white fs-5'>Home</Nav.Link>
            <NavDropdown  title="Produtos" id="basic-nav-dropdown" className='custom-dropdown fs-5'>
              <NavDropdown.Item href="#action/3.1" className='text-black fs-5'>Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='text-black fs-5'>Revistas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='text-black fs-5'>Chaveiros</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4" className='text-black fs-5'>Action-figures</NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href="#link" className='text-white fs-5'>Quem somos</Nav.Link>
            <Nav.Link href="#link" className='text-white fs-5'>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;