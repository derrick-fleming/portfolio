import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Container fluid="lg">
      <Navbar collapseOnSelect expand="md" className="justify-content-between px-2 border-bottom border-3">
          <Nav.Link eventKey="1" as={Link} className="oswald fs-2 link-light" to={'/'}>Derrick Fleming</Nav.Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" className="border-0" />
          <Navbar.Offcanvas aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end" id="offcanvasNavbar-expand-md" style={{ maxWidth: '75%' }} className="off-canvas-background">
            <Offcanvas.Header closeButton className="border-light border-bottom border-2">
              <Offcanvas.Title className="text-light oswald fs-4">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-end">
              <Nav className="me-4 pe-4 open-sans fs-5 lh-lg">
                <Nav.Link eventKey="2" to={'/about'} as={Link} className="me-4 link-light">About</Nav.Link>
                <Nav.Link eventKey="3" to={'/projects'} as={Link} className="me-4 link-light">Projects</Nav.Link>
                <Nav.Link eventKey="4" to={'/contact'} as={Link} className="link-light">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>

    </Container>

  );
};

export default NavigationBar;
