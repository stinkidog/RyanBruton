import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BlogPage from "../../Components/Blog/BlogPage";
import BlogContent from '../../BlogContent/BlogContents.json';


const Blog = () => {

    const { id } = useParams();
    const [blogId, setBlogId] = useState(id);
    const [blogContent, setBlogContent] = useState({});
    const blogRef = useRef();

    const blogNavLinks = [
        {
            title: "Home",
            ref: blogRef,
            id: "blog"
        }
    ];

    useEffect(() => {
        var blogData = BlogContent.posts.find(x => x.id === parseInt(blogId));
        setBlogContent(blogData);
    });

    return(
        <div className="App">
            <div id="blog" ref={blogRef} className="gradient__bg">
                <Header links={blogNavLinks} />
                <BlogPage blogData={blogContent} />
                <Footer />
            </div>
        </div>
    );
}

export default Blog;