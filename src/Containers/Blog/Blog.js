import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BlogPage from "../../Components/Blog/BlogPage";
import BlogContent from '../../BlogContent/BlogContents.json';
import StaticHighlightNav from "../../Components/NavBar/StaticHighlightNav";


const Blog = () => {

    const { id } = useParams();
    const [blogId, setBlogId] = useState(id);
    const [blogContent, setBlogContent] = useState({});

    const blogNavLinks = [
        {
            title: "Home"
        }
    ];

    useEffect(() => {
        var blogData = BlogContent.posts.find(x => x.id === parseInt(blogId));
        setBlogContent(blogData);
    });

    return(
        <div className="App">
            <div id="blog" className="gradient__bg">
                <StaticHighlightNav links={blogNavLinks} />
                <BlogPage blogData={blogContent} />
                <Footer />
            </div>
        </div>
    );
}

export default Blog;