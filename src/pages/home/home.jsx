import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <motion.div className="bg-red-500 w-[100px] h-[100px]" animate={{y:-100, scale: 1}} initial={{scale: 0}}></motion.div>
    </div>
  )
};

export default HomePage;
