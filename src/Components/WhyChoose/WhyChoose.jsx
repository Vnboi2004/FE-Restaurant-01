import React from 'react';
import { FaCar } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { IoBoatSharp } from "react-icons/io5";
import { IoBug } from "react-icons/io5";
const WhyChoose = () => {
    return (
        <div className='py-14 md:py-28 bg-gray-50'>
            <div className='container'>
                <h1 
                    data-aos="fade-up"
                    
                    className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>Why Choose Us</h1>
                {/* Section card */}
                <div data-aos="fade-up"
                    data-aos-delay>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-14 sm:gap-4'>
                        {/* Card 1st */}
                        <div className='flex flex-col justify-center items-center gap-2 px-2'>
                            <FaCar className='text-5xl text-primary'/>
                            <p className='text-5xl text-center translate-x-5 rotate-90 text-primary'>....</p>
                            <p className='text-dark/70 font-se'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                        </div>
                        {/* Card 2st */}
                        <div className='flex flex-col justify-center items-center gap-2 px-2'>
                            <p className='text-dark/70 font-se'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                            <p className='text-5xl text-center translate-x-5 rotate-90 text-secondary'>....</p>
                            <FaBus className='text-5xl text-secondary'/>
                        </div>
                        {/* Card 3st */}
                        <div className='flex flex-col justify-center items-center gap-2 px-2'>
                            <IoBoatSharp className='text-5xl text-primary'/>
                            <p className='text-5xl text-center translate-x-5 rotate-90 text-primary'>....</p>
                            <p className='text-dark/70 font-se'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                        </div>
                        {/* Card 4st */}
                        <div className='flex flex-col justify-center items-center gap-2 px-2'>
                            <p className='text-dark/70 font-se'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                            <p className='text-5xl text-center translate-x-5 rotate-90 text-secondary'>....</p>
                            <IoBug className='text-5xl text-secondary'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
