import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { styles } from '../styles';
import man from '../assets/5TMy.gif';
import { Tilt } from 'react-tilt';

const Hero = () => {
  const [counter, setCounter] = useState(0);
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  };

  // Increment the counter every second using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 30); // Increment counter cyclically from 0 to 29
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className={`relative w-full h-[91.4vh] mx-auto z-30 leading-10`}>
      <div className=''>
        <div
          className={`${styles.paddingX} absolute inset-0
       top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div
            className='flex flex-col justify-center items-center mt-5'
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <motion.div
              className='w-5 h-5 rounded-full bg-[#915eff]'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 2 }}
            />
            <motion.div
              className='w-1 sm:h-60 h-35 violet-gradient'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 2 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className='flex flex-wrap gap-4 '
          >
            <h1
              className={`${styles.heroHeadText} text-white `}
              data-aos='zoom-in-left'
              data-aos-duration='3000'
            >
              Hi, I'm
            </h1>
            <h1
              className={`${styles.heroHeadText} text-white flex gap-4`}
              data-aos='zoom-in-left'
              data-aos-duration='3000'
            >
              <Tilt options={defaultOptions}>
                <span className='text-[#915eff] cursor-all-scroll'> Kama</span>
              </Tilt>
            </h1>

            <p
              className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}
              data-aos='zoom-out-left'
              data-aos-duration='3000'
            >
              {' '}
              A passionate Software Developer with a love for creating beautiful
              and interactive web experiences.
              <br className='sm:block hidden' />I develop amazing websites with
              3d visuals, user interfaces, and web applications.{' '}
            </p>
          </motion.div>
        </div>

        <div className='absolute w-full h-70 bottom-[160px]'>
          <motion.img
            whileInView={{ opacity: 1 }}
            src={man}
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: [`${counter * 2.5}vw`],
              opacity: [1, 0.9, 0.6, 0.5, 0.3, 0.2],
            }}
            transition={{ duration: 30, times: [0, 0.2, 1] }}
          />
        </div>

        <div className='w-full flex flex-col gap-1 overflow-hidden lg:flex-row justify-around items-center box-content border-t border-t-indigo-400/50 absolute h-[185px] bottom-0'>
          {services?.map((service, index) => (
            <Tilt>
              <div
                className='flex items-center box-content gap-x-1 cursor-all-scroll'
                key={index}
              >
                <img src={service?.icon} className='w-[2rem] h-[2rem]' />
                <p className='text-white font-semibold text-lg lg:text-4xl'>
                  {service?.title}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
