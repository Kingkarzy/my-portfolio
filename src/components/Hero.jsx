import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { styles } from '../styles';
import man from '../assets/5TMy.gif';

const Hero = () => {
  const [counter, setCounter] = useState(0);

  // Increment the counter every second using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 35); // Increment counter cyclically from 0 to 29
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <motion.section
      className='relative w-full h-screen mx-auto'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 2 }}
    >
      <div className=''>
        <div
          className={`${styles.paddingX} absolute inset-0
       top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm
              <span className='text-[#915eff]'> Kama</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {' '}
              I develop beautiful websites with 3d visuals,
              <br className='sm:block hidden' /> user interfaces, and web
              applications.{' '}
            </p>
          </div>
        </div>
        <div className='absolute w-full h-80 bottom-[200px]'>
          <motion.img
            whileInView={{ opacity: 1 }}
            src={man}
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: [`${counter * 2.5}vw`],
              opacity: [1, 0.7, 0.5, 0.3, 0],
            }}
            transition={{ duration: 30, times: [0, 0.2, 1] }}
          />
        </div>
        <div className='flex justify-center items-center box-content border-y border-y-indigo-400/50 absolute w-full h-[210px] bottom-10'>
          {services?.map((service, index) => (
              <div className='flex items-center gap-x-5' key={index}>
                 <img src={service?.icon} className='w-[80px] h-[80px]'/>
                <p className='text-white font-semibold text-3xl'>
                  {service?.title}
                </p>
               
              </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
