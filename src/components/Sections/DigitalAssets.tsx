import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const assets = [
  {
    title: 'Template & Module Library',
    description: 'Pre-designed templates and customizable modules optimized for seamless web development.',
    image: 'https://framerusercontent.com/images/yIu9IEepGjlaVZfKp17g03cEo1U.jpg',
  },
  {
    title: 'Training & Educational Resources',
    description: 'Hands-on courses and resources in web design, AI-powered development, and digital strategy.',
    image: 'https://framerusercontent.com/images/vQmw66uoSrkPqdPFrsh1mfw.jpg?scale-down-to=512',
  },
  {
    title: 'Digital Wallpapers',
    description: 'Exclusive wallpapers aligned with Brittek\'s color palette.',
    image: 'https://framerusercontent.com/images/R7rxrF9kH7PKmnuijZyrwArF6eY.webp',
  },
  {
    title: 'Icons & Symbols',
    description: 'Consistent, brand-aligned iconography and symbols for UI design.',
    image: 'https://framerusercontent.com/images/2GfRYr7W9xstbx2riWpdaRvFcRs.jpg',
  },
  {
    title: 'Mockups & Visual Showcases',
    description: 'Professionally crafted mockup templates for presenting designs.',
    image: 'https://assets.codepen.io/9806267/ThreadsDigitalDesignKeyboardGraphicImageBrittek.jpg?width=1000&height=500&format=webp&fit=cover',
    comingSoon: true,
  },
  {
    title: 'Future Releases',
    description: 'Teasers for upcoming assets and capabilities.',
    image: 'https://framerusercontent.com/images/8gb8a5BsH7iQBZUdTLU7biytrmA.jpg',
    comingSoon: true,
  },
];

const DigitalAssets: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 px-4 bg-background">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Digital Assets & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset, index) => (
            <motion.div
              key={index}
              className="bg-[#161616] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video">
                <img
                  src={asset.image}
                  alt={asset.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {asset.title}
                </h3>
                <p className="text-gray-300">{asset.description}</p>
                {asset.comingSoon && (
                  <p className="mt-2 text-red-500 italic">Coming Soon</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DigitalAssets;