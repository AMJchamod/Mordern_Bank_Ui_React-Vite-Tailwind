import React from 'react'
import styles from './style';
import './index.css';
import {
  Feedbackcard,
  Stats,
  Navbar,
  Business,
  CardDeal,
  Billing,
  Testimonials,
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
    <div className={`bg-primary   `}>
    <CardDeal />
    </div>
    <div className={`bg-primary   `}>
    <Testimonials />
    </div>
    <div className={`bg-primary pb-8 `}>
    <Clients />
    </div>
    <div className={`bg-primary pt-3 pb-5`}>
    <CTA />
    </div>
 
    <div className={`bg-primary pt-3 pb-5`}>
    <Footer />
    </div>
 


  </>

);





export default App