import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import Getstared from './Getstared';

const Hero = () => (
  <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    {/* Left Section */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* Discount Banner */}
      <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
        <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span>
          <span> Discount For{' '}</span>
          <span className="text-white">1 Month</span>
          <span> Account</span>
        </p>
      </div>

      {/* Main Heading and Button */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className='flex-1 font-poppins font-semibold text-[36px] sm:text-[52px] md:text-[72px] text-white leading-[55px] sm:leading-[75px] md:leading-[100px] mb-4 md:mb-0'>
          The NEXT<br className='sm:block hidden' /> 
          <span className='text-gradient'>Generation</span><br /> 
          Payment Method
        </h1>
        
        <div className='sm:block ml-5'>
          <Getstared />
        </div>
      </div>

  

      {/* Description */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
      </p>
    </div>

    {/* Right Section with Image */}
    <div className='relative mt-10 sm:mt-1 md:mt-0'>
  <img src={robot} alt='robot' className="w-full h-auto relative z-[5]" />
  
  </div>
  </section>
);

export default Hero;
