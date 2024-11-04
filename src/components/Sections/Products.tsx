import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Box, Layout, Image, FileText } from 'lucide-react';

const products = [
  {
    title: 'UI Kit',
    description: 'Modern UI components designed to enhance user experience and streamline development for advanced web applications.',
    icon: Code,
    image: 'https://framerusercontent.com/images/3NekYMfrLTJH95xWIQcvWm5RQ.png'
  },
  {
    title: 'E-Store Template',
    description: 'Launch your online store with a customizable, responsive design featuring integrated payment solutions.',
    icon: Layout,
    image: 'https://framerusercontent.com/images/irCsWC2hIi9vlgpIjbBwV8YUds.jpg'
  },
  {
    title: 'Font Pack',
    description: 'A versatile collection of fonts offering a wide range of styles to complement any design project.',
    icon: FileText,
    image: 'https://framerusercontent.com/images/CCV1ZRWNKbtCLoa8Y9QbUn6wLFo.png'
  },
  {
    title: 'Wireframe Kit',
    description: 'Tailored wireframing tools for UX designers, enabling rapid prototyping and efficient design workflows.',
    icon: Box,
    image: 'https://framerusercontent.com/images/gQHJpTOW2MCzeX6wZcEjtDk7gH4.png'
  },
  {
    title: 'Wallpaper Collection',
    description: 'Beautiful wallpapers for desktop and mobile devices, designed to enhance your digital environment.',
    icon: Image,
    image: 'https://framerusercontent.com/images/JuTd4HfL2R2fyeDgYShxLEr3E.jpg'
  },
  {
    title: 'Icon Pack',
    description: 'Exclusive icons for web and mobile projects, providing a consistent and professional look.',
    icon: Palette,
    image: 'https://framerusercontent.com/images/nJDMrvHboUkk0f02VrlOFExauo.jpg'
  }
];

const Products: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="products" className="py-24 px-6 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Digital Products
        </h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

function ProductCard({ title, description, icon: Icon, image }: ProductCardProps) {
  return (
    <motion.div 
      className="bg-white/5 rounded-lg overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-[#9EFF00]" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-[#9EFF00] hover:text-[#EDFF00] transition-colors"
        >
          Learn More →
        </a>
      </div>
    </motion.div>
  );
}

export default Products;