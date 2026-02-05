import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export const About = () => {
  const skills = [
    { category: '3D Graphics', items: ['Three.js', 'Babylon.js', 'WebGL', 'OpenGL'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'GraphQL', 'REST APIs'] },
    { category: 'Tools', items: ['Blender', 'Git', 'Docker', 'AWS'] },
  ];

  return (
    <section className="about">
      <motion.div
        className="about-header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <div className="divider"></div>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a creative developer passionate about pushing the boundaries of web technology. With expertise in 3D graphics, interactive experiences, and modern web development, I transform ideas into immersive digital experiences.
          </p>
          <p>
            My journey in tech began with a curiosity about how things work, which evolved into a passion for creating beautiful, functional applications. Today, I specialize in building cutting-edge 3D web experiences that captivate and engage users.
          </p>
          <p>
            When I'm not coding, you can find me exploring new 3D techniques, contributing to open-source projects, or experimenting with emerging technologies like WebXR and MetaVerse platforms.
          </p>
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Skills & Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.category} className="skill-category">
                <h4>{skill.category}</h4>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="stats">
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4>50+</h4>
          <p>Projects Completed</p>
        </motion.div>
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4>100+</h4>
          <p>Happy Clients</p>
        </motion.div>
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>8+</h4>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4>20+</h4>
          <p>Technologies</p>
        </motion.div>
      </div>
    </section>
  );
};
