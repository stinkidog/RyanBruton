import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Blog } from './Containers';

const App = () => {

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
