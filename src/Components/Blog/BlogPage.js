import React from "react";
import './BlogPage.css';

const BlogPage = (props) => {
    return(
        <div className="blogPage section__padding">
            <div className="blogPage__image-container">
                <img className="blogPage__image" src={`../BlogImages/${props.blogData.image}`} />
            </div>
            <div className="blogPage__content">
                <h1>{props.blogData.title}</h1>
                <h4>{props.blogData.category}</h4>
                <div dangerouslySetInnerHTML={{__html: props.blogData.html}} />
            </div>
        </div>
    );
}

export default BlogPage;