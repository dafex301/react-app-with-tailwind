import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isLoading, isError} = useFetch('http://localhost:8000/blogs/' + id);

    return (  
        <div className="blog-details mt-10 mx-24 border-2 p-6 rounded-xl drop-shadow-2xl">
            {isError && <p>{isError}</p>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && 
            <article key={blog.id}>
                <h2 className="text-blue-400 text-5xl font-semibold text-center">{blog.title}</h2>
                <p className="text-gray-700 text-center text-xl mt-2 mb-4">Written by {blog.author}</p>
                <p className="text-gray-700 text-justify">{blog.body}</p>
            </article>
            }
        </div>
    );
}

export default BlogDetails;