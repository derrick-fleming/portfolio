import React from 'react';
import Container from 'react-bootstrap/Container';

const AboutMe = () => {
  return (
    <Container fluid="lg animate text-light height">
      <div>
        <h1 className="mt-4 ms-4 oswald">About Me</h1>
        <p className="ms-4 mt-2 ps-4 fs-5 lh-lg animate">
          I&apos;m a software developer with skills in JavaScript, React, Node.js, CSS, and HTML. As a former educator and instructional designer,
          I&apos;m drawn to being able to problem solve and think creatively through programming.
          I love being able to improve and grow in my skills and am always striving to learn each day.
          My goal is to create applications that can provide a meaningful and positive impact on the community.
        </p>
        <p className="fs-4 text-center">
          - - ~ - -
        </p>
      </div>
          <h1 className="ms-4 animate delay-3 oswald mb-3">
            Stack
          </h1>
          <ul className="ps-4 lh-lg animate delay-3 fs-5">
            <li className="ps-4 pb-2">
              💻 <span className='fw-bold fst-italic ps-2'>Languages:</span> JavaScript, HTML5, CSS3, SQL, TypeScript
            </li>
            <li className="ps-4 pb-2">
              📚 <span className="fw-bold fst-italic ps-2">Libraries/Frameworks: </span>React, Node.js, Express.js, Bootstrap
            </li>
            <li className="ps-4 pb-2">
              🧰 <span className="fw-bold fst-italic ps-2">Tools: </span>Git, Github, Docker, Figma, Visual Studio Code, NPM, Babel, Webpack
            </li>
          </ul>
    </Container>
  );
};

export default AboutMe;
