import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-3 bg-[#161616] rounded-lg border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-3 bg-[#161616] rounded-lg border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full p-3 bg-[#161616] rounded-lg border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:bg-hover transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="mb-2">Let's start a conversation. Reach out to us through any of the channels below.</p>
          <p>
            Email: <a href="mailto:info@brittek.digital" className="text-primary hover:text-hover">info@brittek.digital</a><br />
            Phone: <a href="tel:+61424949331" className="text-primary hover:text-hover">+61 424 949 331</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;