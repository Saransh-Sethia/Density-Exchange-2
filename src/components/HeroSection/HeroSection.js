import React from 'react';
import './HeroSection.css';
import Hero from '../../assets/Hero.png';
import Frame1 from '../../assets/Frame1.png';

const HeroSection = () => {
  return (
    <>
      <img src={Hero} alt="Hero"/>
      <img src={Frame1} alt="frame1"/>
    </>
  )
}

export default HeroSection
