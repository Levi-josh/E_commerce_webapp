import React from 'react'
import { Outlet } from 'react-router-dom'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart } from 'react-icons/fa'
const Cart = () => {
    return (
        <div className='h-screen'>
            <header className='  hidden md:flex justify-between items-center md:fixed  h-14 sm:h-16 md:h-20 px-3 w-full m-0 bg-white z-10 shadow-lg'>
                <h1 className='font-bold'>#Glamour Grove</h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>About</li>
                </ul>
                <div className='flex gap-3'>
                    <FaShoppingCart />
                    <FaBell />
                    <FaAddressBook className='hidden md:block' />
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
        </div >
    )
}

export default Cart