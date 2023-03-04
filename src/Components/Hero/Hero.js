import './Hero.css';
import heroImage from '../../Assets/SeatedPortrait.png';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import React from 'react';

const Hero = () => {
    return (
        <div className="hero section__padding" id="home">
            <div className="hero__content">
                <h1 className="hero__content-title">Ryan<br></br>Bruton</h1>
                <h2 className="hero__content-subtitle">Developer</h2>
                <div className="hero__content-p">
                    <p>That does handstands</p>
                    <p>Plays a lot of guitar</p>
                    <p>Always looking to improve</p>
                    <p>Can be found riding around on an eboard</p>
                    <p>Too many interests, not enough time</p>
                </div>
                <IconContext.Provider value={{ color: "rgb(255 255 255 / 22%)", size: "2em", className: "social" }}>
                    <div className="hero__content-socials">
                        <a href="https://github.com/stinkidog" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.youtube.com/channel/UClCdnDtnhsKTX0nstHuEC3A" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                        <a href="https://twitter.com/TheRyanBruton" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/theryanbruton/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </IconContext.Provider>
            </div>
            <div className="hero__image-container">
                <img className="hero__image" src={heroImage} />
            </div>
        </div>
    );
}

export default Hero;