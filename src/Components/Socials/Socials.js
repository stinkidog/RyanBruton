import './Socials.css';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import React, { useEffect, useState } from 'react';

const Socials = (props) => {

    const [styling, setStyling] = useState({ paddingRight: window.innerWidth > 1050 ? props.right : props.responsiveRight });

    useEffect(() => {
        const handleResize = () => {

            window.innerWidth > 1050
                ? setStyling({ paddingRight: props.right })
                : setStyling({ paddingRight: props.responsiveRight })
        };

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });


    return (
        <IconContext.Provider value={{ color: "rgb(255 255 255 / 22%)", size: props.size, className: "socials" }}>
            <div className="socials__container" style={styling} >
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
    );
}

export default Socials;