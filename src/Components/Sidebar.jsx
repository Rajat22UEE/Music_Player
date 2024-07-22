import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaHome, FaSearch, FaPlay, FaPause, FaStepForward, FaStepBackward, FaRandom, FaSyncAlt } from 'react-icons/fa';

const Sidebar = () => {
    // State to manage play/pause toggle
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to toggle play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <aside className="sticky top-0 left-0 text-white rounded-xl flex flex-col gap-2 h-screen w-80">
            <div className="bg-gray-900 text-white h-44 p-4 rounded-xl flex flex-col">
                <h2 className="text-xl font-bold flex justify-center mb-4">Sidebar</h2>
                <Link to="/" className="text-xl font-bold flex items-center hover:text-gray-400">
                    <FaHome className="mr-2" /> Home
                </Link>
                <div className="flex items-center bg-gray-800 rounded-md p-2 mt-4">
                    <FaSearch className="mr-2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent text-white focus:outline-none"
                    />
                </div>
            </div>

            <div className="bg-gray-900 text-white w-full h-[34rem] p-4 rounded-xl">
                {/* Music Player */}
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Album Art"
                        className="w-32 h-32 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2">Song Title</h3>
                    <p className="text-sm text-gray-400 mb-4">Artist Name</p>
                    <div className="w-full bg-gray-600 h-1 rounded-full mb-4 relative">
                        <div className="bg-blue-500 h-1 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <button className="text-2xl text-gray-400 hover:text-white">
                            <FaRandom />
                        </button>
                        <button className="text-2xl text-gray-400 hover:text-white mx-4">
                            <FaStepBackward />
                        </button>
                        <button 
                            className="text-2xl text-gray-400 hover:text-white mx-4"
                            onClick={togglePlayPause}
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                        <button className="text-2xl text-gray-400 hover:text-white mx-4">
                            <FaStepForward />
                        </button>
                        <button className="text-2xl text-gray-400 hover:text-white">
                            <FaSyncAlt />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
