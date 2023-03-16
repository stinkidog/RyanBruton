import Header from '../Header/Header';
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import BlogPreview from '../Blog/BlogPreview';
import Footer from '../Footer/Footer';
import React, {useRef} from 'react';

const Home = React.forwardRef((props, ref) => {

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
                <Hero ref={homeRef} />
                <AboutMe ref={aboutRef} />
                <BlogPreview ref={blogRef} />
                {/*<Contact />*/}
                <Footer />
            </div>
        </div>
    );
})

export default Home;