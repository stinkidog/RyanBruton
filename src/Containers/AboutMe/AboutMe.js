import './AboutMe.css';
import Timeline from '../../Components/Timeline/Timeline';
import React from 'react';

const AboutMe = () => {
    return (
        <div className="about__wrapper">
            <div className="about section__padding" id="about">
                <h1 className="about__title">Timeline</h1>
            </div>
            <div>
                <Timeline />
            </div>
        </div>
    );
}

export default AboutMe;