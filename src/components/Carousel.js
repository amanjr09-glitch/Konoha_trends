import React from 'react';
import './Carousel.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Carousel() {
  
  return<ImageSlider slides={SliderData} />;


    
}

export default Carousel;
