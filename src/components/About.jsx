import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about'>
      <div
        className={`${styles.paddingX} relative inset-0
       max-w-7xl mx-auto flex flex-row items-start gap-5 z-40`}
       
      >
        <div className='flex flex-col justify-center items-center mt-5'>
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
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Web & Mobile
            <span className='text-[#915eff]'> Designer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I specialize in creating dynamic, user-friendly websites and web applications that leave a lasting impression.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
