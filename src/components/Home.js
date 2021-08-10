import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Wuhan KNTL', body: 'lorem ipsum...', author: 'Mamat', id: 1 },
        { title: 'Madang hese', body: 'lorem ipsum...', author: 'Mario', id: 2 },
        { title: 'Udud hese', body: 'lorem ipsum...', author: 'Lil Mamat', id: 3 },
    ]);

    return (
        <div className="container px-4 text-gray-600">
            <h1 className="text-center text-4xl m-5 font-bold border-b pb-3 border-gray-200">Homepage</h1>
            {blogs.map((blog) => (
                <div className="blog-preview bg-white shadow-md m-7 p-5" key={blog.id}>
                    <h2 className="text-blue-400 text-2xl font-semibold">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;