import React from 'react'
import './NoPage.css'
import { Link } from 'react-router-dom'

function NoPage() {
    return (
        <div className='page-container'>
            <div className='h-screen flex flex-col justify-center items-center'>
                <h1 className='text-9xl text-white font-Open-Sans font-black pb-3'>404</h1>
                <h3 className='text-xl sm:text-2xl md:text-5xl text-white font-Open-Sans font-semibold capitalize pb-3'>Page not found !</h3>
                <Link to={"/"} className='text-white text-5xl font-black'><i class="fa-solid fa-left-long"></i></Link>
            </div>
        </div>
    )
}

export default NoPage
