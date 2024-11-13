import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className='navbar-bg'>
            <div className="px-10 py-4 content-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:px-4">
            <span className='text-white font-semibold font-Open-Sans uppercase record-icon sm:text-lg'>Live</span>
                    <span className='text-white text-md font-Open-Sans uppercase font-bold sm:text-2xl'>&nbsp;Inovus Labs // </span>
                    <span className='text-white text-md font-Open-Sans uppercase font-bold sm:text-xl'>12.45 am</span>
                    <span className='text-white float-right text-md font-Open-Sans uppercase font-bold text-xl tracking-widest'>Tuesday</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
