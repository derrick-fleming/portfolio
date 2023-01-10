import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <Container fluid="lg animate">
      <Row className="mt-4 my-2 text-light">
        <div>
          <h1 className="ms-4 oswald">Projects</h1>
        </div>
        <p className="ms-4 fs-4 open-sans">Check out some of my latest projects that I have developed and completed.</p>
      </Row>
      <Row className="py-2 justify-content-center">
        <Col sm={6} md={6} lg={5} className="animate glow delay-2">
          <Card className="mx-4 mb-4 shadow-lg border border-5 border-dark bg-dark">
            <Card.Img variant="top" src="/images/zion-stock.jpeg" className='vertical'></Card.Img>
            <Card.Body className="text-light">
              <h1 className="oswald">Park Advisor</h1>
              <p className="fs-5 open-sans">
                A full stack web application for travelers who want to search, review, and track their visits to different national parks.
              </p>
            </Card.Body>
            <Card.Footer className="open-sans border-secondary border-2">
              <a className="btn btn-light me-2 my-2 fs-5" href="https://github.com/derrick-fleming/park-advisor">
                <i className='fa-brands fa-github pe-1'></i>Code
              </a>
              <a className="btn btn-primary me-2 my-2 fs-5" href="http://park-advisor.derrickfleming.com/">
                <i className="fa-solid fa-globe pe-1"></i>Website
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={5} className="animate glow delay-3">
          <Card className="mx-4 shadow-lg border border-5 border-dark bg-dark">
            <Card.Img variant="top" src="/images/animal-crossing.jpg" className='vertical'></Card.Img>
            <Card.Body className="text-light">
              <h1 className="oswald">MyVillagers</h1>
              <p className="fs-5 open-sans">
                A web application for Animal Crossing fans who want to see and keep notes on their favorite villagers.
              </p>
            </Card.Body>
            <Card.Footer className="open-sans border-secondary border-2">
              <a className="btn btn-light fs-5 me-2 my-2" href="https://github.com/derrick-fleming/my-villagers">
                <i className='fa-brands fa-github pe-1'></i>Code
              </a>
              <a className="btn btn-primary fs-5 me-2 my-2" href="https://derrick-fleming.github.io/my-villagers/">
                <i className="fa-solid fa-globe pe-1"></i>Website
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
