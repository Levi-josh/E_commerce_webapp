import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaAngleLeft, FaTimesCircle } from 'react-icons/fa'
function Product() {
    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    const [popout2, setpopout2] = useState(false)
    const [showinput, setshowinput] = useState(false)
    const [showinput1, setshowinput1] = useState(false)
    function searchfunc() {
        setshowinput1(prev => !prev)
        setshowinput(false)
    }
    function buyorder() {
        setpopout(prev => !prev)
        setshowinput(false)
    }
    return (
        <div className={` ${popout ? 'p-home' : ''}`}>
            <header className='fixed flex sm:justify-between gap-4 items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4 w-full m-0 bg-white z-10 shadow-lg '>
                <h1 className={`font-bold hidden  lg:text-2xl  `}><span className=''>#</span>Glamour Grove</h1>
                <NavLink to='../' relative='path' className={'md:block hidden'}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <input className='outline-none hidden md:block border rounded-xl w-130 sm:w-140 border-black lg:w-25 m-auto h-9  pl-2 placeholder:pl-2 ' placeholder='Search products' />
                {!showinput1 ? <NavLink to='../' relative='path' className={'md:hidden absolute'}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink> : <FaAngleLeft onClick={searchfunc} className='font-bold md:hidden  text-xl md:text-2xl ' ></FaAngleLeft>}
                {showinput1 ? <input className='outline-none md:hidden border rounded-xl w-130 sm:w-140 border-black lg:w-25 m-auto h-9  pl-2 placeholder:pl-2 ' placeholder='Search products' />
                    : <h1 className='md:hidden  text-xl sm:text-2xl font-semibold'>Product</h1>}
                <FaSearch onClick={searchfunc} className={`${showinput1 ? 'hidden' : 'block'} md:hidden right-3 absolute`} />




            </header >

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

                <div className='flex flex-col gap-3 lg:gap-4  w-full bg-white   justify-center mb-3 sticky top-20 sm:top-24 lg:top-20 py-3 sm:py-4 lg:py-5'>
                    <input className='outline-none hidden  border w-130 border-black lg:w-25 m-auto h-9 lg:h-11 rounded-2xl pl-4 placeholder:pl-4  ' placeholder='Search products' />
                    <div className='flex justify-center gap-2 md:gap-12 lg:gap-4 sm:gap-10'>
                        <button className='w-14 font-semibold sm:w-13 lg:w-13 bg-white py-1 lg:py-2 text-black border hover:bg-yellow-700  focus:bg-yellow-800 focus:text-white border-yellow-800 '>Clothes</button>
                        <button className='w-14 font-semibold sm:w-13 lg:w-13 bg-white  border py-1 lg:py-2 text-black hover:bg-yellow-700 focus:bg-yellow-800 focus:text-white border-yellow-800'>Shoes</button>
                        <button className='w-14 font-semibold sm:w-13 lg:w-13 bg-white py-1 lg:py-2 text-black border hover:bg-yellow-700 focus:bg-yellow-800 focus:text-white border-yellow-800'>Glasses</button>
                        <button className='w-14 font-semibold sm:w-13 lg:w-13 bg-white py-1 lg:py-2 text-black border  hover:bg-yellow-700 focus:bg-yellow-800 focus:text-white border-yellow-800 '>Watches</button>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 mt-5 sm:mt-8 lg:mt-12           '>

                    <div className='w-20 p-2 md:p-3 lg:p-4  rounded-lg border-2 shadow-lg           '>
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
                            <button className='w-full bg-yellow-800 font-semibold py-1 sm:py-2 sm:text-lg lg:text-xl text-white' >Add to cart</button>
                        </div>
                    </div>
                    <div className='w-20    '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='w-20     '>
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