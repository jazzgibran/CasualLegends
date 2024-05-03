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
                <Route path="/CasualLegends/about" element={<About />} />
                <Route path="/CasualLegends/pricing" element={<Pricing />} />
                <Route path="/CasualLegends/news" element={<News />} />
                <Route path="/CasualLegends" element={<HomePage />} />
                <Route path="/CasualLegends/gameplay" element={<GameplayPage />} />
                <Route path="/CasualLegends/character" element={<CharacterCreationPage />} />
            </Routes>
            <Footer/>
        </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
