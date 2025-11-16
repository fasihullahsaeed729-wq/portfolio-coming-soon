import React from 'react';
import Logo from './subComponents/Logo';

const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-blue-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo size="md" showText={true} />
          </div>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Crafting exceptional digital experiences. Something amazing is coming soon.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            {['Privacy', 'Terms', 'Contact'].map((item, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 font-medium">
                {item}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500">
              © 2025 Portfolio. All rights reserved. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;