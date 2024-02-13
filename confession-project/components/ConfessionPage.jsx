import React from 'react';
import { motion } from 'framer-motion';
import Comment from '../modals/Comment';

const ConfessionPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'blue',
        height: '80vh',
        padding: '20px',
        color: 'white',
      }}
    >
     <div className='confessions'>
      <Confession confession={{}}/>
     </div>
     <div className='comments'>
      <Comment commentArr={[]}/>
     </div>
    </motion.div>
  );
};

export default ConfessionPage;
