import React from 'react';

const Logo = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl'
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`${sizeClasses[size]} bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center`}>
        <span className="text-black font-bold">IA</span>
      </div>
      {showText && (
        <span className={`${size === 'lg' ? 'text-2xl' : 'text-xl'} font-bold text-white`}>
          Isba Noor Abbasi
        </span>
      )}
    </div>
  );
};

export default Logo;