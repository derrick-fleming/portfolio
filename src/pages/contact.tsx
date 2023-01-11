import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  return (
    <Container fluid="lg animate text-light">
      <Row className="my-4 align-items-center height">
        <Col className="ms-4 text-center">
          <div>
            <h1 className="oswald">Contact</h1>
          </div>
          <p className="fs-4">Reach out and connect with me:
          </p>
          <a className="btn btn-primary btn-navy me-2 animate glow delay-1 fs-5" href="https://www.linkedin.com/in/derrick-fleming/">
            <span className="fa-brands fa-linkedin me-2"></span>LinkedIn
          </a>
          <a className="btn btn-primary btn-navy me-2 animate glow delay-2 fs-5" href="https://github.com/derrick-fleming">
            <span className="fa-brands fa-github me-2"></span>Github
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
