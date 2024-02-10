import React, { useRef } from 'react'

import { Navigate, useNavigate, Outlet, redirect } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import cartimg from './icons8-shopping-cart-48.png';

//import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaTimesCircle, FaHome, FaShoppingBag, FaExclamationCircle, FaShopify, FaShoppingBasket, FaHistory, FaArrowRight, FaAngleRight, FaArrowDown, FaAngleDown } from 'react-icons/fa'

import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaExclamationCircle, FaLock, FaHistory, FaPhone, FaShoppingCart, FaInstagram, FaFacebook, FaYoutube, FaCheck, FaChevronLeft, FaUserCircle, FaArrowLeft, FaShopify, FaStarHalf, FaStarHalfAlt, FaTimesCircle, FaHome, FaShoppingBag, FaStar, FaShoppingBasket, FaArrowRight, FaAngleLeft, FaArrowDown, FaAngleDown, FaEllipsisV } from 'react-icons/fa'

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

    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    const [popout2, setpopout2] = useState(false)
    const [showinput, setshowinput] = useState(false)
    const [emptycart, setemptycart] = useState(false)

    const [array, setarray] = useState(0)
    function showmenu() {
        setmenubar(prev => !prev)
    }

    const b = useRef()



    /*setInterval()
    useEffect(() => {
        const interval = setInterval(() => {
 
            setarray(prev => prev + 1)
 
 
 
        }, 2000)
        return () => clearInterval(interval)
    }, []
    )*/
    function buyorder() {
        setpopout(prev => !prev)
        setshowinput(false)
        setmenubar(false)
    }

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
        navigate('/cart/:id/checkout')
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

        navigate('/cart/:id/complete')
    }
    function nextcart3() {
        setchangecart3(prev => !prev)
        navigate('/cart/:id/complete')
    }
    function startshop() {

        navigate("/product")
    }
    return (
        <div className={`  ${showcountry ? 'background' : ''} ${menubar ? 'home' : ''}${popout ? 'p-home' : ''}  `}>
            <header className={`fixed flex sm:justify-between gap-4 items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4 w-full m-0 bg-white z-10 ${menubar ? 'shadow-none lg:shadow-lg' : 'shadow-lg'} `}>
                <NavLink to='../' className={'sm:absolute '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <div className='sm:m-auto flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold'>
                    <h1 className=''>Cart</h1>
                    <FaShoppingCart className='text-2xl sm:text-3xl lg:text-4xl' />
                </div>
                <FaEllipsisV className='absolute right-3 sm:static' />
                {/* <h1 className={`font-bold text-xl sm:text-2xl hidden   lg:inline xl:text-3xl  `}><span className=''>#</span>Glamour Grove</h1>
                <NavLink to={'/'} className={'lg:hidden'}><FaAngleLeft className={`lg:hidden text-2xl font-bold ${menubar ? ' invisible lg:visible' : 'visble'}`} /></NavLink>
                <ul className='hidden lg:flex  lg:gap-18 xl:gap-20 md:text-lg '>
                    <NavLink to='/'>  <li className=''>Home</li></NavLink>

                    <NavLink to='/product'><li>Product</li></NavLink>
                    <NavLink to='/contact'><li>contact</li></NavLink>
                    <NavLink to='/about'><li>About us</li></NavLink>

                </ul>
                <div className='flex gap-3 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-12 items-center    '>
                    <NavLink to={'/note'}>  <div className='text-lg sm:text-xl flex items-center md:text-2xl   outline outline-2 outline-yellow-800 justify-center  h-8 w-102 sm:h-10 md:w-101 sm:w-103 text-black rounded-full hover:cursor-pointer hover:bg-yellow-700'><FaBell className=' ' /></div></NavLink>
                    <NavLink to='/cart/:id' className=' '><div className='flex text-lg sm:text-xl md:text-2xl  outline outline-2 outline-yellow-800 items-center justify-center  text-white bg-yellow-800 w-102 h-8 sm:w-103 md:w-101 sm:h-10 rounded-full'><p className='md:font-semibold text-xs sm:text-base md:text-lg'>Cart</p><FaShoppingCart className='text-base sm:text-xl md:text-2xl' /></div></NavLink>

                    <div className='  outline outline-2 outline-yellow-800   flex justify-center items-center rounded-full h-8 w-102 sm:h-10 md:w-101 sm:w-103 lg:hidden hover:bg-yellow-700'><FaBars className='lg:hidden text-lg  sm:text-xl ' onClick={showmenu} /></div>
                    <div className={`lg:flex items-center justify-center hidden  ${menubar ? ' bg-yellow-800 text-white' : 'hover:bg-yellow-700 text-black'} outline outline-2 outline-yellow-800 md:text-lg  h-8 w-102 sm:h-10 md:w-101 sm:w-103 rounded-full hover:cursor-pointer  `} onClick={showmenu}><p className=''>Menu</p> <FaAngleDown className='text-lg pt-1' /></div>
                </div>*/}
            </header >
            <div className={`menu lg:w-15 fixed md:w-22 sm:w-25 w-135 h-full    bg-white top-0  lg:top-24 shadow-lg shadow-black rounded-lg right-0  lg:right-3  z-30  lg:h-120 ${menubar ? 'block transition-all  duration-2000 ease-in-out   ' : 'hidden transition-all duration-1000 ease-out'} `}>

                <div className=' h-190 md:h-140 bg-yellow-800 lg:rounded-t-xl flex rounded-b-xl lg:rounded-b-none justify-center items-center'>
                    <FaTimesCircle className='absolute left-2 top-2 lg:hidden text-white z-40 text-2xl sm:text-2xl hover:cursor-pointer ' onClick={showmenu} />
                    <div className='flex items-center flex-col gap-2'>
                        <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='  w-105 h-105 sm:w-106 sm:h-106 outline-2 outline outline-white   rounded-full  bg-no-repeat bg-cover bg-center    ' />
                        <p className='text-white font-serif'>The best shopping app </p>
                    </div>
                </div>
                <div className='flex flex-col h-200  justify-between   lg:h-170   '>
                    <div>
                        <div className='flex flex-col lg:text-center pt-2 sm:pt-3 lg:hidden'>
                            <NavLink to={'/'} ><div className='flex hover:lg:bg-neutral-100  gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaHome className='text-lg sm:text-xl md:text-2xl' /> <p className='    py-2 sm:py-4 sm:text-lg md:text-xl font-semibold  lg:hidden' onClick={() => { setmenubar(false) }}>Home</p></div></NavLink>
                            <NavLink to={'/product'}><div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaShopify className='text-lg sm:text-xl md:text-2xl' /><p className='  py-2 sm:py-4 sm:text-lg md:text-xl font-semibold  lg:hidden'>Products</p></div></NavLink>
                            <NavLink to={'/contact'}><div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'> <FaPhone className='text-lg sm:text-xl md:text-2xl' /><p className=' py-2 sm:py-4  sm:text-lg md:text-xl font-semibold  lg:hidden'>Contact</p></div></NavLink>
                            <NavLink to={'/about'}> <div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaExclamationCircle className='text-lg sm:text-xl md:text-2xl' /><p className=' py-3  sm:py-4 md:text-xl  sm:text-lg font-semibold hover:bg-neutral-100 lg:hidden'>About</p></div></NavLink>
                        </div>
                        <div className='flex flex-col  border-t lg:bg-inherit pl-3 sm:pl-4 lg:pl-0  bg-neutral-100'>
                            <div className='flex lg:flex-row-reverse lg:justify-between items-center lg:px-6 hover:lg:bg-neutral-100 gap-2 sm:gap-3 lg:cursor-pointer lg:border-b '> <FaShoppingCart className='text-lg sm:text-xl md:text-2xl' /><p className=' py-2  sm:py-4 md:text-xl  font-semibold sm:text-lg ' onClick={buyorder}>Carts</p></div>
                            <div className='flex lg:flex-row-reverse lg:justify-between items-center lg:px-6 hover:lg:bg-neutral-100 gap-2 sm:gap-3 lg:cursor-pointer lg:border-b'><FaHistory className='text-lg sm:text-xl md:text-2xl' /> <p className=' py-2  sm:py-4 sm:text-lg md:text-xl font-semibold '>History</p></div>
                            <div className='flex lg:flex-row-reverse lg:justify-between items-center lg:px-6 hover:lg:bg-neutral-100 gap-2 sm:gap-3 lg:cursor-pointer lg:border-b'><FaStar className='text-lg sm:text-xl md:text-2xl' />  <p className=' py-2 sm:py-4  sm:text-lg md:text-xl font-semibold  '>Favourite</p></div>
                        </div>
                    </div>
                    <div className=' flex justify-end  lg:mt-0 lg:items-center '>
                        <NavLink to={'/login'}> <p className='font-bold   sm:text-xl text-yellow-800 text-right  mb-7 mr-7 '>Sign In</p></NavLink>
                    </div>
                </div>
            </div>

            <div className={`fixed w-130 sm:w-25 md:w-10 bg-white popout lg:w-12    z-20 h-80 sm:h-96 lg:h-72  rounded-xl border-t border-neutral-100 py-4  ${popout2 ? 'block' : 'hidden'}  `}>
                <div className=' h-full '>
                    <div className='flex border-b-0.5 border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center pl-3 md:pl-4 md:gap-4 gap-3'><input type='radio' className=' md:w-4 md:h-4' /><p>china</p></div>
                    <div className='flex border-b-0.5 border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center pl-3 md:pl-4 md:gap-4 gap-3'><input type='radio' className='md:w-4 md:h-4' /><p>usa</p></div>
                </div>
            </div>
            <div className={`fixed  w-130 sm:w-25 md:w-22 bg-white popout lg:w-10    z-20 h-80 sm:h-96   rounded-xl border-t border-neutral-100   ${popout ? 'block' : 'hidden'}  `}>
                <FaTimesCircle className='absolute right-0  text-yellow-800 z-40 text-xl sm:text-2xl hover:cursor-pointer ' onClick={buyorder} />
                <div className='flex fixed rounded-t-xl top-0 bg-white w-full z-10 px-8 justify-between items-center py-4 sm:py-4 shadow-lg'>
                    <h1 className='text-xl lg:text-2xl font-extrabold'>Cart</h1>
                    <button className='w-10 p-1  lg:w-14 bg-yellow-800 text-white font-semibold whitespace-nowrap' onClick={() => { setshowinput(prev => !prev) }}>New cart</button>
                </div>
                <div className='px-4 pt-16 sm:pt-16 lg:pt-16'>
                    <div>
                        {showinput && <input type='text' placeholder='create new cart' className='w-full py-1 lg:py-2 border border-black outline-none mt-3 sm:mt-4' autoFocus />}
                    </div>
                    <div className='flex justify-between py-3 border-b border-yellow-800 hover:cursor-pointer  '>
                        <NavLink to={'/cart/1'}>  <p className='font-semibold sm:text-lg lg:text-xl  '>december collection</p></NavLink>
                        <input type="radio" className='hover:cursor-pointer  lg:w-4' name='collection' />

                    </div>
                    <div className='flex justify-between py-3 border-b border-yellow-800 hover:cursor-pointer  '>
                        <NavLink to={'/cart/2'}><p className='font-semibold sm:text-lg lg:text-xl  '>september collection</p></NavLink>
                        <input type="radio" className='hover:cursor-pointer lg:w-4' name='collection' />

                    </div>
                </div>

                <div className='fixed w-full bottom-0 bg-yellow-800 shadow-xl flex justify-center items-center rounded-b-xl   h-14 sm:h-16 lg:h-16'>
                    {showinput && <button className='w-15 bg-white text-lg sm:text-xl lg:text-xl font-bold rounded-lg h-8 lg:h-9 '>Create</button>}
                    {<button className='md:w-12 w-14 bg-white text-lg sm:text-xl lg:text-xl font-bold rounded-lg h-8 lg:h-9 hidden '>Add to cart</button>}
                </div>
            </div>
            <div  >
                {emptycart ? <div className='      lg:pt-10 h-screen flex flex-col justify-center items-center '> <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=626&ext=jpg&ga=GA1.2.103364066.1699032278&semt=ais" alt="" className='w-140 sm:w-22 md:w-10 lg:w-20 ' /> <p className='font-bold font-sans text-2xl sm:text-3xl lg:text-4xl'>Your cart is empty!</p><button className='bg-yellow-900 text-white font-semibold lg:text-lg w-12 sm:w-14 lg:w-16 h-10 mt-3  rounded-full' onClick={startshop}>Start Shopping</button></div> :
                    <section className='  pt-24 sm:pt-28     lg:pt-32 '>

                        <h1 className='text-center   font-bold text-3xl  sm:mb-4  mb-3 text-yellow-900  md:mb-4  lg:mb-10  xl:text-6xl sm:text-4xl lg:text-5xl'>cart</h1>
                        <div className='flex bg-white  top-20 sm:top-24   sm:overflow-visible  overflow-hidden  w-full pl-3 sm:px-5 md:pl-0 gap-5 sm:gap-2 xl:gap-6  sm:justify-center  '>
                            <div ref={firstref} className={`block  sm:translate-x-0`}> <div className='flex items-center   text-lg font-bold gap-3 w-44 sm:w-48  md:w-52 lg:w-60'>   <div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white ${changecart ? 'bg-yellow-900' : 'bg-black'} flex justify-center items-center`}>{changecart ? <FaCheck className='text-sm' /> : 1}</div><div className={`flex ${changecart ? ' text-yellow-900' : 'text-black'}`}>Shopping <span className='flex flex-nowrap'>cart</span></div></div><div className={`${changecart ? 'border-yellow-900' : 'border-black'} w-full border mt-4`}></div></div>
                            <div ref={secondref} className={`block   sm:translate-x-0 `}>   <div className='flex items-center text-lg font-bold gap-3 w-44 sm:w-48 md:w-52 lg:w-60'><div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9  rounded-3xl text-white ${changecart2 ? ' bg-yellow-900 ' : 'bg-black  '} flex justify-center items-center`}>{changecart2 ? <FaCheck className='text-sm' /> : 2}</div><div className={`flex ${changecart2 ? ' text-yellow-900' : 'text-black'}`}>Check  <span className='flex flex-nowrap'>out detail</span></div></div><div className={`${changecart2 ? 'border-yellow-900' : 'border-black'} w-full border mt-4`}></div></div>
                            <div ref={thirdref} className={`block   sm:translate-x-0 `}>   <div className='flex items-center text-lg font-bold gap-3 w-44 sm:w-48 md:w-52 lg:w-60'><div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white ${changecart3 ? 'bg-yellow-900 ' : 'bg-black  '} flex justify-center items-center`}>{changecart3 ? <FaCheck className='text-sm' /> : 3}</div><div className={`flex ${changecart3 ? 'text-yellow-900' : 'text-black'} `}>Complete</div></div><div className={changecart3 ? `border-yellow-900 w-full border mt-4 ` : `border-black w-full border mt-4`}></div></div>
                        </div>

                        <Outlet context={{ nextcart, nextcart2, nextcart3, showcountry, selectcountry }} />
                    </section>}
            </div>
            {/*
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
            </footer>*/}
        </div >
    )
}

export default Cart