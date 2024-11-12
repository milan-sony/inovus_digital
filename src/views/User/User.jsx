import React, { useState } from 'react'
import './User.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function User() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        purpose: "",
        program: "",
        role: ""
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log("Input values: ", e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Form Data", formData)
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Submit - Inovus Labs IEDC</title>
                </Helmet>
            </HelmetProvider>
            <div className="min-h-screen bg-custblue">
                <div className="py-10">
                    <form className="max-w-sm mx-auto p-10 bg-black rounded-xl">

                        <div className="flex justify-center">
                            <img className="w-20 h-20 p-1 rounded-full ring-2 ring-custblue" src=""
                                alt="Avatar" />
                        </div>

                        <div>
                            <p className="mb-2 text-base font-semibold text-white font-Open-Sans">Name</p>
                            <input type="text" name="name"
                                className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                                autoComplete="off" required value={formData.name} />
                        </div>

                        <div className="mt-5">
                            <p className="mb-2 text-base font-semibold text-white font-Open-Sans">Email</p>
                            <input type="text" name="email"
                                className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                                autoComplete="off" required value={formData.email} />
                        </div>

                        <div className="mt-5">
                            <p for="role" className="mb-2 text-base font-semibold text-white font-Open-Sans">Purpose of your visit</p>
                            <select name="purpose"
                                className="text-white font-Open-Sans text-sm font-semibold rounded-xl w-full p-2 bg-custblue focus:outline-none focus:ring focus:ring-white"
                                required value={formData.purpose}>
                                <option>Self learn</option>
                                <option>Buname a project</option>
                                <option>Explore</option>
                            </select>
                        </div>

                        <div className="mt-5">
                            <p className="text-base font-semibold text-white font-Open-Sans">Program/Domain</p>
                            <p className="mb-2 text-sm font-extralight text-white font-Open-Sans">What's keeping you busy today</p>
                            <input type="text" name="program"
                                className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                                autoComplete="off" required value={formData.program} />
                        </div>

                        <div className="mt-5">
                            <p for="role" className="mb-2 text-base font-semibold text-white font-Open-Sans">Role</p>
                            <select name="role"
                                className="text-white font-Open-Sans text-sm font-semibold rounded-xl w-full p-2 bg-custblue focus:outline-none focus:ring focus:ring-white"
                                required value={formData.role}>
                                <option>Mentee</option>
                                <option>Mentor</option>
                            </select>
                        </div>

                        <div className="mt-5 flex justify-evenly max-lg:flex-wrap">
                            <button className="cancel-btn font-Open-Sans font-semibold text-base max-lg:mb-5">Cancel</button>
                            <button type="submit"
                                className="submit-btn font-Open-Sans font-semibold text-base max-lg:mb-5" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div >
            </div>
        </>
    )
}

export default User
