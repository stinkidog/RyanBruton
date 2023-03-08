import './App.css';
import React, { useRef } from 'react';

import { AboutMe, BlogPreview, Contact, Footer, Header, Home } from './Containers';
import { BlogPost, Hero, NavBar } from './Components';

const App = () => {

    const homeRef = useRef();
    const aboutRef = useRef();
    const blogRef = useRef();

    const navLinks = [
        {
            title: "Home",
            ref: homeRef,
            id: "home"
        },
        {
            title: "About",
            ref: aboutRef,
            id: "about"
        },
        {
            title: "Blog",
            ref: blogRef,
            id: "blog"
        }
    ];


    return (
        <div className="App">
            <div className="gradient__bg">
                <Header links={navLinks} />
                <Home ref={homeRef} />
                <AboutMe ref={aboutRef} />
                <BlogPreview ref={blogRef} />
                {/*<Contact />*/}
                <Footer />
            </div>
        </div>
    );
}

export default App;
