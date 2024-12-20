import React, { useEffect, useState } from 'react';
import '../styles/Modal.css';  // Import your modal styles
import { FaPython, FaGithub } from 'react-icons/fa';
import { SiR } from 'react-icons/si';

const Modal = ({ isOpen, onClose, project }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Ensure that the modal appears only after state updates correctly
  useEffect(() => {
    if (isOpen) {
      // Wait for the component to re-render before showing the modal content
      setIsVisible(true);
    } else {
      // Wait for the animation to complete before hiding the modal
      setTimeout(() => setIsVisible(false), 300); // The 300ms should match the duration of the transition
    }
  }, [isOpen]); // Only trigger when `isOpen` changes

  if (!isOpen) return null; // If modal is not open, render nothing

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${isVisible ? 'show' : ''}`} // Apply animation styles when visible
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button className="close-button" onClick={onClose}>X</button>
        <h3>{project.title}</h3>
        <p><strong>Time:</strong> {project.time}</p>
        <p>{project.description}</p>
        <div className="tech-logos">
          {project.technologies.includes('Python') && <FaPython size={34} color="#61DBFB" />}
          {project.technologies.includes('GitHub') && <FaGithub size={34} color="#61DBFB" />}
          {project.technologies.includes('R') && <SiR size={34} />}
        </div>
        <a href={project.githubLink} className="github-link">View on GitHub</a>
      </div>
    </div>
  );
};

export default Modal;
