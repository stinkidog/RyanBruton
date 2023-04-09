import React from "react";
import './BlogPage.css';

const BlogPage = (props) => {
    return(
        <div className="blogPage section__padding">
            <div className="blogPage__hero">
                <div className="blogPage__hero-image">
                    <img className="blogPage__image" src={`../BlogImages/${props.blogData.image}`} />
                </div> 
                <div className="blogPage__hero-content">
                    <h1>{props.blogData.title}</h1>
                    <h2>{props.blogData.category}</h2>
                </div>
            </div>
            <hr class="divider" />
            <div className="blogPage__content">
                <div dangerouslySetInnerHTML={{__html: props.blogData.html}}></div>
            </div>
        </div>
    );
}

export default BlogPage;