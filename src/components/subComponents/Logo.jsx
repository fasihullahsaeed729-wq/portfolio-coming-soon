import React from 'react';

const Logo = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl'
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`${sizeClasses[size]} bg-gradient-to-r from-blue-300 to-blue-600 rounded-lg flex items-center justify-center`}>
        <span className="text-white font-bold">PC</span>
      </div>
      {showText && (
        <span className={`${size === 'lg' ? 'text-2xl' : 'text-xl'} font-bold text-blue-500`}>
          Portfolio Creator
        </span>
      )}
    </div>
  );
};

export default Logo;
