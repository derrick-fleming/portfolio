import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Container fluid="lg">
      <Row className="mt-4">
        <Col sm={5} className="p-4 text-end">
          <Image fluid roundedCircle src="/images/fleming-photo.jpg" className="profile border border-4 border-secondary shadow-sm"></Image>
        </Col>
        <Col sm={7}>
          <Row className="align-items-center height-100">
            <Col className='open-sans'>
              <p className='fs-4 mb-1'>👋 Hi there! I&apos;m</p>
              <h1 className="oswald mb-2 title-text">Derrick Fleming</h1>
              <p className='fs-4 mb-0'>Software Developer who loves </p>
              <p className='fs-4 highlight'>web development. </p>
              <Button className='me-4'>
                Projects
              </Button>
              <Button>
                About Me
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
