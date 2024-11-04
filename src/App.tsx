import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import ThinkHuman from './components/Sections/ThinkHuman';
import Services from './components/Sections/Services';
import Process from './components/Sections/Process';
import Features from './components/Sections/Features';
import Portfolio from './components/Sections/Portfolio';
import DigitalResources from './components/Sections/DigitalResources';
import Contact from './components/Sections/Contact';

function App() {
  const [currentTime, setCurrentTime] = useState<string>('00:00');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isFooterExpanded, setIsFooterExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-background text-text font-primary min-h-screen">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-background flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="cursor"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      <Header currentTime={currentTime} />

      <main className="pt-20">
        <Hero />
        <ThinkHuman />
        <Services />
        <Process />
        <Features />
        <Portfolio />
        <DigitalResources />
        <Contact />
      </main>

      <Footer
        isExpanded={isFooterExpanded}
        onToggle={() => setIsFooterExpanded(!isFooterExpanded)}
      />
    </div>
  );
}

export default App;