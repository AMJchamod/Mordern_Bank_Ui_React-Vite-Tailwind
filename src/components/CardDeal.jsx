import React from 'react'
import {card} from '../assets';
import Button from './Button';
import styles, { layout } from '../style';

const CardDeal = ()=>(
  <section className= {`${layout.section} p-1 `}>
   <div className={`{layout.sectionInfo} `}>
     <h2 className={styles.heading2}>Find a better card deal<br className="sm:block hidden"/>in few easy steps.</h2>
     <p className={`${styles.paragraph}max-w-[470px] mt-5`}>
      Arcu tortor.purs in mattis at sed integer faucibus.Aliquet quis alliquet eget mauris totor. aliquet ultrices ac , ametau</p>

     <Button styles="mt-10"></Button>
   </div>
   <div className={layout.sectionImg}>
     <img src= {card} alt='card' className='w-[100%] h-[100%]' />
   </div>

  </section>
);

export default CardDeal