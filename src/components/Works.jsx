import React from 'react';
import { styles } from '../styles';
import { projects } from '../constants';
import { Card } from './index';

const Works = () => {
  return (
    <div
      id='work'
      className={`${styles.paddingX} max-w-7xl mx-auto flex flex-wrap mt-[120px] justify-around items-start gap-5`}
    >
      {projects?.map((project, index) => (
        <Card
          name={project.name}
          key={index} // Use a unique key for each Card
          description={project.description}
          tags={project?.tags?.map((tag) => tag.name)} // Extracting an array of tag names
          color={project?.tags?.map((tag) => tag.color)} // Extracting an array of tag colors
        />
      ))}
    </div>
  );
};

export default Works;
