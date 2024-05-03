import React, { useEffect, useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CgArrowLongRight } from "react-icons/cg";
interface EventDetails {
    cityName: string;
    date: string;
    distanceKm: string;
    eventName: string;
    imgUrl: string;
    weather: string;
}

const Shows = () => {
    const [data, setData] = useState<EventDetails[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco");
            const jsonData = await response.json();
            console.log(jsonData.events);

            setData(jsonData.events);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=' z-40 bottom-48 relative '>
            <div className='flex items-center justify-between px-4 text-white mb-2'>
                <div className='flex items-center space-x-2'>
                    <p>Recomended Shows</p>
                    <CgArrowLongRight className='text-3xl' />
                </div>
                <p>See all <hr /></p>
            </div>
            <div className="flex flex-row overflow-x-scroll no-scrollbar ml-10">
                {data.map((el, index) => (
                    <div key={index} className='relative  flex-shrink-0 w-fit    mr-4'>
                        <img className='w-80' src={`https://drive.google.com/thumbnail?id=${el.imgUrl.slice(32, 65)}&sz=w500`} alt="Loading..." />
                        <div className=' absolute inset-0 top-[23rem] p-2  text-white left-5 '>
                            <div className='flex items-center justify-between'>
                                <p className='font-medium'>Make Agree</p>
                                <p className='mr-6 text-xs font-light'>March 23 , 2024</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='text-xs font-light flex items-center space-x-1'>
                                    <IoLocationOutline />
                                    <p>West Douglas</p>
                                </div>
                                <p className='mr-6 text-xs font-light'>Snowy , 28 C | 42 Km</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shows;
