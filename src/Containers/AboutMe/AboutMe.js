import './AboutMe.css';
import Timeline from '../../Components/Timeline/Timeline';
import React from 'react';

const AboutMe = () => {
    return (
        <>
            <div className="about section__padding" id="about">
                <h1 className="about__title">About Me</h1>
            </div>
            <div>
                <Timeline />
            </div>
        </>
    );
}

export default AboutMe;