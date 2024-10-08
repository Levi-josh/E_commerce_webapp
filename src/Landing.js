import { FaBars, FaSearch, FaBell, FaAddressBook,FaSun, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaTimesCircle, FaHome, FaShoppingBag, FaExclamationCircle, FaShopify, FaShoppingBasket, FaHistory, FaArrowRight, FaAngleRight, FaArrowDown, FaAngleDown, FaToggleOn, FaToggleOff, FaSubscript, FaUser, FaQuestion, FaVest, FaShare, FaMoneyBill, FaLightbulb, FaSearchPlus, FaPlusSquare, FaMoon, } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink, json, useLocation, useNavigate,useSearchParams, useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import { color, delay, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import myitems from './Newarrival.json'
import React, { useRef } from 'react'

const Landing = () => {
    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    const navigate = useNavigate()
    const [items,setitems]=useState(myitems)
    const [error,seterror]=useState({})
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext

  return (
    <div className={`  ${menubar ? ` home ${mode.colormode?'before:bg-white fixed before:bg-opacity-20':'before:bg-black before:bg-opacity-20'}` : ''}${popout ? `p-home ${mode.colormode?'before:bg-white before:bg-opacity-20':'before:bg-black before:bg-opacity-20'}` : ''} m-0  h-full ${bgcolor}  ${textcolor} `}  onScroll={(e) => { console.log(e) }} >
    <div className='w-full  h-screen px-2 sm:px-5 pb-5   '>
        <div className='w-full h-full flex flex-col    '>
           <header className={` flex justify-between items-center  h-107  ${mode.colormode&&' shadow-stone-700  shadow-md'}   w-full m-0 ${bgcolor} ${textcolor}  `}>
                <motion.div animate={{ x: 0 }} transition={{ type: 'tween', duration: 1 }} initial={{ x: -100 }} className={`    ${menubar ? 'invisible lg:visible' : 'visble'}`} >
                    <p className="font-bold text-lg sm:text-2xl  xl:text-3xl">Glamour Grove</p>
                </motion.div>
                <ul className='hidden lg:flex  lg:gap-18 xl:gap-20 md:text-lg '>
                    <NavLink to='/'>  <li className=''>Home</li></NavLink>
                    <NavLink to='/product'><li>Product</li></NavLink>
                    <NavLink ><li>contact</li></NavLink>
                    <NavLink ><li>About us</li></NavLink>
                </ul>
                <div className='flex gap-4 items-center     '>
                    <button>Sign in</button>
                    <button className='bg-yellow-900  px-3 py-1 sm:px-5 sm:py-2 rounded-xl text-white'>Sign up</button>
                </div>
            </header>
            <div className='w-full h-123 hero rounded-xl overflow-hidden before:bg-gradient-to-r  before:from-blurblack  before:via-blurblack   before:to-blurblack2  '>
                <div className='absolute flex flex-col text-white justify-center gap-5 z-10  h-full pl-5 w-130 sm:w-140 xl:w-22'>
                    <h1 className='  font-bold text-5xl sm:text-6xl lg:text-7xl  font-serif leading11  '>More than just a shopping app</h1>
                    <p className='font-serif text-sm sm:text-base leading-7 sm:leading-10'>Glamour Grove is your one stop shop for your clothes,shoes,jewellries and more.we were not just given the title "the best shopping app" we earned it.</p>
                    <button className='px-3 w-32 py-1 bg-yellow-900 text-white rounded-xl'>Shopping now</button>
                </div>
                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='w-full h-full object-cover  bg-no-repeat bg-cover bg-center   ' />
            </div>
        </div>
    </div>
    <div className='    md:pb-0 gap-5 sm:gap-10  flex flex-col px-5  md:gap-0 md:block'>
   
        <h1 className='font-bold  md:mb-9 text-center text-2xl sm:text-3xl lg:text-4xl '>Our services</h1>
        </div> 
        <section className='mt-7 md:mt-0'>
            <div className='flex flex-col w-120 sm:w-110  md:grid md:grid-cols-2   gap-8 md:gap-5  lg:gap-x-5 xl:gap-x-5 xl:gap-y-5 md:justify-items-center  m-auto lg:w-130   justify-center items-center'>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden'>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl absolute text-white z-10 '>Clothes</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JiZVoTByZDrxh9SjmEj2075W9KcHcupMhg&usqp=CAU" className='w-full h-60  sm:h-72  xl:h-100  ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden '>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl absolute text-white z-10'>Glasses</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xJ3fGQhyam7imxMbfaS8HTSCjNDapwOPug&usqp=CAU" className='w-full h-60  sm:h-72  xl:h-100 object-cover ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center  overflow-hidden'>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl absolute text-white z-10'>Watches</h1>
                    <img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full h-60  sm:h-72  xl:h-100 object-cover ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden  '>
                    <h1 className='font-bold   text-3xl sm:text-4xl lg:text-4xl absolute text-white z-10'>Shoes</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsGgY9dePqgfLjVghJAGmeI2_7i812lW-wg&usqp=CAU" className='w-full h-60  sm:h-72 xl:h-100   ' />
                </div>

            </div>
            {/*overflow hidden divs*/}

            {/* <div >*/}
            <div className='flex justify-between items-center'>
                <h1 className=' font-extrabold my-3 ml-3 sm:ml-4 md:ml-5  text-xl sm:my-4  md:my-5 lg:my-6 lg:text-2xl lg:ml-6 md:text-xl'>New<span className='flex flex-wrap'> Arrivals</span></h1>
                <NavLink to={'/product'}>   <div className='hidden font-semibold md:flex items-center  lg:pt-10 md:pr-5 lg:pr-7 md:pt-8 md:text-lg '> <p className=' lg:text-lg'>{`see more`}</p><div className='pt-1'><FaAngleRight className='text-lg' /></div></div></NavLink>
            </div>
            <div className=' m-auto w-120   gap-3 sm:gap-4 md:gap-5 lg:gap-5 flex overflow-x-auto overflow-div   '>
                {items?.map(prev => {
                    return (
                        <div className='min-w-20 p-2 md:p-3 lg:p-4 sm:min-w-25 md:min-w-40 lg:min-w-30 rounded-lg border-2 border-yellow-900            '>
                            <img src={prev.image} alt='' className='rounded-lg w-full ' />
                            <div className='flex flex-col pt-2 gap-1 sm:gap-2'>
                                <div className={`flex ${mode.colormode?'text-white':'text-black'} sm:text-lg lg:text-xl `}>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                                <h1 className='text-lg font-bold lg:text-xl'>{prev.itemname}</h1>
                                <p className='font-semibold md:text-lg lg:text-xl'>{`$${prev.price}`}</p>
                                <button className={`w-full bg-yellow-900 font-bold py-1 sm:py-2 sm:text-lg lg:text-xl ${!mode.colormode?'text-white':'text-black'}`} >Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <NavLink to={'/product'}><div className='flex md:hidden  pt-4 pl-3 sm:pl-4 '><p className='font-semibold  '>See all</p><div className='pt-1'><FaAngleRight className='text-lg ' /></div></div></NavLink>
            {/*</div>*/}
            {/*ends*/}

            {/*about starts*/}
            <div className={`md:flex md:p-10 shadow-lg w-110 m-auto  mt-10 ${mode.colormode&&'bg-opacity-50 bg-black  shadow-stone-700  shadow-md'}    p-5 sm:p-10 sm:px-20 `}>

                <img src='https://img.freepik.com/free-vector/banner-black-friday-super-sale-realistic-3d-black-shopping-cart_548887-22.jpg?size=626&ext=jpg&ga=GA1.2.732548087.1710974042&semt=ais' className='w-auto md:w-22  md:h-72 h-64 ' />
                <div className='w-full pt-4 text-center md:pt-0 md:pl-8'>
                    <h1 className='font-bold text-lg md:text-2xl lg:text-3xl font-serif    '>
                        Special Fashon sales
                    </h1>
                    <p className='mt-3 md:mt-4 lg:mt-8 md:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum illum quam numquam impedit quo? Facere, optio! Voluptatum, possimus? Voluptatum corrupti error.
                    </p>
                    <div className='md:flex justify-center items-center gap-5 mt-6 lg:mt-10'>
                        <h1 className={`w-30 border border-dashed ${mode.colormode?'border-white':' border-black'} mt-3 md:mt-0  md:w-24 md:rounded-lg md:h-10 flex justify-center items-center font-bold md:text-lg h-8  `} >30% OFF</h1>
                        <NavLink to={'/product'}> <button className={`w-40 bg-yellow-900 mt-4 ${!mode.colormode?'text-white':'text-black'} md:w-24 md:mt-0  md:h-10 md:rounded-lg font-bold h-8 md:text-lg`}>Shop Now</button></NavLink>
                    </div>
                </div>
            </div>
            {/*about ends*/}
            <div className={`grid grid-cols-2 w-110 gap-4 justify-items-center m-auto lg:flex mt-7 sm:mt-8 md:mt-10 md:gap-5  `}>
                <div className={` bg-yellow-900  w-full h-40 md:h-44 pt-4 pl-2 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl ${!mode.colormode?'text-white':'text-black'} `}>
                    <div className={` ${textcolor} ${bgcolor} w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center  items-center`}>   <FaCar className='text-xl font-bold sm:text-2xl ' /></div>
                    <h2 className='text-lg font-bold sm:text-xl '>Free shipping</h2>
                    <p className={` font-semibold sm:text-lg `}>Order above $200. </p>
                </div>
                <div className={` bg-yellow-900  w-full h-40 md:h-44 pt-4 pl-2 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl ${!mode.colormode?'text-white':'text-black'} `}>
                    <div className={` ${textcolor} ${bgcolor} w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center  items-center`}>    <FaWallet className='text-xl font-bold sm:text-2xl ' /></div>
                    <h2 className='text-lg font-bold sm:text-xl '>Money back</h2>
                    <p className='font-semibold sm:text-lg '>30 days guarantee.</p>
                </div>
                <div className={` bg-yellow-900  w-full h-40 md:h-44 pt-4 pl-2 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl ${!mode.colormode?'text-white':'text-black'} `}>
                    <div className={` ${textcolor} ${bgcolor} w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center  items-center`}>   <FaLock className='text-xl font-bold sm:text-2xl ' /></div>
                    <h2 className='text-lg font-bold sm:text-xl whitespace-nowrap '>Secure payments</h2>
                    <p className='font-semibold sm:text-lg '>Secure by stripe.</p>
                </div>
                <div className={` bg-yellow-900  w-full h-40 md:h-44 pt-4 pl-2 lg:h-48 flex flex-col gap-1 lg:gap-3 lg:pt-5 lg:pl-5  sm:pt-6 md:pl-6 md:pt-6 rounded-xl ${!mode.colormode?'text-white':'text-black'} `}>
                    <div className={` ${textcolor} ${bgcolor} w-9 h-9 sm:w-410 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center  items-center`}>  <FaPhone className='text-xl font-bold sm:text-2xl rotate-180 ' /></div>
                    <h2 className='text-lg font-bold sm:text-xl '>24/7 support</h2>
                    <p className='font-semibold sm:text-lg '>Phone and email support.</p>
                </div>
            </div>
        </section>
   
    <footer className={` bg-black  text-white ${mode.colormode&&' shadow-inner shadow-stone-700'} px-5 sm:px-14 md:px-10 lg:px-20 xl:px-36 mt-7 sm:mt-8 md:mt-10 py-10 sm:py-14 md:pt-16 lg:pt-20 xl:pt-24 bottom-0 `}>
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

export default Landing