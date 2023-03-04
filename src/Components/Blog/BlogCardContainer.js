import React from 'react';
import './BlogCardContainer.css';
import BlogCard from './BlogCard';
import Goggins from '../../Assets/MeAndGoggins.JPG';
import Slider from '../Slider/Slider';

const BlogCardContainer = () => {

    const cards = [
        {
            index: 0,
            title: "Coming Soon",
            category: "Life",
            image: Goggins
        },
        {
            index: 1,
            title: "Coming Soon",
            category: "Life",
            image: Goggins
        },
        {
            index: 2,
            title: "Coming Soon",
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