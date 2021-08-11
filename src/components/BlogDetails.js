import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isLoading, isError} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE"
        }).then(() => {
            history.push('/');
        })
    }

    return (  
        <div className="blog-details mt-10 mx-24 border-2 p-6 rounded-xl drop-shadow-2xl">
            {isError && <p>{isError}</p>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && 
            <article>
                <h2 className="text-blue-400 text-5xl font-semibold text-center">{blog.title}</h2>
                <p className="text-gray-700 text-center text-xl mt-2 mb-4">Written by {blog.author}</p>
                <p className="text-gray-700 text-justify">{blog.body}</p>
                <button onClick={handleClick} className="bg-blue-400 text-white p-1 rounded-lg mt-4 ">Delete</button>
            </article>
            }
        </div>
    );
}

export default BlogDetails;