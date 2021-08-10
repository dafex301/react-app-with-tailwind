const Navbar = () => {
    return ( 
        <div className="navbar flex items-center justify-between flex-wrap bg-blue-400 p-6">
            <a className="font-semibold text-3xl tracking-tight text-white uppercase font-tourney" href="/">DaFeX</a>
            <div className="">
                <a href="/" className="mr-8 text-white">Home</a>
                <a href="/create" className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 transition ease-out duration-300">New Blog</a>
            </div>
        </div>
    );
}

export default Navbar;