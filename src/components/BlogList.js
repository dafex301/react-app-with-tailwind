import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {

    return (
        <div className="blog-list">
            {blogs.map((blog) => (             
                <div key={blog.id} className="blog-preview bg-white shadow-md m-7 rounded-lg border-t-4 hover:border-blue-400">
                    <Link to={`blogs/${blog.id}`}>
                        <div className="w-full h-full p-5">
                            <h2 className="text-blue-400 text-2xl font-semibold">{blog.title}</h2>
                            <p className="text-gray-400">Written by {blog.author}</p>
                        </div>
                    </Link>
                </div>
            ))} 
        </div>
    );
}
export default BlogList;