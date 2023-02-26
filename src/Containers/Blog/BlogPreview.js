import React from 'react';
import './BlogPreview.css';
import BlogCardContainer from '../../Components/Blog/BlogCardContainer';

const BlogPreview = () => {
    return (
        <>
            <div className="blog section__padding" id="blog">
                <h1 className="blog__title">Blog</h1>
            </div>
            <BlogCardContainer />
        </>
    );
}

export default BlogPreview;