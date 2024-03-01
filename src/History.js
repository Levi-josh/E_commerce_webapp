import React from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaAngleLeft, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaTimesCircle, FaHome, FaShoppingBag, FaExclamationCircle, FaShopify, FaShoppingBasket, FaHistory, FaArrowRight, FaAngleRight, FaArrowDown, FaAngleDown, FaDotCircle, FaEllipsisV, FaEllipsisH } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink, Outlet, useLocation,useOutletContext } from 'react-router-dom'
import { useState,createContext } from 'react'
import { useEffect } from 'react'
import Firsthistory from './Firsthistory'
import Secondhistory from './Secondhistory'

export let appcontext = createContext(null)
const History = () => {
    const { data } = useOutletContext()
    
    return (
        <div className={`  h-full `}>
            <header className={`fixed flex  items-center h-20 gap-4 sm:gap-0 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4  w-full m-0 bg-white z-10  shadow-lg `}>
                <NavLink to='../' relative='path' className={'sm:absolute lg:hidden '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <NavLink to='../'  className={'sm:absolute hidden lg:block '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <h1 className='sm:m-auto font-semibold text-xl sm:text-2xl lg:text-3xl'> History</h1>


            </header >

            <div className='h-full hidden lg:flex w-full  '>
            <appcontext.Provider value={data}>
                <Firsthistory />
                <Secondhistory />
            </appcontext.Provider>
            </div>
            <div className='h-full  w-full lg:hidden  '>
                <Outlet context={data} />

            </div>

        </div>
    )


}

export default History