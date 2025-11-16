import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at ${email} when we launch.`);
    setEmail('');
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-white/20">
      <div className="flex items-center justify-center mb-4">
        <EnvelopeIcon className="w-8 h-8 text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold text-black">Notify me when it's ready</h3>
      </div>
      <p className="text-gray-500 mb-6 text-center">Get notified by email when we launch</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-sm flex items-center justify-center"
        >
          <EnvelopeIcon className="w-4 h-4 mr-1" />
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;