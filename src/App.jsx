import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banner/Banner';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handlePopupToggle = () => setShowPopup(!showPopup);
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: 'ease-in-out',
            delay: 100,
        });
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <Navbar handlePopupToggle={handlePopupToggle}/>
            <Hero/>
            <Banner/>
            <WhyChoose/>
            <About handlePopupToggle={handlePopupToggle}/>
            <Banner/>
            <Footer/>
            <Popup showPopup={showPopup} handlePopupToggle={handlePopupToggle}/>
        </div>
    )
}

export default App
