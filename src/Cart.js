import React, { useRef } from 'react'

import { Navigate, useNavigate, Outlet, redirect } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'

import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaInstagram, FaFacebook, FaYoutube, FaCheck, FaChevronLeft, FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'
const Cart = () => {
    const [changecart, setchangecart] = useState(false)
    const [changecart2, setchangecart2] = useState(false)
    const [changecart3, setchangecart3] = useState(false)
    const firstref = useRef()
    const secondref = useRef()
    const thirdref = useRef()
    const navigate = useNavigate()
    const [showcountry, setcountry] = useState(false)

    function selectcountry() {
        setcountry(prev => !prev)
    }

    function nextcart() {
        setchangecart(prev => !prev)

        if (window.matchMedia('(max-width: 600px)').matches) {

            firstref.current.style.translate = "-10px"
            secondref.current.style.translate = "-10px"
            thirdref.current.style.translate = "-10px"
        }
        else {
            firstref.current.style.translate = '0px'
            secondref.current.style.translate = '0px'
            thirdref.current.style.translate = '0px'
        }
        navigate('/cart/checkout')
    }
    function nextcart2() {
        setchangecart2(prev => !prev)
        if (window.matchMedia('(max-width: 600px)').matches) {

            firstref.current.style.translate = '-205px'
            secondref.current.style.translate = '-205px'
            thirdref.current.style.translate = '-205px'
        }
        else {
            firstref.current.style.translate = '0px'
            secondref.current.style.translate = '0px'
            thirdref.current.style.translate = '0px'
        }

        navigate('/cart/complete')
    }
    function nextcart3() {
        setchangecart3(prev => !prev)
        navigate('/cart/complete')
    }
    return (
        <div className={`  ${showcountry ? 'background' : ''}  `}>
            <header className='hidden fixed lg:flex justify-between items-center h-14 sm:h-20 md:h-20 lg:h-24 px-3 w-full m-0 bg-white z-20 shadow-lg'>
                <h1 className='font-bold  sm:text-lg md:text-xl lg:text-2xl'>#Glamour Grove</h1>
                <ul className='hidden lg:flex gap-12 lg:gap-20 xl:gap-24 md:text-lg lg:text-xl  '>
                    <NavLink to='/'>  <li>Home</li></NavLink>
                    <li>Shop</li>
                    <NavLink to='/cart/checkout'><li>Product</li></NavLink>
                    <li>About</li>
                </ul>
                <div className='relative flex  gap-5 md:gap-8 lg:gap-12 xl:gap-14 items-center bg-yellow-800 py-3 px-6 md:py-3 lg:py-4  md:px-8 rounded-3xl '>
                    <NavLink to='/cart' className=''><FaShoppingCart className='md:text-xl lg:text-2xl text-white ' /></NavLink>
                    <FaBell className='text-xl lg:text-2xl text-white' />
                    <FaBars className='md:hidden text-lg sm:text-xl ' />
                    <FaUserCircle className='hidden lg:block text-xl lg:text-2xl text-white' />
                </div>
            </header>

            <section className='    lg:pt-24'>
                <div className='flex items-center pl-3 py-3 sm:py-6 w-full gap-2  fixed z-20 bg-white top-0 lg:hidden shadow-lg   '>
                    <FaChevronLeft />
                    <NavLink to='/'><p className='text-lg'>back</p></NavLink>
                </div>
                <h1 className='text-center   font-bold text-3xl pt-16 sm:pt-28 sm:mb-8  mb-6 sm:text-green-400 md:text-blue-800 lg:text-purple-900 xl:text-orange-700  md:mb-8 lg:mt-9 lg:mb-10  xl:text-6xl md:text-4xl lg:text-5xl'>cart</h1>
                <div className='flex sm:overflow-visible  overflow-hidden  w-full pl-3 sm:px-5 md:pl-0 gap-5 sm:gap-2 xl:gap-6  sm:justify-center  '>
                    <div ref={firstref} className={`block  sm:translate-x-0`}> <div className='flex items-center   text-lg font-bold gap-3 w-44 sm:w-48  md:w-52 lg:w-60'>   <div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white ${changecart ? 'bg-yellow-800' : 'bg-black'} flex justify-center items-center`}>{changecart ? <FaCheck className='text-sm' /> : 1}</div><div className={`flex ${changecart ? ' text-yellow-800' : 'text-black'}`}>Shopping <span className='flex flex-nowrap'>cart</span></div></div><div className={`${changecart ? 'border-yellow-800' : 'border-black'} w-full border mt-4`}></div></div>
                    <div ref={secondref} className={`block   sm:translate-x-0 `}>   <div className='flex items-center text-lg font-bold gap-3 w-44 sm:w-48 md:w-52 lg:w-60'><div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9  rounded-3xl text-white ${changecart2 ? ' bg-yellow-800 ' : 'bg-black  '} flex justify-center items-center`}>{changecart2 ? <FaCheck className='text-sm' /> : 2}</div><div className={`flex ${changecart2 ? ' text-yellow-800' : 'text-black'}`}>Check  <span className='flex flex-nowrap'>out detail</span></div></div><div className={`${changecart2 ? 'border-yellow-800' : 'border-black'} w-full border mt-4`}></div></div>
                    <div ref={thirdref} className={`block   sm:translate-x-0 `}>   <div className='flex items-center text-lg font-bold gap-3 w-44 sm:w-48 md:w-52 lg:w-60'><div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white ${changecart3 ? 'bg-yellow-800 ' : 'bg-black  '} flex justify-center items-center`}>{changecart3 ? <FaCheck className='text-sm' /> : 3}</div><div className={`flex ${changecart3 ? 'text-yellow-800' : 'text-black'} `}>Complete</div></div><div className={changecart3 ? `border-yellow-800 w-full border mt-4 ` : `border-black w-full border mt-4`}></div></div>
                </div>
            </section >
            <Outlet context={{ nextcart, nextcart2, nextcart3, showcountry, selectcountry }} />
            <footer className=' bg-black  text-white px-5 sm:px-14 md:px-10 lg:px-20 xl:px-36 mt-7 sm:mt-8 md:mt-10 py-10 sm:py-14 md:pt-16 lg:pt-20 xl:pt-24 '>
                <div className='flex flex-col md:flex-row items-center  md:justify-between md:items-end border-b-0.5 pb-8 sm:pb-10   lg:pb-10  xl:pb-12  '>
                    <div className='flex flex-col justify-center md:flex-row md:items-end items-center     '>
                        <div className='md:border-r-0.5 pb-5 sm:pb-7 md:pb-0 md:pr-5 lg:pr-7 xl:pr-10 flex items-center   '>
                            <h1 className='font-bold text-lg sm:text-2xl md:text-2xl lg:text-3xl '>Glamour Grove</h1>
                        </div>
                        <div className='pb-6 sm:pb-8 md:pb-0 md:pl-5 xl:pl-10 lg:pl-7 font-semibold flex items-center '>

                            <p className=' lg:text-lg'>Gift & decoration store</p>
                        </div>
                    </div>

                    <ul className='flex flex-col items-center justify-center md:flex-row gap-5 sm:gap-7 md:gap-5 lg:gap-8 xl:gap-14'>
                        <NavLink to='/'>  <li>Home</li></NavLink>
                        <li>Shop</li>
                        <NavLink to='/cart/checkout'><li>Product</li></NavLink>
                        <li>About</li>
                    </ul>
                </div>
                <div className='flex items-center gap-5  flex-col-reverse md:flex-row pt-5 md:justify-between sm:pt-7 '>
                    <div className='flex justify-center gap-5 md:gap-4 flex-col-reverse md:flex-row  lg:gap-6 xl:gap-8'>
                        <p className='whitespace-nowrap'>Copyright 2023 Glamour Grove.All rights reserved. </p>
                        <div className='flex justify-center gap-6 md:gap-4 lg:gap-5 xl:gap-7 font-semibold'>
                            <p className=' whitespace-nowrap'>Privacy policy</p>
                            <p className=' whitespace-nowrap'>Terms of use</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-7 md:gap-4 lg:gap-10 text-lg lg:text-xl'>
                        <FaInstagram />
                        <FaFacebook />
                        <FaYoutube />

                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Cart