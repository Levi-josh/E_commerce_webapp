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
        <div className={`  ${bgcolor} ${textcolor}  `}>
            <header className={`fixed flex ${bgcolor} items-center  h-20 gap-4 sm:gap-0 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4   w-full m-0  z-10  `}>
                <NavLink to='../' relative='path' className={'sm:absolute lg:hidden '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <NavLink to='../'  className={'sm:absolute hidden lg:block '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <h1 className='sm:m-auto font-semibold text-xl sm:text-2xl lg:text-3xl'> History</h1>
            </header >

            <div className='h-screen hidden lg:flex w-full  '>
            {
            data?.history? data?.history.length<1?
            <p className='popout fixed font-semibold text-xl'>your order history is empty</p>:
            <appcontext.Provider value={data}>
                <Firsthistory />
                <Secondhistory />
            </appcontext.Provider>:
            <motion.div animate={{ rotate: 360 }} initial={{ x: '50%', x: '-50%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className='absolute popout '>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6" stroke={mode.colormode?"white":'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 18V22" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.929 4.929L7.757 7.757" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.243 16.243L19.071 19.071" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12H6" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 12H22" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.929 19.071L7.757 16.243" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.243 7.757L19.071 4.929" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </motion.div>
        }
            </div>
            {/* history for mobile */}
            <div className={` w-full lg:hidden ${id?'h-full':'h-screen'}  `}>
            {
            data?.history? data?.history.length<1?
            <p className='popout fixed whitespace-nowrap font-semibold sm:text-lg'>your order history is empty</p>:
            <Outlet context={data} />:
            <motion.div animate={{ rotate: 360 }} initial={{ x: '50%', x: '-50%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className='absolute popout '>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6" stroke={mode.colormode?"white":'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 18V22" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.929 4.929L7.757 7.757" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.243 16.243L19.071 19.071" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12H6" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 12H22" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.929 19.071L7.757 16.243" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.243 7.757L19.071 4.929" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </motion.div>
            }
            </div>

        </div>
    )


}

export default History