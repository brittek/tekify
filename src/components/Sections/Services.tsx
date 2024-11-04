import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Web Development & Design',
    description: 'Custom Website Design, E-commerce Solutions, CMS, PWAs, Responsive Design, Custom Software Development, Mobile App Development',
  },
  {
    title: 'Digital Strategy & Marketing',
    description: 'SEO & Marketing, Digital Strategy Planning, Immersive Digital Marketing Campaign Development, Multi-platform Marketing, UX Research & Analysis, Brand Strategy',
  },
  {
    title: 'AI & Technology Solutions',
    description: 'AI & Automation Integration, Machine Learning Implementation, NLP, Computer Vision Systems, Predictive Modeling, Process Optimization',
  },
  {
    title: 'UI/UX Design Services',
    description: 'User Interface Design, UX Research, Prototyping & Wireframing, Interaction Design, Visual Design, Design Systems Development',
  },
  {
    title: 'Digital Marketing',
    description: 'Creating campaigns that captivate audiences across multiple platforms. Our strategies ensure your brand stands out and engages effectively.',
  },
  {
    title: 'Product Development',
    description: 'From concept to launch, we guide your product journey. Our approach combines innovation with market insights to create products that resonate.',
  },
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 px-4 bg-background" id="services">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#161616] p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;