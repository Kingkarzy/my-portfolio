import React from 'react';

const Card = ({ name, description, tags, color }) => {
  return (
    <div className='w-60 h-80 flex flex-col justify-between rounded-xl text-center backdrop-blur-sm bg-white/10 p-3 box-content'>
      <h2 className='text-xl font-bold mb-2'>{name}</h2>
      <p className='text-gray-500'>{description}</p>
      <div className='flex justify-between  mt-2'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`inline-block px-2 py-1 border border-${color[index]} text-white rounded-md`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
