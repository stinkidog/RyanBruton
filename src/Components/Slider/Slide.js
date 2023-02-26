import React, { useRef } from 'react';
import './Slider.css';

const Slide = (props) => {

    const slide = useRef(props.slide);

    const handleMouseMove = (event) => {
        const el = slide.current;
        const r = el.getBoundingClientRect();

        el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
        el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
    }

    const handleMouseLeave = () => {
        slide.current.style.setProperty('--x', 0);
        slide.current.style.setProperty('--y', 0);
    }

    const handleSlideClick = () => {
        props.handleSlideClick(props.slide.index);
    }

    const imageLoaded = (event) => {
        event.target.style.opacity = 1;
    }

    const { image, title, index } = props.slide
    const current = props.current
    let classNames = 'slide'

    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'

    return (
        <li
            ref={slide}
            className={classNames}
            onClick={handleSlideClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="slide__image-wrapper">
                <img
                    className="slide__image"
                    alt={title}
                    src={image}
                    onLoad={imageLoaded}
                />
            </div>

            <article className="slide__content">
                <h2 className="slide__headline">{title}</h2>
                <button className="slide__action btn">Read Now</button>
            </article>
        </li>
    )
}

export default Slide;