import React, { useRef,useEffect } from 'react'

import { Navigate, useNavigate, Outlet, redirect, useParams } from 'react-router-dom'
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
    const [paramId, setparamId] = useState('')
    const [emptycart, setemptycart] = useState(false)
    const [cart,setcart] = useState({})
    const [error,setError] = useState({})
    const [countries,setcountries] = useState([])
 
    const params =useParams()
    const [array, setarray] = useState(0)


    function showmenu() {
        setmenubar(prev => !prev)
    }

    const b = useRef()

useEffect(() => { 
    let currentid;
      const myId = localStorage.getItem('mycart')
    if (params.id !== myId) {
        currentid = params.id 
      }
    if (params.id == myId) {
        currentid = myId
    }
    if (params.id == ':id') {
        currentid = myId
    }
    
  
        const getcart = async () => {
               
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/getcart/${currentid}`, option);
                const data = await response.json()
               setcart(data)
            }

            catch (err) {
                setError(err)

            }
      }
    
      getcart()
      
    const getcountry = async()=> {
         const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
        try {
                const response = await fetch('https://backend-e-commerce-g7of.onrender.com/countrylist', option);
                const data = await response.json()
                setcountries(data)
            }
            catch (err) {
                setError(err)
            }
    }
      getcountry()
      
}, [cart]);

    useEffect(() => {
        if (paramId !=='') {
        localStorage.setItem('mycart', paramId)
        }       
    }, [paramId]);

    useEffect(() => {
        if (params.id !==':id') {
        setparamId(params.id)
        }           
    }, [params.id]);

    const getcountry = ()=> {
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
        <div className={`  ${showcountry ? 'background' : ''} ${menubar ? 'home' : ''}${popout ? 'p-home' : ''} h-full  `}>
            <header className={`fixed flex sm:justify-between gap-4 items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4 w-full m-0 bg-white z-10 ${menubar ? 'shadow-none lg:shadow-lg' : 'shadow-lg'} `}>
                <NavLink to='../' className={'sm:absolute '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <div className='sm:m-auto flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold'>
                    <h1 className=''>Cart</h1>

                </div>
                <FaEllipsisV className='absolute right-3 sm:static' />
            </header >
         
            <div  >
                {cart?.product?.length === 0? <div className='      lg:pt-10 h-screen flex flex-col justify-center items-center '> <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=626&ext=jpg&ga=GA1.2.103364066.1699032278&semt=ais" alt="" className='w-140 sm:w-22 md:w-10 lg:w-20 ' /> <p className='font-bold font-sans text-2xl sm:text-3xl lg:text-4xl'>Your cart is empty!</p><button className='bg-yellow-900 text-white font-semibold lg:text-lg w-12 sm:w-14 lg:w-16 h-10 mt-3  rounded-full' onClick={startshop}>Start Shopping</button></div> :
                    <section className='  pt-28 sm:pt-32 pb-10     lg:pt-32 '>
                        {cart.product ?<>
                        <h1 className='text-center   font-semibold text-xl  sm:mb-5  mb-5   md:mb-5  lg:mb-7 xl:text-3xl sm:text-2xl lg:text-3xl'>{cart?.title}</h1>
                        <div className='flex bg-white  top-20 sm:top-24   sm:overflow-visible  overflow-hidden  w-full pl-3 sm:px-5 md:pl-0 gap-5 sm:gap-2 xl:gap-6  sm:justify-center  '>
                            <div ref={firstref} className={`block  sm:translate-x-0`}> <div className='flex items-center   text-lg font-bold gap-3 w-44 sm:w-48  md:w-52 lg:w-60'>   <div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white ${changecart ? 'bg-yellow-900' : 'bg-black'} flex justify-center items-center`}>{changecart ? <FaCheck className='text-sm' /> : 1}</div><div className={`flex ${changecart ? ' text-yellow-900' : 'text-black'}`}>Shopping <span className='flex flex-nowrap'>cart</span></div></div><div className={`${changecart ? 'border-yellow-900' : 'border-black'} w-full border mt-4`}></div></div>
                            <div ref={secondref} className={`block   sm:translate-x-0 `}>   <div className='flex items-center text-lg font-bold gap-3 w-44 sm:w-48 md:w-52 lg:w-60'><div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9  rounded-3xl text-white ${changecart2 ? ' bg-yellow-900 ' : 'bg-black  '} flex justify-center items-center`}>{changecart2 ? <FaCheck className='text-sm' /> : 2}</div><div className={`flex ${changecart2 ? ' text-yellow-900' : 'text-black'}`}>Check  <span className='flex flex-nowrap'>out detail</span></div></div><div className={`${changecart2 ? 'border-yellow-900' : 'border-black'} w-full border mt-4`}></div></div>
                            <div ref={thirdref} className={`block   sm:translate-x-0 `}>   <div className='flex items-center text-lg font-bold gap-3 w-44 sm:w-48 md:w-52 lg:w-60'><div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white ${changecart3 ? 'bg-yellow-900 ' : 'bg-black  '} flex justify-center items-center`}>{changecart3 ? <FaCheck className='text-sm' /> : 3}</div><div className={`flex ${changecart3 ? 'text-yellow-900' : 'text-black'} `}>Complete</div></div><div className={changecart3 ? `border-yellow-900 w-full border mt-4 ` : `border-black w-full border mt-4`}></div></div>
                        </div>

                        <Outlet context={{ nextcart, nextcart2, nextcart3, showcountry, getcountry,cart,countries }} />
                       </> : <p>please wait...</p>}
                    </section>}
            </div>
        </div >
    )
}

export default Cart