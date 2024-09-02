import { Link } from 'react-scroll'
import { useState } from 'react'
import logo from '../assets/Sigepo.svg'
import changeTheme from "../assets/themeMode.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-4 z-20 bg-gray-800 flex justify-between items-center text-black font-inter">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300"
        >
          <img className='h-6 ml-4 md:ml-10' loading="lazy" src={logo} alt="logo" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex justify-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="text-center">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </Link>
          </li>

          <li className="text-center">
            <Link
              activeClass="active"
              to="ourWork"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
          </li>

          <li className="text-center">
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
          </li>

          <li className="text-center">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>

          <li className="text-center">
            <Link
              activeClass="active"
              to="process"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div className='hidden md:block'>
          <button

            className="mr-4 md:mr-10 primaryButton rounded-full p-2"
          >
            <img src={changeTheme} alt='themeChange' />
          </button>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mr-4 md:mr-10 primaryButton py-2 px-6 rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header
