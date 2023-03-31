import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './NavBar.css';

const ScrollHighlightNav = (props) => {

    const [bgColour, setBgColour] = useState("#ffffff00");
    const [activeIndex, setActiveIndex] = useState(0);
    const [toggleMenu, setToggleMenu] = useState(false);


    const nearestIndex = (
        currentPosition,
        sectionPositionArray,
        startIndex,
        endIndex
    ) => {
        if (startIndex === endIndex) return startIndex;
        else if (startIndex === endIndex - 1) {
            if (
                Math.abs(
                    sectionPositionArray[startIndex].ref.current.offsetTop -
                    currentPosition
                ) <
                Math.abs(
                    sectionPositionArray[endIndex].ref.current.offsetTop -
                    currentPosition
                )
            )
                return startIndex;
            else return endIndex;
        } else {
            var nextNearest = ~~((startIndex + endIndex) / 2);
            var a = Math.abs(
                sectionPositionArray[nextNearest].ref.current.offsetTop -
                currentPosition
            );
            var b = Math.abs(
                sectionPositionArray[nextNearest + 1].ref.current.offsetTop -
                currentPosition
            );
            if (a < b) {
                return nearestIndex(
                    currentPosition,
                    sectionPositionArray,
                    startIndex,
                    nextNearest
                );
            } else {
                return nearestIndex(
                    currentPosition,
                    sectionPositionArray,
                    nextNearest,
                    endIndex
                );
            }
        }
    };

    const bgStyle = {
        background: bgColour
    };


    useEffect(() => {
        const handleScroll = (e) => {
            var index = nearestIndex(
                window.scrollY,
                props.links,
                0,
                props.links.length - 1
            );
            setActiveIndex(index);
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll)
        };
    }, []);

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
                {props.links.map((link, index) => (
                    <a
                        key={link.id}
                        className={activeIndex === index ? "link active-link" : "link"}
                        href={`#${link.id}`}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
            <div className="header__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="header__navbar-menu_container">
                        <div className="header__navbar-menu_container-links">
                        {props.links.map((link, index) => (
                    <p><a
                        key={link.id}
                        className={activeIndex === index ? "link active-link" : "link"}
                        href={`#${link.id}`}
                    >
                        {link.title}
                    </a></p>
                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ScrollHighlightNav;
