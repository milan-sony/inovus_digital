import React from 'react'
import './Card.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay'

function Card() {
    return (
        <>
            <div className='m-10'>
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay]}
                    spaceBetween={40}
                    slidesPerView={8}
                    autoplay={true}
                >

                    <SwiperSlide>
                        <div className='px-3 py-3 max-w-[150px] break-words m-h-[210px] card-bg rounded-lg'>
                            <div className='flex justify-center items-center'>
                                <div className="w-16 h-16 rounded-full ring-2 ring-white bg-custblue flex justify-center  items-center text-center mb-3">
                                    <p className='text-2xl text-white font-black'>MS</p>
                                </div>
                            </div>
                            {/* <p className='text-custblue text-sm font-Open-Sans font-bold text-center pb-3'>milan milan milan milan 25</p> */}
                            <marquee behavior="scroll" direction="left"><p className='text-custblue text-sm font-Open-Sans font-bold text-center pb-3'>milan milan milan milan 25</p>
                            </marquee>
                            <hr className='mb-3' />
                            <p className='text-white text-sm font-Open-Sans font-medium text-center pb-1'>Build a project</p>
                            <marquee behavior="scroll" direction="left"><p className='text-white text-sm font-Open-Sans font-medium'>Sample project</p></marquee>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='px-3 py-3 max-w-[150px] break-words min-h-[210px] card-bg rounded-lg'>
                            <div className='flex justify-center items-center'>
                                <div className="w-16 h-16 rounded-full ring-2 ring-white bg-custblue flex justify-center  items-center text-center mb-3">
                                    <p className='text-2xl text-white font-black'>MS</p>
                                </div>
                            </div>
                            <p className='text-custblue text-sm font-Open-Sans font-bold text-center pb-3'>Milan2</p>
                            <hr className='mb-3' />
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
