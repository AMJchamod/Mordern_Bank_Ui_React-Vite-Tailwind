import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import Getstared from './Getstared';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
        <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span>
          <span> Discount For{' '}</span>
          <span className="text-white">1 Month</span>
          <span> Account</span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          The NEXT<br className='sm:block hidden' /> {""} <span className='text-gradient'>Generation</span><br /> Payment Method
        </h1>
        <div className=' ml-4 ss:flex hidden md:mr-4 '>
          <Getstared />
        </div>

      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        our team of exprets uses a mehodology to identify  the credit cards most likely to fit your needs. we examine  annual percentage rates, annual fees.
      </p>
    
    </div>
    <div>
    <img src={robot} alt='robot' className="w-[100%] h-[100%] relative z-[5]" />
    </div>
   
  </section>
);

export default Hero;
