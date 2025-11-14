import React from 'react';
import Logo from './subComponents/Logo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          <Logo/>
          
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition-all duration-300 text-sm uppercase tracking-widest">
            Coming Soon...
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;