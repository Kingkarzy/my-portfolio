import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../constants';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import review from '../assets/excellent-review.png';

const Feedbacks = () => {
  return (
    <div className='relative w-full'>
      <div className=''>
        <img
          src={review}
          className='absolute -top-[100px] hidden lg:scale-75 lg:-left-20 lg:block 2xl:left-0 2xl:scale-110 leading-10'
        />
      </div>
      <motion.div
        className='max-w-7xl mx-auto flex flex-col gap-y-10 items-center justify-center mt-48'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        <h1 className='orange-text-gradient font-extrabold text-6xl leading-10'>
          Feedback{' '}
        </h1>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          className='bg-hero-pattern z-5 rounded-xl shadow-2xl w-[90%] lg:w-[80%] mt-20 p-4'
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className='flex flex-col gap-y-10'>
              <div className='flex flex-col gap-y-5 justify-center  items-center'>
                <img
                  src={testimonial.image}
                  className='max-w-[100px] max-h-[100px] rounded-full'
                />
                <p className='font-semibold text-2xl '>{testimonial.name}</p>
              </div>
              <div className='flex flex-col px-10'>
                <svg
                  width='70px'
                  height='70px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <path
                      d='M8.09027 11.63H3.40027C3.48027 6.95997 4.40026 6.18996 7.27026 4.48996C7.60026 4.28996 7.71025 3.86996 7.51025 3.52996C7.31025 3.19996 6.89023 3.08997 6.55023 3.28997C3.17023 5.28997 1.99023 6.50995 1.99023 12.33V17.72C1.99023 19.43 3.38026 20.81 5.08026 20.81H8.08026C9.84026 20.81 11.1702 19.48 11.1702 17.72V14.72C11.1802 12.96 9.85027 11.63 8.09027 11.63Z'
                      fill='#915eff'
                    ></path>{' '}
                    <path
                      opacity='0.4'
                      d='M18.9105 11.63H14.2205C14.3005 6.95997 15.2206 6.18996 18.0906 4.48996C18.4206 4.28996 18.5306 3.86996 18.3306 3.52996C18.1306 3.19996 17.7105 3.08997 17.3705 3.28997C13.9905 5.28997 12.8105 6.50995 12.8105 12.33V17.72C12.8105 19.43 14.2006 20.81 15.9006 20.81H18.9006C20.6606 20.81 21.9905 19.48 21.9905 17.72V14.72C22.0005 12.96 20.6705 11.63 18.9105 11.63Z'
                      fill='#915eff'
                    ></path>{' '}
                  </g>
                </svg>
                <h2 className={`lg:px-20 `}>{testimonial.testimonial}</h2>
                <div className='flex justify-end'>
                  <svg
                    width='70px'
                    height='70px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='flip-horizontal'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <path
                        d='M8.09027 11.63H3.40027C3.48027 6.95997 4.40026 6.18996 7.27026 4.48996C7.60026 4.28996 7.71025 3.86996 7.51025 3.52996C7.31025 3.19996 6.89023 3.08997 6.55023 3.28997C3.17023 5.28997 1.99023 6.50995 1.99023 12.33V17.72C1.99023 19.43 3.38026 20.81 5.08026 20.81H8.08026C9.84026 20.81 11.1702 19.48 11.1702 17.72V14.72C11.1802 12.96 9.85027 11.63 8.09027 11.63Z'
                        fill='#915eff'
                      ></path>{' '}
                      <path
                        opacity='0.4'
                        d='M18.9105 11.63H14.2205C14.3005 6.95997 15.2206 6.18996 18.0906 4.48996C18.4206 4.28996 18.5306 3.86996 18.3306 3.52996C18.1306 3.19996 17.7105 3.08997 17.3705 3.28997C13.9905 5.28997 12.8105 6.50995 12.8105 12.33V17.72C12.8105 19.43 14.2006 20.81 15.9006 20.81H18.9006C20.6606 20.81 21.9905 19.48 21.9905 17.72V14.72C22.0005 12.96 20.6705 11.63 18.9105 11.63Z'
                        fill='#915eff'
                      ></path>{' '}
                    </g>
                  </svg>
                </div>
              </div>

              <div className='flex justify-around items-center'>
                <p className='text-lg font-medium tracking-widest'>
                  {testimonial.designation}
                </p>
                <p className='text-xs'> of </p>
                <p className='text-lg font-medium tracking-widest'>
                  {testimonial.company}
                </p>
              </div>
              <br/>
            </div>
            
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Feedbacks;
