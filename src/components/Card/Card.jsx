import React from 'react'
import './Card.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay'

function Card(props) {
    return (
        <>
            <div className='mx-10'>
                <div>
                    <h1 className='text-black text-lg sm:text-2xl font-Open-Sans font-black capitalize my-1'><span className='num-round'>5</span>&nbsp;{props.uRole}</h1>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={true}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                        1440: {
                            slidesPerView: 8,
                            spaceBetween: 40
                        },
                        1536: {
                            slidesPerView: 8,
                            spaceBetween: 40
                        },
                        2048:{
                            slidesPerView:10,
                            spaceBetween:40
                        },
                        2560: {
                            slidesPerView: 12,
                            spaceBetween: 40
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className='px-3 py-3 w-[150px] h-[180px] card-bg rounded-lg'>
                            <div className='flex justify-center items-center'>
                                <div className="w-16 h-16 rounded-full ring-2 ring-white bg-custblue flex justify-center  items-center text-center mb-2">
                                    <p className='text-2xl text-white font-black'>{props.uName}</p>
                                </div>
                            </div>
                            {/* <p className='text-custblue text-sm font-Open-Sans font-bold text-center pb-3'>milan milan milan milan 25</p> */}
                            <marquee behavior="scroll" direction="left"><p className='text-custblue text-sm font-Open-Sans font-bold text-center mb-1 capitalize'>{props.uName}</p>
                            </marquee>
                            <hr className='mb-2' />
                            <p className='text-white text-sm font-Open-Sans font-medium text-center pb-1'>Build a project</p>
                            <marquee behavior="scroll" direction="left"><p className='text-white text-sm font-Open-Sans font-medium'>Sample project</p></marquee>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Card
