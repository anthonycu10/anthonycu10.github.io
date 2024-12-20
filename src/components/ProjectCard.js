// src/components/ProjectCard.js
import React, { useState } from 'react';
import '../styles/ProjectCard.css';

import { FaPython, FaGithub, FaHtml5, FaReact, FaPlug } from 'react-icons/fa';  // Import specific icons from react-icons
import { SiR } from 'react-icons/si';  // Import the R logo (you can search for other icons in react-icons)
import apiicon from '../assets/images/apiicon.png';

const ProjectCard = ({ project }) => {
    const { title, time, description, technologies, githubLink } = project;
    
    return (
      <div className="project-card">
        <div className="project-card-content">
          <h3>{title}</h3>
          <h4>{time}</h4>
          <p>{description}</p>
          <div className="tech-logos">
            {/* Display logos based on the technologies used */}
            {technologies.includes('Python') && <FaPython size={34} color="#F9D962"/>}
            {technologies.includes('GitHub') && <FaGithub size={34} color ="black" />}
            {technologies.includes('R') && <SiR size={34} color = "#3569B9"/>}
            {technologies.includes('HTML') && <FaHtml5 size={34} color="#CE532D"/>}
            {technologies.includes('React') && <FaReact size={34} color ="#62D6FA" />}
            {technologies.includes('API') && <img src={apiicon} alt="API Logo" style={{ width: 34, height: 34 }} />}
          </div>
          <a href={githubLink} className="github-link">View here</a>
        </div>
      </div>
    );
  };

export default ProjectCard;
