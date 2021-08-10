import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Wuhan KNTL', body: 'lorem ipsum...', author: 'Mamat', id: 1 },
        { title: 'Madang hese', body: 'lorem ipsum...', author: 'Mario', id: 2 },
        { title: 'Udud hese', body: 'lorem ipsum...', author: 'Mamat', id: 3 },
    ]);

    const [name, setName] = useState(['Mario']);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect fired!');
        console.log({name});
    }, [name]);

    return (
        <div className="container px-4 text-gray-600">
            <h1 className="text-center text-4xl m-5 font-bold border-b pb-3 border-gray-200">Homepage</h1>
            <BlogList blogs={blogs} title="All Blogs!" handleDelete = {handleDelete}/>
            <h2 className="text-center">{ name }</h2>
            <button className="bg-blue-400 p-2 text-white" onClick={() => setName('Mamat')}>Change name</button>
        </div>
    );
}

export default Home;