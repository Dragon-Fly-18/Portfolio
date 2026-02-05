import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: '3D Interactive Dashboard',
    description: 'A data visualization dashboard with interactive 3D charts and real-time updates.',
    tech: ['React', 'Three.js', 'Node.js'],
    color: '#00d4ff',
  },
  {
    id: 2,
    title: 'AI Image Generator',
    description: 'Powered by advanced machine learning models for creative image synthesis.',
    tech: ['Python', 'FastAPI', 'React'],
    color: '#7c3aed',
  },
  {
    id: 3,
    title: 'Virtual Reality Museum',
    description: 'Immersive VR experience showcasing digital art and historical artifacts.',
    tech: ['Babylon.js', 'WebGL', 'TypeScript'],
    color: '#ec4899',
  },
  {
    id: 4,
    title: 'Real-time Collaboration Tool',
    description: 'Multiplayer 3D environment for remote team collaboration and design.',
    tech: ['WebSocket', 'React Three Fiber', 'Express'],
    color: '#fbbf24',
  },
  {
    id: 5,
    title: 'Metaverse Platform',
    description: 'Decentralized platform for creating and exploring virtual worlds.',
    tech: ['Web3', 'Solidity', 'Three.js'],
    color: '#10b981',
  },
  {
    id: 6,
    title: 'AI Animation Studio',
    description: 'AI-powered tool for automatic character animation and motion capture.',
    tech: ['PyTorch', 'React', 'OpenGL'],
    color: '#f59e0b',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: `0 20px 40px ${project.color}40` }}
    >
      <div className="project-header" style={{ borderTopColor: project.color }}>
        <h3>{project.title}</h3>
        <div className="color-dot" style={{ backgroundColor: project.color }}></div>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      <button className="view-btn">View Project →</button>
    </motion.div>
  );
};

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Featured Projects</h2>
        <p>A showcase of my recent work in 3D development and creative coding</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
