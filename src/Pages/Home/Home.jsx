import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='background'>
            <div className='h-screen flex flex-col justify-center items-center'>
                <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold capitalize font-Open-Sans text-center text-white pb-5'>Inovus Digital</h1>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium font-Open-Sans text-white text-center pb-5">Showcase what you're currently doing at <b className='hover:text-custred'>INOVUS LABS IEDC</b></h3>
                <button type='button' className='text-custblue hover:text-white bg-white hover:bg-custblue font-semibold font-Open-Sans rounded-lg text-sm px-5 py-2.5 text-center'>Get Started</button>
            </div>
        </div>
    )
}

export default Home