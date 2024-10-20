import React from 'react'
import styles from '../style';
import { discount, robot } from '../assets';


const Hero = () => (                                          //i just use  custom styles in here
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
        <img src={discount} alt='discount' className='w-[32px] h-[32px]'></img>
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span>
          <span> Discount For{' '}</span>
          <span className="text-white"> 1 Month</span>
          <span> Account</span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px]  text-[52px] text-white ss:leading-[100px] leading-[75px]'>The NEXT<br className='sm:block hidden' /> {""} <span className='text-gradient'>Generation</span><br /> Payment Method</h1>
      </div>
    </div>
  </section>
)

export default Hero