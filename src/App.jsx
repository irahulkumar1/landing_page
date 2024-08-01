import React from 'react';
import Particles from './Particles';

const App = () => {
  return (
    <div className="relative overflow-hidden h-screen w-full">
      {/* Navigation Menu */}
      <nav className="absolute top-0 right-0 p-4 z-20">
        <ul className="flex space-x-4 text-white">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Particles Background */}
      <Particles />

      {/* Landing Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Sigepo</h1>
        <p className="text-lg mb-6">
          We are pioneers in innovative solutions, committed to providing the best services and products to our clients. Our team is dedicated to delivering excellence and pushing the boundaries of technology.
        </p>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-2">Our Features</h2>
          <ul className="list-disc list-inside text-left space-y-2 mb-6">
            <li>Innovative Technology Solutions</li>
            <li>Customer-Centric Approach</li>
            <li>Dedicated Support Team</li>
            <li>State-of-the-Art Infrastructure</li>
          </ul>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
