import React, { useEffect } from 'react';
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
  Footer,
  Tech,
  Works,
} from './components';
import './index.css';
import { Pointer } from './components/canvas';
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from './constants/icons';

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
          <Footer />
        </div>

        <div className=''>
          <img src={javascript} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={typescript} className= 'absolute bottom-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={html} className= 'absolute bottom-20 right-10 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={css} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={reactjs} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={redux} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={tailwind} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={nodejs} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={mongodb} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={git} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={threejs} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
          <img src={figma} className= 'absolute top-20 skew-y-12 w-[100px] h-[100px] lg:w-150px] lg:h-[100px]' />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
