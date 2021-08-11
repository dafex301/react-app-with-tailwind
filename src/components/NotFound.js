import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found container my-12">
            <h2 className="text-5xl m-5 font-bold text-blue-400">Sorry</h2>
            <h3 className="text-3xl m-5 font-semibold text-gray-500">Page not found.</h3>
            <Link to="/" className="text-1xl m-5 font-semibold text-gray-500">Back to homepage.</Link>
        </div>
    );
}

export default NotFound;