import React, { useRef } from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaTimesCircle, FaHome, FaShoppingBag, FaExclamationCircle, FaShopify, FaShoppingBasket, FaHistory, FaArrowRight, FaAngleRight, FaArrowDown, FaAngleDown, FaToggleOn, FaToggleOff, FaSubscript, FaUser, FaQuestion, FaVest, FaShare, FaMoneyBill, FaLightbulb } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import cartimg from './icons8-shopping-cart-48.png';
import 'swiper/css/pagination';

import './swiper.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

const Home = () => {
    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    const [popout2, setpopout2] = useState(false)
    const [showinput, setshowinput] = useState(false)
    const [check, setcheck] = useState(false)
    const navigate = useNavigate()
    const [array, setarray] = useState(0)
    const [scroll, setscroll] = useState(0)
    useEffect(() => {


        window.scrollTo(0, scroll)
        console.log(scroll)
    }, [menubar])
    function showmenu() {

        setmenubar(prev => !prev)
        setscroll(window.scrollY)



        /*
                Notification.requestPermission().then(perm => {
                    if (perm === 'granted') {
                        new Notification('new note', {
                            body: 'hello',
                            icon: 'https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph',
                            image: 'https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph'
                        })
        
                    }
                })*/
    }
    function showmenu1() {

        setcheck(prev => !prev)
        console.log("hi")
    }
    function read() {
        navigate('/note')
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





    return (
        <div className={`  ${menubar ? 'home' : ''}${popout ? 'p-home' : ''} m-0  `} ref={b} onScroll={(e) => { console.log(e) }} >

            <header className={`fixed flex justify-between items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 w-full m-0 bg-white z-10 ${menubar ? 'shadow-none lg:shadow-lg' : 'shadow-lg'} `}>
                <h1 className={`font-bold text-lg sm:text-2xl  xl:text-3xl   ${menubar ? 'invisible lg:visible' : 'visble'}`}><span className=''>#</span>Glamour Grove</h1>
                <ul className='hidden lg:flex  lg:gap-18 xl:gap-20 md:text-lg '>
                    <NavLink to='/'>  <li className=''>Home</li></NavLink>

                    <NavLink to='/product'><li>Product</li></NavLink>
                    <NavLink to='/contact'><li>contact</li></NavLink>
                    <NavLink to='/about'><li>About us</li></NavLink>

                </ul>
                <div className='flex gap-3 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-12 items-center    '>
                    <NavLink to={'/note'}>   <div className=' text-lg sm:text-xl md:text-2xl outline outline-2 outline-yellow-900   flex justify-center sm:h-10 md:w-101 h-8 items-center w-102 sm:w-103 text-black  hover:text-white rounded-full hover:cursor-pointer hover:bg-yellow-800'><FaBell className=' ' /></div></NavLink>
                    <NavLink to='/cart/:id' className=' '><div className='flex  outline outline-2 outline-yellow-900 h-8 items-center text-lg sm:text-xl  sm:w-103 md:text-2xl justify-center text-black hover:text-white w-102  md:w-101 rounded-full sm:h-10 hover:cursor-pointer hover:bg-yellow-800'><p className='hidden'>Cart</p><FaShoppingCart /></div></NavLink>

                    <div onClick={showmenu} className='text-lg sm:text-xl lg:hidden outline outline-2 outline-yellow-800   flex justify-center h-8 w-102 sm:h-10 md:w-101 sm:w-103 items-center text-black  hover:text-white rounded-full hover:cursor-pointer hover:bg-yellow-700'><FaBars className='lg:hidden text-lg sm:text-xl hover:scale-125 ' /></div>
                    <div className={`lg:flex items-center  outline outline-2 outline-yellow-900 justify-center ${menubar ? 'bg-yellow-800 text-white hover:transition-all hover:duration-200 hover:ease-in-out' : 'hover: hover:bg-yellow-700  hover:text-white'} text-black hover:cursor-pointer  text-lg  w-101  rounded-full hidden h-10 `} onClick={showmenu}><p className=''>Menu</p> <FaAngleDown className='text-lg pt-1' /></div>
                </div>
            </header >

            <div>{menubar && <div className={`menu lg:w-15 fixed md:w-140 sm:w-130 w-110 h-full    bg-white   lg:top-24 shadow-lg shadow-black rounded-lg right-0  lg:right-3  z-30  lg:h-120  `}>

                <div className=' h-190 md:h-140 bg-yellow-900 lg:rounded-t-xl flex rounded-b-xl lg:rounded-b-none justify-center items-center'>
                    <FaTimesCircle className='absolute lg:hidden left-4 top-4  text-white z-40 text-2xl sm:text-2xl hover:cursor-pointer ' onClick={showmenu} />
                    <FaLightbulb className='absolute lg:hidden right-4 top-4    text-white z-40 text-2xl sm:text-2xl hover:cursor-pointer ' />
                    <div className='flex items-center flex-col gap-2'>
                        <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='  w-105 h-105 sm:w-106 sm:h-106 outline-2 outline outline-white   rounded-full  bg-no-repeat bg-cover bg-center    ' />
                        <p className='text-white font-serif'>The best shopping app </p>
                    </div>
                </div>
                <div className='flex flex-col h-200  justify-between   lg:h-170   '>
                    <div>
                        <div className='flex flex-col lg:text-center pt-2 sm:pt-3 lg:hidden'>

                            <NavLink to={'/'} ><div className='flex hover:lg:bg-neutral-100  gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaHome className='text-lg sm:text-xl md:text-2xl' /> <p className='    py-3 sm:py-4 sm:text-lg md:text-xl font-semibold  lg:hidden' onClick={() => { setmenubar(false) }}>Home</p></div></NavLink>
                            <NavLink to={'/product'}><div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaShopify className='text-lg sm:text-xl md:text-2xl' /><p className='  py-3 sm:py-4 sm:text-lg md:text-xl font-semibold  lg:hidden'>Products</p></div></NavLink>
                            <NavLink to={'/contact'}><div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'> <FaPhone className='text-lg sm:text-xl md:text-2xl' /><p className=' py-3 sm:py-4  sm:text-lg md:text-xl font-semibold  lg:hidden'>Contact</p></div></NavLink>
                            <NavLink to={'/about'}> <div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaExclamationCircle className='text-lg sm:text-xl md:text-2xl' /><p className=' py-3  sm:py-4 md:text-xl  sm:text-lg font-semibold hover:bg-neutral-100 lg:hidden'>About</p></div></NavLink>
                        </div>
                        <div className='flex flex-col border-b  border-t lg:bg-inherit pl-3 sm:pl-4 lg:pl-0  '>
                            <div className='hidden lg:flex items-center justify-between lg:cursor-pointer lg:border-b px-6 hover:lg:bg-yellow-700'>
                                <p className='text-xl font-semibold py-4'>Light </p>
                                <FaToggleOff className='text-2xl' />
                            </div>
                            <div className='flex lg:flex-row-reverse lg:justify-between items-center lg:px-6 hover:lg:bg-yellow-700 gap-2 sm:gap-3 lg:cursor-pointer lg:border-b '> <FaShoppingCart className='text-lg sm:text-xl md:text-2xl' /><p className=' py-3  sm:py-4 md:text-xl  font-semibold sm:text-lg ' onClick={buyorder}>Carts</p></div>
                            <NavLink to={'/history'}><div className='flex lg:flex-row-reverse lg:justify-between items-center lg:px-6 hover:lg:bg-yellow-700 gap-2 sm:gap-3 lg:cursor-pointer lg:border-b'><FaHistory className='text-lg sm:text-xl md:text-2xl' /> <p className=' py-3  sm:py-4 sm:text-lg md:text-xl font-semibold '>History</p></div></NavLink>

                        </div>
                    </div>
                    <div className=' flex justify-end  lg:mt-0 lg:items-center '>
                        <NavLink to={'/login'}> <p className='font-bold   sm:text-xl text-yellow-900 text-right  mb-7 mr-7 '>Sign In</p></NavLink>
                    </div>
                </div>
            </div>
            }</div>
            <div className={`fixed w-130 sm:w-25 md:w-10 bg-white popout lg:w-12    z-20 h-80 sm:h-96 lg:h-72  rounded-xl border-t border-neutral-100 py-4  ${popout2 ? 'block' : 'hidden'}  `}>
                <div className=' h-full '>
                    <div className='flex border-b-0.5 border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center pl-3 md:pl-4 md:gap-4 gap-3'><input type='radio' className=' md:w-4 md:h-4' /><p>china</p></div>
                    <div className='flex border-b-0.5 border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center pl-3 md:pl-4 md:gap-4 gap-3'><input type='radio' className='md:w-4 md:h-4' /><p>usa</p></div>
                </div>
            </div>
            <div className={`fixed  w-130 sm:w-25 md:w-22 bg-white popout lg:w-10    z-20 h-80 sm:h-96   rounded-xl border-t bg-yellow-700  ${popout ? 'block' : 'hidden'}  `}>
                <FaTimesCircle className='absolute right-0  text-yellow-900 z-40 text-xl sm:text-2xl hover:cursor-pointer ' onClick={buyorder} />
                <div className='flex fixed rounded-t-xl top-0 bg-white w-full z-10 px-8 justify-between items-center py-4 sm:py-4 shadow-lg'>
                    <h1 className='text-xl lg:text-2xl font-extrabold'>Cart</h1>
                    <button className='w-10 p-1  lg:w-14 bg-yellow-900 text-white font-semibold whitespace-nowrap' onClick={() => { setshowinput(prev => !prev) }}>New cart</button>
                </div>
                <div className='px-4 pt-16 sm:pt-16 lg:pt-16'>
                    <div>
                        {showinput && <input type='text' placeholder='create new cart' className='w-full py-1 lg:py-2 border border-black outline-none mt-3 sm:mt-4' autoFocus />}
                    </div>
                    <div className='flex justify-between py-3 border-b border-yellow-700 hover:cursor-pointer  '>
                        <NavLink to={'/cart/:id'}>  <p className='font-semibold sm:text-lg lg:text-xl  '>december collection</p></NavLink>
                        <input type="radio" className='hover:cursor-pointer  lg:w-4' name='collection' />

                    </div>
                    <div className='flex justify-between py-3 border-b border-yellow-700 hover:cursor-pointer  '>
                        <NavLink to={'/cart/:id'}><p className='font-semibold sm:text-lg lg:text-xl  '>september collection</p></NavLink>
                        <input type="radio" className='hover:cursor-pointer lg:w-4' name='collection' />

                    </div>
                </div>
                <div className='fixed w-full bottom-0 bg-yellow-900 shadow-xl flex justify-center items-center rounded-b-xl   h-14 sm:h-16 lg:h-16'>
                    {showinput && <button className='w-15 bg-white text-lg sm:text-xl lg:text-xl font-bold rounded-lg h-8 lg:h-9 '>Create</button>}
                    {<button className='md:w-12 w-14 bg-white text-lg sm:text-xl lg:text-xl font-bold rounded-lg h-8 lg:h-9 hidden '>Add to cart</button>}
                </div>
            </div>
            <div>
                <div className=' hidden bg-yellow-800 w-106 h-10  justify-center items-center fixed popout1 text-white  rounded-full  '>
                    <p>you're logged in</p>
                </div>
                <div className=' hidden bg-white outline-yellow-900 sm:w-108 md:w-109 outline outline-2 gap-3 shadow-lg w-107 h-20  justify-center flex-col  fixed popout1 text-black  '>
                    <div className='flex justify-start items-center gap-3 px-3 sm:gap-4 sm:px-4 lg:gap-4 lg:px-4'>
                        <FaBell className='text-yellow-900 text-lg sm:text-xl lg:text-2xl' />
                        <p>Hi welcome josh to glamour... </p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <button className='bg-yellow-900 text-white w-15 font-semibold' onClick={read}>Read</button>
                        <button className='bg-yellow-900 text-white w-15 font-semibold '>cancel</button>
                    </div>
                </div>
                <div className='        pt-24 sm:pt-36 md:pt-40 lg:pt-40   '>

                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}


                        spaceBetween={20}
                        slidesPerView={1}

                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 3000, // Autoplay delay in milliseconds
                            disableOnInteraction: false, // Allow manual navigation to stop autoplay
                        }}


                    //onSwiper={(swiper) => console.log(swiper)}
                    /*onSlideChange={() => console.log('slide change')} */ className='   w-120 sm:w-130 lg:w-130 m-auto   '>

                        <SwiperSlide>                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center   ' />
                        </SwiperSlide>

                        <SwiperSlide>                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTxreOJSjKV3Rr6tYE-2XYcPlaHcuBs4nUg&usqp=CAU' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center    ' />
                        </SwiperSlide>

                        <SwiperSlide>                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2o09ztmF7LPpqO-80mbCFlOvnDlkF0CwI7w&usqp=CAU' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center object-cover   ' />
                        </SwiperSlide>
                        <SwiperSlide>                <img src='https://ng.jumia.is/cms/0-1-initiatives/flashsale/2023/Slider.png' className='min-w-full h-72       md:h-96 bg-no-repeat bg-cover bg-center   ' />
                        </SwiperSlide>
                        <SwiperSlide>                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center   ' />
                        </SwiperSlide>
                        <SwiperSlide>                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center   ' />
                        </SwiperSlide>


                    </Swiper>
                </div >
            </div>

            <section>
                {/*<div className=' mt-10 lg:px-10 text-center mb-8 gap-3 sm:gap-4 flex-col flex md:flex-row md:gap-10 lg:w-130  md:m-auto md:w-130 md:justify-between md:items-start   md:mt-12 md:mb-12  '>
                    <h1 className='text-xl font-bold sm:text-2xl  lg:text-4xl whitespace-nowrap'>Simply unique/<span className='md:flex md:flex-wrap'>simply better</span>  </h1>
                    <p className='px-5 sm:px-14 md:px-0 '><strong>Glamour Grove</strong> is a gift and decoration store based in hcmc, vietnie since 2019.Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae corrupti ullam sit labore itaque eum placeat tempora inventore hic velit iste, distinctio sequi dolore at laboriosam.
                    </p>
                    </div>*/}
                <div className='mt-10 mb-8 md:mt-12  md:mb-12 grid gap-y-8  sm:gap-y-11 md:gap-y-12 lg:gap-y-10 grid-cols-4 lg:justify-center px-3 py-8  sm:py-11 md:py-12 lg:py-10  w-120  sm:w-130 lg:w-130 m-auto shadow-xl bg-yellow-900 outline outline-2 outline-yellow-700 rounded-xl  '>
                    <div className='flex flex-col items-center  lg:w-106 lg:hover:bg-yellow-700 justify-center lg:h-106 rounded-full'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'> <FaSubscript /></div>
                        <p className='text-center text-xs text-white sm:text-sm lg:text-base font-semibold'>Premium</p>
                    </div>
                    <div className='flex flex-col items-center lg:w-106 lg:hover:bg-yellow-700 justify-center  lg:h-106 rounded-full'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'> <FaMoneyBill /></div>
                        <p className='text-center text-xs text-white sm:text-sm lg:text-base font-semibold'>Buy shares</p>
                    </div>
                    <div className='flex flex-col items-center lg:w-106 lg:hover:bg-yellow-700 justify-center lg:h-106 rounded-full'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'> <FaCar /></div>
                        <p className='text-center text-xs text-white sm:text-sm lg:text-base font-semibold'>Delivery</p>
                    </div>
                    <div className='flex flex-col items-center lg:w-106 lg:hover:bg-yellow-700 justify-center lg:h-106 rounded-full'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'> <FaUser /></div>
                        <p className='text-center text-xs text-white sm:text-sm lg:text-base font-semibold'>Account</p>
                    </div>
                    <div className='flex flex-col items-center lg:w-106 lg:hover:bg-yellow-700 justify-center lg:h-106 rounded-full'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'> <FaSubscript /></div>
                        <p className='text-center text-xs text-white sm:text-sm lg:text-base font-semibold'>Services</p>
                    </div>
                    <div className='flex flex-col items-center lg:w-106 lg:hover:bg-yellow-700 justify-center lg:h-106 rounded-full'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'> <FaSubscript /></div>
                        <p className='text-center text-xs text-white sm:text-sm lg:text-base font-semibold' >Privacy policy</p>
                    </div>
                    <div className='flex flex-col items-center lg:w-106 lg:hover:bg-yellow-700 justify-center lg:h-106 rounded-full   '>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white rotate-180 items-center'> <FaPhone /></div>
                        <p className='text-center text-xs text-white sm:text-sm lg:text-base font-semibold whitespace-nowrap'>Support</p>
                    </div>
                    <div className='flex flex-col items-center lg:w-106 lg:hover:bg-yellow-700 justify-center lg:h-106 rounded-full'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'> <FaQuestion /></div>
                        <p className='text-center text-white text-xs sm:text-sm lg:text-base font-semibold'>FAQ</p>
                    </div>


                </div>
                <h1 className='font-bold mb-7 text-center text-xl sm:text-2xl lg:text-3xl underline'>Our services</h1>
                <div className='flex flex-col md:grid md:grid-cols-2   gap-8 md:gap-5  lg:gap-x-5 xl:gap-x-5 xl:gap-y-5 md:justify-items-center md:w-130 m-auto lg:w-130   justify-center items-center'>
                    <div className='md:w-full blurr3'>
                        <div className='absolute hidden  bg-yellow-900 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>clothes</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JiZVoTByZDrxh9SjmEj2075W9KcHcupMhg&usqp=CAU" className='w-72 h-48 lg:w-full lg:h-72 md:w-full sm:w-96 xl:h-100 sm:h-56 object-cover' />
                    </div>
                    <div className='md:w-full blurr2'>
                        <div className='absolute hidden bg-yellow-900 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Glasses</h1>
                            <p className=' hover:cursor-pointer md:text-lg '>see more...</p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xJ3fGQhyam7imxMbfaS8HTSCjNDapwOPug&usqp=CAU" className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56 object-cover' />
                    </div>
                    <div className='md:w-full blurr1 '>
                        <div className='absolute hidden bg-yellow-900 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Watches</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56 object-cover' />
                    </div>
                    <div className='md:w-full blurr'>
                        <div className='absolute hidden bg-yellow-900 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Shoes</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsGgY9dePqgfLjVghJAGmeI2_7i812lW-wg&usqp=CAU" className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56 ' />
                    </div>

                </div>
                {/*overflow hidden divs*/}


                {/* <div >*/}
                <div className='flex justify-between items-center'>
                    <h1 className=' font-extrabold my-3 ml-3 sm:ml-4 md:ml-5  text-xl sm:my-4  md:my-5 lg:my-6 lg:text-2xl lg:ml-6 md:text-xl'>New<span className='flex flex-wrap'> Arrivals</span></h1>
                    <NavLink to={'/product'}>   <div className='hidden font-semibold md:flex items-center  lg:pt-10 md:pr-5 lg:pr-7 md:pt-8 md:text-lg '> <p className=' lg:text-lg'>{`see more`}</p><div className='pt-1'><FaAngleRight className='text-lg' /></div></div></NavLink>
                </div>
                <div className=' m-auto w-120   gap-3 sm:gap-4 md:gap-5 lg:gap-5 flex overflow-x-auto overflow-div      '>

                    <div className='min-w-20 p-2 md:p-3 lg:p-4 sm:min-w-25 md:min-w-40 lg:min-w-30 rounded-lg border-2 border-yellow-900            '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className='rounded-lg ' />
                        <div className='flex flex-col pt-2 gap-1 sm:gap-2'>
                            <div className='flex text-yellow-900 sm:text-lg lg:text-xl '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <h1 className='text-lg font-bold lg:text-xl'>Rolex watch</h1>
                            <p className='font-semibold md:text-lg lg:text-xl'>$400</p>
                            <button className='w-full bg-yellow-900 font-semibold py-1 sm:py-2 sm:text-lg lg:text-xl text-white' onClick={buyorder}>Add to cart</button>
                        </div>
                    </div>
                    <div className='min-w-20 sm:min-w-25 md:min-w-40 lg:min-w-30    '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-20 sm:min-w-25 md:min-w-40 lg:min-w-30     '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-20 sm:min-w-25 md:min-w-40 lg:min-w-30   '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-20 sm:min-w-25 md:min-w-40 lg:min-w-30   '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>
                    <div className='min-w-20 sm:min-w-25 md:min-w-40 lg:min-w-30  '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className=' ' />

                    </div>


                </div>
                <NavLink to={'/product'}><div className='flex md:hidden  pt-4 pl-3 sm:pl-4 '><p className='font-semibold  '>See all</p><div className='pt-1'><FaAngleRight className='text-lg ' /></div></div></NavLink>
                {/*</div>*/}
                {/*ends*/}

                {/*about starts*/}
                <div className='md:flex md:p-10 shadow-lg w-110 m-auto  mt-10    p-5 sm:p-10 sm:px-20 '>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XwgxBgBRVxNaZM2ZGtxV8Jy8YSEKG8_Vrw&usqp=CAU' className='w-full md:h-72 h-64 ' />
                    <div className='w-full pt-4 text-center md:pt-0 md:pl-8'>
                        <h1 className='font-bold text-lg md:text-2xl lg:text-3xl font-serif    '>
                            Special Fashon sales
                        </h1>
                        <p className='mt-3 md:mt-4 lg:mt-8 md:text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum illum quam numquam impedit quo? Facere, optio! Voluptatum, possimus? Voluptatum corrupti error.

                        </p>
                        <div className='md:flex justify-center items-center gap-5 mt-6 lg:mt-10'>
                            <h1 className='w-30 border border-dashed  border-black mt-3 md:mt-0  md:w-24 md:rounded-lg md:h-10 flex justify-center items-center font-bold md:text-lg h-8  ' onClick={showmenu1}>30% OFF</h1>
                            <NavLink to={'/product'}> <button className='w-40 bg-yellow-900 mt-4 text-white md:w-24 md:mt-0  md:h-10 md:rounded-lg font-semibold h-8 md:text-lg'>Shop Now</button></NavLink>
                        </div>
                    </div>
                </div>
                {/*about ends*/}
                <div className='grid grid-cols-2 w-110 gap-4 justify-items-center m-auto lg:flex mt-7 sm:mt-8 md:mt-10 md:gap-5 text-white'>
                    <div className=' bg-yellow-900 outline outline-2 outline-yellow-700 w-full h-40 md:h-44 pt-4 pl-2 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl '>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'>   <FaCar className='text-xl font-bold sm:text-2xl ' /></div>
                        <h2 className='text-lg font-bold sm:text-xl '>Free shipping</h2>
                        <p className='font-semibold md:text-lg '>Order above $200. </p>
                    </div>
                    <div className='bg-yellow-900 outline outline-2 outline-yellow-700  w-full h-40 md:h-44   pt-4 pl-2  lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'>    <FaWallet className='text-xl font-bold sm:text-2xl ' /></div>
                        <h2 className='text-lg font-bold sm:text-xl '>Money back</h2>
                        <p className='font-semibold md:text-lg '>30 days guarantee.</p>
                    </div>
                    <div className=' bg-yellow-900 outline outline-2 outline-yellow-700 w-full h-40 md:h-44  pt-4 px-2 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'>   <FaLock className='text-xl font-bold sm:text-2xl ' /></div>
                        <h2 className='text-lg font-bold sm:text-xl whitespace-nowrap '>Secure payments</h2>
                        <p className='font-semibold md:text-lg '>Secure by stripe.</p>
                    </div>
                    <div className='bg-yellow-900 outline outline-2 outline-yellow-700 w-full h-40 md:h-44  pt-4 pl-2 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5 sm:pt-6 md:pl-6 md:pt-6 rounded-xl'>
                        <div className='w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center bg-yellow-700 text-white items-center'>  <FaPhone className='text-xl font-bold sm:text-2xl rotate-180 ' /></div>
                        <h2 className='text-lg font-bold sm:text-xl '>24/7 support</h2>
                        <p className='font-semibold md:text-lg '>Phone and email support.</p>
                    </div>
                </div>
            </section>
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

                        <NavLink to='product'><li>Product</li></NavLink>
                        <NavLink to='contact'><li>Contact</li></NavLink>
                        <NavLink to='about'><li>About us</li></NavLink>

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

export default Home