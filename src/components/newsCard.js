// NewsCard.js

import React from 'react';
import { motion } from 'framer-motion';

const NewsCard = ({ title, shortdesc, date }) => {
  return (
    <motion.div
      className=" p-6 rounded-lg shadow-md border-teal-400 border bg-slate-800 bg-opacity-60"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h2 className="text-3xl text-white font-semibold mb-2">{title}</h2>
      <p className="text-white mb-4">{shortdesc}</p>
      <p className="text-gray-400 text-sm ">{date}</p>
    </motion.div>
  );
};

export default NewsCard;
