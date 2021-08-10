const BlogList = ({ blogs }) => {

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview bg-white shadow-md m-7 p-5" key={blog.id}>
                    <h2 className="text-blue-400 text-2xl font-semibold">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} 
        </div>
    );
}
export default BlogList;