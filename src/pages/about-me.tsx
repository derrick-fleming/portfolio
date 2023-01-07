import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutMe = () => {
  return (
    <Container fluid="lg animate">
      <Row className="my-4">
        <Col className="ms-4">
          <h1 className="oswald mb-4">About Me</h1>
          <Row className="justify-content-center">
            <Col sm={11}>
              <p className="fs-5 lh-lg">
                👋 I&apos;m a software developer with skills in JavaScript, React, Node.js, CSS, and HTML. As a former educator and instructional designer,
                I&apos;m drawn to being able to problem solve and think creatively through programming.
                I love being able to improve and grow in my skills and am always striving to learn each day.
                My goal is to create applications that can provide a meaningful and positive impact on the community.
              </p>
              <h5>
                Here&apos;s what I&apos;m currently up to:
              </h5>
              <ul className="lh-lg">
                <li>
                  💡 Furthering my TypeScript and React knowledge.
                </li>
                <li>
                  👨🏻‍💻 Building small-scale projects to experiment with different tools &amp; libraries.
                </li>
                <li>
                  🎮 Playing Pokemon Violet - Just started!
                </li>
              </ul>
              <h5>
                Stack
              </h5>
              <ul className="lh-lg">
                <li>
                  🗣 Languages: JavaScript, HTML5, CSS3, SQL, TypeScript
                </li>
                <li>
                  📚 Libraries/Frameworks: React, Node.js, Express.js, Bootstrap
                </li>
                <li>
                  🧰 Tools: Git, Github, Docker, Figma, Visual Studio Code, NPM, Babel, Webpack
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
