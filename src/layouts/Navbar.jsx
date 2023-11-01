import React from "react";
import { Container, Nav, Navbar as BNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BNavbar.Brand href="#home">Pokedex</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-BNavbar-nav" />
        <BNavbar.Collapse id="basic-BNavbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
