import React from 'react';
import Countdown from './Countdown';
import EmailForm from './EmailForm';
import { RocketLaunchIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Clear Headline & Strong Hero Section */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-bold mb-8 uppercase tracking-widest">
          <RocketLaunchIcon className="w-4 h-4 mr-2" />
          Professional Portfolio Launch
        </div>
        
        {/* Engaging Opening */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Showcase Your 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block">
            Amazing Work
          </span>
        </h1>
        
        {/* Short Description */}
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          A stunning portfolio platform designed for developers, designers, and creatives to showcase their projects, skills, and personality. Perfect for attracting clients and landing dream jobs.
        </p>
        
        {/* Single Primary CTA */}
        <div className="mb-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg uppercase tracking-widest shadow-2xl">
            Join Waitlist for Early Access
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Limited spots available for launch day
          </p>
        </div>

        {/* Visual Element */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-48 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ComputerDesktopIcon className="w-10 h-10" />
              </div>
              <p className="text-lg font-medium">Portfolio Preview - Coming Soon</p>
            </div>
          </div>
        </div>
        
        {/* Countdown Component */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Launching In</h3>
          <Countdown />
        </div>
        
        {/* Secondary CTA - Email Form */}
        <div className="mb-12">
          <EmailForm />
        </div>
        
        {/* Social Proof */}
        <div className="mt-12">
          <p className="text-gray-500 text-sm mb-4">Trusted by developers at</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="text-gray-400">TechCorp</span>
            <span className="text-gray-400">DevStudio</span>
            <span className="text-gray-400">WebAgency</span>
            <span className="text-gray-400">CodeLab</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;