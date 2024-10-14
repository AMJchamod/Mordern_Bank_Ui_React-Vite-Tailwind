import React from 'react'
import styles from './style';
import {
  Navbar,
  Billing,
  CardDeal,
 
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
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <States />
        <Businees />
        <Billing />
        <CardDeal />
        <Testmonials />
        <Clients />
        <CTA />
        <Footer />

      </div>
    </div>

  </>

);





export default App