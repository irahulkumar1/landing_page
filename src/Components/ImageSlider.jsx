import React from 'react'
import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.png'
import slider4 from '../assets/slider4.png'
const ImageData = [
    { src: slider1 },
    { src: slider2 },
    { src: slider3 },
    { src: slider4 },
]
const ImageSlider = () => {
    return (
        <div className='flex space-x-6 pt-10' >
            {
                ImageData.map((img, index) => (
                    <div className='flex flex-row ' key={index}>
                        <img className='block rounded-xl' loading="lazy" src={img.src} alt="" />
                    </div>
                ))}
        </div>
    )
}

export default ImageSlider
