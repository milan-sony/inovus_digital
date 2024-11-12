import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='background'>
            <div className='h-screen flex flex-col justify-center items-center'>
                <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold capitalize font-Open-Sans text-center text-white pb-5'>Inovus Digital</h1>
                <h3 className="text-xl sm:text-xl md:text-xl font-medium font-Open-Sans text-white text-center pb-5">Showcase what you're currently doing at <b className='hover:text-custred'>INOVUS LABS IEDC</b></h3>
                <Link to={"user"} className='text-custblue hover:text-white bg-white hover:bg-custblue font-semibold font-Open-Sans rounded-lg text-sm px-5 py-2.5 text-center'>Get Started 🚀</Link>
            </div>
        </div>
    )
}

export default Home