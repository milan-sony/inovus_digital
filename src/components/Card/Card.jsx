import React, { useEffect, useState } from 'react';
import './Card.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay';

import axios from 'axios';

function Card() {

    useEffect(() => {
        getProfiles();
    }, []);

    // const [sync, setSync] = React.useState(false)

    // useEffect(() => {
    //     getProfiles()
    //     const interval = setInterval(() => {
    //         getProfiles();
    //     }, 60000)
    //     return () => clearInterval(interval)
    // }, [])


    const [mentors, setMentors] = useState([]);
    const [mentees, setMentees] = useState([]);
    const [explorers, setExplorers] = useState([]);

    const [mentorsCount, setMentorsCount] = useState(0);
    const [menteessCount, setMenteesCount] = useState(0);
    const [explorersCount, setExplorersCount] = useState(0);

    const getProfiles = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_APP_API_URL + `users`);
            const usersData = response.data.message;

            const filteredMentors = usersData.filter(person => person.role.toLowerCase() === 'mentor');
            const filteredMentees = usersData.filter(person => person.role.toLowerCase() === 'mentee');
            const filteredExplorers = usersData.filter(person => person.role.toLowerCase() === 'explorer');

            setMentors(filteredMentors);
            setMentees(filteredMentees);
            setExplorers(filteredExplorers);

            setMentorsCount(filteredMentors.length);
            setMenteesCount(filteredMentees.length);
            setExplorersCount(filteredExplorers.length);

        } catch (error) {
            console.error(error);
        }
    };

    // Function to get initials from a name
    const getInitials = (name) => {
        const names = name.split(' ');
        const initials = names.map(n => n.charAt(0)).join('').toUpperCase();
        return initials;
    };

    return (
        <>
            {/* Mentors */}
            <div className='mx-10'>
                {/* {
                    sync ? <p className='float-right text-sm text-white font-Open-Sans'>sync</p> : null
                } */}
                <div>
                    <h1 className='text-white text-lg sm:text-2xl font-Open-Sans font-black capitalize my-1'><span className='num-round'>{mentorsCount}</span>&nbsp;Mentor's</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={true}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 0 },
                        375: { slidesPerView: 2, spaceBetween: 40 },
                        640: { slidesPerView: 4, spaceBetween: 40 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 6, spaceBetween: 40 },
                        1280: { slidesPerView: 6, spaceBetween: 40 },
                        1440: { slidesPerView: 8, spaceBetween: 40 },
                        1536: { slidesPerView: 8, spaceBetween: 40 },
                        2048: { slidesPerView: 10, spaceBetween: 40 },
                        2560: { slidesPerView: 12, spaceBetween: 40 },
                    }}
                >
                    {
                        mentors.map((mentor, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='px-3 py-3 w-[150px] h-[180px] card-bg rounded-lg'>
                                        <div className='flex justify-center items-center'>
                                            <div className="w-16 h-16 rounded-full ring-2 ring-white bg-custblue flex justify-center items-center text-center mb-2">
                                                <p className='text-2xl text-white font-black uppercase font-Open-Sans'>{getInitials(mentor.name)}</p>
                                            </div>
                                        </div>
                                        <marquee behavior="scroll" direction="left"><p className='text-custblue text-sm font-Open-Sans font-bold text-center mb-1 capitalize'>{mentor.name}</p></marquee>
                                        <hr className='mb-2' />
                                        <p className='text-white text-sm font-Open-Sans font-medium text-center pb-1'>{mentor.purpose}</p>
                                        <marquee behavior="scroll" direction="left"><p className='text-white text-sm font-Open-Sans font-medium'>{mentor.program}</p></marquee>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>

            {/* Mentees */}
            <div className='mx-10'>
                <div>
                    <h1 className='text-white text-lg sm:text-2xl font-Open-Sans font-black capitalize my-1'><span className='num-round'>{menteessCount}</span>&nbsp;Mentee's</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={true}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 0 },
                        375: { slidesPerView: 2, spaceBetween: 40 },
                        640: { slidesPerView: 4, spaceBetween: 40 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 6, spaceBetween: 40 },
                        1280: { slidesPerView: 6, spaceBetween: 40 },
                        1440: { slidesPerView: 8, spaceBetween: 40 },
                        1536: { slidesPerView: 8, spaceBetween: 40 },
                        2048: { slidesPerView: 10, spaceBetween: 40 },
                        2560: { slidesPerView: 12, spaceBetween: 40 },
                    }}
                >
                    {
                        mentees.map((mentee, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='px-3 py-3 w-[150px] h-[180px] card-bg rounded-lg'>
                                        <div className='flex justify-center items-center'>
                                            <div className="w-16 h-16 rounded-full ring-2 ring-white bg-custblue flex justify-center items-center text-center mb-2">
                                                <p className='text-2xl text-white font-black uppercase'>{getInitials(mentee.name)}</p>
                                            </div>
                                        </div>
                                        <marquee behavior="scroll" direction="left"><p className='text-custblue text-sm font-Open-Sans font-bold text-center mb-1 capitalize'>{mentee.name}</p></marquee>
                                        <hr className='mb-2' />
                                        <p className='text-white text-sm font-Open-Sans font-medium text-center pb-1'>{mentee.purpose}</p>
                                        <marquee behavior="scroll" direction="left"><p className='text-white text-sm font-Open-Sans font-medium'>{mentee.program}</p></marquee>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>

            {/* Explorers */}
            <div className='mx-10'>
                <div>
                    <h1 className='text-white text-lg sm:text-2xl font-Open-Sans font-black capitalize my-1'><span className='num-round'>{explorersCount}</span>&nbsp;Explorer's</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={true}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 0 },
                        375: { slidesPerView: 2, spaceBetween: 40 },
                        640: { slidesPerView: 4, spaceBetween: 40 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 6, spaceBetween: 40 },
                        1280: { slidesPerView: 6, spaceBetween: 40 },
                        1440: { slidesPerView: 8, spaceBetween: 40 },
                        1536: { slidesPerView: 8, spaceBetween: 40 },
                        2048: { slidesPerView: 10, spaceBetween: 40 },
                        2560: { slidesPerView: 12, spaceBetween: 40 },
                    }}
                >
                    {
                        explorers.map((explorer, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='px-3 py-3 w-[150px] h-[180px] card-bg rounded-lg'>
                                        <div className='flex justify-center items-center'>
                                            <div className="w-16 h-16 rounded-full ring-2 ring-white bg-custblue flex justify-center items-center text-center mb-2">
                                                <p className='text-2xl text-white font-black uppercase'>{getInitials(explorer.name)}</p>
                                            </div>
                                        </div>
                                        <marquee behavior="scroll" direction="left"><p className='text-custblue text-sm font-Open-Sans font-bold text-center mb-1 capitalize'>{explorer.name}</p></marquee>
                                        <hr className='mb-2' />
                                        <p className='text-white text-sm font-Open-Sans font-medium text-center pb-1'>Build a project</p>
                                        <marquee behavior="scroll" direction="left"><p className='text-white text-sm font-Open-Sans font-medium'>Sample project</p></marquee>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}

export default Card;
