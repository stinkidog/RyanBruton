import React from 'react';
import './BlogCardContainer.css';
import Goggins from '../../Assets/MeAndGoggins.JPG';
import Slider from '../Slider/Slider';

const BlogCardContainer = () => {

    const cards = [
        {
            index: 0,
            id: 1,
            title: "Coming Soon 1",
            category: "Life",
            image: Goggins
        },
        {
            index: 1,
            id: 2,
            title: "Coming Soon 2",
            category: "Life",
            image: Goggins
        },
        {
            index: 2,
            id: 3,
            title: "Coming Soon 3",
            category: "Life",
            image: Goggins
        },
    ];

    return (
        <div className="blogCardContainer">
            <Slider heading="Example Slider" slides={cards} />
        </div>
    );
}

export default BlogCardContainer;