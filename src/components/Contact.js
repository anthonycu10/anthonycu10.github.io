// src/components/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact me</h2>
      <div className="social-icons">
        {/* Email */}
        <a
          href="mailto:anthonycu@ucsb.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaEnvelope />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anthonycu/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/anthonycu10"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub />
        </a>
        {/* Resume (link to PDF or Google Drive, etc.) */}
        {/* <a
          href="https://your-resume-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaFilePdf />
        </a> */}
      </div>
    </div>
  );
};

export default Contact;
