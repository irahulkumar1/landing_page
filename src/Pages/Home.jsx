import { Link, Element } from 'react-scroll'
import Particles from '../Particles'
import AboutUs from '../Components/AboutUs'
import Services from './../Components/Services';
import Portfolio from './../Components/Portfolio';
import Testimonials from './../Components/Testimonials';
import Process from './../Components/Process';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import bgImg from "../assets/Group.svg"
import bgImg2 from "../assets/dots.svg"

const Home = () => {
  return (
    <>
      {/* Particles Background */}
      {/* <Particles /> */}

      {/* Landing Page Content */}
      <Element name="home" className="relative min-h-screen px-14 " style={{ background: `url(${bgImg}),url(${bgImg2})`, backgroundRepeat: "no-repeat,no-repeat", backgroundPosition: 'top right,right bottom', backgroundSize: "700px,400px " }}>
        <Hero />
        {/* <h1 className="text-5xl font-bold mb-4">Welcome to Sigepo</h1>
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
        </div> */}
      </Element>

      {/* Services Section */}
      <Element name="services" className="relative min-h-screen flex items-center justify-center text-center p-8">
        <Services />
      </Element>

      {/* Portfolio Section */}
      <Element name="portfolio" className="relative min-h-screen  items-center justify-center text-center p-14 ">
        <Portfolio />
      </Element>

      {/* Testimonials Section */}
      <Element name="testimonials" className="relative min-h-screen flex items-center justify-center text-center p-8">
        <Testimonials />
      </Element>

      {/* About Section */}
      <Element Element name="about" className="relative min-h-screen flex items-center justify-center text-center p-8 ">
        <AboutUs />
      </Element>

      {/* Process Section */}
      <Element name="process" className="relative min-h-screen flex items-center justify-center text-center p-8">
        <Process />
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="relative min-h-screen flex items-center justify-center text-center p-8">
        <Contact />
      </Element>
    </>
  )
}

export default Home
