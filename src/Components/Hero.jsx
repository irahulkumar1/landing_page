import { Link } from "react-scroll"
import ImageSlider from "./ImageSlider"
const Hero = () => {
    return (
        <>
            <div className="min-h-screen mt-8  text-left " >
                <h1 className="text-4xl font-bold space-x-2 pt-16">
                    <span className="text-white block">Transforming</span>
                    <span className="text-blue-700">Ideas</span>
                    <span className="inline">into</span>
                    <span className="text-blue-700">Reality</span>
                </h1>
                <p className="text-xl mb-4">Innovative IT Solutions for Your Business Needs</p>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 cursor-pointer mb-8 "
                >
                    Get in Touch
                </Link>
                <div className="mt-10">

                    <ImageSlider />
                </div>
            </div>
        </>
    )
}

export default Hero
