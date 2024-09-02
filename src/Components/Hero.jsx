import { Link } from "react-scroll";
import ImageSlider from "./ImageSlider";
const Hero = () => {
    return (
        <>
            <div className="font-montserrat bg-custom-gradient" >
                <div className="px-[6rem] pt-14">
                    <h1 className="text-4xl font-bold space-x-2 my-16">
                        <span className="text-white block">Transforming</span>
                        <span className="text-textPrimaryBlue">Ideas</span>
                        <span className="inline">into</span>
                        <span className="text-textPrimaryBlue">Reality</span>
                        <p className="text-sm my-4">Innovative IT Solutions for Your Business Needs</p>
                    </h1>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="primaryButton py-2 px-6 rounded-lg"
                    >
                        Get in Touch
                    </Link>
                </div>
                <div clas>
                    <div className="flex justify-center items-center mt-20">
                        <ImageSlider />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
