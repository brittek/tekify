import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ThinkHuman: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="think-human relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Think Human</h2>
        <div className="space-y-6 text-lg">
          <p>
            At <span className="text-primary font-semibold">Brittek® Digital</span>,
            we believe in the power of human-centric design. Our mission is to blend
            technical expertise with creative vision, ensuring that every digital
            experience we craft resonates deeply with your audience.
          </p>
          <p>
            We don't just create brands; we build connections that last. By understanding
            your story, goals, and audience, we tailor solutions that not only stand
            out but also foster meaningful engagement and enduring impact.
          </p>
          <p>
            Our commitment to <span className="text-primary">adaptive excellence</span> and{' '}
            <span className="text-primary">sustainable digital ecosystems</span> ensures
            that your brand remains relevant and thrives in an ever-evolving digital
            landscape.
          </p>
        </div>
        <motion.img
          src="https://assets.codepen.io/9806267/ThinkHumanGraphic.png"
          alt="Think Human Illustration"
          className="mt-12 max-w-2xl mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </motion.div>
    </section>
  );
};

export default ThinkHuman;