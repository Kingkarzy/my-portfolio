import React from 'react';

const Footer = () => {
  const date = new Date();

  return (
    <div className='w-full bg-tertiary text-white text-center py-5 mt-20'>
      Copyright &copy; {date.getFullYear()}
    </div>
  );
};

export default Footer;
