import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaArrowLeft, FaTimesCircle } from 'react-icons/fa'
function Product() {
    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    const [popout2, setpopout2] = useState(false)
    const [showinput, setshowinput] = useState(false)
    function buyorder() {
        setpopout(prev => !prev)
        setshowinput(false)
    }
    return (
        <div className={` ${popout ? 'p-home' : ''}`}>
            <header className='fixed flex justify-between items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 w-full m-0 bg-white z-10 shadow-lg '>
                <h1 className={`font-bold hidden lg:block lg:text-2xl  `}><span className=''>#</span>Glamour Grove</h1>

                <NavLink to='../' relative='path'> <FaArrowLeft className='font-bold  text-xl md:text-2xl lg:hidden' ></FaArrowLeft></NavLink>
                <input className='outline-none border rounded-xl w-130 sm:w-140 border-black lg:w-25 m-auto h-9 lg:hidden pl-2 placeholder:pl-2 ' placeholder='Search products' />

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
            <div className={`fixed w-130 sm:w-25 md:w-10 bg-white popout lg:w-12    z-20 h-80 sm:h-96 lg:h-72  rounded-xl border-t border-neutral-100 py-4  ${popout2 ? 'block' : 'hidden'}  `}>
                <div className=' h-full '>
                    <div className='flex border-b-0.5 border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center pl-3 md:pl-4 md:gap-4 gap-3'><input type='radio' className=' md:w-4 md:h-4' /><p>china</p></div>
                    <div className='flex border-b-0.5 border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center pl-3 md:pl-4 md:gap-4 gap-3'><input type='radio' className='md:w-4 md:h-4' /><p>usa</p></div>
                </div>
            </div>
            <div className={`fixed  w-130 sm:w-25 md:w-22 bg-white popout lg:w-10    z-20 h-96 sm:h-96   rounded-xl border-t border-neutral-100   ${popout ? 'block' : 'hidden'}  `}>
                <FaTimesCircle className='absolute right-0  text-yellow-800 z-40 text-2xl  hover:cursor-pointer ' onClick={buyorder} />
                <div className='flex fixed rounded-t-xl top-0 bg-white w-full z-10 px-8 justify-between items-center py-4 sm:py-4 shadow-lg'>
                    <h1 className='text-xl lg:text-2xl font-extrabold'>Cart</h1>
                    <button className='w-20  lg:w-14 bg-yellow-800 text-white' onClick={() => { setshowinput(prev => !prev) }}>New cart</button>
                </div>
                <div className='px-4 pt-14 sm:pt-14 lg:pt-16'>
                    <div>
                        {showinput && <input type='text' placeholder='create new cart' className='w-full py-1 lg:py-2 border border-black outline-none mt-3 sm:mt-4' autoFocus />}
                    </div>

                    <div className='flex justify-between  py-3 w-full border-b border-yellow-800 hover:cursor-pointer  '>
                        <NavLink to={'/cart'}>  <p className='font-semibold    w-full sm:text-lg lg:text-xl  '>december collection</p></NavLink>
                        <input type="radio" className='hover:cursor-pointer  lg:w-4' name='collection' />

                    </div>

                    <div className='flex justify-between py-3 border-b border-yellow-800 hover:cursor-pointer  '>
                        <p className='font-semibold sm:text-lg lg:text-xl  '>september collection</p>
                        <input type="radio" className='hover:cursor-pointer lg:w-4' name='collection' />

                    </div>
                </div>
                <div className='fixed w-full bottom-0 bg-yellow-800 shadow-xl flex justify-center items-center rounded-b-xl   h-14 sm:h-16 lg:h-16'>
                    {showinput && <button className='w-15 bg-white text-lg sm:text-xl lg:text-xl font-bold rounded-lg h-8 lg:h-9 '>Create</button>}
                    {<button className='md:w-12 w-14 bg-white text-lg sm:text-xl lg:text-xl font-bold rounded-lg h-8 lg:h-9 hidden '>Add to cart</button>}
                </div>
            </div>
            <div className='sm:pt-28 pt-24 lg:pt-32   '>

                <div className='flex flex-col gap-3 lg:gap-4  w-full bg-white shadow-md justify-center mb-3 sticky top-20 sm:top-24 lg:top-20 py-3 sm:py-4 lg:py-5'>
                    <input className='outline-none hidden lg:block border w-130 border-black lg:w-25 m-auto h-9 lg:h-11 rounded-2xl pl-4 placeholder:pl-4  ' placeholder='Search products' />
                    <div className='flex justify-center gap-2 md:gap-12 lg:gap-4 sm:gap-10'>
                        <button className='w-14 font-semibold sm:w-13 lg:w-13 bg-white py-1 lg:py-2 text-black border hover:bg-neutral-100  focus:bg-yellow-800 focus:text-white focus:border-yellow-800 '>Clothes</button>
                        <button className='w-14 font-semibold sm:w-13 lg:w-13 bg-white  border py-1 lg:py-2 text-black hover:bg-neutral-100 focus:bg-yellow-800 focus:text-white focus:border-yellow-800'>Shoes</button>
                        <button className='w-14 font-semibold sm:w-13 lg:w-13 bg-white py-1 lg:py-2 text-black border hover:bg-neutral-100 focus:bg-yellow-800 focus:text-white focus:border-yellow-800'>Glasses</button>
                        <button className='w-14 font-semibold sm:w-13 lg:w-13 bg-white py-1 lg:py-2 text-black border hover:bg-neutral-100 focus:bg-yellow-800 focus:text-white focus:border-yellow-800 '>Watches</button>
                    </div>
                </div>
                <div className=' grid grid-cols-2 md:grid-cols-3 mt-5 sm:mt-8 lg:mt-12          '>

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