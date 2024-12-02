import React from 'react';
import{apple,bill,google} from'../assets';
import styles,{layout} from '../style';
const Billing=() =>(
<section id="product" className={`${layout.sectionReverse} md:pl-16`}>
  <img src={bill} alt="billing" className="w-[40%] rleative z-[5]"/>
  <div className="absolute z-[3] -left-1/2 top-0  w-[50%] rounded-full white_gradient"/>
  <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full pink_gradient" />
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Easily contorl your <br className="sm:block hidden "/>billing & invoicing.</h2>
    <p className={`${styles.paragraph} max-[470px] mt-5`}>
      Elit enim sed massa etiam maurid eu
      adipiscing ultrices ametodio aenean neque.
      fusce ipsum orci rhoncus 
      aliporttior intrger platea placereati
    </p>
    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <img src={apple} alt="googel_play" className="w-[120px] h-[42px] object-contain mr-5 cursor-pointer"/>
      <img src={google} alt="googel_play" className="w-[120px] h-[42px] object-contain mr-5 cursor-pointer"/>
    </div>
  </div>

  
</section>
);
 

export default Billing;