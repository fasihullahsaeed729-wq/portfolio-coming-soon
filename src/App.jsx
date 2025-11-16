import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/subComponents/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white-500 to-blue-200">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;