import React from 'react';
import Countdown from './subComponents/Countdown';
import EmailForm from './subComponents/EmailForm';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          {/* Blue transparent overlay */}
          <div className="absolute inset-0 bg-blue-500/20"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          We Are Coming <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">
            Very Soon!
          </span>
        </h1>

        <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed bg-white/10 backdrop-blur-sm rounded-lg py-4 px-6">
          Get ready for an amazing portfolio experience that will showcase your work like never before.
        </p>
        
        {/* Countdown & Email Form Component */}
        <Countdown />
        <EmailForm />
        <br />
      </div>
    </section>
  );
};

export default Hero;