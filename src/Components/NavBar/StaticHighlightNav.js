import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import './NavBar.css';

const StaticHighlightNav = (props) => {

    const [bgColour, setBgColour] = useState("#ffffff00");
    const [toggleMenu, setToggleMenu] = useState(false);

    const bgStyle = {
        background: bgColour
    };

    useEffect(() => {

        const changeNavbarBg = () => {

            window.scrollY >= 83
                ? setBgColour("#070630")
                : setBgColour("#ffffff00");
        }

        window.addEventListener('scroll', changeNavbarBg);

        return () => {
            window.removeEventListener('scroll', changeNavbarBg);
        };
    })

    return (
        <div className="header__navbar" style={bgStyle}>
            <div className="header__navbar-container">
                    <Link to="/">
                        {props.links[0].title}
                    </Link>
            </div>
            <div className="header__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="header__navbar-menu_container">
                        <div className="header__navbar-menu_container-links">
                            <p>
                                <Link to="/">
                                    {props.links[0].title}
                                </Link>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StaticHighlightNav;
