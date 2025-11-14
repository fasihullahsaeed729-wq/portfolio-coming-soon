import React from 'react';
import Countdown from './subComponents/Countdown';
import EmailForm from './subComponents/EmailForm';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
       
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          We Are Coming <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Very Soon!
          </span>
        </h1>
        
        {/* Countdown &  Email Form Component */}
        <Countdown />
        <EmailForm />
        
      </div>
    </section>
  );
};

export default Hero;