import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import mobileImg from '../assets/mobile.png'
import discordImg from '../assets/discord.png'
import playBackgroundImg from '../assets/background.png'; 

const HomePage = () => {
    return (
        // Main container
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="bg-gradient-to-b from-slate-900 via-teal-700 to-slate-950 min-h-screen flex flex-col justify-center items-center text-center" >
            <div className='w-full opacity-40 h-screen absolute top-0'>
                    <img src={playBackgroundImg} className='hidden lg:block w-full'></img>
            </div>
            
            {/* play section */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            id='play' className="z-10 px-7 mx-auto h-screen mt-80" >
                <h1 className="text-4xl md:text-8xl font-bold text-teal-500 mb-4">
                    Welcome Adventurer...
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-5">
                    Dive into a world of magic and mystery, where every decision shapes your destiny.
                </p>
                <div className="space-y-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-10 rounded-lg shadow-md transition duration-300"
                    >
                        <Link to="https://casuallegends.app/">Play Now</Link>
                    </motion.button>
                </div>
            </motion.div>

            {/* 2nd section */}
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true }}
    className='flex flex-wrap py-6 justify-center space-y-10 mb-60'
>
    <div className='flex px-4 justify-center gap-y-5 flex-col md:flex-row md:justify-evenly items-center md:items-start'>
        <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center '>
            <p className='text-lg md:text-3xl mb-3 font-bold text-gray-200'>
                Empower Your Narrative: Where AI Fuels Emergent Stories, Welcoming Casual Players and Encouraging Active Participation
            </p>
            <p className='md:text-lg text-gray-200'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id tincidunt tellus, a blandit nibh. Nulla pellentesque quis sapien vel sodales. Quisque sed mauris quis ex malesuada aliquet a ut nibh. Praesent eget eros a urna vestibulum pharetra. Mauris aliquet blandit nisl, a cursus arcu semper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate euismod odio, at vehicula ligula commodo pulvinar. Phasellus nec ex risus.
            </p>
        </div>
        <div className='w-full md:w-1/2 '>
            <img src={mobileImg} className='rounded-lg w-full' alt='Mobile' />
        </div>
    </div>
    <div className='flex px-4 justify-center gap-y-5 flex-col md:flex-row md:justify-evenly items-center md:items-start'>
        <div className='w-full md:w-1/2'>
            <img src={discordImg} className='rounded-lg w-full' alt='Discord' />
        </div>
        <div className='w-full md:w-1/2  lg:w-1/3 flex flex-col items-center justify-center'>
            <p className='text-lg md:text-3xl mb-3 font-bold text-gray-200'>
                Empower Your Narrative: Where AI Fuels Emergent Stories, Welcoming Casual Players and Encouraging Active Participation
            </p>
            <p className='md:text-lg text-gray-200'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id tincidunt tellus, a blandit nibh. Nulla pellentesque quis sapien vel sodales. Quisque sed mauris quis ex malesuada aliquet a ut nibh. Praesent eget eros a urna vestibulum pharetra. Mauris aliquet blandit nisl, a cursus arcu semper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate euismod odio, at vehicula ligula commodo pulvinar. Phasellus nec ex risus.
            </p>
        </div>
    </div>
</motion.div>

        </motion.div>
    );
};

export default HomePage;
