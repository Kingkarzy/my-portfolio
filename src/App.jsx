import React,{useEffect} from "react";
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from './components';

import { Pointer } from './components/canvas';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary scroll-smooth md:scroll-auto'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Pointer />
          <Navbar />
          <Hero />
          <section className='relative w-full h-fit mx-auto mb-10'>
            <About />
            <Experience />
          </section>
          <Tech />
          <Works />
          <Feedbacks />
        </div>

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
