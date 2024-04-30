import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NewsCard from '../components/newsCard';

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const popupRef = useRef(null);

  const news = [
    {
      id: 1,
      title: "Rumors of Dragon Sightings",
      content: "Reports have surfaced of dragon sightings near the eastern mountains. Adventurers are cautioned to be wary.",
      date: "April 28, 2024",
      shortdesc: "Reports have surfaced of dragon sightings."
    },
    {
      id: 2,
      title: "Mysterious Disappearance of the Royal Artifact",
      content: "The Crown Jewels have vanished from the palace vaults under mysterious circumstances. Authorities are investigating.",
      date: "April 27, 2024",
      shortdesc: "The Crown Jewels have vanished from the palace."
    },
    // Add more news items as needed
  ];

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const handleClosePopup = () => {
    setSelectedNews(null);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelectedNews(null);
      }
    };

    if (selectedNews) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedNews]);

  return (
    <motion.div 
    initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    
    className="bg-gradient-to-b from-slate-900  to-slate-950 min-h-screen">
      <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Latest News</h1>
        <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1">
          {news.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNewsClick(item)}
              className='hover:cursor-pointer'
            >
              <NewsCard {...item} />
            </motion.div>
          ))}
        </div>
        {selectedNews && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div ref={popupRef}>
              <motion.div
                className="bg-slate-700 bg-opacity-60 p-6 rounded-lg shadow-md relative"
              >
                <h2 className="text-xl text-white font-semibold mb-2">{selectedNews.title}</h2>
                <p className="text-white ">{selectedNews.content}</p>
                <p className="text-gray-400 text-sm absolute left-2 top-2">{selectedNews.date}</p>
                <button className="text-white absolute right-2 top-2 hover:text-gray-900 font-semibold" onClick={handleClosePopup}>Close</button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default NewsPage;
