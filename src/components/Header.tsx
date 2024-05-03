import React from 'react';

const Header = () => {
    return (
        <div className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center  "
                style={{ backgroundImage: `url(/Banner.svg)` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col space-y-5 h-screen ">
                <h1 className="text-white text-3xl md:text-5xl font-bold">Discover Exciting Events Happening </h1>
                <h1 className="text-white text-3xl md:text-5xl font-bold">  Near You - Stay Tuned for Updates!</h1>
                <div className='space-y-0 flex items-center justify-center flex-col p-4'>
                    <h1 className="text-white  text-sm font-light flex items-center justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores unde doloribus eligendi   iure odit </h1>
                    <h1 className="text-white  text-sm font-light flex items-center justify-center">libero aperiam sint eos. Quia neque velit odio provident mollitia, eaque fugiat excepturi vel sint?</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
