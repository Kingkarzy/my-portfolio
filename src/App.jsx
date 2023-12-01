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
} from './constants/icons';
import { ParallaxProvider } from 'react-scroll-parallax';
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <ParallaxProvider>
        <div className='relative z-0 bg-primary scroll-smooth md:scroll-auto overflow-x-hidden'>
          <Pointer />
          <Navbar />
            <div className='bg-hero-bg8 bg-repeat bg-cover bg-center z-30 '>
              <Hero />
            </div>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center z-30 '>
            <section className='relative w-full h-fit mx-auto mb-10'>
              <About />
              <Experience />
            </section>

            <Tech />
            <Works />
            <Feedbacks />
          </div>

          <div className=''>
            <img
              src={javascript}
              data-aos='zoom-in-right'
              className='absolute top-20 skew-x-6 w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] hidden'
            />
            <img
              src={typescript}
              className='hidden absolute bottom-[70rem] -skew-y-12 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:left-[14rem]'
            />
            <img
              src={html}
              className='hidden absolute bottom-[50rem] right-5 skew-y-12 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] '
            />
            <img
              src={figma}
              data-aos='zoom-out-up'
              className='hidden absolute top-[48.2rem] left-0 skew-x-6  w-[90px] h-[90px] lg:w-[150px] lg:h-[150px] lg:left-[5rem]'
            />
            <img
              src={reactjs}
              className='absolute top-[10rem] right-0 xs:top-[12rem]  xs:right-10 lg:top-[14rem] lg:right-[12rem] animate-spin w-[70px] h-[70px] lg:w-[150px] lg:h-[150px] '
            />
            <img
              src={redux}
              data-aos='zoom-out-left'
              className='absolute bottom-[126rem] right-5 -skew-y-12 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] '
            />
            <img
              src={tailwind}
              data-aos='fade-right'
              data-aos-offset='300'
              data-aos-easing='ease-in-sine'
              className='absolute top-[61rem] lg:top-[70rem] skew-y-12 w-[100px] h-[80px] lg:w-[150px] lg:h-[150px] lg:left-[12rem]'
            />
            <img
              src={nodejs}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className='absolute top-[80rem] right-5 -skew-y-12 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:right-[30rem]'
            />
            <img
              src={mongodb}
              data-aos='flip-down'
              className='animate-bounce-slow absolute top-[110rem] skew-y-12 w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] lg:left-[10rem]'
            />
            <img
              src={git}
              data-aos='flip-down'
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className='absolute top-[135rem] right-0 skew-y-12 w-[120px] h-[100px] lg:w-[100px] lg:h-[100px] lg:top-[115rem] lg:right-[10rem]'
            />
            <img
              src={css}
              data-aos='zoom-out-up'
              data-aos-offset='300'
              data-aos-easing='ease-in-sine'
              className='absolute bottom-[130rem] left-[2rem] skew-y-12 w-[80px] h-[80px] lg:w-[150px] lg:h-[150px]  lg:bottom-[130rem] lg:left-[10rem]'
            />
          </div>

          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0'>
            <Contact />
            <Footer />
          </div>
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
};

export default App;
