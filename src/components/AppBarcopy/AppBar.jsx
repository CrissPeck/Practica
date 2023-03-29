import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../img/footer.png";
import Form from 'react-bootstrap/Form';


function AppBar() {
  return (
<Navbar collapseOnSelect expand="lg" variant="dark" className="appbar">
      <Container>
      <img src={logo} alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Form className="d-flex">
            <Form.Control
             placeholder="🔍      Find a course"
              className="me-2"
            />
          </Form>
          <Nav>
          <Nav.Link href="/">Categories</Nav.Link>
          <Nav.Link href="/">Instructor</Nav.Link>
          <Nav.Link href="/">My Learning</Nav.Link>
        </Nav>
          </Nav>
          <Nav>
          <Nav className="me-autoo">
          <Nav.Link href="#home">Sing in</Nav.Link>
        </Nav>
        <Nav className="me-autooo">
          <Nav.Link href="#features">Sing up</Nav.Link>
        </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppBar;
