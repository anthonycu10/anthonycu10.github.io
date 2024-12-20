// src/components/About.js
import React from 'react';
import '../styles/About.css';
import newpic from '../assets/images/newpic.JPG';

const About = () => {
    return (
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src={newpic} alt="Your Name" />
          </div>
          <div className="about-text">
            <h2>About me</h2>
            <p>
              Hi, I'm Anthony, an aspiring Data Scientist with a background in Statistics & Data Science (BS) and Mathematics (BS) at UC Santa Barbara. 
              I am passionate about helping others and making a difference in my community. 
              It would be a privilege to bridge my technical and analytical skills in the data domain with my passion for making an impact on others.
              I am invested in finding solutions and playing a role in paving a better future. 
            </p>
            <p>
              In my free time, I enjoy exploring new coffee shops, creative writing, and making personalized Taylor Swift playlists for friends.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;