import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/blogs') // to run server 'npx json-server --watch data/db.json --port 8000'
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch from the resource.')
            }
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsLoading(false);
            setIsError(false);
        })
        .catch(err => {
            setIsError(err.message);
            setIsLoading(false);
        })
    },[])

    return (
        <div className="container px-4 text-gray-600">
            <h1 className="text-center text-4xl m-5 font-bold border-b pb-3 border-gray-200">Homepage</h1>
            {isError && <p>{isError}</p>}
            {isLoading && <p>Loading...</p>}
            <BlogList blogs={blogs}/>
        </div>
    );
}

export default Home;