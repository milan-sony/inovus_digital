import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import User from '../Pages/User/User'


function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='user' element={<User />} />
        </Routes>
    )
}

export default Router
