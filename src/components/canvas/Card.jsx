import React from 'react';

const Card = ({ name, image, description, tags, color }) => {
  return (
    <div
      className='w-80 z-30 min-h-fit lg:h-[600px] flex flex-col justify-between gap-y-5 md:mt-20 rounded-xl text-center backdrop-blur-sm bg-white/10 p-3 cursor-pointer box-content animate-bounce-slow hover:animate-none hover:scale-105 hover:shadow-2xl'
      data-aos="zoom-in-up"
    >
      <h2 className='text-2xl font-bold mb-2'>{name}</h2>
      <p className='rounded-2xl box-content'>
        <img src={image} className='w-96 h-80 rounded-xl p-2' />
      </p>

      <p className='text-gray-400 text-sm tracking-wide'>{description}</p>
      <div className='flex justify-around'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`inline-block px-3 py-1 uppercase text-sm font-extrabold leading-loose bg-blue-text-gradient border border-[#915eff] ${color[index]} rounded-lg`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Card };
