import work1 from '../assets/work1.svg'
import work2 from '../assets/work2.svg'
import work3 from '../assets/work3.svg'
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center block">Our <span className="text-blue-700">Work</span></h1>
      <div className='flex  flex-col  sm:flex-row  items-center justify-center text-left space-y-4 sm:space-x-5'>
        <div className='flex flex-col justify-between bg-[#1F1F1F] rounded-lg p-4 space-y-2'>
          <img className='' src={work1} alt="img" />
          <h2 className='text-white text-3xl'>THE BEST GUIDE TO THE WORKING OF IOT GATEWAY</h2>
          <p className='text-gray-200 text-xl'>Lorem ipsum dolor sit amet consectetur. Ullamcorper fermentum dictumst volutpat nec. Sit nibh rhoncus tellus faucibus velit sem vitae eleifend</p>
          <span className='text-blue-700 text-xl' >Read Case Study <FaArrowRightLong className="inline" /></span>
        </div>
        <div className='flex-row   sm:flex-col space-y-4 sm:space-x-0'>
          <div className=" flex flex-col sm:flex-row bg-[#1F1F1F] rounded-lg p-4 space-y-2 ">
            <img src={work2} alt="img" />
            <div className=' my-4 sm:mx-4'>
              <h2 className='text-white text-3xl'>INNOVATIVE MOBILE APP</h2>
              <p className='text-gray-200 text-xl'>Lorem ipsum dolor sit amet conse. Ullamcorper fermentum dictumst
                ctetur  amet conse. Ullamcorper fermentum dictumst
                ctetur</p>
              <span className='text-blue-700 text-xl'>Read Case Study <FaArrowRightLong className="inline" /> </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-[#1F1F1F] rounded-lg p-4 space-y-2">
            <img className="rounded h-30" src={work3} alt="img" />
            <div className='mx-4'>
              <h2 className='text-white text-3xl'>ZOOM UI UX REDESIGNING</h2>
              <p className='text-gray-200 text-xl'>Lorem ipsum dolor sit amet conse. Ullamcorper fermentum dictumst
                ctetur  amet conse. Ullamcorper fermentum dictumst
                ctetur</p>
              <span className='text-blue-700 text-xl'>Read Case Study <FaArrowRightLong className="inline" /> </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
