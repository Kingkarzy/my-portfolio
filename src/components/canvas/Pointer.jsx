import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useFollowPointer } from './use-follow-pointer';

const Pointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <motion.div
      ref={ref}
      className='w-20 h-20 bg-transparent border-2 rounded-full border-[#915eff] z-50'
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 2,
        stiffness: 10,
        restDelta: 0.001,
      }}
    />
  );
};

export default Pointer;
