import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';


const Popup = ({ showPopup,  handlePopupToggle}) => {
    const [currentPage, setCurrentPage] = useState('login');

    const switchToLogin = (e) => {
        e.preventDefault();
        setCurrentPage('login');
    }
    const switchRegister = (e) => {
        e.preventDefault();
        setCurrentPage('register ');
    }
    return (
        <div>
            {showPopup && (currentPage === 'login' ? <Login switchRegister={switchRegister} handlePopupToggle={handlePopupToggle}/> : <Register switchToLogin={switchToLogin} handlePopupToggle={handlePopupToggle}/>)}
        </div>  
    )
}

export default Popup
