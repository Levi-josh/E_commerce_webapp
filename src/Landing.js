import { FaBars, FaSearch, FaBell, FaAddressBook,FaSun, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaTimesCircle, FaHome, FaShoppingBag, FaExclamationCircle, FaShopify, FaShoppingBasket, FaHistory, FaArrowRight, FaAngleRight, FaArrowDown, FaAngleDown, FaToggleOn, FaToggleOff, FaSubscript, FaUser, FaQuestion, FaVest, FaShare, FaMoneyBill, FaLightbulb, FaSearchPlus, FaPlusSquare, FaMoon, } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink, json, useLocation, useNavigate,useSearchParams, useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import { color, delay, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import myitems from './Newarrival.json'
import React, { useRef,useEffect,useLayoutEffect } from 'react'

const Landing = () => {
    const [menubar, setmenubar] = useState(false)
    const [popout, setpopout] = useState(false)
    const [changeSlider, setchangeSlider] = useState(false)
    const navigate = useNavigate()
    const [items,setitems]=useState(myitems)
    const [error,seterror]=useState({})
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    const nextBtn = useRef(null);
    const prevBtn = useRef(null);
    const carousel = useRef(null);
    const list = useRef(null);
    const runningTime = useRef(null);
    const content = useRef(null);
  
  
    const timeRunning = 3000;
    const timeAutoNext = 7000;
  
    // State to track the slider items
    const [sliderItems, setSliderItems] = useState([
        { name: "Your Style", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3012041/1.jpg?6275" },
        { name: "Your Style", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/885248/1.jpg?9651" },
        { name: "Your Style", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/122776/1.jpg?7527" },
        { name: "Your Style", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/649156/1.jpg?8476" },
        { name: "Your Style", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/2996252/1.jpg?8267" },
        { name: "Your Style", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/9023002/1.jpg?3955" }
    ]);
  
    let runTimeOut;
    let runTimeOut2;
    let runNextAuto;
    
    let runNextAuto2;
  
    useLayoutEffect(() => {
        const nextPic = list.current.children
      if (!nextBtn.current || !prevBtn.current) return;
      function showSlider(type) {
        let updatedItems = [...sliderItems];
        if (type === "next") {
          updatedItems.push(updatedItems.shift()); // Move first item to the end
          setSliderItems(updatedItems); 
   
        } 
      }
      runNextAuto = setTimeout(() => {
        showSlider("next")
      }, timeAutoNext);
      resetTimeAnimation();
      resetTimeAnimation2();
      return () => {
        clearTimeout(runNextAuto);
      };
    }, [sliderItems,changeSlider]);

    function resetTimeAnimation() {
      if (list.current) {
        const nextPic = list.current.children
        console.log(sliderItems)
        //animation for second div 
        //  nextPic[1].style.display = "block";
        nextPic[1].style.animation = "none";
        void nextPic[1].offsetHeight; // Trigger reflow
        nextPic[1].style.animation = "animate2 1s ease-in-out 5.5s 1 forwards";
        //animation for the remaining divs
        nextPic[2].style.transition = "none";
        void nextPic[2].offsetHeight;
        nextPic[3].style.transition = "none";
        void nextPic[3].offsetHeight;
        nextPic[4].style.transition = "none";
        void nextPic[4].offsetHeight;
        nextPic[5].style.transition = "none";
        void nextPic[5].offsetHeight;
        nextPic[1].style.transition='all 3s linear'
        nextPic[3].style.transition='all 3s linear'
        nextPic[3].style.transition='all 3s linear'
        nextPic[4].style.transition='all 3s linear'
        nextPic[5].style.transition='all 3s linear'
        //animation fr content
        nextPic[0].children[1].children[0].style.animation= "none";
        void nextPic[0].children[1].children[0].offsetHeight;
        nextPic[0].children[1].children[0].style.animation= "animate 1s ease-in-out 0.1s 1 forwards";
        nextPic[0].children[1].children[1].style.animation= "none";
        void nextPic[0].children[1].children[1].offsetHeight;
        nextPic[0].children[1].children[1].style.animation= "animate 1s ease-in-out 0.3s 1 forwards";
        nextPic[0].children[1].children[2].style.animation= "none";
        void nextPic[0].children[1].children[2].offsetHeight;
        nextPic[0].children[1].children[2].style.animation= "animate 1s ease-in-out 0.6s 1 forwards";
        nextPic[0].children[1].children[3].style.animation= "none";
        void nextPic[0].children[1].children[3].offsetHeight;
        nextPic[0].children[1].children[3].style.animation= "animate 1s ease-in-out 0.9s 1 forwards";
      }
    }
    function resetTimeAnimation2() {
      if (runningTime.current) {
        runningTime.current.style.animation = "none";
        void runningTime.current.offsetHeight; // Trigger reflow
        runningTime.current.style.animation = "runningTime 7s linear 1 forwards";
      }
    }
    function nextshowSlider(type) {
        let updatedItems = [...sliderItems];
        const nextPic = list.current.children
        if (type === "next") {

            nextPic[1].style.animation = "none";
            void nextPic[1].offsetHeight; // Trigger reflow
            nextPic[1].style.animation = "animate2 1s ease-in-out 0s 1 forwards";
            clearTimeout(runNextAuto);  
            runNextAuto = setTimeout(() => {
                updatedItems.push(updatedItems.shift()); // Move first item to the end
                setSliderItems(updatedItems);
                // nextPic[1].style.zIndex='-1'
              }, 1000);  
        } 
        else{
            updatedItems.unshift(updatedItems.pop()); // Move first item to the end
            setSliderItems(updatedItems);  
             nextPic[1].classList.add('prev')
                
             setTimeout(() => {
                nextPic[1].style.animation = "none";
                void nextPic[1].offsetHeight; // Trigger reflow
                nextPic[1].style.animation = "animate4 1s ease-in-out 0s 1 forwards";    
              }, 0);      
            setTimeout(() => {
                nextPic[1].classList.remove('prev')
              }, 2000);     
             
        }
      }

const navSignIn = ()=>{
    navigate('/login')  
}
const navSignUp = ()=>{
    navigate('/signup')  
}
const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut"
      }
    }
  };
const textRevealVariants2 = {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren:2,
        ease: "easeInOut",
      } 
    }
  };
  
  return (
    <div className={`  ${menubar ? ` home ${mode.colormode?'before:bg-white fixed before:bg-opacity-20':'before:bg-black before:bg-opacity-20'}` : ''}${popout ? `p-home ${mode.colormode?'before:bg-white before:bg-opacity-20':'before:bg-black before:bg-opacity-20'}` : ''} m-0  h-full w-full overflow-x-hidden ${bgcolor}  ${textcolor} `}  onScroll={(e) => { console.log(e) }} >
        <div className='w-full h-screen '>
            <div className='w-full h-full'>
                {/* Small Header */}
                <header className={`flex justify-between landHeader absolute px-3 sm:px-5  items-center h-14 sm:h-16 lg:h-20 z-50  w-full text-white`}>
                <p className="font-bold text-lg sm:text-xl lg:text-2xl">Glamour Grove</p>
                <ul className='hidden lg:flex lg:gap-18 xl:gap-20 md:text-base'>
                    <NavLink to='/login'>
                    <li>Home</li>
                    </NavLink>
                    <NavLink to='/login'>
                    <li>Product</li>
                    </NavLink>
                    <NavLink to='/login'>
                    <li>Contact</li>
                    </NavLink>
                    <NavLink to='/login'>
                    <li>About Us</li>
                    </NavLink>
                </ul>
                <div className='flex gap-2 sm:gap-4 items-center'>
                    <button className=' bg-fadeblack px-3 py-1 sm:py-2 sm:px-5  rounded-lg text-sm sm:text-base' onClick={navSignIn}>Sign in</button>
                    <button className='bg-brown  px-3 py-1 sm:py-2 sm:px-5  rounded-lg text-white text-sm sm:text-base  ' onClick={navSignUp}>Sign up</button>
                </div>
                </header>
    
<div className="carousel" ref={carousel }>
<div className="list" ref={list }>
{sliderItems.map((item, index) => (
          <div className="item" key={index}>
             <img src={item.image} alt={item.name} className="slider-img bg-no-repeat bg-cover bg-center " />
            <div className="content" ref={content}>
              <div className="title">Elevate</div>
              <div className="name">{item.name}</div>
              <div className="des">
              Discover the latest in fashion, footwear, and accessories all in one place. Shop effortlessly, dress impeccably, and shine confidently. Your perfect look starts here! 
              </div>
              <div className="btn">
                <button>Shop Now</button>
                {/* <button>Subscribe</button> */}
              </div>
            </div> 
          </div>
        ))}
</div>
<div className="arrows">
    <button className="prev" ref={prevBtn} onClick={()=>nextshowSlider("prev")}>{'<'}</button>
    <button className="next" ref={nextBtn} onClick={()=>nextshowSlider("next")}>{'>'}</button>
</div>



<div className="timeRunning" ref={runningTime}></div>

</div>
            </div> 

            </div>
                <div className='w-120 m-auto lg:pt-6 pb-3 pt-5  '>
                <h1 className='font-bold      text-2xl sm:text-3xl '>Our Services</h1>
                </div> 
                <section className=''>
                <div className='flex flex-col w-120   sm:grid sm:grid-cols-2 lg:flex  lg:flex-row   gap-8 sm:gap-4 md:gap-5 lg:gap-3   m-auto    justify-center  items-center'>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden'>
                <div onClick={navSignIn} className='absolute text-white z-10 flex items-center pl-1 pb-1 border-b'><h1 className='font-bold text-3xl sm:text-4xl  '>Clothes</h1><FaArrowRight className='pt-2 sm:pt-3 sm:text-3xl font-bold text-2xl'/></div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JiZVoTByZDrxh9SjmEj2075W9KcHcupMhg&usqp=CAU" className='w-full h-60  sm:h-72  xl:h-100  ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden '>
                <div onClick={navSignIn} className='absolute text-white z-10 flex items-center pl-1 pb-1 border-b'><h1 className='font-bold text-3xl sm:text-4xl  '>Glasses</h1><FaArrowRight className='pt-2 sm:pt-3 sm:text-3xl font-bold text-2xl'/></div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xJ3fGQhyam7imxMbfaS8HTSCjNDapwOPug&usqp=CAU" className='w-full h-60  sm:h-72  xl:h-100 object-cover ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center  overflow-hidden'>
                    <div onClick={navSignIn} className='absolute text-white z-10 flex items-center pl-1 pb-1 border-b '><h1 className='font-bold text-3xl sm:text-4xl  '>Watches</h1><FaArrowRight className='pt-2 sm:pt-3 sm:text-3xl font-bold text-2xl'/></div>
                    <img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full h-60  sm:h-72  xl:h-100 object-cover ' />
                </div>
                <div className='w-full blurr rounded-xl flex items-center justify-center overflow-hidden  '>
                <div onClick={navSignIn} className='absolute text-white z-10 flex items-center pl-1 pb-1 border-b'><h1 className='font-bold text-3xl sm:text-4xl  '>Shoes</h1><FaArrowRight className='pt-2 sm:pt-3 sm:text-3xl font-bold text-2xl'/></div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsGgY9dePqgfLjVghJAGmeI2_7i812lW-wg&usqp=CAU" className='w-full h-60  sm:h-72 xl:h-100   ' />
                </div>
            </div>
            {/*overflow hidden divs*/}

            {/* <div >*/}
            <div className='flex justify-between items-end w-120 m-auto pt-6'>
                        <h1 className=' font-bold  text-2xl sm:text-3xl'>New Arrivals</h1>
                        <NavLink to={'/login'}>   <div className=' font-semibold flex items-center   md:text-lg gap-2 flex-nowrap '> <p className=' lg:text-lg'>{`see more`}</p><div className='pt-1 '><FaArrowRight className='text-base' /></div></div></NavLink>
                    </div>
                    <div className={` m-auto w-120   gap-3 sm:gap-4 md:gap-5 lg:gap-5 flex overflow-x-auto ${mode.colormode?'overflow-div2':'overflow-div'} py-3   `}>
                        {items?.map(prev => {
                            return (
                                <div className={`min-w-20 p-2 md:p-3 lg:p-4 sm:min-w-25 md:min-w-40 addShadow lg:min-w-30 rounded-lg  ${mode.colormode?'addShadow2':'addShadow'}          `}>
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
                                        <p className='text-sm sm:text-base'>{`$${prev.price}`}</p>
                                        <button className={`w-full bg-brown text-white font-semibold py-2 text-sm sm:text-base  `} onClick={navSignIn}>Add to cart</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            {/*</div>*/}
            {/*ends*/}

            {/*about starts*/}
            <div className={`md:flex md:p-10 shadow-lg w-120 m-auto  mt-10 ${mode.colormode?'addShadow2':'addShadow'}      p-5 sm:p-10 sm:px-20 `}>

                <img src='https://img.freepik.com/free-vector/banner-black-friday-super-sale-realistic-3d-black-shopping-cart_548887-22.jpg?size=626&ext=jpg&ga=GA1.2.732548087.1710974042&semt=ais' className='w-auto md:w-22  md:h-72 h-64 ' />
                <div className='w-full pt-4 text-center md:pt-0 md:pl-8'>
                    <h1 className='font-bold text-lg md:text-2xl lg:text-3xl font-serif    '>
                        About Us
                    </h1>
                    <p className='mt-3 md:mt-4 lg:mt-8 md:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum illum quam numquam impedit quo? Facere, optio! Voluptatum, possimus? Voluptatum corrupti error.
                    </p>
                    <div className='md:flex justify-center items-center gap-5 mt-6 lg:mt-10'>
                        <h1 className={`w-30 border border-dashed ${mode.colormode?'border-white':' border-black'} mt-3 md:mt-0  md:w-24 md:rounded-lg md:h-10 flex justify-center items-center font-bold md:text-lg h-8  `} >30% OFF</h1>
                        <NavLink to={'/login'}> <button className={`w-40 bg-brown mt-4 text-white  md:w-24 md:mt-0  md:h-10 md:rounded-lg font-semibold h-8 text-sm sm:text-base`}>Shop Now</button></NavLink>
                    </div>
                </div>
            </div>
            {/*about ends*/}
            <div className='w-120 m-auto mt-6 pb-3  '>
                        <h1 className='font-bold  text-2xl sm:text-3xl '>Contact Us</h1>
                    </div>
                    
                    <motion.div  className={`py-4 sm:p-4   ${mode.colormode?'addShadow2':'addShadow'}  md:p-5 m-auto px-2 w-120 ${bgcolor} ${textcolor}  rounded-xl flex flex-col gap-3`}  initial="hidden"whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                        <div className="w-full flex gap-5   flex-col md:flex-row items-center ">
                            <motion.div  className={`w-full flex border ${mode.colormode && 'border-0.5 border-stone-800'}  flex-row md:flex-col items-center gap-3 md:gap-2 p-3  h-20 sm:h-24 md:h-52   hover:cursor-pointer  rounded-xl `}>
                                <div className="bg-brown text-white w-11 h-11 sm:w-426 sm:h-14  flex-shrink-0 rounded-full flex items-center justify-center">
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
                                <p className="text-sm sm:text-base font-sans">+125-639-075-3555</p> 
                                </div>
                            </motion.div>
                            <motion.div  className={`w-full flex border ${mode.colormode && 'border-0.5 border-stone-800'} flex-row md:flex-col items-center gap-3 md:gap-2 p-3  h-20 sm:h-24 md:h-52   hover:cursor-pointer  rounded-xl `}>
                                <div className="bg-brown text-white w-11 h-11 sm:w-426 sm:h-14   flex-shrink-0 rounded-full flex items-center justify-center">
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
                                <p className="text-base sm:text-lg font-semibold">Send Mail</p>
                                <p className="text-sm sm:text-base font-sans">Tap to send mail</p>
                                </div>
                            </motion.div>
                            <motion.div  className={`w-full flex border flex-row md:flex-col  ${mode.colormode && 'border-0.5 border-stone-800'} items-center gap-3 md:gap-2 p-3 h-20 sm:h-24 md:h-52   hover:cursor-pointer rounded-xl `}>
                                <div className="bg-brown w-11 h-11 sm:w-426 sm:h-14 flex-shrink-0 rounded-full flex items-center justify-center text-white">
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
                                    <p className="text-base sm:text-lg font-semibold">Support Team</p>
                                    <div className="flex w-full justify-between md:h-full md:flex-col">
                                    <p className="text-sm sm:text-base font-sans md:text-center">Tap to chat support team</p> 
                                    </div>
                                </div> 
                            </motion.div>
                        </div>
                    </motion.div>
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
                <NavLink to='/login'>  <li>Home</li></NavLink>
                <NavLink to='/login'><li>Product</li></NavLink>
                <NavLink to='/login'><li>Contact</li></NavLink>
                <NavLink to='/login'><li>About us</li></NavLink>
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