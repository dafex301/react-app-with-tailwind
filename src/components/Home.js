import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            });
    },[])

    return (
        <div className="container px-4 text-gray-600">
            <h1 className="text-center text-4xl m-5 font-bold border-b pb-3 border-gray-200">Homepage</h1>
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
    );
}

export default Home;

// const [blogs, setBlogs] = useState([]);

// useEffect(() => {
//     fetch('http://localhost:8000/blogs')
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             setBlogs(data);
//         })
// }, []);