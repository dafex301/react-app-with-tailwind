import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {    // to run server 'npx json-server --watch data/db.json --port 8000'
    const {data: blogs, isLoading, isError} = useFetch('http://localhost:8000/blogs');
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