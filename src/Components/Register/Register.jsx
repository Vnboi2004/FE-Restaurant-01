import React, { useState } from 'react';
import iconLogin from '../../assets/images/party.gif';
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
import github from '../../assets/images/github.png';
import { IoClose } from "react-icons/io5";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
const Register = ({ switchToLogin, handlePopupToggle }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPasssword = () => setShowPassword(!showPassword);
    return (
        <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[520px] relative overflow-hidden'>
                    <div className='absolute top-0 right-0 bg-secondary p-3 rounded-bl-full cursor-pointer'>
                        <IoClose className='text-2xl' onClick={handlePopupToggle}/>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-4 pt-6 pb-8'>
                            <div className='flex items-center justify-center gap-3'>
                                <h1 className='text-3xl font-semibold'>Wellcome Back</h1>
                                <img src={iconLogin} alt="" className='w-[42px] h-[42px]'/>
                            </div>
                            <p className='text-center'>Today a new  day.It's your day.You shape it Sign in to start managing your project.</p>
                        </div>
                        <form className='flex flex-col gap-4 px-12'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='Example@gmail.com' className='h-[42px] pl-2 outline-none border-[1px] border-gray-400/50 rounded-md'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="password">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} placeholder='At least 8 characters' className='w-full h-[42px] pl-2 outline-none border-[1px] border-gray-400/50 rounded-md'/>
                                    {showPassword 
                                    ? <PiEyeLight className='absolute top-1/2 -translate-y-1/2 right-2 text-[1.125rem] leading-[1.6rem] cursor-pointer' onClick={handleShowPasssword}/>
                                    : <PiEyeSlash className='absolute top-1/2 -translate-y-1/2 right-2 text-[1.125rem] leading-[1.6rem] cursor-pointer' onClick={handleShowPasssword}/>}
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="confirm-password">Confirm password</label>
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} placeholder='At least 8 characters' className='w-full h-[42px] pl-2 outline-none border-[1px] border-gray-400/50 rounded-md'/>
                                    {showPassword 
                                    ? <PiEyeLight className='absolute top-1/2 -translate-y-1/2 right-2 text-[1.125rem] leading-[1.6rem] cursor-pointer' onClick={handleShowPasssword}/>
                                    : <PiEyeSlash className='absolute top-1/2 -translate-y-1/2 right-2 text-[1.125rem] leading-[1.6rem] cursor-pointer' onClick={handleShowPasssword}/>}
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-1 items-center'>
                                    <input type="checkbox" />
                                    <span className='text-[0.85rem] leading-[1.1rem] text-xs'>Remember password</span>
                                </div>
                                <a href="#" className='text-secondary text-[0.85rem] leading-[1.1rem] font-semibold hover:text-secondary/60'>Forgot Password?</a>
                            </div>
                            <button className='mt-2 py-[0.4rem] font-semibold bg-gradient-to-tr from-secondary to-secondary/30 rounded-md hover:scale-105 duration-300 transform'>Sign In</button>
                        </form>
                        <div className="flex items-center justify-center mt-6 mb-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-2 text-gray-500 text-sm">Or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className='flex items-center justify-center gap-8 my-4'>
                            <div className='bg-gray-300/50 p-2 rounded-md cursor-pointer hover:scale-110 duration-200'>
                                <img src={google} alt="" className='w-[20px]'/>
                            </div>
                            <div className='bg-gray-300/50 p-2 rounded-md cursor-pointer hover:scale-110 duration-200'>
                                <img src={facebook} alt="" className='w-[20px]'/>
                            </div>
                            <div className='bg-gray-300/50 p-2 rounded-md cursor-pointer hover:scale-110 duration-200'>
                                <img src={github} alt="" className='w-[20px]'/>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-1 my-4'>
                            <p className='text-base'>Don't you have an account?</p>
                            <a href="#" className='text-secondary text-base font-semibold hover:text-secondary/60' onClick={switchToLogin}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Register
