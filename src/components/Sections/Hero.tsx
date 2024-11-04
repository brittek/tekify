import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <img 
        src="https://assets.codepen.io/9806267/Brittek+Digital+WhiteFill.svg" 
        alt="Brittek Digital Logo" 
        className="w-64 mb-8" 
      />
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
        Innovate. Elevate. Enhance.
      </h1>
      <a href="#contact" className="btn">
        Contact Us
      </a>
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {[
          'Web Development',
          'AI-Powered Automation',
          'Human-Centered Design',
          'Premium Branding Assets',
          'Think Human'
        ].map((pill) => (
          <span key={pill} className="pill-card">{pill}</span>
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;