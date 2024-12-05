import React, { useState } from 'react'
import './User.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import axios from 'axios'
import { Link } from 'react-router-dom'

function User() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        purpose: "",
        program: "",
        role: ""
    })

    const [initials, setInitials] = useState('...')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const extractInitials = () => {
        const uNames = formData.name.split(' ');

        if (uNames.length > 0) {
            let initials;

            if (uNames.length === 1) {
                // For a single name, take the first two characters as initials
                const firstTwoChars = uNames[0].slice(0, 2).toUpperCase();
                initials = firstTwoChars;
            } else {
                // For multiple names, take the first letter of the first and last names
                const firstLetter = uNames[0].charAt(0).toUpperCase();
                const lastLetter = uNames[uNames.length - 1].charAt(0).toUpperCase();
                initials = firstLetter + lastLetter;
            }

            setInitials(initials);
        }
    }

    async function handleSubmit(evnt) {
        evnt.preventDefault()
        // Check for empty fields
        const { name, email, purpose, program, role } = formData // destructuring
        if (!name || !email || !purpose || !program || !role) {
            alert("Please fill in all fields")
            return
        }

        await axios.post(import.meta.env.VITE_APP_API_URL + `users`, formData).then((response)=>{
            const userData = response.data
            window.location.href = 'live';

        }).catch(console.error())

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
                    <form className="max-w-sm mx-auto p-10 bg-black rounded-xl" onSubmit={handleSubmit}>
                        <div className='flex justify-center pb-2'>
                            <div className="w-20 h-20 rounded-full ring-2 ring-white bg-custblue flex justify-center  items-center text-center">
                                <p className='text-3xl text-white font-black uppercase'>{initials}</p>
                            </div>
                        </div>

                        <div>
                            <p className="mb-2 text-base font-semibold text-white font-Open-Sans">Name</p>
                            <input type="text" name="name"
                                className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                                autoComplete="off" required value={formData.name} onChange={handleChange} onBlur={extractInitials} />
                        </div>

                        <div className="mt-5">
                            <p className="mb-2 text-base fo font-semibold text-white font-Open-Sans">Email</p>
                            <input type="text" name="email"
                                className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                                autoComplete="off" required value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="mt-5">
                            <p className="mb-2 text-base font-semibold text-white font-Open-Sans">Purpose of your visit</p>
                            <select name="purpose"
                                className="text-white font-Open-Sans text-sm font-semibold rounded-xl w-full p-2 bg-custblue focus:outline-none focus:ring focus:ring-white"
                                required value={formData.purpose} onChange={handleChange}>
                                <option value="">Select...</option>
                                <option>Self learn</option>
                                <option>Build a project</option>
                                <option>Explore</option>
                            </select>
                        </div>

                        <div className="mt-5">
                            <p className="text-base font-semibold text-white font-Open-Sans">Program/Domain</p>
                            <p className="mb-2 text-sm font-extralight text-white font-Open-Sans">What's keeping you busy today</p>
                            <input type="text" name="program"
                                className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                                autoComplete="off" required value={formData.program} onChange={handleChange} />
                        </div>

                        <div className="mt-5">
                            <p className="mb-2 text-base font-semibold text-white font-Open-Sans">Role</p>
                            <select name="role"
                                className="text-white font-Open-Sans text-sm font-semibold rounded-xl w-full p-2 bg-custblue focus:outline-none focus:ring focus:ring-white"
                                required value={formData.role} onChange={handleChange}>
                                <option value="">Select...</option>
                                <option>Mentee</option>
                                <option>Mentor</option>
                            </select>
                        </div>

                        <div className="mt-5 flex justify-evenly max-lg:flex-wrap">
                            <Link to={'/'} className="cancel-btn font-Open-Sans font-semibold text-base max-lg:mb-5">Cancel</Link>
                            <button type="submit"
                                className="submit-btn font-Open-Sans font-semibold text-base max-lg:mb-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default User