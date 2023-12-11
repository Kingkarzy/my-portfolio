import React from 'react';
import { Link } from "react-router-dom";
// import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  const date = new Date();

  return (
    <div className='w-full flex flex-col items-center justify-center gap-y-5 bg-tertiary text-white text-center py-5 mt-20'>
      <ul className='flex gap-x-5 list-none justify-center items-center'>
        {/* <li><AiOutlineTwitter color='skyblue' size={'2em'} className='cursor-pointer hover:scale-110'/></li> */}
        <li>
          <Link to={'https://linkedin.com/in/chukwumakama'}>
            <AiFillLinkedin
              color=' #0077b5'
              size={'2em'}
              className='cursor-pointer hover:scale-110'
            />
          </Link>
        </li>
      
        <li>
          <Link to={'https://github.com/kingkarzy'}>
            <AiFillGithub
              size={'2em'}
              className='cursor-pointer hover:scale-110'
            />
          </Link>
        </li>
      </ul>
      <p>Copyright &copy; {date.getFullYear()}</p>
    </div>
  );
};

export default Footer;
