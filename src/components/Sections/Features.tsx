import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Shield, 
  Users, 
  Smartphone,
  Globe,
  Cpu
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance and rapid load times for seamless user experiences.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Built-in security measures to protect your digital assets and data.'
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Focused on creating intuitive and engaging user experiences.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Responsive designs that work flawlessly across all devices.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Multilingual support and international accessibility standards.'
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Leveraging artificial intelligence for smarter solutions.'
  }
];

const Features: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Why Choose Us
        </h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              {...feature} 
              delay={index * 0.1} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div 
      className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#9EFF00] transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 bg-[#9EFF00]/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#9EFF00]" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

export default Features;