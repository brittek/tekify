import { FC } from 'react';
import { Globe, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const Footer: FC<FooterProps> = ({ isExpanded, onToggle }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md z-40 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
        >
          <svg width="25" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4h22M1 12h22M1 20h22" stroke="currentColor" strokeLinecap="round" />
          </svg>
          <span>Menu</span>
        </button>
        
        <div className="flex space-x-4">
          <a href="https://brittek.digital" aria-label="Website"><Globe className="w-5 h-5" /></a>
          <a href="https://github.com/brittek" aria-label="GitHub"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/company/brittek-digital" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
        </div>
        
        <p className="text-sm">© 2024 Brittek® Digital</p>
        
        <a href="#contact" className="bg-primary text-background px-4 py-2 rounded-full text-sm hover:bg-hover transition-colors">
          Contact Us
        </a>
      </div>
      
      {isExpanded && (
        <div className="mt-4 border-t border-gray-800 pt-4">
          <nav className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">AI Integration</a></li>
                <li><a href="#services">Digital Design</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#resources">Templates</a></li>
                <li><a href="#resources">UI Kit</a></li>
                <li><a href="#resources">Assets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@brittek.digital">Email</a></li>
                <li><a href="https://github.com/brittek">GitHub</a></li>
                <li><a href="https://www.linkedin.com/company/brittek-digital">LinkedIn</a></li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </footer>
  );
};

export default Footer;