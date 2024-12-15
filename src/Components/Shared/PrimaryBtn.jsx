import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const PrimaryBtn = () => {
    return (
        <div className='flex items-center group'>
            <button className='bg-primary h-[40px] text-white px-3 py-2 rounded-l-md '>Choose Your Meal Plan</button>
            <FaArrowRight className='inline-block transform group-hover:translate-x-2 rounded-r-md duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white'/>
        </div>
    )
}

export default PrimaryBtn
