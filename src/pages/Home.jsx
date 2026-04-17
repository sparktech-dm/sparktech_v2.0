import React, { useState } from 'react';
import Hero from '../components/Hero.jsx';
import Faq from '../components/Faq.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Wuc from './Wuc.jsx';
import AboutUs from '../components/AboutUs.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';


function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="overflow-hidden">
      
        <>
        <div className='overflow-hidden'>
          <Hero />
          </div>
          <div>
            
          </div>
          <Faq />
          <div id="contact">
            <ContactForm />
          </div>
          
        </>
    </div>
  );
}

export default Home;
