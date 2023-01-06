import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <Container fluid="lg">
      <Row className="my-4">
        <Col sm={6}>
          <Card className="mx-4 shadow-sm">
            <Card.Img variant="top" src="/images/zion-stock.jpeg" className='vertical'></Card.Img>
            <Card.Header className="oswald fs-1">
              <span className="fa-solid fa-tree pe-1"></span> Park Advisor
            </Card.Header>
            <Card.Body>
              <p className='fs-5'>
                A full stack web application for travelers who want to search, review, and track their visits to different national parks & monuments.
              </p>
            </Card.Body>
            <Card.Footer>
              <a className="btn fs-5">
                <i className='fa-brands fa-github pe-1'></i>Code
              </a>
              <a className="btn fs-5">
                <i className="fa-solid fa-globe pe-1"></i>Website
              </a>
              <a className='btn fs-5'>
                <i className="fa-regular fa-circle-play pe-1"></i>Demo
              </a>
            </Card.Footer>
          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
