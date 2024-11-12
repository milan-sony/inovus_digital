import React from 'react'
import './User.css'
// Title changer
import TitleChanger from '../../hooks/TitleChanger'

function User() {
    TitleChanger('Submit - Inovus Digital')
    return (
        <div className="min-h-screen bg-custblue">
            <div className="py-10">
                <form className="max-w-sm mx-auto p-10 bg-black rounded-xl">

                    <div className="flex justify-center">
                        <img className="w-20 h-20 p-1 rounded-full ring-2 ring-custblue" src=""
                            alt="Avatar" />
                    </div>

                    <div>
                        <p className="mb-2 text-base font-semibold text-white font-Open-Sans">Name</p>
                        <input type="text" id="name"
                            className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                            autocomplete="off" required/>
                    </div>

                    <div className="mt-5">
                        <p className="mb-2 text-base font-semibold text-white font-Open-Sans">Email</p>
                        <input type="text" id="email"
                            className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                            autocomplete="off" required/>
                    </div>

                    <div className="mt-5">
                        <p for="role" className="mb-2 text-base font-semibold text-white font-Open-Sans">Purpose of your visit</p>
                        <select id="purpose"
                            className="text-white font-Open-Sans text-sm font-semibold rounded-xl w-full p-2 bg-custblue focus:outline-none focus:ring focus:ring-white"
                            required>
                            <option>Self learn</option>
                            <option>Buid a project</option>
                            <option>Explore</option>
                        </select>
                    </div>

                    <div className="mt-5">
                        <p className="text-base font-semibold text-white font-Open-Sans">Program/Domain</p>
                        <p className="mb-2 text-sm font-extralight text-white font-Open-Sans">What's keeping you busy today</p>
                        <input type="text" id="program"
                            className="w-full p-2 text-white font-Open-Sans rounded-xl bg-custblue text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                            autocomplete="off" required/>
                    </div>

                    <div className="mt-5">
                        <p for="role" className="mb-2 text-base font-semibold text-white font-Open-Sans">Role</p>
                        <select id="role"
                            className="text-white font-Open-Sans text-sm font-semibold rounded-xl w-full p-2 bg-custblue focus:outline-none focus:ring focus:ring-white"
                            required>
                            <option>Mentee</option>
                            <option>Mentor</option>
                        </select>
                    </div>

                    <div className="mt-5 flex justify-evenly max-lg:flex-wrap">
                        <button className="cancel-btn font-Open-Sans font-semibold text-base max-lg:mb-5">Cancel</button>
                        <button type="submit"
                            className="submit-btn font-Open-Sans font-semibold text-base max-lg:mb-5">Submit</button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default User
