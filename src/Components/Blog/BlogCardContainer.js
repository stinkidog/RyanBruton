import React from 'react';
import './BlogCardContainer.css';
import Slider from '../Slider/Slider';
import BlogContent from '../../BlogContent/BlogContents.json';

const BlogCardContainer = () => {

    return (
        <div className="blogCardContainer">
            <Slider heading="Example Slider" slides={BlogContent.posts} />
        </div>
    );
}

export default BlogCardContainer;