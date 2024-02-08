import React, { useState, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar } from 'react-icons/fa'

const ScrollToTOP = () => {


    const b = useRef()
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);


    }, [location]);

    return (

        <div className='' ref={b} onScroll={(e) => { console.log(e) }}>


            <Outlet />

        </div>
    )
}

export default ScrollToTOP