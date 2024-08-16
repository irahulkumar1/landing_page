import { Link } from 'react-scroll'
import logo from '../assets/Sigepo.svg'
const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-4 z-20 bg-gray-800  flex justify-between text-black">

        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300"
        >

          <img className='h-6 ml-10' src={logo} alt="logo" />
        </Link>

        <ul className="flex justify-center space-x-8">
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
              Our Services
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
              Work
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
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-gray-300"
            >
              About Us
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
        </ul>
        <div className=''>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mr-10 text-white hover:text-gray-300  bg-blue-500 hover:bg-blue-600  font-bold py-2 px-6 rounded-lg transition duration-300 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header
