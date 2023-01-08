import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container fluid="lg">
      <Row className="mt-4 align-items-center animate">
        <Col sm={5} className="p-4 text-end">
          <Image fluid roundedCircle src="/images/fleming-photo.jpg" className="profile border border-4 border-secondary shadow-sm"></Image>
        </Col>
        <Col sm={7}>
          <Row className="align-items-center height">
            <Col className='open-sans'>
              <p className='fs-4 mb-1'>👋 Hi there! I&apos;m</p>
              <h1 className="oswald mb-2 title-text">Derrick Fleming</h1>
              <p className='fs-4 mb-0'>Software Developer who loves </p>
              <div>
                <div className='typewriter'>
                  <p className='fs-4 highlight'>web development</p></div>
              </div>

              <Link className='me-4 btn btn-primary animate glow delay-1' to="/projects">
                Projects
              </Link>
              <Link className="btn btn-primary animate glow delay-2" to="/about">
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
