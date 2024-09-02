import { Element } from 'react-scroll'
import AboutUs from '../Components/AboutUs'
import Services from './../Components/Services';
import OurWork from '../Components/OurWork';
import Process from './../Components/Process';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import bgImg from "../assets/Group.svg"
import bgImg2 from "../assets/dots.svg"

const Home = () => {
  return (
    <>
      {/* Landing Page Content */}
      <Element name="home" className="relative" style={{ background: `url(${bgImg}),url(${bgImg2})`, backgroundRepeat: "no-repeat,no-repeat", backgroundPosition: 'top right,right bottom', backgroundSize: "700px,400px " }}>
        <Hero />
      </Element>

      {/* Services Section */}
      <Element name="services" className="relative flex items-center justify-center text-center">
        <Services />
      </Element>
      <Element name="ourWork" className="relative flex items-center justify-center text-center">
        <OurWork />
      </Element>

      {/* About Section */}
      <Element Element name="about" className="relative min-h-screen flex items-center justify-center text-center">
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
        {/* Portfolio Section */}
      {/* <Element name="portfolio" className="relative min-h-screen  items-center justify-center text-center">
        <Portfolio />
      </Element> */}

      {/* Testimonials Section */}
    </>
  )
}

export default Home
