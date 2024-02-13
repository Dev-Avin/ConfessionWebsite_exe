import React from 'react';
import { motion } from 'framer-motion';

const TopCofessions = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'orange',
        padding: '20px',
        color: 'white',
      }}
    >
      Top Confessions
    </motion.div>
  );
};

export default TopCofessions;
