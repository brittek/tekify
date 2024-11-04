import { FC } from 'react';

interface HeaderProps {
  currentTime: string;
}

const Header: FC<HeaderProps> = ({ currentTime }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-40 p-4 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-primary">Brittek Digital</a>
      <div className="flex items-center space-x-4">
        <time className="text-sm border border-gray-700 rounded-full px-3 py-1">{currentTime}</time>
        <a href="mailto:info@brittek.digital" className="text-sm hover:text-primary transition-colors">
          Say hi — info@brittek.digital
        </a>
      </div>
    </header>
  );
};

export default Header;