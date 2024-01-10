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
                <NavLink to='../' path='relative'> <FaArrowLeft className='font-bold  sm:text-lg md:text-xl lg:hidden' ></FaArrowLeft></NavLink>

                <ul className='hidden lg:flex gap-12 lg:gap-20 xl:gap-24 md:text-lg lg:text-xl'>
                    <NavLink to='/'>  <li className=''>Home</li></NavLink>

                    <NavLink to='/product'><li className='font-bold'>Product</li></NavLink>
                    <NavLink to='/contact'><li>contact</li></NavLink>
                    <NavLink to='/about'><li>About us</li></NavLink>

                </ul>
                <div className='flex gap-5 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-15 items-center bg-yellow-800 py-3 px-6 md:py-3 lg:py-4 md:px-8 rounded-3xl text-white '>
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
            <div className=' grid grid-cols-2 md:grid-cols-3        pt-24 sm:pt-36 md:pt-40 lg:pt-40   '>

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
    )
}

export default Product