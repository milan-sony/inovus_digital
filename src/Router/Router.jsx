import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home/Home'
import User from '../views/User/User'
import NoPage from '../views/NoPage/NoPage'


function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='user' element={<User />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
}

export default Router
