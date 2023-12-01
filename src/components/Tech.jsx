import React from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <section className='w-full mx-auto '>
      <div
        className={`${styles.paddingX} inset-0
       max-w-7xl mx-auto flex flex-wrap justify-center items-start gap-5`}
      >
        {' '}
        {technologies?.map((tech, index) => (
          <motion.div
            key={index}
            className='grid place-content-center w-100 p-2 z-30 backdrop-blur-sm bg-primary/30 border-2 shadow-xl border-[#915eff] rounded-xl'
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: [null, 1.1, 1.3] }}
            transition={{ duration: 0.1 }}
            data-aos="zoom-in-up"
          >
            <p data-aos="fade-in" className='capitalize cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl '>
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
