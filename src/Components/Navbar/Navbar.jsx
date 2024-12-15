import React from 'react';
import { FaSortDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const Navbar = ({ handlePopupToggle }) => {
    const NavLinks = [
        {
            id: 1,
            name: "Home",
            link: "/#",
        },
        {
            id: 2,
            name: "About",
            link: "/#",
        },
        {
            id: 3,
            name: "Contact",
            link: "/#",
        },
    ];

    const DropdownLinks = [
        {
            id: 1,
            name: "Vegetables",
            link: "/#",
        },
        {
            id: 2,
            name: "Fruits",
            link: "/#",
        },
        {
            id: 3,
            name: "Grains",
            link: "/#",
        },
    ]

    return (
        <div data-aos="fade" className='bg-white shadow-sm'>
        <div className='container flex justify-between items-center py-4 sm:py-3'>
            {/* Logo section */}
            <div className='font-bold text-3xl'>Logo</div>
            {/* Navlinks section */}
            <div>
                <ul className='flex items-center gap-10 cursor-pointer'>
                    {NavLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.link} className='hidden sm:inline-block hover:text-primary text-xl font-semibold'>{item.name}</a>
                        </li>
                    ))}
                    {/*  */}
                    <li className='hidden md:block cursor-pointer group'>
                        <a href="" className='inline-block hover:text-primary text-xl font-semibold'>
                            
                            <div className='flex items-center gap-x-1 py-2'>
                                Dropdown
                                <span>
                                    <FaSortDown className='group-hover:rotate-180 duration-300'/>
                                </span>
                            </div>
                        </a>
                        <div className='absolute z-[999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2'>
                            <ul className=''>
                                {DropdownLinks.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.link} className='text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20'>{item.name}</a>
                                    </li>
                                ))} 

                            </ul>
                        </div>
                    </li>
                    {/*  */}
                    <li className='' onClick={handlePopupToggle}>
                        <button className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300 rounded-md'>
                            <CiUser className='text-xl font-bold'/>
                            My Account
                        </button>

                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar
