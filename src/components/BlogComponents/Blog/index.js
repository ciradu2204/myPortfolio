import React from "react";
import { useState } from "react";
import { useParams, useLocation } from "react-router";
import { nanoid } from "nanoid";
import parse from 'html-react-parser';
import Footer from "../../SharedComponents/Footer";
import { BlogMainWrapper, BlogImage, Prev, PrevBlogName, BlogWrapper, BlogTitle, BlogDescription, Next, NextBlogName } from "./BlogElements";
const Blog = () => {

    const params = useParams();
    const location = useLocation();
    const [id, setId] = useState(params.id);
    const blogs = location.state.blog;
    const [mouseOverPrev, setMouseOverPrev] = useState(false);
    const [mouseOverNext, setMouseOverNext] = useState(false);
    const [titlePrev, setTitlePrev] = useState('');
    const [titleNext, setTitleNext] = useState('');

    const prevHandle = () => {
        if (id > 0) {
            setId(id => parseInt(id) - 1);
            console.log("prev " + id);
        }
    }

    const NextHandle = () => {
        if (id < blogs.length - 1) {
            setId(id => parseInt(id) + 1)
        }
    }

    const handleNextTitle = () => {
        if (id < blogs.length - 1) {
            let nextId = parseInt(id) + 1;
            setTitleNext(blogs[nextId].title.toUpperCase());

        } else {
            setTitleNext("");
        }

    }

    const handlePrevTitle = () => {
        if (id > 0) {
            let prevId = parseInt(id) - 1;
            setTitlePrev(blogs[prevId].title.toUpperCase());
        } else {
            setTitlePrev("");
        }
    }


    const handleMousePrevOver = () => {
        handlePrevTitle()
        setMouseOverPrev(true);
    }

    const handleMousePrevOut = () => {
        setMouseOverPrev(false);

    }

    const handleMouseNextOver = () => {
        handleNextTitle();
        setMouseOverNext(true);

    }
    const handleMouseNextOut = () => {
        setMouseOverNext(false);

    }

    return (
        <>
            {blogs.filter((element, index) => index === parseInt(id)).map((blog) => (
                <BlogMainWrapper key={nanoid()}>
                    <Prev onClick={prevHandle} onMouseOver={handleMousePrevOver} onMouseOut={handleMousePrevOut} />
                    {mouseOverPrev && titlePrev ? <PrevBlogName>{titlePrev}</PrevBlogName> : null}
                    <BlogWrapper>
                        <BlogImage src={blog.image} />
                        <BlogTitle >{blog.title.toUpperCase()}</BlogTitle>
                        <BlogDescription>{parse(blog.description)} </BlogDescription>
                    </BlogWrapper>
                    <Next onClick={NextHandle} onMouseOver={handleMouseNextOver} onMouseOut={handleMouseNextOut} />
                    {mouseOverNext && titleNext ? <NextBlogName>{titleNext}</NextBlogName> : null}
                </BlogMainWrapper>
            ))}
            <Footer />
        </>


    )


}

export default Blog;