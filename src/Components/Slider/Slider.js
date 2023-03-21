import React, { useState } from 'react';
import Slide from './Slide.js';
import SliderControl from './SliderControl.js';
import { useSwipeable } from 'react-swipeable';
import './Slider.css';

const Slider = (props) => {

    //use 1 to get centered item. artificially swap latest blog post with 2nd to make it the focus
    const [current, setCurrent] = useState(1);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNextClick(),
        onSwipedRight: () => handlePreviousClick(),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    const handlePreviousClick = () => {
        const previous = current - 1;

        setCurrent((previous < 0)
            ? props.slides.length - 1
            : previous
        );
    }

    const handleNextClick = () => {
        const next = current + 1;

        setCurrent((next === props.slides.length)
            ? 0
            : next
        );
    }

    const handleSlideClick = (index) => {
        if (current !== index) {
            setCurrent(index);
        }
    }

    const headingId = `slider-heading__${props.heading.replace(/\s+/g, '-').toLowerCase()}`;
    const wrapperTransform = {
        'transform': `translateX(-${current * (100 / props.slides.length)}%)`
    }

    return (
        <div {...handlers} className='slider' aria-labelledby={headingId}>
            <ul className="slider__wrapper" style={wrapperTransform}>
                {props.slides.map(slide => {
                    return (
                        <Slide
                            key={slide.id}
                            slide={slide}
                            current={current}
                            handleSlideClick={handleSlideClick}
                        />
                    )
                })}
            </ul>

            <div className="slider__controls">
                <SliderControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />

                <SliderControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div>
            <div className="slider__viewAll">
                <h3>View All</h3>
            </div>
        </div>
    );
}

export default Slider;