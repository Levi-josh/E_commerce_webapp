import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'

import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
const Cart = () => {
    return (
        <div className='h-full'>
            <header className='hidden fixed md:flex justify-between items-center h-14 sm:h-20 md:h-20 lg:h-24 px-3 w-full m-0 bg-white z-10 shadow-lg'>
                <h1 className='font-bold  sm:text-lg md:text-xl lg:text-2xl'>#Glamour Grove</h1>
                <ul className='hidden md:flex gap-12 lg:gap-20 xl:gap-24 md:text-lg lg:text-xl  '>
                    <NavLink to='/'>  <li>Home</li></NavLink>
                    <li>Shop</li>
                    <NavLink to='/cart/checkout'><li>Product</li></NavLink>
                    <li>About</li>
                </ul>
                <div className='flex  gap-3 md:gap-8 lg:gap-12 xl:gap-15 items-center'>
                    <NavLink to='/cart' className=' focus:md:bg-yellow-800 focus:md:w-16 focus:md:h-10 rounded-2xl flex justify-center items-center'><FaShoppingCart className='text-lg sm:text-xl' /></NavLink>
                    <FaBell className='text-lg sm:text-xl' />
                    <FaBars className='md:hidden text-lg sm:text-xl ' />
                    <FaAddressBook className='hidden md:block text-lg sm:text-xl' />
                </div>
            </header>

            <section className='md:pt-20 lg:pt-20'>
                <p className='text-lg ml-2 py-3 md:hidden w-full fixed bg-white'>back</p>
                <h1 className='text-center  font-bold text-3xl pt-12 sm:pt-14 md:pt-0 mb-6 sm:text-green-400 md:text-blue-800 lg:text-purple-900 xl:text-orange-700 md:mt-8 md:mb-8 lg:mt-9 lg:mb-10  xl:text-6xl md:text-4xl lg:text-5xl'>cart</h1>
                <div className='flex sm:overflow-visible  overflow-hidden  w-full pl-3 sm:pl-7 md:pl-0 gap-5 sm:gap-5 xl:gap-6  sm:justify-center  '>
                    <div className='block '> <div className='flex items-center   text-lg font-bold gap-3 w-48 sm:w-52 lg:w-60'>   <div className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white bg-black flex justify-center items-center'>1</div><div className='flex'>Shopping <span className='flex flex-nowrap'>cart</span></div></div><div className='border-black w-full border mt-4'></div></div>
                    <div className='block '>   <div className='flex items-center text-lg font-bold gap-3 w-48 sm:w-52 lg:w-60'><div className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9  rounded-3xl text-white bg-black flex justify-center items-center'>2</div><div className='flex'>Check  <span className='flex flex-nowrap'>out detail</span></div></div><div className='border-black w-full border mt-4'></div></div>
                    <div className='block  '>   <div className='flex items-center text-lg font-bold gap-3 w-48 sm:w-52 lg:w-60'><div className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white bg-black flex justify-center items-center'>3</div><div className='flex'>Complete</div></div><div className='border-black w-full border mt-4'></div></div>
                </div>
            </section >
            <Outlet />
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