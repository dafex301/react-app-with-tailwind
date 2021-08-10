import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Wuhan KNTL', body: 'lorem ipsum...', author: 'Mamat', id: 1 },
        { title: 'Madang hese', body: 'lorem ipsum...', author: 'Mario', id: 2 },
        { title: 'Udud hese', body: 'lorem ipsum...', author: 'Mamat', id: 3 },
    ]);

    return (
        <div className="container px-4 text-gray-600">
            <h1 className="text-center text-4xl m-5 font-bold border-b pb-3 border-gray-200">Homepage</h1>
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mamat')} title="Mamat's Blog"/>
        </div>
    );
}

export default Home;