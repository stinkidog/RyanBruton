import './Hero.css';
import heroImage from '../../Assets/SeatedPortrait.png';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import React from 'react';
import Socials from '../Socials/Socials';

const Hero = () => {
    return (
        <div className="hero section__padding" id="home">
            <div className="hero__content">
                <h1 className="hero__content-title">Ryan<br></br>Bruton</h1>
                <h2 className="hero__content-subtitle">Developer</h2>
                <div className="hero__content-p">
                    <p>With a passion for handstands</p>
                    <p>Plays a lot of guitar</p>
                    <p>Always looking to improve</p>
                    <p>Rides around on an eboard</p>
                    <p>Too many interests, not enough time</p>
                </div>
                <Socials size="2rem" right="7rem" responsiveRight="0rem"/>
            </div>
            <div className="hero__image-container">
                <img className="hero__image" src={heroImage} />
            </div>
        </div>
    );
}

export default Hero;