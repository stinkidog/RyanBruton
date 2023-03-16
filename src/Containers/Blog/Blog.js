import React from "react"
import { useParams } from "react-router-dom";

const Blog = () => {

    const { id } = useParams();

    return(
        <div className="App">
            <div className="gradient__bg">
                <h1>Blog {id}</h1>
            </div>
        </div>
    );
}

export default Blog;