import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const Clients =()=>(
  <section className={`${styles.flexCenter} my-0`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client)=>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} className={`flex-1 ${styles.flexCenter} sm:min-w[192px] min-w-[120px]`}/>
           
          
        </div>
      ))}
    </div>
  </section>
)
export default Clients