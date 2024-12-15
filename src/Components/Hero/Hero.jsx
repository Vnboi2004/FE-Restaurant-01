import React from 'react';
import HeroImage from '../../assets/images/hero.png';
import PrimaryBtn from '../../Components/Shared/PrimaryBtn';
import HeroBg from '../../assets/images/heroBg.png';

const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
}
const Hero = () => {
    return (
        <div style={BgStyle} className='relative z-[-1]'>
            <div className='container py-16 sm:py-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                    {/* text content seciton */}
                    <div className='space-y-7 text-dark order-2 sm:order-1'>
                        <h1 data-aos="fade-up"
                            className='text-5xl'>
                            Fresh & Healthy Meal Plan  
                            {" "} <span className='text-secondary font-cursive text-7xl'>Delivery</span> {" "}
                            in Miami
                        </h1>
                        <p  data-aos="fade-up"
                            data-aos-delay="300"
                            className='lg:pr-64'>
                            Delicious Meals Delivered to Your Door From {" "}
                            <span>$132.95</span> {" "}
                            per week
                        </p>
                        <div data-aos="fade-up"
                             data-aos-delay="500">
                            <PrimaryBtn/>
                        </div>
                    </div>
                    {/* Image section */}
                    <div 
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        className='relative z-30 order-1 sm:order-2'> 
                        <img src={HeroImage} alt="" className='w-full sm:scale-125 sm:translate-y-16'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
