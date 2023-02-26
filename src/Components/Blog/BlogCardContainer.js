import React from 'react';
import './BlogCardContainer.css';
import BlogCard from './BlogCard';
import Goggins from '../../Assets/MeAndGoggins.JPG';
import Slider from '../Slider/Slider';

const BlogCardContainer = () => {

    const cards = [
        {
            index: 0,
            title: "1. How this man overcame his leagueadego and got ripped",
            category: "Gaming",
            image: Goggins
        },
        {
            index: 1,
            title: "2. How this man overcame his leagueadego and got ripped",
            category: "Gaming",
            image: Goggins
        },
        {
            index: 2,
            title: "3. How this man overcame his leagueadego and got ripped",
            category: "Gaming",
            image: Goggins
        },
    ];

    //{
    //    cards.map(card =>
    //        <BlogCard {...card} />
    //    )
    //}

    return (
        <div className="blogCardContainer">
            <Slider heading="Example Slider" slides={cards} />
        </div>
    );
}

export default BlogCardContainer;