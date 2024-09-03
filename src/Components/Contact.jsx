import React from 'react';

const Contact = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full">
      {/* Blue background divs */}
      <div className="absolute top-0 left-0 w-[24rem] h-48 bg-blue-500 transform  translate-y-[15rem] translate-x-[24rem]  lg:block hidden"></div>
      <div className="absolute bottom-0 right-0 w-[24rem] h-48 bg-blue-500 transform  translate-y-[-15rem] -translate-x-[24rem] lg:block hidden"></div>

      <div className="relative bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full lg:flex">
        <div className="p-6 lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div>
                <input type="text" placeholder="Name" className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <input type="email" placeholder="E-mail address" className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <input type="text" placeholder="Phone number" className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Message" className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
            <button type="submit" className="w-full p-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 p-6 bg-gray-900 flex flex-col items-center justify-center">
          <img src="https://via.placeholder.com/150" alt="User" className="w-32 h-32 rounded-full mb-4" />
          <p className="text-gray-400 text-center mb-4">
            Lorem ipsum dolor sit amet conse. Ullamcorper fermentum dictumst ctetur amet conse. Ullamcorper fermentum dictumst ctetur.
          </p>
          <p className="text-gray-400 text-center mb-4">+91 8789567688</p>
          <p className="text-gray-400 text-center">Sigepo@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-gray-700 p-3 rounded-full focus:outline-none hover:bg-gray-600">
              <span role="img" aria-label="email">✉️</span>
            </button>
            <button className="bg-gray-700 p-3 rounded-full focus:outline-none hover:bg-gray-600">
              <span role="img" aria-label="phone">📞</span>
            </button>
            <button className="bg-gray-700 p-3 rounded-full focus:outline-none hover:bg-gray-600">
              <span role="img" aria-label="location">📍</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
