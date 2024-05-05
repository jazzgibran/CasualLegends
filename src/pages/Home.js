import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImgWide from '../assets/background.png';
import bgImgMobile from '../assets/backgroundmobile.png';
import ChatInterface from '../components/Chat';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        // Main container

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto min-h-screen flex flex-col justify-center items-center text-center" >
                {/* bg image */}
            <div className='w-full hidden xl:block min-h-screen absolute bottom-0'>
                <img src={bgImgWide} className='opacity-60 w-full absolute bottom-0'></img>
            </div>
            <div className='w-full xl:hidden min-h-screen absolute flex items-center justify-center bottom-0'>
                <img src={bgImgMobile} className=' opacity-60 w-full absolute sm:bottom-0'></img>
            </div>
            {/* play section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                id='play' className="z-10 px-7 h-screen flex flex-col items-center justify-center" >
                <h1 className="text-4xl md:text-8xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-GreenMist mb-4">
                    Welcome Adventurer...
                    
                </h1>
                <p className="text-lg md:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-GreenMist mb-5 ">
                    Dive into a world of magic and mystery, where every decision shapes your destiny.
                </p>
                <div className="space-y-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-GreenMist text-gray-700 py-2 px-10  rounded-lg shadow-md transition duration-300"
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
                        <ChatInterface />
                    </div>
                </div>

            </motion.div>

            {/* Testimonials Section */}
            <div className='flex flex-col  gap-y-5 mb-10  lg:flex-row lg:justify-evenly items-center lg:items-start'>
                <Testimonials
                    msg="Lorem ipsumolestiae. Numquam corrupti in laborum sed rerum et corporis."
                    name="John Doe"
                    role="CEO"
                />
                <Testimonials
                    msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
                    name="John Doe"
                    role="CEO"
                />
                <Testimonials
                    msg="Lorem ipsum dolor apiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
                    name="John Doe"
                    role="CEO"
                />

            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl text-MountainMeadow font-bold my-4">Frequently Asked Questions</h2>
            {/* Add your FAQ component here */}
            <div className='flex flex-col gap-y-5 gap-x-5 md:flex-row justify-evenly items-center md:items-start mb-9'>
                <div className="bg-GreenMist flex flex-col justify-center p-4 w-[95%] min-h-[115px]  md:max-w-[30%] rounded-md mb-4">
                    <h3 className="font-semibold">Q: How do I create a character?</h3>
                    <p className="mt-2">A: Character creation is simple! Just follow the prompts when starting a new game.</p>
                </div>
                <div className="bg-GreenMist flex flex-col justify-center p-4 w-[95%] min-h-[115px] md:max-w-[30%] rounded-md mb-4">
                    <h3 className="font-semibold">Q: Is the game free to play?</h3>
                    <p className="mt-2">A: Yes, you can try the game for free with limited turns.</p>
                </div>
                <div className="bg-GreenMist flex flex-col justify-center p-4 w-[95%] min-h-[115px] md:max-w-[30%] rounded-md mb-4">
                    <h3 className="font-semibold">Q: Can I play with friends?</h3>
                    <p className="mt-2">A: Of course! All you need to do is invite them to your chat room.</p>
                </div>
            </div>


        </motion.div>
    );
};

export default HomePage;
