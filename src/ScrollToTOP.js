import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar } from 'react-icons/fa'

const ScrollToTOP = () => {



    /* const location = useLocation();
      useEffect(() => {
          window.scrollTo(0, 0);
  
      }, [location]);
      console.log(location)*/
    return (

        <div className=''>


            <Outlet />

        </div>
    )
}

export default ScrollToTOP