import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import User from '../Pages/User/User'
import NoPage from '../Pages/NoPage/NoPage'


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
