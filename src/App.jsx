import React from 'react';
import { Link, Element } from 'react-scroll';
import Particles from './Particles';
import AboutUs from './Components/Pages/AboutUs';
import Contact from './Components/Pages/Contact';
import Portfolio from './Components/Pages/Portfolio';
import Process from './Components/Pages/Process';
import Services from './Components/Pages/Services';
import Testimonials from './Components/Pages/Testimonials';

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 p-4 z-20 bg-gray-800 text-black">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="process"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Particles Background */}
      <Particles />

      {/* Landing Page Content */}
      <Element name="home" className="relative min-h-screen flex flex-col items-center justify-center text-center p-8">
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
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 cursor-pointer"
          >
            Get in Touch
          </Link>
        </div>
      </Element>

      {/* About Section */}
      <Element name="about" className="relative min-h-screen flex items-center justify-center text-center p-8 bg-gray-100">
        <AboutUs />
      </Element>

      {/* Services Section */}
      <Element name="services" className="relative min-h-screen flex items-center justify-center text-center p-8">
        <Services />
      </Element>

      {/* Portfolio Section */}
      <Element name="portfolio" className="relative min-h-screen flex items-center justify-center text-center p-8 bg-gray-100">
        <Portfolio />
      </Element>

      {/* Testimonials Section */}
      <Element name="testimonials" className="relative min-h-screen flex items-center justify-center text-center p-8">
        <Testimonials />
      </Element>

      {/* Process Section */}
      <Element name="process" className="relative min-h-screen flex items-center justify-center text-center p-8 bg-gray-100">
        <Process />
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="relative min-h-screen flex items-center justify-center text-center p-8">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
