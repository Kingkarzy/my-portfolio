import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div className=' flex justify-between items-center mt-20' initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ ease: 'easeOut', duration: 2 }}>
     
        <motion.div
          className='w-40 h-40 rounded-lg bg-[#915eff] -z-1'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
         <motion.div
          className='w-20 h-20 rounded-lg bg-[#915eff] -z-5'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{
            x: -100,
            y: -300,
            z: -400,
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />

    </motion.div>
  );
};

export default Experience;
