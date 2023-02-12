import './Footer.css';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__copyright">
                <p>Copyright Ryan Bruton &copy;</p>
            </div>
            <IconContext.Provider value={{ color: "#231F20", size: "1.5em", className: "social" }}>
                <div className="footer__socials">
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
    );
}

export default Footer;