import React from 'react'
import './Live.css'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'

function Live() {
    return (
        <>
            <div className='h-screen dynamic-bg'>
                <Navbar />
                <Card />
            </div>
        </>
    )
}

export default Live
