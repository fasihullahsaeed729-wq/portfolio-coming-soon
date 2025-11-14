import React from 'react';
import Logo from './subComponents/Logo';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo/>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Stay tuned for the launch! 
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            {['Privacy', 'Terms', 'Contact Us'].map((item, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-500">
           IA Portfolio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;