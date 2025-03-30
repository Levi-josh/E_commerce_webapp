import React, { useRef } from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook,FaSun, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaTimesCircle, FaHome, FaShoppingBag, FaExclamationCircle, FaShopify, FaShoppingBasket, FaHistory, FaArrowRight, FaAngleRight, FaArrowDown, FaAngleDown, FaToggleOn, FaToggleOff, FaSubscript, FaUser, FaQuestion, FaVest, FaShare, FaMoneyBill, FaLightbulb, FaSearchPlus, FaPlusSquare, FaMoon, FaCheckCircle, } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink, json, useLocation, useNavigate,useSearchParams, useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { changemode } from './features/redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import notify from './short-success-sound-glockenspiel-treasure-video-game-6346.mp3'
import { color, delay, motion } from 'framer-motion'
import cartimg from './icons8-shopping-cart-48.png';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import 'swiper/css/pagination';

import './swiper.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import myitems from './Newarrival.json'

const Home = () => {
    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    const [popout2, setpopout2] = useState(false)
    const [showinput, setshowinput] = useState(false)
    const [check, setcheck] = useState(false)
     const [loggedin, setloggedin] = useState(true)
    const navigate = useNavigate()
    const [array, setarray] = useState(0)
    const [scroll, setscroll] = useState(0)
    const [ring, setring] = useState(false)
    const [notedisplay, setnotedisplay] = useState('none')
    const [items,setitems]=useState(myitems)
    const [error,seterror]=useState({})
    const [showerror,setshowerror]=useState(false)
    const [checked,setchecked]=useState(true)
    const [added,setadded]=useState(false)
    const audiosound = useRef()
    const lognote = useRef()
    const noteref = useRef()
    const [intervalId, setIntervalId] = useState(null);
    const [newcartText, setnewcartText] = useState('');
    const [displaynote,setdisplaynote]= useState(false)
    const [selectedcart, setseletedcart] = useState('');
    const {data,note,runEffect,changeRunEffect1,Error1,id,signout,runEffect2}= useOutletContext()
    const mode = useSelector((state)=>state.changemode.value)
    const dispatch = useDispatch()
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const lpMenu = useRef(null);
    const smMenu = useRef(null);
   
 useEffect(() => {
     const selectedid = data?.items?.filter(prev => prev.selected === true)
        setseletedcart(selectedid && selectedid[0]?._id)
    })
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (lpMenu.current  && !lpMenu.current.contains(event.target) && smMenu.current && !smMenu.current.contains(event.target)) {
                setmenubar(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

const navSignIn = ()=>{
    navigate('/product')  
}
const scrolltoPage1 = (currentRef)=> {
    setmenubar(false)
    console.log(currentRef)
    setTimeout(() => {
        currentRef.current?.scrollIntoView({ behavior: "smooth" ,block:'center'});  
    }, 500);

    
  }
    function showmenu() {
        // setscroll(menubar ? scroll : window.scrollY)
        setmenubar(prev => !prev)
                // Notification.requestPermission().then(perm => {
                //     if (perm === 'granted') {
                //         new Notification('new note', {
                //             body: 'hello',
                //             icon: 'https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph',
                //             image: 'https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph'
                //         })
        
                //     }
                // })
    }
    function showmenu1() {
    setcheck(prev => !prev)
       
    }
    function showLpMenu() {
   setmenubar(prev=>!prev)
       
    }
   
    const buyorder = async (id) => {  
    const option = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
               
                if(data?.items?.length<1 && selectedcart===undefined){
                   navigate('/listcols')
                }if( data?.items.length>0 && selectedcart===undefined){
                    navigate('/listcols')
                }
                setdisplaynote(false)
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/addcart/${selectedcart}/${id}`, option);
                const data1 = await response.json()
               if(data1){
                setdisplaynote(true)
                if (audiosound.current) {
                    audiosound.current.play();
                }
                 setTimeout(() => {
                    setdisplaynote(false)
                   }, 2000);
               }

               
            }

            catch (err) {
            seterror(err)
            console.log(err)
            }
        setadded(prev => !prev)
        setTimeout(() => {
        setadded(prev => !prev)  
        }, 2000);    
    }
    
    return (
        <>{id&&<div className={`  ${menubar ? ` home  ${mode.colormode?'before:bg-white before:bg-opacity-20':'before:bg-black before:bg-opacity-20'}` : ''}${popout ? `p-home ${mode.colormode?'before:bg-white before:bg-opacity-20':'before:bg-black before:bg-opacity-20'}` : ''}  w-full overflow-x-hidden  h-full flex-col flex ${bgcolor}  ${textcolor} `}  onScroll={(e) => { console.log(e) }} >
            <header className={`fixed flex justify-between px-3  items-center h-16 sm:h-20 sm:px-8 md:px-12 lg:px-8    w-full  ${bgcolor} ${textcolor} z-20  `}>
                <motion.div animate={{ x: 0 }} transition={{ type: 'tween', duration: 1 }} initial={{ x: -100 }} className={`    ${menubar ? 'invisible lg:visible' : 'visble'}`} >
                    <div className='flex gap-2 items-center '>
                    {/* <img src={'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3012041/1.jpg?6275'} className={` w-405 h-9 sm:w-418 sm:h-12 rounded-full`}/> */}
                    <p className={`font-semibold text-sm sm:text-base`}>Glamour Grove</p>

                    </div>
                </motion.div>
                <ul className='hidden lg:flex  lg:gap-18 xl:gap-20 md:text-lg '>
                    <NavLink to='/'>  <li className=''>Home</li></NavLink>
                    <NavLink to='/product'><li>Product's</li></NavLink>
                    <li className='hover:cursor-pointer' onClick={()=>scrolltoPage1(contactRef)}>contact</li>
                    <li className='hover:cursor-pointer' onClick={()=>scrolltoPage1(aboutRef)} >About us</li>
                </ul>
                <div className='flex gap-7 sm:gap-20 md:gap-24 lg:gap-4  items-center     '>
                <NavLink to='/note' className=' '><div className={`flex ${bgcolor} ${textcolor}  items-center text-lg sm:text-xl   md:text-2xl justify-center text-black lg:hover:text-white lg:h-10 lg:w-101 rounded-full  hover:cursor-pointer lg:hover:bg-brown`}><p className='hidden'>Cart</p><svg
                    className="w-6 h-6 sm:w-7    sm:h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22Z"
                        fill="currentColor"
                    />
                <path
                    d="M18 16H6V10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10V16Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 16H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>
                </div></NavLink>
                <NavLink to={'/listcols'}>   <div className={` text-lg sm:text-xl ${bgcolor} ${textcolor} md:text-2xl    flex justify-center lg:h-10 lg:w-101  items-center  text-black  lg:hover:text-white rounded-full hover:cursor-pointer lg:hover:bg-brown`}> 
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3H5L6.68 14.39C6.81865 15.3682 7.63005 16 8.615 16H19.385C20.37 16 21.1814 15.3682 21.32 14.39L23 3H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="9" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="19" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    </div>
                    </NavLink>
                    <div onClick={showLpMenu} className={`text-lg sm:text-xl lg:hidden ${bgcolor} ${textcolor}    flex justify-center lg:h-10 lg:w-101  items-center text-black  lg:hover:text-white rounded-full hover:cursor-pointer lg:hover:bg-brown `} ref={smMenu}><FaBars className='lg:hidden text-lg sm:text-xl hover:scale-125 ' /></div>
                    <div className={`lg:flex items-center    ${textcolor} justify-center ${menubar ? '  text-white bg-brown hover:transition-all hover:duration-200 hover:ease-in-out' : 'lg:hover:bg-brown lg:hover:text-white'} text-black hover:cursor-pointer  text-lg  w-101  rounded-full hidden h-10 font-bold hover:font-normal `} onClick={showLpMenu} ref={lpMenu}><p className=''>Menu</p></div>
                </div>
            </header>
            <div>{<motion.div  initial={{x:'100%'}} animate={{x:menubar?window.matchMedia('(max-width: 768px)').matches?0:-12 :'100%'}} transition={{type:'tween',duration: 0.01}} className={`menu lg:w-15 fixed md:w-140 sm:w-130 w-110 h-full ${textcolor}    ${bgcolor}  lg:top-24 shadow-lg shadow-black rounded-lg right-0    z-30  lg:h-120  `}>

                <div className={` h-190 md:h-140 bg-brown  lg:border-b ${mode.colormode&&'lg:border-stone-700'} lg:rounded-t-xl flex rounded-b-xl lg:rounded-b-none justify-center items-center`}>
                    <FaTimesCircle className='absolute lg:hidden left-4 top-4  text-white z-40 text-2xl sm:text-2xl hover:cursor-pointer ' onClick={showmenu} />
                    {mode.colormode?<FaMoon className='absolute lg:hidden right-4 top-4 spin2    text-white z-40 text-2xl sm:text-2xl hover:cursor-pointer ' onClick={()=>{dispatch(changemode())}}/>:<FaSun className='absolute spin2 lg:hidden right-4 top-4    text-white z-40 text-2xl sm:text-2xl hover:cursor-pointer ' onClick={()=>{dispatch(changemode());console.log('ran')}} />}
                    <div className='flex items-center flex-col gap-2'>

                        <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3012041/1.jpg?6275' className='  w-105 h-105 sm:w-106 sm:h-106    rounded-full  bg-no-repeat bg-cover bg-center    ' />
                        <p className='text-white font-serif text-sm md:text-base'>The best shopping app </p>
                    </div>
                </div>
                <div className='flex flex-col h-200  justify-between   lg:h-170   '>
                    <div>
                        <div className='flex flex-col lg:text-center pt-2 sm:pt-3 lg:hidden'>

                            <NavLink to={'/'} ><div className='flex hover:lg:bg-neutral-100  gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaHome className='text-lg sm:text-xl md:text-2xl' /> <p className='    py-4 sm:py-5 text-sm md:text-base font-semibold  lg:hidden' onClick={() => { setmenubar(false) }}>Home</p></div></NavLink>
                            <NavLink to={'/product'}><div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaShopify className='text-lg sm:text-xl md:text-2xl' /><p className='  py-4 sm:py-5 text-sm md:text-base font-semibold  lg:hidden'>Products</p></div></NavLink>
                            <div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'> <FaPhone className='text-lg sm:text-xl md:text-2xl ' /><p className=' py-4 sm:py-5  text-sm md:text-base font-semibold  lg:hidden' onClick={()=>scrolltoPage1(contactRef)}>Contact</p></div>
                            <div className='flex hover:lg:bg-neutral-100 gap-2 sm:gap-3 items-center pl-3 sm:pl-4'><FaExclamationCircle className='text-lg sm:text-xl md:text-2xl' /><p className=' py-4  sm:py-5 text-sm md:text-base font-semibold hover:lg:bg-neutral-100 lg:hidden' onClick={()=>scrolltoPage1(aboutRef)}>About</p></div>
                        </div>
                        <div className='flex flex-col lg:bg-inherit pl-3 sm:pl-4 lg:pl-0  '>
                            <div className={`hidden lg:flex items-center justify-between lg:cursor-pointer lg:border-b  px-6 ${mode.colormode?' border-stone-700':'hover:lg:bg-neutral-200'}`}>
                                <p className='text-base font-semibold py-4'>{mode.colormode?'Dark':'Light'} </p>
                                {mode.colormode?<FaToggleOff className='text-2xl ' onClick={()=>{dispatch(changemode())}}/>:<FaToggleOn  className='text-2xl ' onClick={()=>{dispatch(changemode())}}/>}
                            </div>
                            <NavLink to={'/listcols'}><div className={`flex lg:flex-row-reverse lg:justify-between items-center lg:px-6 ${mode.colormode?' border-stone-700':'hover:lg:bg-neutral-200'} gap-2 sm:gap-3 lg:cursor-pointer lg:border-b `}> <FaShoppingCart className='text-lg sm:text-xl md:text-2xl' /><p className=' py-4  sm:py-5 text-sm md:text-base  font-semibold  ' >Carts</p></div></NavLink>
                            <NavLink to={'/history'}><div className={`flex lg:flex-row-reverse lg:justify-between items-center lg:px-6 ${mode.colormode?' border-stone-700':'hover:lg:bg-neutral-200'} gap-2 sm:gap-3 lg:cursor-pointer lg:border-b`}><FaHistory className='text-lg sm:text-xl md:text-2xl' /> <p className=' py-4  sm:py-5 text-sm md:text-base font-semibold '>History</p></div></NavLink>
                        </div>
                    </div>
                    <div className=' flex justify-end  lg:mt-0 lg:items-center '>
                        <NavLink to={'/landing'}> <p className={`font-bold   md:text-lg ${mode.colormode?'text-white':'text-yellow-900'} text-right  mb-7 mr-7 `} onClick={signout} >Sign Out</p></NavLink>
                    </div>
                </div>
            </motion.div>
            }</div>
            <motion.div animate={{y:displaynote?`80px`:0,x:'50%',x:'-50%'}} initial={{x:'50%',x:'-50%',y:'-70px'}} transition={{ type: 'tween', duration: 0.1 }}     className={`  bg-brown allpopout  md:w-108   gap-3  w-208 h-14 md:h-16 fixed  justify-center items-center flex rounded-lg   text-white  `} ref={noteref} >
                <p>Item added to cart</p>
                <FaCheckCircle/>
            </motion.div >
            
            <div className='   h-screen lg:h-full   gap-5 sm:gap-10  pt-16 sm:pt-20 lg:pt-0 flex flex-col  lg:gap-0 lg:block'>
                <div className='h-192 lg:h-screen   lg:pb-5 lg:pt-20'>
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
                    /*onSlideChange={() => console.log('slide change')} */ className='   w-120  m-auto h-full   rounded-xl    '>
                        <SwiperSlide>                <img src='https://t4.ftcdn.net/jpg/04/43/50/77/240_F_443507753_8cepWB5igFoxwWZrhfljCt9fhp2IEmlC.jpg' className='min-w-full h-full rounded-xl       bg-no-repeat bg-cover bg-center   object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>                <img src='https://t4.ftcdn.net/jpg/05/14/84/05/240_F_514840575_uSpCTjOIJ2FZxf50D5hjhGd4LKZ5q8kz.jpg' className='min-w-full  rounded-xl       bg-no-repeat bg-cover bg-center h-full   object-cover  ' />
                        </SwiperSlide>
                        <SwiperSlide>                <img src='https://t3.ftcdn.net/jpg/07/81/14/56/240_F_781145603_nIxYJXBYOhB19qQJA0LGVYlZIB4sGRxZ.jpg' className='min-w-full  rounded-xl       bg-no-repeat bg-cover bg-center object-cover h-full    ' />
                        </SwiperSlide>
                        <SwiperSlide>                <img src='https://t3.ftcdn.net/jpg/04/04/14/26/240_F_404142602_Y2wuSHD5janWigIQiLDF3LcRW6ZTMD6k.jpg' className='min-w-full   rounded-xl       bg-no-repeat bg-cover bg-center h-full   object-cover lg:object-fill object-center  ' />
                        </SwiperSlide>
                        <SwiperSlide>                <img src='https://t4.ftcdn.net/jpg/01/30/97/83/240_F_130978369_P9ly40UoKcBX8AxObjiRjrebs9GDE53U.jpg' className='min-w-full h-full   rounded-xl       bg-no-repeat bg-cover bg-center   object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>                <img src='https://t4.ftcdn.net/jpg/03/54/36/69/240_F_354366971_n0scSjKZjqmXeJgIwfGp4NbMcdHCu5zX.jpg' className='min-w-full h-full   rounded-xl       bg-no-repeat bg-cover bg-center object-cover ' />
                        </SwiperSlide>
                    </Swiper>
                </div >
                <div className='flex justify-center h-191 w-full items-center '>
                    <div className={`flex  w-120  ${bgcolor} ${mode.colormode?'addShadow2':'addShadow'}  h-full hero2 overflow-hidden rounded-xl  before:bg-gradient-to-r   before:from-blurblack  before:via-blurblack   before:to-blurblack2`}>
                        <div className=' hero  w-full h-full'><img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='w-full h-full    bg-no-repeat bg-cover bg-center   ' /></div>
                        <div className={`flex   flex-col z-10 lg:z-0 w-full p-2 sm:p-5 absolute  lg:static gap-3 sm:gap-6 justify-between  h-full `}>
                            <div className='flex w-full items-center justify-between '>
                                <p className=' bg-brown px-3 lg:px-6 py-1 lg:py-2 rounded-lg text-base sm:text-lg text-white font-semibold font-serif'>LIMITED EDITION</p>
                                <h1 className='text-base sm:text-lg  font-semibold text-white lg:text-current'>Hurry up! 30% OFF</h1>
                            </div>
                            <p className='text-sm sm:text-base text-white lg:text-current'>Find clothes that fits your lifestyle</p>
                            <div className='flex flex-col gap-2 sm:gap-3'>
                                <p className='text-sm sm:text-base text-white lg:text-current'>Offer expires in:</p>
                                <div className='flex gap-5 items-center w-full font-bold text-black'>
                                    <div className={`rounded-xl text-sm sm:text-base sm:w-418 lg:w-426 lg:h-14 sm:h-12 w-410 h-10  ${mode.colormode?'bg-stone-800 text-white ':'lg:bg-gray-300 bg-white '}  flex justify-center items-center`}>02</div>
                                    <div  className={`rounded-xl text-sm sm:text-base sm:w-418 lg:w-426 lg:h-14 sm:h-12 w-410 h-10 ${mode.colormode?'bg-stone-800 text-white':'lg:bg-gray-300 bg-white'} flex justify-center items-center`}>12</div>
                                    <div  className={`rounded-xl text-sm sm:text-base sm:w-418 lg:w-426 lg:h-14 sm:h-12 w-410 h-10 ${mode.colormode?'bg-stone-800 text-white':'lg:bg-gray-300 bg-white'}  flex justify-center items-center`}>45</div>
                                    <div  className={`rounded-xl text-sm sm:text-base sm:w-418 lg:w-426 lg:h-14 sm:h-12 w-410 h-10 ${mode.colormode?'bg-stone-800 text-white':'lg:bg-gray-300 bg-white'}  flex justify-center items-center`}>05</div>
                                </div>
                            </div>
                            <div><button className='bg-brown px-3 text-sm sm:text-base text-white lg:px-8 lg:py-2 py-1 rounded-lg' onClick={navSignIn}>Shop Now</button></div> 
                        </div>
                    </div>
                </div>

                </div> 
                <div className='w-120 m-auto lg:pt-6 pb-3   mt-0 '>
                <h1 className='font-bold text-lg  sm:text-xl font-serif'>Our Services</h1>
                </div> 
                <section className=''>
                    <audio controls className='hidden' ref={audiosound}>
                        <source src={notify} type="audio/mp3" />
                    </audio>
                <div className='flex flex-col w-120   sm:grid sm:grid-cols-2 lg:flex  lg:flex-row   gap-8 sm:gap-4 md:gap-5 lg:gap-3   m-auto    justify-center  items-center'>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden'>
                <div onClick={navSignIn} className='absolute text-white z-10 flex items-center pl-1 pb-1 border-b'><h1 className='font-bold text-lg sm:text-xl font-serif '>Clothes</h1><FaArrowRight className=' font-bold pt-1'/></div>
                    <img src="https://t4.ftcdn.net/jpg/03/54/36/69/240_F_354366971_n0scSjKZjqmXeJgIwfGp4NbMcdHCu5zX.jpg" className='w-full h-60  sm:h-72 lg:h-64   xl:h-100  ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden '>
                <div onClick={navSignIn} className='absolute text-white z-10 flex items-center pl-1 pb-1 border-b'><h1 className='font-bold text-lg sm:text-xl  font-serif'>Glasses</h1><FaArrowRight className='font-bold pt-1'/></div>
                    <img src="https://t4.ftcdn.net/jpg/04/95/58/79/240_F_495587995_kshGNmXzKC3sXxuN156Os4fS3CdjWFl5.jpg" className='w-full h-60  sm:h-72 lg:h-64  xl:h-100 object-cover ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center  overflow-hidden'>
                    <div onClick={navSignIn} className='absolute text-white z-10 flex items-center pl-1 pb-1 border-b '><h1 className='font-bold text-lg sm:text-xl font-serif '>Watches</h1><FaArrowRight className='font-bold pt-1'/></div>
                    <img src="https://t4.ftcdn.net/jpg/01/30/97/83/240_F_130978369_P9ly40UoKcBX8AxObjiRjrebs9GDE53U.jpg" className='w-full h-60  sm:h-72 lg:h-64   xl:h-100 object-cover ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden  '>
                <div onClick={navSignIn} className='absolute text-white z-10 flex items-center pl-1 pb-1 border-b'><h1 className='font-bold text-lg sm:text-xl  font-serif'>Shoes</h1><FaArrowRight className='font-bold pt-1'/></div>
                    <img src="https://t4.ftcdn.net/jpg/02/69/15/79/240_F_269157997_8ds8Yr7EvUEDKNVupCVjzCjEY5Sj16qz.jpg" className='w-full h-60  sm:h-72 lg:h-64 xl:h-100   ' />
                </div>
            </div>
                    {/*overflow hidden divs*/}

                    {/* <div >*/}
                    <div className='flex justify-between items-end w-120 m-auto pt-6'>
                        <h1 className=' font-bold  text-lg  sm:text-xl font-serif'>New Arrivals</h1>
                        <NavLink to={'/product'}>   <div className='  flex items-center  gap-1 flex-nowrap '> <p className=' text-sm sm:text-base font-serif'>{`see more`}</p><div className=''><FaArrowRight className='text-sm' /></div></div></NavLink>
                    </div>
                    <div className={` m-auto w-120   gap-4 sm:gap-6 md:gap-7 lg:gap-5 flex overflow-x-auto ${mode.colormode?'overflow-div2':'overflow-div'} py-3   `}>
                        {items?.map(prev => {
                            return (
                                <div className={`min-w-20 p-2 md:p-3 lg:p-4 sm:min-w-25 md:min-w-40  lg:min-w-37 xl:min-w-35 rounded-lg  ${mode.colormode?'addShadow2':'addShadow'}          `}>
                                    <img src={prev.image} alt='' className='rounded-lg w-full lg:h-44  xl:h-52 object-cover' />
                                    <div className='flex flex-col pt-2 gap-1 sm:gap-2'>
                                        <div className={`flex ${mode.colormode?'text-white':'text-black'} sm:text-lg  `}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfAlt />
                                        </div>
                                        <h1 className='text-sm sm:text-base font-semibold'>{prev.itemname}</h1>
                                        <p className=' text-sm sm:text-base '>{`$${prev.price}`}</p>
                                        <button className={`w-full bg-brown font-serif  py-2 text-sm sm:text-base text-white`} onClick={() => {buyorder(prev.id)}}>Add to cart</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/*</div>*/}
                    {/*ends*/}

                    {/*about starts*/}
                    <div className={`md:flex md:p-10 shadow-lg w-120  m-auto  mt-10  ${mode.colormode?'addShadow2':'addShadow'}       p-5 sm:p-10 sm:px-20 `} ref={aboutRef}>
                        <video src='https://v.ftcdn.net/09/91/05/19/240_F_991051916_FYC6iBEMJRI49VQNOM6SE2yAEOCvOM0O_ST.mp4' className='w-auto md:w-22 h-full '    autoPlay  loop  muted playsInline/>
                        <div className='w-full pt-4 text-center md:pt-0 md:pl-8'>
                            <h1 className='font-bold text-lg  sm:text-xl font-serif    '>
                               About Us
                            </h1>
                            <p className='mt-3 md:mt-4 lg:mt-8 text-sm sm:text-base'>
                            We are passionate about bringing you the latest trends, timeless styles, and fashion essentials all in one place. Whether you're looking for everyday wear, statement pieces, or the perfect accessories, we've got you covered. We believe fashion is more than just clothing — it's a form of self-expression. 
                            </p>
                            <div className='md:flex justify-center items-center gap-5 mt-6 lg:mt-10'>
                                <h1 className={`w-30 border border-dashed ${mode.colormode?'border-white':' border-black'} mt-3 md:mt-0  md:w-24 md:rounded-lg md:h-10 flex text-sm sm:text-base font-semibold justify-center items-center  h-8  `} onClick={showmenu1}>30% OFF</h1>
                                <NavLink to={'/product'}> <button className={`w-40 bg-brown mt-4 text-white md:w-24 md:mt-0  md:h-10 md:rounded-lg  h-8 text-sm sm:text-base `}>Shop Now</button></NavLink>
                            </div>
                        </div>
                    </div>
                    {/*about ends*/}
                    <div className='w-120 m-auto mt-6 pb-3   ' ref={contactRef}>
                        <h1 className='font-bold  text-lg  sm:text-xl font-serif '>Contact Us</h1>
                    </div>
                    
                    <motion.div ref={contactRef} className={`py-4 scroll-target  sm:p-4    ${mode.colormode?'addShadow2':'addShadow'}  md:p-5 m-auto px-2 w-120 ${bgcolor} ${textcolor}  rounded-xl flex flex-col gap-3`}  initial="hidden"whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                        <div className="w-full flex gap-5   flex-col md:flex-row items-center ">
                            <motion.div  className={`w-full flex border ${mode.colormode && 'border-0.5 border-stone-800'}  flex-row md:flex-col items-center gap-3 md:gap-2 p-3  h-20 sm:h-24 md:h-52   hover:cursor-pointer  rounded-xl `}>
                                <div className=" bg-brown text-white w-11 h-11 sm:w-426 sm:h-14  flex-shrink-0 rounded-full flex items-center justify-center">
                                <svg 
                                className="sm:w-5 sm:h-5 w-4 h-4" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M22 16.92V20C22 20.5523 21.5523 21 21 21C10.0589 21 3 13.9411 3 3C3 2.44772 3.44772 2 4 2H7.08C7.58936 2 8.02452 2.38604 8.11674 2.8894L8.99923 7.47029C9.08529 7.93927 8.86167 8.41359 8.43605 8.62757L6.113 9.78294C7.5403 13.0365 10.9635 16.4597 14.217 17.887L15.3724 15.564C15.5864 15.1383 16.0607 14.9147 16.5297 15.0008L21.1106 15.8833C21.614 15.9755 22 16.4106 22 16.92Z" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"/>
                                </svg>
                                </div>
                                <div className="w-full flex flex-col  md:gap-2 md:items-center ">
                                <p className="text-base sm:text-lg font-semibold">Phone Number</p>
                                <p className="text-sm sm:text-base font-sans">+125-639-075-355</p> 
                                </div>
                            </motion.div>
                            <motion.div  className={`w-full flex border ${mode.colormode && 'border-0.5 border-stone-800'} flex-row md:flex-col items-center gap-3 md:gap-2 p-3  h-20 sm:h-24 md:h-52   hover:cursor-pointer  rounded-xl `}>
                                <div className=" bg-brown text-white w-11 h-11 sm:w-426 sm:h-14   flex-shrink-0 rounded-full flex items-center justify-center">
                                <svg 
                                    className="sm:w-5 sm:h-5 w-4 h-4 " 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                    d="M3 8L12 13L21 8M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"/>
                                </svg>
                                </div>  
                                <div className="w-full flex flex-col  md:gap-2 md:items-center md:h-full ">  
                                    <p className="text-base sm:text-lg font-semibold">Support Team</p>
                                    <div className="flex w-full justify-between md:h-full md:flex-col">
                                    <p className="text-sm sm:text-base font-sans md:text-center" >Tap to chat support team</p> 
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div  className={`w-full flex border flex-row md:flex-col  ${mode.colormode && 'border-0.5 border-stone-800'} items-center gap-3 md:gap-2 p-3 h-20 sm:h-24 md:h-52   hover:cursor-pointer rounded-xl `}>
                                <div className="rgb(71, 31, 8) bg-brown w-11 h-11 sm:w-426 sm:h-14 flex-shrink-0 rounded-full flex items-center justify-center text-white">
                                <svg 
                                className="sm:w-5 sm:h-5 w-4 h-4" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M21 15C21 16.1046 20.1046 17 19 17H7L3 21V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V15Z" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"/>
                                </svg>

                                </div>
                                <div className="w-full flex flex-col md:gap-2 md:items-center ">
                                <p className="text-base sm:text-lg font-semibold">Send Mail</p>
                                <p className="text-sm sm:text-base font-sans">Tap to send mail</p>
                                </div> 
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
           
            <footer className={` bg-black  text-white ${mode.colormode&&' bg-stone-800'} px-5 sm:px-14 md:px-10 lg:px-20 xl:px-36 mt-7 sm:mt-8 md:mt-10 py-10 sm:py-14 md:pt-16 lg:pt-20 xl:pt-24 bottom-0 `}>
                <div className='flex flex-col md:flex-row items-center  md:justify-between md:items-end border-b-0.5 pb-8 sm:pb-10   lg:pb-10  xl:pb-12  '>
                    <div className='flex flex-col justify-center md:flex-row md:items-end items-center     '>
                        <div className='md:border-r-0.5 pb-5 sm:pb-7 md:pb-0 md:pr-5 lg:pr-7 xl:pr-10 flex items-center   '>
                            <h1 className='font-semibold text-lg sm:text-xl  '>Glamour Grove</h1>
                        </div>
                        <div className='pb-6 sm:pb-8 md:pb-0 md:pl-5 xl:pl-10 lg:pl-7 font-semibold flex items-center '>

                            <p className=' md:text-lg'>Fashion store</p>
                        </div>
                    </div>

                    <ul className='flex flex-col items-center text-sm sm:text-base justify-center md:flex-row gap-5 sm:gap-7 md:gap-5 lg:gap-8 xl:gap-14'>
                        <NavLink to='/'>  <li>Home</li></NavLink>
                        <NavLink to='product'><li>Product</li></NavLink>
                        <li onClick={()=>scrolltoPage1(contactRef)} className='hover:cursor-pointer'>Contact</li>
                        <li onClick={()=>scrolltoPage1(aboutRef)} className='hover:cursor-pointer'>About us</li>
                    </ul>
                </div>
                <div className='flex items-center gap-5  flex-col-reverse md:flex-row pt-5 md:justify-between sm:pt-7 '>
                    <div className='flex justify-center  gap-5 md:gap-4 flex-col-reverse md:flex-row  lg:gap-6 xl:gap-8'>
                        <p className='whitespace-nowrap text-xs sm:text-sm'>Copyright 2023 Glamour Grove.All rights reserved. </p>
                        <div className='flex justify-center text-xs sm:text-sm gap-6 md:gap-4 lg:gap-5 xl:gap-7 font-semibold'>
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
        </div >}</>
    )
}

export default Home