import React from 'react';
import { ArrowRightIcon, EyeIcon } from '@heroicons/react/24/outline';

const CTA = () => {
  return (
    <section id="cta" className="py-20 px-6 bg-gradient-to-r from-blue-100 to-bue-200">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Ready to Showcase Your Work?
        </h2>
        <p className="text-black/90 text-lg mb-8 max-w-2xl mx-auto">
          Be among the first to launch your professional portfolio and stand out from the crowd.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-100 hover:bg-gray-100 text-blue-500 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-sm flex items-center shadow-lg">
            Get Notified at Launch
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
          <button className="bg-blue-100 hover:bg-gray-100 text-blue-500 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-sm flex items-center shadow-lg">
            View Demo
            <EyeIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
        
        <p className="text-black/70 text-sm mt-6">
          Join 500+ developers already waiting for launch
        </p>
      </div>
    </section>
  );
};

export default CTA;