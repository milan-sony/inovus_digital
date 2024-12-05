import React, { useEffect, useState } from 'react';
import './Live.css';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import axios from 'axios';

function Live() {

    useEffect(() => {
        getProfiles();
    }, []);

    const [mentors, setMentors] = useState([])
    const [mentees, setMentees] = useState([])
    const [explorers, setExplorers] = useState([])

    const getProfiles = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_APP_API_URL + `users`);
            const usersData = response.data.message
            setMentors(usersData.filter(person => person.role.toLowerCase() === 'mentor'))
            setMentees(usersData.filter(person => person.role.toLowerCase() === 'mentee'))
            setExplorers(usersData.filter(person => person.role.toLowerCase() === 'explorer'))
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <div className='h-screen dynamic-bg'>
                <Navbar />
                <Card />
            </div>
        </>
    );
}

export default Live;