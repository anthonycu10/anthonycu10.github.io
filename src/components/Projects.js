// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard'; // We will create the ProjectCard component for individual projects
import '../styles/Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Undergraduate Social Network Analysis',
      time: 'Fall 2024 - present',
      description: 'Education research study (UCSB PSTAT Department)',
      technologies: ['Python', 'R']
    },
    {
      title: 'The Anthology of Tortured Poetry',
      time: 'Fall 2024',
      description: 'Taylor Swift lyric searcher',
      technologies: ['Python', 'React', 'API', 'GitHub'],
      githubLink: 'https://anthonycu10.github.io/torturedpoetry/',
    },
    {
        title: 'Yelp Recommender System',
        time: 'Fall 2024',
        description: 'Content-based recommender system using NLP for restaurants in Santa Barbara, CA',
        technologies: ['Python', 'API'],
        githubLink: 'https://github.com/anthonycu10/yelp_recommender_project',
      },
      {
        title: 'CZ Biohub',
        time: 'Summer 2024',
        technologies: ['R', 'Python']
      },
    {
        title: 'consensus-ai',
        time: 'Summer 2024',
        description: 'UC Berkeley AI Hackathon entry',
        technologies: ['Python', 'API', 'GitHub'],
        githubLink: 'https://devpost.com/software/consensus-ai',
    },  
    {
        title: "Spotify x Musixmatch (Taylor's Version)",
        time: 'Winter 2024',
        description: 'Unsupervised ML project predicting Taylor Swift song themes using NLP on lyrics',
        technologies: ['R', 'API'],
        githubLink: 'https://anthonycu10.github.io/work/MLProject.html',
    },
    {
        title: 'Diseases of Affluence',
        time: 'Summer 2023 - Winter 2024',
        description: 'Data analysis of 1.2M+ observations from cross-sectional surveys to predict links between eating habits, wealth, and risk of NCDs',
        technologies: ['R'],
        githubLink: 'https://www.youtube.com/watch?v=nN574ozSb4Q',
    },
    {
        title: 'Lean On Me National',
        time: 'Summer 2022',
        description: 'Data visualizations on 1K+ conversation histories',
        technologies: ['R'],
        githubLink: 'https://www.leanonme.chat/impact',
    },
    {
        title: 'Old DS Portfolio',
        description: 'im sorry but the old taylor cant come to the phone rn',
        technologies: ['HTML', 'GitHub'],
        githubLink: 'https://github.com/your-username/blog-platform',
      }
  ];

  return (
    <section className="projects">
      <h2>Projects and Experience</h2>
      <div className="projects-list">
        {/* Loop through the projectList and display each ProjectCard */}
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}  // Passing the entire project object as a prop
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
