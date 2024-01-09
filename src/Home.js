import React from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

import './swiper.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

const Home = () => {
    const [menubar, setmenubar] = useState(false)
    const [array, setarray] = useState(0)
    function showmenu() {
        setmenubar(prev => !prev)
    }

    /*setInterval()
    useEffect(() => {
        const interval = setInterval(() => {

            setarray(prev => prev + 1)



        }, 2000)
        return () => clearInterval(interval)
    }, []
    )*/

    return (
        <div className={`${menubar ? 'home' : ''}  `}>

            <header className='fixed flex justify-between items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 w-full m-0 bg-white z-10 shadow-lg '>
                <h1 className={`font-bold text-xl sm:text-2xl lg:text-2xl h ${menubar ? 'invisible lg:visible' : 'visble'}`}><span className=''>#</span>Glamour Grove</h1>
                <ul className='hidden lg:flex gap-12 lg:gap-20 xl:gap-24 md:text-lg lg:text-xl'>
                    <NavLink to='/'>  <li className='font-bold'>Home</li></NavLink>

                    <NavLink to='/product'><li>Product</li></NavLink>
                    <NavLink to='/contact'><li>contact</li></NavLink>
                    <NavLink to='/about'><li>About us</li></NavLink>

                </ul>
                <div className='flex gap-5 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-15 items-center bg-yellow-800 py-3 px-6 md:py-3 lg:py-4 md:px-8 rounded-3xl text-white '>
                    <NavLink to='/cart' className=' '><FaShoppingCart className='md:text-xl lg:text-2xl hover:scale-125' /></NavLink>
                    <FaBell className=' md:text-xl lg:text-2xl hover:scale-125' />
                    <FaBars className='md:hidden text-lg sm:text-xl hover:scale-125 ' onClick={showmenu} />
                    <FaUserCircle className='hidden md:block text-xl lg:text-2xl hover:scale-125' onClick={showmenu} />
                </div>

                <div className={`menu lg:w-15 md:w-25 sm:w-25 w-140 h-screen      bg-white top-0  lg:top-24 shadow-lg shadow-black rounded-lg right-0  md:right-3 fixed z-30  lg:h-120 ${menubar ? 'block transition-all  duration-2000 ease-in-out   ' : 'hidden transition-all duration-1000 ease-out'} `}>
                    <div className=' h-40'></div>
                    <ul>
                        <li onClick={showmenu}>shop</li>
                        <li>pending order</li>
                        <li>new order</li>
                        <li>history</li>
                        <li>Favourite</li>
                    </ul>
                </div>
            </header >

            <div className='         pt-24 sm:pt-36 md:pt-40 lg:pt-40   '>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}


                    spaceBetween={20}
                    slidesPerView={1}

                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 3000, // Autoplay delay in milliseconds
                        disableOnInteraction: false, // Allow manual navigation to stop autoplay
                    }}


                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')} className='   w-120 sm:w-130 lg:w-140 m-auto   '>

                    <SwiperSlide>                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center   ' />
                    </SwiperSlide>

                    <SwiperSlide>                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTxreOJSjKV3Rr6tYE-2XYcPlaHcuBs4nUg&usqp=CAU' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center    ' />
                    </SwiperSlide>

                    <SwiperSlide>                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2o09ztmF7LPpqO-80mbCFlOvnDlkF0CwI7w&usqp=CAU' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center object-cover   ' />
                    </SwiperSlide>
                    <SwiperSlide>                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='min-w-full h-72       md:h-96 bg-no-repeat bg-cover bg-center   ' />
                    </SwiperSlide>
                    <SwiperSlide>                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center   ' />
                    </SwiperSlide>
                    <SwiperSlide>                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='min-w-full h-72      md:h-96 bg-no-repeat bg-cover bg-center   ' />
                    </SwiperSlide>


                </Swiper>
            </div>

            <section>
                <div className=' mt-10 lg:px-10 text-center mb-8 gap-3 sm:gap-4 flex-col flex md:flex-row md:gap-10 lg:w-130  md:m-auto md:w-130 md:justify-between  md:items-center md:mt-12 md:mb-12'>
                    <h1 className='text-xl font-bold sm:text-2xl  lg:text-3xl whitespace-nowrap'>Simply unique/<span className='md:flex md:flex-wrap'>simply better</span>  </h1>
                    <p className='px-5 sm:px-14 md:px-0 '><strong>Glamour Grove</strong> is a gift and decoration store based in hcmc, vietnie since 2019.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className='flex flex-col md:grid md:grid-cols-2   gap-8 md:gap-5  lg:gap-x-5 xl:gap-x-5 xl:gap-y-5 md:justify-items-center md:w-130 m-auto lg:w-130   justify-center items-center'>
                    <div className='md:w-full blurr3'>
                        <div className='absolute bg-yellow-800 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>clothes</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JiZVoTByZDrxh9SjmEj2075W9KcHcupMhg&usqp=CAU" className='w-72 h-48 lg:w-full lg:h-72 md:w-full sm:w-96 xl:h-100 sm:h-56 object-cover' />
                    </div>
                    <div className='md:w-full blurr2'>
                        <div className='absolute bg-yellow-800 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Glasses</h1>
                            <p className=' hover:cursor-pointer md:text-lg '>see more...</p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xJ3fGQhyam7imxMbfaS8HTSCjNDapwOPug&usqp=CAU" className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56 object-cover' />
                    </div>
                    <div className='md:w-full blurr1 '>
                        <div className='absolute bg-yellow-800 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Watches</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56 object-cover' />
                    </div>
                    <div className='md:w-full blurr'>
                        <div className='absolute bg-yellow-800 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Shoes</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsGgY9dePqgfLjVghJAGmeI2_7i812lW-wg&usqp=CAU" className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56 ' />
                    </div>

                </div>
                {/*overflow hidden divs*/}


                {/* <div >*/}
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold my-2 ml-3 sm:ml-4 md:ml-5  text-lg sm:my-4  md:my-5 lg:my-6 lg:text-2xl lg:ml-6 md:text-xl'>New<span className='flex flex-wrap'> Arrivals</span></h1>
                    <p className='hidden md:block lg:mt-10 md:mr-5 lg:mr-6 md:mt-8 lg:text-lg'>more products...</p>
                </div>
                <div className=' m-auto w-120   gap-3 sm:gap-4 md:gap-5 lg:gap-5 flex overflow-x-auto overflow-div      '>

                    <div className='min-w-20 p-2 sm:min-w-25 md:min-w-40 lg:min-w-30 rounded-lg border-2 border-yellow-800            '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='' className='rounded-lg ' />
                        <div>
                            <div className='flex text-yellow-800 '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <h1>Rolex watch</h1>
                            <p>$400</p>
                            <button className='w-full bg-yellow-800 font-semibold py-1 sm:py-2 sm:text-lg lg:text-xl text-white'>Add to cart</button>
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
                <p className='md:hidden mt-2 ml-3 sm:ml-4  '>more products...</p>
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
                            <h1 className='w-30 border border-dashed  border-black mt-3 md:mt-0 lg:w-20 md:w-24 md:rounded-lg md:h-10 flex justify-center items-center font-bold md:text-lg h-8  '>30% OFF</h1>
                            <button className='w-40 bg-yellow-800 mt-4 text-white md:w-24 md:mt-0 lg:w-20 md:h-10 md:rounded-lg font-semibold h-8 md:text-lg'>Shop Now</button>
                        </div>
                    </div>
                </div>
                {/*about ends*/}
                <div className='grid grid-cols-2 w-110 gap-4 justify-items-center m-auto lg:flex mt-7 sm:mt-8 md:mt-10 md:gap-5 text-white'>
                    <div className=' bg-yellow-800 w-full h-40 md:h-44 pt-4 pl-4 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl '>
                        <FaCar className='text-xl font-bold sm:text-2xl ' />
                        <h2 className='text-lg font-bold sm:text-xl '>Free shipping</h2>
                        <p className='font-semibold md:text-lg '>Order above $200. </p>
                    </div>
                    <div className='bg-yellow-800   w-full h-40 md:h-44   pt-4 pl-4  lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl'>
                        <FaWallet className='text-xl font-bold sm:text-2xl ' />
                        <h2 className='text-lg font-bold sm:text-xl '>Money back</h2>
                        <p className='font-semibold md:text-lg '>30 days guarantee.</p>
                    </div>
                    <div className='bg-yellow-800 w-full h-40 md:h-44  pt-4 px-4 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl'>
                        <FaLock className='text-xl font-bold sm:text-2xl ' />
                        <h2 className='text-lg font-bold sm:text-xl '>Secure payments</h2>
                        <p className='font-semibold md:text-lg '>Secure by stripe.</p>
                    </div>
                    <div className='bg-yellow-800 w-full h-40 md:h-44  pt-4 pl-4 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5 sm:pt-6 md:pl-6 md:pt-6 rounded-xl'>
                        <FaPhone className='text-xl font-bold sm:text-2xl rotate-180 ' />
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

export default Home