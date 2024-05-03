import React, { useEffect, useState, useRef } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CgArrowLongRight } from "react-icons/cg";
interface EventData {
    cityName: string;
    date: string;
    distanceKm: string | number;
    eventName: string;
    imgUrl: string;
    weather: string;
}

const Events = () => {
    const [data, setData] = useState<EventData[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const endOfPageRef = useRef<HTMLDivElement>(null);

    const fetchData = async (pageNum: number) => {
        setLoading(true);
        try {
            const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNum}&type=upcoming`);
            const result = await response.json();
            setData(prevData => [...prevData, ...result.events]);
            setPage(pageNum);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const handleScroll = () => {
        if (endOfPageRef.current && window.innerHeight + window.scrollY >= endOfPageRef.current.offsetTop) {
            if (!loading) {
                fetchData(page + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, page]);

    return (
        <div className='p-6 '>
            <div className='flex items-center space-x-3 text-xl font-bold'>
                <p>
                    Upcoming Events
                </p>
                <CgArrowLongRight className='text-3xl' />
            </div>
            <div className='h-[45rem] overflow-x-auto no-scrollbar grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  '>
                {data.map((el, index) => (
                    <div key={index} className='border relative border-[#B0BABF] rounded-xl p-1  w-fit mt-10 '>
                        <img className='w-[26rem]' src={`https://drive.google.com/thumbnail?id=${el.imgUrl.slice(32, 65)}&sz=w500`} alt="Loading..." />
                        <div className='px-4 py-2'>
                            <div className='text-[#1E2022] font-medium'>After Note Nearly</div>
                            <div className='flex items-center justify-between space-y-2  text-xs text-[#989090]'>
                                <div className='flex items-center '>
                                    <IoLocationOutline className='text-lg' />
                                    <p>West Douglas</p>
                                </div>
                                <div>
                                    <p>Snowey 26 C | 48 km</p>
                                </div>
                            </div>
                            <div className='absolute bottom-[5.5rem] rounded-b-xl text-white left-6 bg-gray-500 bg-opacity-75 w-[23.5rem] h-10'>
                                <p className='mt-2 ml-2'>March 23, 2024</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={endOfPageRef}></div>
            </div>
        </div>
    );
};

export default Events;
