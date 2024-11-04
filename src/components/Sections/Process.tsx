import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search,
  PenTool,
  Code2,
  Rocket
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We dive deep to understand your vision, goals, and target audience.',
    color: '#9EFF00'
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Creating intuitive and visually stunning solutions that align with your brand.',
    color: '#00E5FF'
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Building robust and scalable solutions using cutting-edge technologies.',
    color: '#FF00E5'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploying your project and ensuring everything runs smoothly.',
    color: '#FFE500'
  }
];

const Process: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Our Process
        </h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.title} 
              {...step} 
              number={index + 1}
              delay={index * 0.1} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  number: number;
  delay: number;
}

function ProcessStep({ icon: Icon, title, description, color, number, delay }: ProcessStepProps) {
  return (
    <motion.div 
      className="relative p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-8 h-8" style={{ color }} />
      </div>
      
      <div className="text-center">
        <span 
          className="text-6xl font-bold absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
          style={{ color }}
        >
          {number}
        </span>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      
      {number < 4 && (
        <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      )}
    </motion.div>
  );
}

export default Process;