import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";

function NavBar() {
 return (
   <>
     <Navbar >
       <Container>
         <Navbar.Brand href="/" className="header">TuSegundazo.com</Navbar.Brand>
       </Container>
     </Navbar>
     

   </>
 );
}

export default NavBar;