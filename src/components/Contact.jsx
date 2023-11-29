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
        <div className='flex justify-center items-center relative'>
          <h1 className='text-6xl font-semibold leading-9 z-10'>Reach out</h1>
          <p className='text-9xl animate-bounce absolute'>📞</p>
        </div>

        <form className='w-[90%] min-w-[80%] mt-20 backdrop-blur-sm bg-main/20 py-10 px-20 rounded-xl flex flex-col '>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Name' className='mt-3 mb-10 ring-2 ring-blue-500/50 rounded-xl p-3' />
            <label htmlFor='subject'>Subject</label>
            <input type='text' name='subject' placeholder='Subject' className='mt-3 mb-10 rounded-xl p-3 ring-2 ring-blue-500/50' />
            <label htmlFor='name'>Message</label>
            <textarea name='name' className='mt-3 min-h-[250px] rounded-xl p-3 ring-2 ring-blue-500/50' > </textarea>
       
              <button className='w-[50%] mx-auto mt-10 font-semibold text-2xl cursor-pointer leading-9 tracking-widest rounded-tl-full rounded-br-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
              hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-500 hover:to-indigo-500 py-5 hover:animate-bounce hover:rounded-none hover:rounded-tr-full hover:rounded-bl-full'>BUZZ ME</button>
           
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
