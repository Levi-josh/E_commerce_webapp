import React from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaAngleLeft, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaTimesCircle, FaHome, FaShoppingBag, FaExclamationCircle, FaShopify, FaShoppingBasket, FaHistory, FaArrowRight, FaAngleRight, FaArrowDown, FaAngleDown, FaDotCircle, FaEllipsisV, FaEllipsisH } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Firstnote from './Firstnote'
import Secondnote from './Secondnote'

const Note = () => {
    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    const [popout2, setpopout2] = useState(false)
    const [showinput, setshowinput] = useState(false)
    const [check, setcheck] = useState(false)

    const [array, setarray] = useState(0)
    function showmenu() {

        setmenubar(prev => !prev)
        console.log("hi")
    }
    function showmenu1() {

        setcheck(prev => !prev)
        console.log("hi")
    }
    function buyorder() {
        setpopout(prev => !prev)
        setshowinput(false)
        setmenubar(false)
    }
    return (
        <div className={`  ${menubar ? 'home' : ''}${popout ? 'p-home' : ''} h-full `}>
            <header className={`fixed flex  items-center h-20 gap-4 sm:gap-0 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4  w-full m-0 bg-white z-10 ${menubar ? 'shadow-none lg:shadow-lg' : 'shadow-lg'} `}>
                <NavLink to='../' relative='path' className={'sm:absolute  '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <h1 className=' sm:m-auto font-semibold text-xl sm:text-2xl lg:text-3xl'> Notifications</h1>


            </header >

            <div className='h-full hidden lg:flex w-full  '>
                <Firstnote />
                <Secondnote />
            </div>
            <div className='h-full  w-full lg:hidden  '>
                <Outlet />

            </div>

        </div>
    )
}

export default Note