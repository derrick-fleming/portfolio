import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <Container fluid="lg animate">
      <Row className="mt-4 my-2 text-light align-items-center">
        <div>
          <h1 className="ps-4 oswald">Projects</h1>
          <p className="ps-4 fs-4 open-sans">Check out some of my latest projects that I have developed and completed.</p>
        </div>
      </Row>
      <Row className="py-2 justify-content-center align-items-center">
        <Col xs={11} sm={6} md={6} xl={5} className="animate glow delay-2 px-2">
          <Card className="mb-4 shadow-lg border border-5 border-navy bg-blue">
            <Card.Img variant="top" src="images/zion-stock.webp" className='vertical'></Card.Img>
            <Card.Body className="text-dark">
              <h1 className="oswald">Park Advisor</h1>
              <p className="fs-5 open-sans">
                A full stack web application for travelers who want to review and track their visits to different national parks.
              </p>
            </Card.Body>
            <Card.Footer className="open-sans border-secondary">
              <a className="btn btn-light me-2 my-2 fs-5" href="https://github.com/derrick-fleming/park-advisor">
                <i className='fa-brands fa-github pe-1'></i>Code
              </a>
              <a className="btn btn-primary btn-navy me-2 my-2 fs-5" href="http://park-advisor.derrickfleming.com/">
                <i className="fa-solid fa-globe pe-1"></i>Website
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={11} sm={6} md={6} xl={5} className="animate glow delay-3">
          <Card className="mb-4 shadow-lg border border-5 border-navy bg-blue">
            <Card.Img variant="top" src="images/animal-crossing.webp" className='vertical'></Card.Img>
            <Card.Body className="text-dark">
              <h1 className="oswald">MyVillagers</h1>
              <p className="fs-5 open-sans">
                A web application for Animal Crossing fans who want to view and keep notes on their favorite villagers.
              </p>
            </Card.Body>
            <Card.Footer className="open-sans border-secondary border-2">
              <a className="btn btn-light fs-5 me-2 my-2" href="https://github.com/derrick-fleming/my-villagers">
                <i className='fa-brands fa-github pe-1'></i>Code
              </a>
              <a className="btn btn-primary btn-navy fs-5 me-2 my-2" href="https://derrick-fleming.github.io/my-villagers/">
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
