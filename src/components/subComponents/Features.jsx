import React from 'react';
import { 
  BoltIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized for performance with fast loading times and smooth interactions.'
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: 'Beautiful Design',
      description: 'Modern, clean design that showcases work in the best possible way.'
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: 'Fully Responsive',
      description: 'Perfect experience on all devices - desktop, tablet, and mobile.'
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      title: 'Easy to Update',
      description: 'Simple content management system to keep your portfolio fresh and current.'
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: 'SEO Optimized',
      description: 'Built with best practices to rank higher in search results.'
    },
    {
      icon: <BriefcaseIcon className="w-8 h-8" />,
      title: 'Professional',
      description: 'Designed to impress potential clients and employers with a polished look.'
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose This Portfolio?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A carefully crafted portfolio designed to showcase your skills and impress your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-blue-100 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105 group shadow-sm hover:shadow-md"
            >
              <div className="text-blue-500 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;