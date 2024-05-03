// NewsCard.js

import React from 'react';
import { motion } from 'framer-motion';

const NewsCard = ({ title, shortdesc, date }) => {
  return (
    <motion.div
      className=" p-6 rounded-lg shadow-md border-teal-400 border bg-GreenMist bg-opacity-60"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h2 className="text-3xl text-teal-700 font-semibold mb-2">{title}</h2>
      <p className="text-teal-700 mb-4">{shortdesc}</p>
      <p className="text-gray-400 text-sm ">{date}</p>
    </motion.div>
  );
};

export default NewsCard;
