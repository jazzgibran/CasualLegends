import React from 'react';
import { motion } from 'framer-motion';
import partyBackgroundImg from '../assets/partybg.png'; 

const About = () => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="min-h-screen lg:mb-16">
            <div className='w-full opacity-40 absolute top-0'>
                    <img src={partyBackgroundImg} className='hidden lg:block w-full'></img>
            </div>
            <div className="z-10 relative container mx-auto py-12 px-4 ">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl font-semibold text-teal-700 mb-2">CASUAL LEGENDS</h1>
                    
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="border-teal-400 border bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6"
                    >
                        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Game Concept</h2>
                        <p className="text-lg text-teal-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id tincidunt tellus, 
                        a blandit nibh. Nulla pellentesque quis sapien vel sodales. Quisque sed mauris quis ex malesuada aliquet a ut nibh.
                        Praesent eget eros a urna vestibulum pharetra. Mauris aliquet blandit nisl, a cursus arcu semper ut. Interdum et malesuada fames 
                        ac ante ipsum primis in faucibus.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="border-teal-400 border bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6"
                    >
                        <h2 className="text-2xl font-semibold text-teal-700 mb-4">AI Dungeon Master</h2>
                        <p className="text-lg text-teal-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id tincidunt tellus, 
                        a blandit nibh. Nulla pellentesque quis sapien vel sodales. Quisque sed mauris quis ex malesuada aliquet a ut nibh.
                        Praesent eget eros a urna vestibulum pharetra. Mauris aliquet blandit nisl, a cursus arcu semper ut. Interdum et malesuada fames 
                        ac ante ipsum primis in faucibus.  </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold text-teal-700 mb-4">Team Members</h2>
                    {/* Placeholder for team members */}

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="border-teal-400 border  bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6 mb-4" >
                        <h3 className="text-lg font-semibold text-teal-700">Ilya</h3>
                        <p className="text-teal-700">Product Sorcerer</p>
                    </motion.div >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Members name="Hung" role="Bard Engineer" x={-20} />
                        <Members name="Nate" role="Code Wizard" x={20} />
                        <Members name="Elliot" role="Data Elf " x={-20} />
                        <Members name="Nisha" role="Frontend Ranger " x={20} />
                        <Members name="Jazz" role="Quality Warlock" x={-20} />
                        {/* Add more team members as needed */}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

const Members = ({ name, role, x }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: x }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-teal-400 border bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6" >
            <h3 className="text-lg font-semibold text-teal-700">{name}</h3>
            <p className="text-teal-700">{role}</p>
        </motion.div >
    );
};

export default About;
