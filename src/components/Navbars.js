import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbars () {
  return (
    <>
   <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src=
"https://upload.wikimedia.org/wikipedia/en/thumb/1/17/2026_FIFA_World_Cup_emblem.svg/800px-2026_FIFA_World_Cup_emblem.svg.png" 
style={{ width:"10%" , heigth: "10%" }}
/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#players">Players</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      );
    }
    
    export default Navbars;