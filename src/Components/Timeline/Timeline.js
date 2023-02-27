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
                        Offering support to the aerodynamics department by producing and altering software to suit their requirements.\
                        • Working with Visual Studio, Matlab, and SQL Server management studio on daily basis.\
                        • Producing software in a fast paced environment managing all aspects of development(design, code, testing, etc)
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
                        • Full stack developer, involved in creating an enterprise system to manage the possibilities offered by a digital pen. \
                        • Daily work involves using the ASP.NET and Angular frameworks, developing both back and front end as required.\
                        • Front end work utilizes technologies such as Javascript, CSS, Redux, AJAX, HTML, and Kendo.\
                        • Back end work written in .NET, applying common design patterns and adhering to SOLID principles.Development undertaken with performance, scale, security, and user experience all in mind.
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
                        Joined an original team of around 20 developers and watched as we've grown to a team of 150 plus\
                        • Exposed to a wide, wide range of technologies as various CTO's have looked to implement their style\
                        • Currently transforming a localized monolith into a cloud based microservice architecture.So far this has been a complete success where many businesses would fail
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