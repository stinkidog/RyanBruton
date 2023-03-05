import './Footer.css';
import React from 'react';
import Socials from '../../Components/Socials/Socials';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__copyright">
                <p>Copyright Ryan Bruton &copy;</p>
            </div>
            <Socials size="1.5rem" right="0rem" responsiveRight="2rem" />
        </div>
    );
}

export default Footer;