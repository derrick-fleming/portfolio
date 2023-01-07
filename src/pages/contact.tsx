import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  return (
    <Container fluid="lg animate">
      <Row className="my-4">
        <Col className="ms-4 text-center">
          <h1>Contact</h1>
          <p>Connect with me through the following places:
          </p>
          <a className="btn btn-primary me-2 animate glow" href="https://www.linkedin.com/in/derrick-fleming/">
            <span className="fa-brands fa-linkedin me-2"></span>LinkedIn
          </a>
          <a className="btn btn-secondary me-2 animate glow delay-2" href="https://github.com/derrick-fleming">
            <span className="fa-brands fa-github me-2"></span>Github
          </a>
          <a className="btn btn-secondary animate glow delay-3">
            <span className="fa-solid fa-envelope me-2"></span>Email
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
