import React from 'react';
import Intro from '../components/intro/Intro';
import Works from '../components/works/Works';
import Contact from '../components/contact/Contact';
import Skills from '../components/skills/Skills';
import '../app.scss';
function Home() {
  return (
    <div className="app">
      <div className="sections">
        <Intro />
        {/* <About /> */}
        <Works />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
