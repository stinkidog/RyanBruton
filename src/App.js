import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import { Home, Blog } from './Containers';

const App = () => {

    ReactGA.initialize('G-MMPGNJFQPX');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>  
        </BrowserRouter>
    );
}

export default App;
