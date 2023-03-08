import React, { useEffect, useState } from "react";

const ScrollHighlightNav = (props) => {

    const [bgColour, setBgColour] = useState("#ffffff00");
    const [activeIndex, setActiveIndex] = useState(0);

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

        console.log("active index: ", activeIndex);

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
        </div>
    );
}

export default ScrollHighlightNav;
