import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
  return(
  <>
      <Navbar bg="light" data-bs-theme="light" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="blog">Display All Details</Nav.Link>
            <Nav.Link href="save" >Save Date</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;