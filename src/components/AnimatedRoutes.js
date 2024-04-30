import React from 'react'
import {
    BrowserRouter as Router, Route, NavLink, BrowserRouter, Routes,
    useLocation,
} from "react-router-dom"

import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar';
import HomePage from '../pages/Home';
import Footer from './Footer';
import About from '../pages/About';
import Pricing from '../pages/Pricing';
import News from '../pages/News';
import GameplayPage from '../pages/Gameplay';
import CharacterCreationPage from '../pages/Character';

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <div>
            <Navbar/>
            <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/news" element={<News />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/gameplay" element={<GameplayPage />} />
                <Route path="/character" element={<CharacterCreationPage />} />
            </Routes>
            <Footer/>
        </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
