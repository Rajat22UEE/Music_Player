import React from 'react';

const Home = () => {
    return (
        <div className="p-4 h-full bg-gray-900 rounded-xl">
            {/* Top Artist Section */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-white">Top Artist</h1>
                <button className="text-blue-500 hover:text-blue-700">See More</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-2 mb-8">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center transition-transform transform hover:scale-105"
                    >
                        <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center">
                            <span className="text-white">Profile</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* New Section with Vertical Cards */}
            <div className="flex flex-col mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Featured Albums</h2>
                    <button className="text-blue-500 hover:text-blue-700">See More</button>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-32 h-48 bg-gray-700 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
                        >
                            <div className="w-28 h-44 bg-gray-500 rounded-lg flex items-center justify-center">
                                <span className="text-white">Album</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             {/* New Section with Vertical Cards */}
             <div className="flex flex-col mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Featured Albums</h2>
                    <button className="text-blue-500 hover:text-blue-700">See More</button>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-32 h-48 bg-gray-700 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
                        >
                            <div className="w-28 h-44 bg-gray-500 rounded-lg flex items-center justify-center">
                                <span className="text-white">Album</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             {/* New Section with Vertical Cards */}
             <div className="flex flex-col mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Featured Albums</h2>
                    <button className="text-blue-500 hover:text-blue-700">See More</button>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-32 h-48 bg-gray-700 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
                        >
                            <div className="w-28 h-44 bg-gray-500 rounded-lg flex items-center justify-center">
                                <span className="text-white">Album</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             {/* New Section with Vertical Cards */}
             <div className="flex flex-col mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Featured Albums</h2>
                    <button className="text-blue-500 hover:text-blue-700">See More</button>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-32 h-48 bg-gray-700 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
                        >
                            <div className="w-28 h-44 bg-gray-500 rounded-lg flex items-center justify-center">
                                <span className="text-white">Album</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             {/* New Section with Vertical Cards */}
             <div className="flex flex-col mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Featured Albums</h2>
                    <button className="text-blue-500 hover:text-blue-700">See More</button>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-32 h-48 bg-gray-700 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
                        >
                            <div className="w-28 h-44 bg-gray-500 rounded-lg flex items-center justify-center">
                                <span className="text-white">Album</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             {/* New Section with Vertical Cards */}
             <div className="flex flex-col mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Featured Albums</h2>
                    <button className="text-blue-500 hover:text-blue-700">See More</button>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-32 h-48 bg-gray-700 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
                        >
                            <div className="w-28 h-44 bg-gray-500 rounded-lg flex items-center justify-center">
                                <span className="text-white">Album</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
