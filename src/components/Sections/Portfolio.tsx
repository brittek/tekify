import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const portfolioItems = [
  {
    title: 'One Lab',
    category: 'web',
    image: 'https://assets.codepen.io/9806267/one-lab.jpg',
    description: 'Modern laboratory management system'
  },
  {
    title: 'Syd Jet',
    category: 'web',
    image: 'https://assets.codepen.io/9806267/syd-jet.jpg',
    description: 'Premium travel booking platform'
  },
  {
    title: 'Pantheon',
    category: 'uiux',
    image: 'https://numinousco.com/wp-content/uploads/2024/06/pantheon-behance13-uai-2560x1920.jpg',
    description: 'Digital asset management system'
  },
  {
    title: 'Glimmerock',
    category: 'branding',
    image: 'https://numinousco.com/wp-content/uploads/2024/05/glimmerock-behance-uai-2560x1920.jpg',
    description: 'Music industry branding'
  }
];

const Portfolio: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [filter, setFilter] = React.useState('all');

  const filteredItems = portfolioItems.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <section id="portfolio" className="py-24 px-6 bg-black/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured Work
        </h2>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'web', 'uiux', 'branding'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === cat 
                  ? 'bg-[#9EFF00] text-black'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <PortfolioItem key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

function PortfolioItem({ title, category, image, description }: PortfolioItemProps) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-[#9EFF00] mb-4">{category}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export default Portfolio;