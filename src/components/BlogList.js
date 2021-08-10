const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview bg-white shadow-md m-7 p-5 rounded-lg border-t-4 hover:border-blue-400" key={blog.id}>
                    <h2 className="text-blue-400 text-2xl font-semibold">{blog.title}</h2>
                    <p className="text-gray-400">Written by {blog.author}</p>
                </div>
            ))} 
        </div>
    );
}
export default BlogList;