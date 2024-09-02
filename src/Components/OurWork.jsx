import React from 'react';
import work1 from "../assets/ourWork/Rectangle 9533.png"
import work2 from "../assets/ourWork/Rectangle 9576.png"
import work3 from "../assets/ourWork/Rectangle 9578.png"

const OurWork = () => {
  return (
    <div className="p-8 flex flex-col items-center bg-black">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Our <span className="text-textPrimaryBlue">Work</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Large Card */}
        <div className="bg-gray-800 p-2 rounded-lg shadow-lg text-white">
          <img
            src={work1} // Placeholder image URL
            alt="IoT Gateway"
            className="w-full h-52 object-cover mb-4 rounded-lg"
          />
          <div className='text-left pl-4'>
            <h2 className="text-2xl font-semibold mb-4">THE BEST GUIDE TO THE WORKING OF IOT GATEWAY</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper fermentum dictumst volutpat nec. Sit nibh rhoncus tellus faucibus velit sem vitae eleifend
            </p>
            <a href="#" className="text-blue-500 mt-4 inline-block">
              Read Case Study →
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {/* Top Right Card */}
          <div className="bg-gray-800 p-2 rounded-lg shadow-lg text-white flex">
            <img
              src={work2}// Placeholder image URL
              alt="Innovative Mobile App"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <div className='text-left pl-4'>
              <h2 className="text-xl font-semibold mb-4">INNOVATIVE MOBILE APP</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper fermentum dictumst cetur sit amet conse. Ullamcorper fermentum dictumst ctetur.
              </p>
              <a href="#" className="text-blue-500 mt-4 inline-block">
                Read Case Study →
              </a>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="flex bg-gray-800 p-2 rounded-lg shadow-lg text-white">
            <img
              src={work3} // Placeholder image URL
              alt="Zoom UI UX Redesign"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <div className='text-left pl-4'>
              <h2 className="text-xl font-semibold mb-4">ZOOM UI UX REDESIGNING</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper fermentum dictumst cetur sit amet conse. Ullamcorper fermentum dictumst ctetur.
              </p>
              <a href="#" className="text-blue-500 mt-4 inline-block">
                Read Case Study →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
