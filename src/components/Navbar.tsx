import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-evenly items-center px-4 py-2 '>
                <div className='text-red-600 font-medium text-lg mr-72 md:mr-0'>BookUsNow</div>
                <div className='hidden md:flex items-center space-x-5 w-2/4'>
                    <div className='flex items-center space-x-2 bg-gray-800 text-white py-1 px-2 rounded-lg'>
                        <GiHamburgerMenu />
                        <p>Categories</p>
                    </div>
                    <div className='border w-full py-1 px-3 flex items-center justify-between rounded-lg'>
                        <p>DJI phantom</p>
                        <CiSearch className='text-xl' />
                    </div>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className='flex items-center space-x-1'>
                        <CiHeart className='text-xl' />
                        <CiSearch className='md:hidden text-xl' />
                        <FaUser className='md:hidden' />
                        <p className='hidden md:flex'>Favorites</p>
                    </div>
                    <div className='border px-2 py-1 rounded-lg hidden md:flex'>Sign In</div>
                </div>
            </div>

            <div className='flex justify-evenly items-center px-4 py-2 flex-col md:flex-row '>
                <div className='flex  items-center md:space-x-2 mr-[24rem] text-xs md:text-lg md:mr-0'>
                    <IoLocationOutline />
                    <p>Mumbai, India</p>
                    <FaAngleRight />
                </div>
                <ul className=' list-none md:space-x-10 space-x-5 font-xs flex'>
                    <li>Live Shows</li>
                    <li>Streams</li>
                    <li>Movies</li>
                    <li>Plays</li>
                    <li>Events</li>
                    <li>Sports</li>
                    <li>Activities</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
