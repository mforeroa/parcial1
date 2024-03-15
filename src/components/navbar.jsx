import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
 return (
   <>
     <Navbar bg="light" variant="light">
       <Container>
         <Navbar.Brand href="/home">TuSegundazo.com</Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;