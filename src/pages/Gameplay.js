import React from 'react';
import { motion } from 'framer-motion';

const GameplayPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='text-white min-h-screen bg-gradient-to-b from-slate-900 to-slate-950  flex flex-col text-center'>
            <div className="container mx-auto px-4 mt-3 py-8">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-7"
                >
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mb-4">Game Overview</h2>
                        <p className="text-lg">
                            Insert your overview of how the game works here.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mb-4">Instructions for New Players</h2>
                        <p className="text-lg">
                            Insert instructions for new players on how to start playing here.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl font-bold mb-4">Explore the Game World</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                        {/* Example of a screenshot */}
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src='https://placehold.co/500x350'
                            className="w-full h-[350px] object-cover cursor-pointer rounded-lg"
                        />
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src='https://placehold.co/500x350'
                            className="w-full h-[350px] object-cover cursor-pointer rounded-lg"
                        />
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src='https://placehold.co/500x350'
                            className="w-full h-[350px] object-cover cursor-pointer rounded-lg"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Tips for Getting Started</h2>
                    <p className="text-lg">
                        Insert tips for getting started or how to make the most out of the game
                        here.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default GameplayPage;
