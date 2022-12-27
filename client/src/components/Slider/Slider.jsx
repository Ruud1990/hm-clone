import React, {useState} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/flagged/photo-1553802922-e345434156e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        'https://images.unsplash.com/flagged/photo-1553802922-5609062365b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1) 
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev  + 1)
    }

  return (

    <div className='slider'>
        <div className='slider-container' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt='' />
            <img src={data[1]} alt='' />
            <img src={data[2]} alt='' />
        </div>
        <div className='slider-icons'>
            <div className='slider-icon' onClick={prevSlide}><AiOutlineArrowLeft/></div>
            <div className='slider-icon' onClick={nextSlide}><AiOutlineArrowRight/></div>
        </div>
    </div>
  )
}

export default Slider