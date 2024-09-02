import React, { useEffect, useRef } from 'react';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
import slider4 from '../assets/slider4.png';

const ImageData = [
    { src: slider1 },
    { src: slider2 },
    { src: slider3 },
    { src: slider4 },
    { src: slider2 },
    { src: slider3 },
    { src: slider4 },
];

const ImageSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let startPosition = 0;

        const slideImages = () => {
            if (slider) {
                startPosition += 2; // Increase the value for faster scrolling
                if (startPosition >= slider.scrollWidth - slider.clientWidth) {
                    startPosition = 0;
                }
                slider.scrollTo({
                    left: startPosition,
                    behavior: 'auto', // Set to 'auto' for continuous smooth movement
                });
            }
        };

        const intervalId = setInterval(slideImages, 30); // Increase the interval for smoother scrolling

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div ref={sliderRef} className="flex overflow-hidden w-full h-80">
            <div className="flex flex-row space-x-8">
                {ImageData.map((img, index) => (
                    <div key={index} className="flex-shrink-0">
                        <img
                            className="w-[24rem] h-64 rounded-xl object-cover"
                            loading="lazy"
                            src={img.src}
                            alt={`slide ${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
