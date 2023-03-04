import React, { useState } from 'react';
import { Chrono } from "react-chrono";
import { useSwipeable } from 'react-swipeable';
import './Timeline.css';
import Anoto from '../../Assets/AnotoLogo.png';
import RedBull from '../../Assets/RedBullLogo.png';
import Checkatrade from '../../Assets/CheckatradeLogo.png';

const Timeline = () => {

    const items = [
        {
            title: "Jun 2015",
            timelineContent:
                <div className="timeline__custom-card">
                    <div className="timeline__custom-card-image-container">
                        <img src={RedBull} className="timeline__custom-card-image" />
                    </div>
                    <div className="timeline__custom-card-text">
                        <h4>June 2015 - July 2016</h4><br />

                        Worked as a junior member of the aerodynamics department. Exposed to a highly demanding and fast paced environment full of passionate engineers.
                        Notable achievement would be improving load times of aero images by some factor of around 500%.
                        Accomplished by caching parts of the kriging interpolation algorithm used in generating the images.
                    </div>
                </div>,
        },
        {
            title: "Jun 2017",
            timelineContent:
                <div className="timeline__custom-card">
                    <div className="timeline__custom-card-image-container">
                        <img src={Anoto} className="timeline__custom-card-image" />
                    </div>
                    <div className="timeline__custom-card-text">
                        <h4>June 2017 - June 2018</h4><br />

                        Full stack role, working on both the existing and greenfield enterprise systems used to manage a digital pen offering.
                        Classic 3 tier architecture, using Microsoft SQL server, .NET, and Angular frameworks.
                        Key work was designing and building a web canvas drag and drop tool, that allowed users to define a custom workflow of how their written data would be processed on submit.
                    </div>
                </div>
        },
        {
            title: "Oct 2018",
            timelineContent: 
                <div className="timeline__custom-card">
                    <div className="timeline__custom-card-image-container">
                        <img src={Checkatrade} className="timeline__custom-card-image" />
                    </div>
                    <div className="timeline__custom-card-text">
                        <h4>October 2018 - Present</h4><br />

                        Could write a book on my time here so far. Starting as a small team of 20 developers, on site servers, and legacy systems, to a now 100+ engineering team 
                        that has migrated into using a modern cloud microservices architecture. During my time here I begun expanding beyond technical skills and valuing the 
                        importance of process and delivering quality business value. Something that can only be achieved through open and honest communication.
                    </div>
                </div>
        },
    ];

    const [itemIndex, setItemIndex] = useState(0);

    const updateItemIndex = (direction) => {

        direction === "right"
            ? setItemIndex(itemIndex > 0 ? itemIndex - 1 : itemIndex)
            : setItemIndex(itemIndex < (items.length - 1) ? itemIndex + 1 : itemIndex)
    }

    const handlers = useSwipeable({
        onSwipedRight: () => updateItemIndex("right"),
        onSwipedLeft: () => updateItemIndex("left"),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <div {...handlers} className="timeline">
            <Chrono items={items}
                mode="HORIZONTAL"
                classNames={{
                    title: 'timeline__title',
                    card: 'timeline__card'
                }}
                activeItemIndex={itemIndex}
                />
        </div>
    );
}

export default Timeline;