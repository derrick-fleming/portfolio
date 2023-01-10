import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutMe = () => {
  return (
    <Container fluid="lg animate text-light">
      <Row className="my-4 align-items-center height">
        <Col>
          <div>
            <h1 className="ms-4 oswald">About Me</h1>
          </div>
          <Row className="justify-content-center">
            <Col sm={11} className="open-sans">
              <p className="fs-5 lh-lg animate">
                👋 I&apos;m a software developer with skills in JavaScript, React, Node.js, CSS, and HTML. As a former educator and instructional designer,
                I&apos;m drawn to being able to problem solve and think creatively through programming.
                I love being able to improve and grow in my skills and am always striving to learn each day.
                My goal is to create applications that can provide a meaningful and positive impact on the community.
              </p>
              <h3 className="animate delay-3 oswald">
                Stack
              </h3>
              <ul className="lh-lg animate delay-3 fs-5">
                <li>
                  🗣 <span className='fw-bold'>Languages:</span> JavaScript, HTML5, CSS3, SQL, TypeScript
                </li>
                <li>
                  📚 <span className="fw-bold">Libraries/Frameworks: </span>React, Node.js, Express.js, Bootstrap
                </li>
                <li>
                  🧰 <span className="fw-bold">Tools: </span>Git, Github, Docker, Figma, Visual Studio Code, NPM, Babel, Webpack
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
