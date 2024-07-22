import React from 'react';

// TopArtistCard Component
const TopArtistCard = () => (
    <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center transition-transform transform hover:scale-105">
        <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center">
            <span className="text-white">Profile</span>
        </div>
    </div>
);

// AlbumCard Component
const AlbumCard = () => (
    <div className="w-32 h-48 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 bg-transparent hover:bg-gray-700">
        <div className="w-28 h-36 bg-gray-500 rounded-lg flex items-center justify-center mb-2">
            <span className="text-white">Album</span>
        </div>
        <div className="w-full h-10 overflow-hidden text-center text-white relative">
            <p className="marquee">Song Title - Artist Name</p>
        </div>
    </div>
);

// Home Component
const Home = () => {
    const topArtists = Array.from({ length: 9 });
    const featuredAlbums = Array.from({ length: 7 });
    const categories = [
        'Recently Played',
        'Today\'s Hits',
        'Now Trending',
        'Throwback',
        'Try Something New',
        'Featured Chart',
        'Fresh New Music'
    ];

    return (
        <div className="p-4 h-full bg-gray-900 rounded-xl">
            <style jsx>{`
                .marquee {
                    display: inline-block;
                    white-space: nowrap;
                    position: absolute;
                    left: 100%;
                    animation: none;
                }
                .marquee-hover:hover .marquee {
                    animation: marquee 5s linear infinite;
                }
                @keyframes marquee {
                    from {
                        left: 100%;
                    }
                    to {
                        left: -100%;
                    }
                }
            `}</style>
            {/* Top Artist Section */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-white">Top Artist</h1>
                <button className="text-blue-500 hover:text-blue-700">See More</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-2 mb-8">
                {topArtists.map((_, index) => (
                    <TopArtistCard key={index} />
                ))}
            </div>

            {/* Featured Albums Sections */}
            {categories.map((category, sectionIndex) => (
                <div className="flex flex-col mb-8" key={sectionIndex}>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">{category}</h2>
                        <button className="text-blue-500 hover:text-blue-700">See More</button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {featuredAlbums.map((_, albumIndex) => (
                            <div className="marquee-hover" key={albumIndex}>
                                <AlbumCard />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
