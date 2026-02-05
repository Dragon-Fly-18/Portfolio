import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export const Hero = ({ scrollY }: { scrollY: number }) => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to My <span className="gradient-text">3D Portfolio</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="tagline"
        >
          Creative Developer & 3D Enthusiast
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn btn-primary">View My Work</button>
          <button className="btn btn-secondary">Contact Me</button>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse-scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
