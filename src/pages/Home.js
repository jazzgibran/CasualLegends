import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import mobileImg from '../assets/mobile.png'
import discordImg from '../assets/discord.png'
import playBackgroundImg from '../assets/background.png';
import ChatInterface from '../components/Chat';

const HomePage = () => {
    return (
        // Main container
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" min-h-screen flex flex-col justify-center items-center text-center" >
            <div className='w-full md:block opacity-40 min-h-screen absolute bottom-0'>
                <img src={playBackgroundImg} className='bottom-[10%]  md:bottom-1/4 w-full absolute lg:bottom-0'></img>
            </div>

            {/* play section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                id='play' className="z-10 px-7 h-screen flex flex-col items-center justify-center" >
                <h1 className="text-4xl md:text-8xl font-bold text-MountainMeadow mb-4">
                    Welcome Adventurer...
                </h1>
                <p className="text-lg md:text-xl text-MountainMeadow mb-5">
                    Dive into a world of magic and mystery, where every decision shapes your destiny.
                </p>
                <div className="space-y-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-MountainMeadow hover:bg-MountainMeadow text-white py-2 px-10 rounded-lg shadow-md transition duration-300"
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
                className='flex flex-wrap py-6 justify-center space-y-10 mb-12'
            >
                <div className='flex px-4 justify-center gap-y-5 flex-col md:flex-row md:justify-evenly items-center md:items-start'>
                    <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center '>
                        <p className='text-lg md:text-3xl mb-3 font-bold text-MountainMeadow'>
                            Empower Your Narrative: Where AI Fuels Emergent Stories, Welcoming Casual Players and Encouraging Active Participation
                        </p>
                        <p className='md:text-lg text-MountainMeadow'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id tincidunt tellus, a blandit nibh. Nulla pellentesque quis sapien vel sodales. Quisque sed mauris quis ex malesuada aliquet a ut nibh. Praesent eget eros a urna vestibulum pharetra. Mauris aliquet blandit nisl, a cursus arcu semper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate euismod odio, at vehicula ligula commodo pulvinar. Phasellus nec ex risus.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/3 '>
                    <ChatInterface/>
                    </div>
                </div>
                <div className='flex px-4 justify-center gap-y-5 flex-col md:flex-row md:justify-evenly items-center md:items-start'>
                    <div className='w-full md:w-1/2'>
                        <img src={discordImg} className='rounded-lg w-full' alt='Discord' />
                    </div>
                    <div className='w-full md:w-1/2  lg:w-1/3 flex flex-col items-center justify-center'>
                        <p className='text-lg md:text-3xl mb-3 font-bold text-MountainMeadow'>
                            Empower Your Narrative: Where AI Fuels Emergent Stories, Welcoming Casual Players and Encouraging Active Participation
                        </p>
                        <p className='md:text-lg text-MountainMeadow'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id tincidunt tellus, a blandit nibh. Nulla pellentesque quis sapien vel sodales. Quisque sed mauris quis ex malesuada aliquet a ut nibh. Praesent eget eros a urna vestibulum pharetra. Mauris aliquet blandit nisl, a cursus arcu semper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate euismod odio, at vehicula ligula commodo pulvinar. Phasellus nec ex risus.
                        </p>
                    </div>
                </div>
            </motion.div>

            
            {/* Screenshots Section */}
            <section className="w-full my-10">
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                
            </section>

            {/* Testimonials Section */}
            <section className="my-10">
                <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
                {/* Add your testimonials component here */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Testimonial content */}
                    <blockquote>
                        <p>"This game is amazing! The AI DM adds a whole new level of immersion."</p>
                        <cite>- John Doe</cite>
                    </blockquote>
                    <blockquote>
                        <p>"I've been playing this game for weeks and I'm still discovering new adventures. Highly recommended!"</p>
                        <cite>- Jane Smith</cite>
                    </blockquote>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="my-10">
                <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                {/* Add your FAQ component here */}
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <h3 className="font-semibold">Q: How do I create a character?</h3>
                    <p className="mt-2">A: Character creation is simple! Just follow the prompts when starting a new game.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <h3 className="font-semibold">Q: Is the game free to play?</h3>
                    <p className="mt-2">A: Yes, you can try the game for free with limited turns.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <h3 className="font-semibold">Q: Can I play with friends?</h3>
                    <p className="mt-2">A: Currently, the game is single-player only.</p>
                </div>
            </section>

        </motion.div>
    );
};

export default HomePage;
