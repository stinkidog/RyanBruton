import './NavBar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';

const NavBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="header__navbar">
                <div className="header__navbar-container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#blog">Blog</a></p>
                    <p><a href="#contact">Contact</a></p>
                </div>
            <div className="header__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="header__navbar-menu_container scale-up-center">
                        <div className="header__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#about">About</a></p>
                            <p><a href="#blog">Blog</a></p>
                            <p><a href="#contact">Contact</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;