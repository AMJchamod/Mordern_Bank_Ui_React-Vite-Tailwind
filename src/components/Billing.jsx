import React from 'react';
import{apple,bill,google} from'../assets';
import styles,{layout} from '../style';
const Billing=() =>(
<section id="product" className={layout.section}>
  <img src={bill} alt="billing" className="w-[100%] rleative z-[5]"/>
</section>
);
 

export default Billing