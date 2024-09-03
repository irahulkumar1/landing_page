import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Poornima Balya',
    company: 'Company name',
    text: 'Very useful app. Doctor responded so many times without charging any fee. She patiently answered to all my doubts and clarified nicely. With this app we canThank so much Dr Renu. Wonderful app',
    img: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'Balya Poornima ',
    company: 'Company name',
    text: 'Very useful app. Doctor responded so many times without charging any fee. She patiently answered to all my doubts and clarified nicely. With this app we can communicate with doctors any time without problems. Thank so much Dr Renu. Wonderful app',
    img: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    name: 'Rahul Kumar',
    company: 'Company name',
    text: 'Very useful app. Doctor responded so many times without charging any fee. She patiently answered to all my doubts and clarified nicely. With this app we can communicate with',
    img: 'https://via.placeholder.com/50',
  },
];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Determine the display order based on the current index
  const getShuffledTestimonials = () => {
    if (testimonials.length === 0) return [];
    const shuffled = [];
    for (let i = 0; i < testimonials.length; i++) {
      shuffled.push(testimonials[(current + i) % testimonials.length]);
    }
    return shuffled;
  };

  const shuffledTestimonials = getShuffledTestimonials();

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-12 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        What <span className="text-blue-500">Our Clients</span> Says About Us
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center justify-center space-x-4">
          {shuffledTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transform transition-all duration-500 ease-in-out ${index === 1 ? 'scale-100' : 'scale-90 opacity-50'
                } bg-gray-800 rounded-lg p-6 text-center w-80 sm:w-96 shadow-lg ${index === 1 ? 'sm:scale-110' : ''
                }`}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="mx-auto mb-4 rounded-full w-16 h-16 object-cover"
              />
              <h2 className="text-xl font-semibold">{testimonial.name}</h2>
              <p className="text-sm text-gray-400">{testimonial.company}</p>
              <p className="mt-4 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full focus:outline-none"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full focus:outline-none"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? 'bg-blue-500' : 'bg-gray-500'
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
