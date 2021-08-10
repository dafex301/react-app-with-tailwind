import { useState } from "react";
import deku from '../img/deku.png';

const Home = () => {

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(15);

    const handleClick = () => {
        setName('Luigi');
        setAge(30);
    }

    return (
        <div className="container px-4 text-gray-600">
            <h1 className="text-center text-4xl m-5 font-bold border-b pb-3 border-gray-200">Homepage</h1>
            <div className="">
                <p className="font-semibold text-lg text-center">{name} is {age} years old</p>
                <div className="flex justify-center">
                    <button onClick={handleClick} className="mt-4 text-sm px-4 py-2 leading-none rounded text-white bg-red-300 hover:border-transparent hover:shadow-inner transform hover:scale-110 hover:bg-opacity-70 transition ease-in-out duration-500">Click Me</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-32 gap-10">
                <div className="card rounded-xl overflow-hidden">
                    <img src={deku} alt="deku" />
                    <div className="badge">
                        <span>Badge</span>
                    </div>
                    <div className="m-4">
                        <div className="flex items-center">
                            <span className="text-xl font-semibold">Judul</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                        </div>
                        <span className="block text-sm">Text</span>
                    </div>
                </div>
                <div className="card rounded-xl overflow-hidden">
                    <img src={deku} alt="deku" />
                    <div className="badge">
                        <span>Badge</span>
                    </div>
                    <div className="m-4">
                        <span>Judul</span>
                        <span className="block">Text</span>
                    </div>
                </div>
                <div className="card rounded-xl overflow-hidden">
                    <img src={deku} alt="deku" />
                    <div className="badge">
                        <span>Badge</span>
                    </div>
                    <div className="m-4">
                        <span>Judul</span>
                        <span className="block">Text</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;