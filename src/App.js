// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
