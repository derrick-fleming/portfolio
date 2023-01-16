import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container fluid="lg pb-4">
      <Row className="mt-4 align-items-center animate height">
        <Col xs={12} sm={6} className="p-4 image-align">
          <Image fluid roundedCircle src="images/fleming-photo.webp" className="profile border border-4 border-light shadow-lg"></Image>
        </Col>
        <Col sm={6}>
          <Row className="align-items-center text-light">
            <Col className='open-sans'>
              <p className='fs-4 mb-1'>👋 Hi there! I&apos;m</p>
              <h1 className="oswald mb-2 title-text">Derrick Fleming</h1>
              <p className='fs-4 mb-0'>Software Developer who loves all things
              <span className='fst-italic fs-4 block'> web development</span>
              </p>

              <Link className='mt-2 me-4 btn btn-primary btn-navy animate glow delay-1 fs-5 shadow-sm mb-4' to="/projects">
                Projects
              </Link>
              <Link className="mt-2 btn btn-light animate glow delay-2 fs-5 shadow-sm mb-4" to="/about">
                About Me
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
