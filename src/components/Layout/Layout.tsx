import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentTime: string;
  isFooterExpanded: boolean;
  onFooterToggle: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentTime,
  isFooterExpanded,
  onFooterToggle
}) => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header currentTime={currentTime} />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="pt-20 pb-32"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer 
        isExpanded={isFooterExpanded}
        onToggle={onFooterToggle}
      />
    </div>
  );
};

export default Layout;