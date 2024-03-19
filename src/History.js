import React from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaAngleLeft, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaTimesCircle, FaHome, FaShoppingBag, FaExclamationCircle, FaShopify, FaShoppingBasket, FaHistory, FaArrowRight, FaAngleRight, FaArrowDown, FaAngleDown, FaDotCircle, FaEllipsisV, FaEllipsisH } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink, Outlet, useLocation,useOutletContext } from 'react-router-dom'
import { useState,createContext } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Firsthistory from './Firsthistory'
import Secondhistory from './Secondhistory'
import { useSelector } from 'react-redux'

export let appcontext = createContext(null)
const History = () => {
    const { data,id } = useOutletContext()
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    
    return (
        <div className={`  ${bgcolor} ${textcolor} h-screen `}>
            <header className={`fixed flex  items-center ${mode.colormode&&' shadow-stone-700  shadow-lg'} h-20 gap-4 sm:gap-0 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4  w-full m-0  z-10  shadow-lg `}>
                <NavLink to='../' relative='path' className={'sm:absolute lg:hidden '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <NavLink to='../'  className={'sm:absolute hidden lg:block '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <h1 className='sm:m-auto font-semibold text-xl sm:text-2xl lg:text-3xl'> History</h1>
            </header >

            <div className='h-screen hidden lg:flex w-full  '>
            {id?
            data?.history? data?.history.length<1?
            <p className='popout fixed font-semibold text-xl'>your order history is empty</p>:
            <appcontext.Provider value={data}>
                <Firsthistory />
                <Secondhistory />
            </appcontext.Provider>:
            <motion.div animate={{rotate:360}} initial={{x:'50%',x:'-50%'}} transition={{duration:2,repeat: Infinity, ease: 'linear'}} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
            <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
            </motion.div>
            :
            <p className='popout  fixed font-semibold text-xl'>log in to see your order history</p>}
            </div>
            <div className='h-full  w-full lg:hidden  '>
            {id?
            data?.history? data?.history.length<1?
            <p className='popout fixed whitespace-nowrap font-semibold sm:text-lg'>your order history is empty</p>:
            <Outlet context={data} />:
            <motion.div animate={{rotate:360}} initial={{x:'50%',x:'-50%'}} transition={{duration:2,repeat: Infinity, ease: 'linear'}} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
            <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
            </motion.div>
            :
            <p className='popout  fixed whitespace-nowrap font-semibold sm:text-lg' >log in to see your order history</p>}
            </div>

        </div>
    )


}

export default History