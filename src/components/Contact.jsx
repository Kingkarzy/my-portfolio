import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className='' id='contact'>
      <motion.div
        className='max-w-7xl mx-auto flex flex-col gap-y-10 items-center justify-center mt-48'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        <div
          className='flex justify-center items-center relative'
          data-aos='zoom-in-right'
          zoom-in-right
        >
          <h1 className='text-6xl font-semibold leading-9 z-10'>Reach out</h1>
          <p className='text-9xl animate-bounce absolute'>📞</p>
        </div>
        <div className='text-center'>
          <p className='text-sm mt-5 text-gray-200'>
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. 
            <br/>
          </p>
          <p className='text-sm mt-1 text-gray-200'>
            Let's create something amazing together!
            Thank you for visiting my portfolio. I look forward to connecting
            with you.<span className='text-lg font-bold'> Happy coding!🎉</span> 
          </p>
        </div>
        <form className='w-[90%] min-w-[80%] mt-20 backdrop-blur-sm bg-main/20 py-10 px-4 lg:px-20 rounded-xl flex flex-col '>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Name'
            className='mt-3 mb-10 ring-2 ring-blue-500/50 rounded-xl p-3 bg-white text-black'
          />
          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            className='mt-3 mb-10 rounded-xl p-3 ring-2 ring-blue-500/50 bg-white text-black'
          />
          <label htmlFor='name'>Message</label>
          <textarea
            name='name'
            className='mt-3 min-h-[250px] rounded-xl p-3 ring-2 ring-blue-500/50 bg-white text-black'
          >
            {' '}
          </textarea>
          <button
            className='w-[50%] border border-main rounded-xl shadow-lg hover:shadow-purple-600 hover:-translate-y-2 hover:mix-blend-color-dodge mx-auto mt-10 py-2 font-semibold text-md cursor-pointer leading-9 tracking-widest
             '
          >
            BUZZ ME
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
