import React from 'react';
import { styles } from '../styles';
import { projects } from '../constants';
import { Card } from './index';
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <motion.div
      id='work'
      className={`${styles.paddingX} max-w-7xl mx-auto flex flex-wrap mt-[150px] justify-around items-start md:gap-5 gap-20 `}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 2 }}
    >
      <h1 className='text-center w-full text-7xl tracking-wider leading-9 font-bold before:content-["🍕"] after:content-["👨‍💻"]'>Projects</h1>
      {projects?.map((project, index) => (
        <Card
          name={project.name}
          key={index} 
          image={project.image}
          description={project.description}
          tags={project?.tags?.map((tag) => tag.name)} 
          color={project?.tags?.map((tag) => tag.color)} 
        />
      ))}
    </motion.div>
  );
};

export default Works;
