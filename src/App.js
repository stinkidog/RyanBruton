import './App.css';
import React from 'react';

import { AboutMe, BlogPreview, Contact, Footer, Header, Home } from './Containers';
import { BlogPost, Hero, NavBar } from './Components';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Header />
                <Home />
                <AboutMe />
                <BlogPreview />
                {/*<Contact />*/}
                <Footer />
            </div>
        </div>
    );
}

export default App;
