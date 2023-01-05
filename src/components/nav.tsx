import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavigationBar = () => {
  return (
    <Navbar bg="light" className="justify-content-between px-2 bg-gradient">
      <Container fluid="lg">
        <Navbar.Brand className="oswald fs-2" href="#home">Derrick Fleming</Navbar.Brand>
        <Nav className="me-4 pe-4">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Container>
      </Navbar>
  );
};

export default NavigationBar;
