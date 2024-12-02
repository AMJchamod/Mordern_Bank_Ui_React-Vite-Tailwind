import React from 'react'
import styles from './style';
import {
  Stats,
  Navbar,
  Business,
  CardDeal,
  Billing,
  Clients,
  CTA,

  Footer,

  Hero,
  
} from './components';


const App = () => (
  <>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidt}font-size: clamp(1rem, 2vw, 1.5rem) `}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} md:pr-16`}>
      <Stats />
      
    </div>
    <div className={`bg-primary   `}>
      <Business/>
    </div>
    <div className={`bg-primary   `}>
      <Billing/>
    </div>
    <CardDeal />
    <Clients />
    <CTA />
    <Footer />


  </>

);





export default App