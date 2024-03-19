import React, { useRef,useEffect } from 'react'

import { Navigate, useNavigate, Outlet, redirect, useParams, useOutletContext } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import cartimg from './icons8-shopping-cart-48.png';
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
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
    const [myid,setmyId] = useState(null)
    const [error,setError] = useState({})
    const [shopitems,setshopitems] = useState({})
    const [checkitems,setcheckitems] = useState({})
    const [completeitems,setcompleteitems] = useState({})
    const [countries,setcountries] = useState([])
    const {data,id}= useOutletContext()
    const params =useParams()
    const [array, setarray] = useState(0)
    const [nextcart3data,setnextcart3data]=useState({})
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
     


    function showmenu() {
        setmenubar(prev => !prev)
        
    }
   
    useEffect(() => { 
    let currentid;
    const myId = localStorage.getItem('mycart')
    setmyId(myId)
    if (params.id !== myId) {
        currentid = params.id 
      }
    if (params.id === myId) {
        currentid = myId
    }
    if (params.id === ':id') {
        currentid = myId
    }
    if ( myId==null) {
        currentid = params.id
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
    
    id&&getcart()
      
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
    id&&getcountry()
      
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

    //opens the div that has list of countries
    const getcountry = ()=> {
        setcountry(prev => !prev)
    }
    
useEffect(() => {  
 if (cart) {
        const shopcart = cart?.progressbar?.filter(prev => prev.proname === 'shopcart')
        const checkout = cart?.progressbar?.filter(prev => prev.proname === 'checkout')
        const complete = cart?.progressbar?.filter(prev => prev.proname === 'complete')
        let funcshopitems = shopcart ? shopcart[0] : null
        setshopitems(funcshopitems)
        let funccheckitems = checkout ? checkout[0] : null
        setcheckitems(funccheckitems)
        let funccompleteitems = complete ? complete[0] : null
        setcompleteitems(funccompleteitems)
      }
    
  }, [cart]);

    
const nextcart = async () => {
         
        const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/shopcart/${cart._id}/${shopitems?._id}`, option);
                const data = await response.json()
               console.log(data)
            }

            catch (err) {
            setError(err) 
            console.log(err)
        } 
        
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
    const nextcart2 = async()=>{
        const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/checkcart/${cart._id}/${checkitems?._id}`, option);
                const data = await response.json()
               console.log(data)
            }

            catch (err) {
            setError(err) 
            console.log(err)
        } 
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
    
    const nextcart3 = async () => {
        let userId = data._id
        const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                }
        }
        const option2 = {
            method: 'DElETE',
            headers: {
                'content-type': 'application/json',
            }
    }
        try {
            const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/complete/${cart._id}/${userId}`, option);
            const data = await response.json()
            const response2  = data &&await fetch(`https://backend-e-commerce-g7of.onrender.com/complete/${cart._id}/${userId}`, option2);
            const data2 = await response2.json()
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            const subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: 'BK3JoQ6S3KgLGwUfe3fyr3lH2fXb6kihvuHsLeDaObR1qG8VtRhBcRd_r-8-wMd4KTV79XtfPu83Vjq3bFEmqyo',
            });
            const options =  {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, subscription }),
              }
            // Send subscription and user ID to the server
           const res= data2 &&  await fetch(`https://backend-e-commerce-g7of.onrender.com/subscribe`, options);
            console.log(res)
            const res2 =res?.ok && await fetch(`https://backend-e-commerce-g7of.onrender.com/send-notification2/${userId}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              setnextcart3data(res2)
            }
            catch (err) {
            setError(err) 
            console.log(err)
        }   
        nextcart3data&&navigate('/')
        nextcart3data&&localStorage.removeItem('mycart')
    }
    function startshop() {
        navigate("/product")
    }

    const deleteitem = async (id) => {
        const option = {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/delprod/${id}/${cart._id}`, option);
                const data = await response.json()
               console.log(data)
            }

            catch (err) {
            setError(err.message === 'Failed to fetch' ? { 'message': 'Failed to delete' }:err) 
            console.log(err.message)
        } 
        
    }
   console.log(bgcolor)
    return (
        <div className={`  ${showcountry ? 'background' : ''} ${menubar ? 'home' : ''}${popout ? 'p-home' : ''} ${bgcolor} ${textcolor} ${cart?.product?'h-full':'h-screen'}  `}>
            <header className={`fixed flex sm:justify-between gap-4 ${bgcolor} ${textcolor} ${mode.colormode&&' shadow-stone-800  shadow-lg'} items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4 w-full m-0  z-10 ${menubar ? 'shadow-none lg:shadow-lg' : 'shadow-lg'} `}>
                <NavLink to='../' className={'sm:absolute '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
                <div className='sm:m-auto flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold'>
                    <h1 className=''>Cart</h1>
                </div>
                <FaEllipsisV className='absolute right-3 sm:static' />
            </header >
            {error?.message !=='Failed to fetch' && error?.message && <div className={` w-107 sm:w-108 md:w-109 flex items-center justify-center   rounded-xl shadow-xl outline-yellow-900  outline outline-2  fixed popout z-30 bg-white min-h-101 sm:min-h-102 lg:min-h-101 `}>
                <div className='flex md:items-start flex-col md:flex-row  gap-3 md:gap-5'>
                    <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                    <div className='flex flex-col justify-center gap-1'>
                        <h1 className='font-bold sm:text-xl '>{error?.message}</h1>
                        <p className='md:text-lg'>Check your internet connection</p>
                        <div><button className='px-6 py-1 rounded-full bg-yellow-900 text-white' onClick={() =>setError(null)}> Try again</button></div>
                    </div>
                </div>
            </div>} 
            <div  >
                {cart?.product?.length === 0 || myid === null ? <div className='      lg:pt-10 h-screen flex flex-col justify-center items-center '> <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=626&ext=jpg&ga=GA1.2.103364066.1699032278&semt=ais" alt="" className='w-140 sm:w-22 md:w-10 lg:w-20 ' /> <p className='font-bold font-sans text-2xl sm:text-3xl lg:text-4xl'>Your cart is empty!</p><button className='bg-yellow-900 text-white font-semibold lg:text-lg w-12 sm:w-14 lg:w-16 h-10 mt-3  rounded-full' onClick={startshop}>Start Shopping</button></div> :
                    <section className='  pt-28 sm:pt-32 pb-10     lg:pt-32 '>
                        {cart.product ? <>
                            <h1 className='text-center   font-semibold text-xl  sm:mb-5  mb-5   md:mb-5  lg:mb-7 xl:text-3xl sm:text-2xl lg:text-3xl'>{cart?.title}</h1>
                            <div className='flex   top-20 sm:top-24   sm:overflow-visible  overflow-hidden  w-full pl-3 sm:px-5 md:pl-0 gap-5 sm:gap-2 xl:gap-6  sm:justify-center  '>
                                <div ref={firstref} className={`block  sm:translate-x-0`}> <div className='flex items-center   text-lg font-bold gap-3 w-44 sm:w-48  md:w-52 lg:w-60'>   <div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white ${shopitems?.progess ? 'bg-yellow-900' : mode.colormode?'bg-white':'bg-black'} flex justify-center items-center`}>{shopitems?.progess ? <FaCheck className='text-sm' /> : <p className={`${mode.colormode?'text-black':'text-white'}`}>1</p>}</div><div className={`flex ${shopitems?.progess ? ' text-yellow-900' : mode.colormode?'text-white':'text-black'}`}>Shopping <span className='flex flex-nowrap'>cart</span></div></div><div className={`${shopitems?.progess ? 'border-yellow-900' : mode.colormode?'border-white':'border-black'} w-full border mt-4`}></div></div>
                                <div ref={secondref} className={`block   sm:translate-x-0 `}>   <div className='flex items-center text-lg font-bold gap-3 w-44 sm:w-48 md:w-52 lg:w-60'><div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9  rounded-3xl text-white ${checkitems?.progess ? ' bg-yellow-900 ' : mode.colormode?'bg-white':'bg-black'} flex justify-center items-center`}>{checkitems?.progess ? <FaCheck className='text-sm' /> : <p className={`${mode.colormode?'text-black':'text-white'}`}>2</p>}</div><div className={`flex ${checkitems?.progess ? ' text-yellow-900' : mode.colormode?'text-white':'text-black'}`}>Check  <span className='flex flex-nowrap'>out detail</span></div></div><div className={`${checkitems?.progess ? 'border-yellow-900' : mode.colormode?'border-white':'border-black'} w-full border mt-4`}></div></div>
                                <div ref={thirdref} className={`block   sm:translate-x-0 `}>   <div className='flex items-center text-lg font-bold gap-3 w-44 sm:w-48 md:w-52 lg:w-60'><div className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-3xl text-white ${changecart3 ? 'bg-yellow-900 ' :  mode.colormode?'bg-white':'bg-black'} flex justify-center items-center`}>{changecart3 ? <FaCheck className='text-sm' /> : <p className={`${mode.colormode?'text-black':'text-white'}`}>3</p>}</div><div className={`flex ${changecart3 ? 'text-yellow-900' : mode.colormode?'text-white':'text-black'} `}>Complete</div></div><div className={changecart3 ? `border-yellow-900 w-full border mt-4 ` : `${mode.colormode?'border-white':'border-black'} w-full border mt-4`}></div></div>
                            </div>

                            <Outlet context={{ nextcart, completeitems, nextcart2, nextcart3, checkitems, showcountry, data, getcountry, cart, countries, shopitems, deleteitem }} />
                        </> : !error.message ?
                        <motion.div animate={{rotate:360}} initial={{x:'50%',x:'-50%'}} transition={{duration:2,repeat: Infinity, ease: 'linear'}} className='fixed popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 w-9 h-9 lg:w-11 lg:h-11 rounded-full  '>
                        <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
                        </motion.div> : <div className={` w-107 sm:w-108 md:w-109 flex items-center justify-center   rounded-xl shadow-xl outline-yellow-900  outline outline-2  fixed popout z-30 bg-white min-h-101 sm:min-h-102 lg:min-h-101 `}>
                        <div className='flex md:items-start flex-col md:flex-row  gap-3 md:gap-5'>
                            <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                            <div className='flex flex-col justify-center gap-1'>
                                <h1 className='font-bold sm:text-xl '>{error?.message}</h1>
                                <p className='md:text-lg'>Check your internet connection</p>
                                < div><button className='px-6 py-1 rounded-full bg-yellow-900 text-white' onClick={()=>window.location.reload()}>Reload</button></div>
                            </div>
                        </div>
                        </div>}
                    </section>}
            </div>
        </div >
    )
}

export default Cart