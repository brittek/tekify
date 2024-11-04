import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Box, Layout, Image, FileText, Briefcase, Book, Monitor, Shapes } from 'lucide-react';

const resources = [
  {
    title: 'UI Component Kit',
    description: 'Modern UI components designed to enhance user experience and streamline development for advanced web applications.',
    icon: Code,
    image: 'https://assets.codepen.io/9806267/MacbookUI.jpg',
    category: 'products'
  },
  {
    title: 'Template & Module Library',
    description: 'Pre-designed templates and customizable modules optimized for seamless web development, branding, and UI/UX.',
    icon: Layout,
    image: 'https://assets.codepen.io/9806267/IphoneXSMockupBrittekOrangeandYellowGradient.jpg',
    category: 'assets'
  },
  {
    title: 'Training Resources',
    description: 'Hands-on courses and resources in web design, AI-powered development, and digital strategy.',
    icon: Book,
    image: 'https://assets.codepen.io/9806267/MinimalKeyboardDesignWithOrangeBackgroundBrittek.jpg',
    category: 'assets'
  },
  {
    title: 'E-Store Template',
    description: 'Launch your online store with a customizable, responsive design featuring integrated payment solutions.',
    icon: Briefcase,
    image: 'https://assets.codepen.io/9806267/OrangeTabletBrittekImage.jpg',
    category: 'products'
  },
  {
    title: 'Digital Wallpapers',
    description: 'Exclusive wallpapers aligned with Brittek\'s color palette, tailored for desktop and mobile.',
    icon: Monitor,
    image: 'https://assets.codepen.io/9806267/WaveGreenPatternAiArtBrittek.jpg',
    category: 'assets'
  },
  {
    title: 'Font Collection',
    description: 'A versatile collection of fonts offering a wide range of styles to complement any design project.',
    icon: FileText,
    image: 'https://assets.codepen.io/9806267/PerceiveSynthesiaInterfereBrittekAiArt.jpg',
    category: 'products'
  },
  {
    title: 'Wireframe Kit',
    description: 'Tailored wireframing tools for UX designers, enabling rapid prototyping and efficient design workflows.',
    icon: Box,
    image: 'https://assets.codepen.io/9806267/QVBInternalClockSydneyCityBrittek.jpg',
    category: 'products'
  },
  {
    title: 'Icons & Symbols',
    description: 'Consistent, brand-aligned iconography and symbols for UI design and digital platforms.',
    icon: Shapes,
    image: 'https://assets.codepen.io/9806267/SydneyCityCentrePointTowerBrittek.jpg',
    category: 'assets'
  },
  {
    title: 'Mockups & Showcases',
    description: 'Professionally crafted mockup templates for presenting designs in realistic settings.',
    icon: Image,
    image: 'https://assets.codepen.io/9806267/ThreadsDigitalDesignKeyboardGraphicImageBrittek.jpg',
    category: 'assets',
    comingSoon: true
  }
];

const DigitalResources: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [filter, setFilter] = React.useState('all');

  const filteredResources = resources.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <section className="py-24 px-6 bg-black" id="resources">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Resources
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of premium digital resources and products designed to elevate your projects
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All Resources
          </FilterButton>
          <FilterButton
            active={filter === 'products'}
            onClick={() => setFilter('products')}
          >
            Products
          </FilterButton>
          <FilterButton
            active={filter === 'assets'}
            onClick={() => setFilter('assets')}
          >
            Assets
          </FilterButton>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {filteredResources.map((resource, index) => (
            <ResourceCard 
              key={resource.title} 
              {...resource} 
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full transition-all duration-300 ${
      active 
        ? 'bg-primary text-background scale-105'
        : 'bg-white/5 hover:bg-white/10'
    }`}
  >
    {children}
  </button>
);

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  category: string;
  comingSoon?: boolean;
  delay: number;
}

function ResourceCard({ 
  title, 
  description, 
  icon: Icon, 
  image, 
  comingSoon, 
  delay 
}: ResourceCardProps) {
  return (
    <motion.div 
      className="group bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ y: -10 }}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        {comingSoon ? (
          <div className="flex items-center gap-2 text-red-500">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <p className="text-sm font-medium">Coming Soon</p>
          </div>
        ) : (
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-hover transition-colors"
          >
            Learn More →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default DigitalResources;