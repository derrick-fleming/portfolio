import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" className="justify-content-between px-2 bg-gradient">
      <Container fluid="lg">
        <Link className="oswald fs-2 link-dark" to={'/'}>Derrick Fleming</Link>
        <Nav className="me-4 pe-4">
          <Link to={'/about'} className="me-4">About</Link>
          <Link to={'/projects'} className="me-4">Projects</Link>
          <Link to={'/contact'}>Contact</Link>
        </Nav>
      </Container>
      </Navbar>
  );
};

export default NavigationBar;
