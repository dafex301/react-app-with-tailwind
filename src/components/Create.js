import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        setIsPending(false);
        history.push('/');
    })
}

    return ( 
        <div className="create container">
            <h1 className="text-center text-4xl m-5 font-bold pb-3 border-gray-200 text-blue-400">Create Page</h1>
            {/* FORM */}
            <form className="bg-white shadow-md rounded-lg mx-auto max-w-3xl w-4/5 p-4 py-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">
                        Title:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 focus:shadow-outline"
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Body:</label>
                    <textarea
                    className="shadow appearance-none border rounded w-full h-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 focus:shadow-outline"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                    </textarea>
                </div>
                <div className="mb-8">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Author</label>
                    <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 focus:shadow-outline"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                        <option value="Mario">Mario</option>
                        <option value="Mamat">Mamat</option>
                    </select>
                </div>
                <div className="">
                    {!isPending && <button className="mx-auto block bg-blue-400 text-white p-2 rounded-lg font-semibold shadow-md hover:shadow-none hover:bg-blue-500" type="submit">Create Blog</button>}
                    {isPending && <button className="mx-auto block bg-blue-400 disabled:opacity-50 text-white p-2 rounded-lg font-semibold shadow-md hover:shadow-none opacity-50" disabled type="submit">Posting Blog...</button>}
                </div>
            </form>
        </div>
    );
}

export default Create;