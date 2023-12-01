import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
const About = () => {
  return (
    // <Parallax speed={10}>
    <section id='about' className='relative'>
      <div
        className={`${styles.paddingX} relative inset-0
       max-w-7xl mx-auto flex flex-row items-start gap-5  pt-20`}
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
          className='flex flex-wrap gap-4'
        >
          <h1
            className={`${styles.heroHeadText} text-white relative z-10`}
            data-aos='fade-right'
          >
            Web & Mobile
          </h1>
          <h1
            className={`${styles.heroHeadText} text-white relative z-10`}
            data-aos='fade-right'
          >
            <Tilt>
              <span className='text-[#915eff] cursor-all-scroll'> Designer</span>
            </Tilt>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 relative z-10`}
            data-aos='fade-left'
          >
            I thrive on turning ideas into reality through the power of code.
            With a keen eye for design and a love for clean, efficient code, I
            specialize in crafting visually stunning and user-friendly websites.
            My goal is to make the web a more engaging and accessible place for
            everyone.
          </p>
        </motion.div>
      </div>
    </section>
    // </Parallax>
  );
};

export default About;
