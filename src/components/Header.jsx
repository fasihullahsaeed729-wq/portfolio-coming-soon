import React from 'react';
import Logo from './subComponents/Logo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-blue-100 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo size="md" showText={true} />
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Features
            </a>
            <a href="#cta" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Get Early Access
            </a>
          </div>
          
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm uppercase tracking-widest shadow-md hover:shadow-lg">
            Join Waitlist
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;