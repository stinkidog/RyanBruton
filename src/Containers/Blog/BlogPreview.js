import React from 'react';
import './BlogPreview.css';
import BlogCardContainer from '../../Components/Blog/BlogCardContainer';

const BlogPreview = React.forwardRef((props, ref) => {
    return (
        <div className="blog__container" ref={ref}>
            <div className="blog section__padding" id="blog">
                <h1 className="blog__title">Blog</h1>
            </div>
            <BlogCardContainer />
        </div>
    );
})

export default BlogPreview;