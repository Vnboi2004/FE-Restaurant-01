import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='text-white mt-20'>
            <div 
                data-aos="fade-down"
                className='container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>
                <div>
                    {/* Heaer section */}
                    <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>

                    {/* Grid section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
                        {/* Address section */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <IoLocationSharp className='text-5xl'/>
                            </div>
                            <p>
                            48/3/3A Đ. Số 3, Trường Thọ, Thủ Đức
                                <br/> Hồ Chí Minh, Việt Nam
                            </p>
                        </div>
                        {/* Email section */}   
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <MdEmail className='text-5xl'/>
                            </div>
                            <p>
                                insect228060132902060400006417@gmail.com
                                <br/> hihizzz0004@gmail.com
                            </p>
                        </div>
                        {/* Phone section */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <FaPhone className='text-5xl'/>
                            </div>
                            <p>
                                +84 918488431
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-4'>
                    <p>© 2024 TPH, All right reserved</p>
                    <div className='flex items-center gap-6'>
                        <a href="#">Try Hard Coding</a>
                        <a href="#">Focus on the goal</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
