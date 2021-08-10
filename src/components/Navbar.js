import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar flex items-center justify-between flex-wrap bg-blue-400 p-6">
            <Link to="/" className="font-semibold text-3xl tracking-tight text-white uppercase font-tourney">DaFeX</Link>
            <div className="">
                <Link to="/" className="mr-8 text-white">Home</Link>
                <Link to="/create" className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 transition ease-out duration-300">New Blog</Link>
            </div>
        </div>
    );
}

export default Navbar;