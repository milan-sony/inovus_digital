import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString(
        'en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    ));
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date().toLocaleDateString('en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }));
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup the interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <nav className='navbar-bg'>
                <div className="px-10 py-4 content-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:px-4">
                    <span className='text-white text-lg font-semibold font-Open-Sans uppercase record-icon sm:text-lg'>Live</span>
                    <span className='text-white text-md font-Open-Sans uppercase font-bold sm:text-2xl'>&nbsp;Inovus Labs // </span>
                    <span className='text-white text-md font-Open-Sans uppercase font-bold sm:text-2xl'>{currentTime}</span>
                    <span className='float-right text-white text-md font-Open-Sans uppercase font-bold sm:text-xl'>{currentDate}</span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
