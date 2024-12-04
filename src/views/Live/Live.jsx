import React, { useEffect, useState } from 'react';
import './Live.css';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import axios from 'axios';

function Live() {
    useEffect(() => {
        getProfiles();
    }, []);

    const [data, setData] = useState();

    const getProfiles = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_APP_API_URL + `users`);
            setData(response.data);
            console.log(response.data);
            console.log('hi');
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