import React from 'react';

const Navbar = () => {
    return (
        <div className="flex justify-start items-start  bg-black">
            <div className="flex flex-row border-2 border-white p-4 bg-black">
                <div className="text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2">Home</div>
                <div className="text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2 ">Projects</div>
                <div className="text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2 ">CV</div>
            </div>
        </div>
    );
};

export default Navbar;
