import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaArrowLeft } from 'react-icons/fa'
function Product() {
    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    function buyorder() {
        setpopout(prev => !prev)
    }
    return (
        <div>
            <header className='fixed flex justify-between items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 w-full m-0 bg-white z-10 shadow-lg '>
                <h1 className={`font-bold hidden lg:block lg:text-2xl  `}><span className=''>#</span>Glamour Grove</h1>
                <NavLink to='../' relative='path'> <FaArrowLeft className='font-bold  sm:text-lg md:text-xl lg:hidden' ></FaArrowLeft></NavLink>

                <ul className='hidden lg:flex gap-12 lg:gap-20 xl:gap-24 md:text-lg lg:text-xl'>
                    <NavLink to='/'>  <li className=''>Home</li></NavLink>

                    <NavLink to='/product'><li className='font-bold'>Product</li></NavLink>
                    <NavLink to='/contact'><li>contact</li></NavLink>
                    <NavLink to='/about'><li>About us</li></NavLink>

                </ul>
                <div className='hidden lg:flex gap-5 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-15 items-center bg-yellow-800 py-3 px-6 md:py-3 lg:py-4 md:px-8 rounded-3xl text-white '>
                    <NavLink to='/cart' className=' '><FaShoppingCart className='md:text-xl lg:text-2xl hover:scale-125' /></NavLink>
                    <FaBell className=' md:text-xl lg:text-2xl hover:scale-125' />
                    <FaBars className='md:hidden text-lg sm:text-xl hover:scale-125 ' />
                    <FaUserCircle className='hidden md:block text-xl lg:text-2xl hover:scale-125' />
                </div>

                <div className={`menu lg:w-15 md:w-25 sm:w-25 w-140 h-screen      bg-white top-0  lg:top-24 shadow-lg shadow-black rounded-lg right-0  md:right-3 fixed z-30  lg:h-120 ${menubar ? 'block transition-all  duration-2000 ease-in-out   ' : 'hidden transition-all duration-1000 ease-out'} `}>
                    <div className=' h-40'></div>
                    <ul>
                        <li >shop</li>
                        <li>pending order</li>
                        <li>new order</li>
                        <li>history</li>
                        <li>Favourite</li>
                    </ul>
                </div>
            </header >
            <div className='pt-28 lg:pt-32   '>

                <div className='flex flex-col gap-3 lg:gap-4  w-full bg-white border-black justify-center mb-3 sticky top-20 sm:top-24 py-3 sm:py-4 lg:py-5'>
                    <input className='outline-none border-2 w-130 border-yellow-800 lg:w-25 m-auto h-9 lg:h-11  ' />
                    <div className='flex justify-center gap-3 lg:gap-4'>
                        <button className='w-14 md:w-16 lg:w-13 bg-yellow-800 py-1 lg:py-2'>Clothes</button>
                        <button className='w-14 md:w-16 lg:w-13 bg-yellow-800 py-1 lg:py-2'>Shoes</button>
                        <button className='w-14 md:w-16 lg:w-13 bg-yellow-800 py-1 lg:py-2'>Glasses</button>
                        <button className='w-14 md:w-16 lg:w-13 bg-yellow-800 py-1 lg:py-2'>Watches</button>
                    </div>
                </div>
                <div className=' grid grid-cols-2 md:grid-cols-3           '>

                    <div className='min-w-30 p-2 md:p-3 lg:p-4  rounded-lg border-2 border-yellow-800            '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className='rounded-lg ' />
                        <div className='flex flex-col pt-2 gap-1 sm:gap-2'>
                            <div className='flex text-yellow-800 sm:text-lg lg:text-xl '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <h1 className='text-lg font-bold lg:text-xl'>Rolex watch</h1>
                            <p className='font-semibold md:text-lg lg:text-xl'>$400</p>
                            <button className='w-full bg-yellow-800 font-semibold py-1 sm:py-2 sm:text-lg lg:text-xl text-white' onClick={buyorder}>Add to cart</button>
                        </div>
                    </div>
                    <div className='min-w-30    '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30     '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30  '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30   '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30 '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30 '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30 '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30 '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30 '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30 '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-30 '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                </div>
            </div>
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

                        <NavLink to='/product'><li>Product</li></NavLink>
                        <NavLink to='/contact'><li>Contact</li></NavLink>
                        <NavLink to='/about'><li>About us</li></NavLink>

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
        </div>
    )
}

export default Product