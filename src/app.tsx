import React from 'react';
import Home from './pages/home';
import Projects from './pages/projects';
import AboutMe from './pages/about-me';
import NavigationBar from './components/nav';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
    </>
  );
};

export default App;
