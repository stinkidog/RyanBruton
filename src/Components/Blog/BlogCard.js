import React from 'react';
import './BlogCard.css';

const BlogCard = (props) => {
    return (
        <div className="blogCard">
            <img src={props.image} className="blogCard__image" />
            <h1 className="blogCard__title">Title</h1>
        </div>
    );
}

export default BlogCard;