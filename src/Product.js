import React, { useLayoutEffect } from 'react'
import { Link, NavLink,useOutletContext,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { FaBars, FaSearch, FaBell,FaExclamationCircle,FaPlusSquare, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaAngleLeft, FaTimesCircle } from 'react-icons/fa'
function Product() {
    const [popout, setpopout] = useState(true)
    const [showinput, setshowinput] = useState(false)
    const [showinput1, setshowinput1] = useState(false)
    const [items,setitems]=useState([])
    const [error,seterror]=useState([])
    const [checked,setchecked]=useState(true)
    const [newcartText, setnewcartText] = useState('');
    const [displaynote,setdisplaynote]= useState(false)
    const [scroll, setscroll] = useState(0)
    const [added,setadded]=useState(false)
    const [startSearch,setstartSearch]=useState(false)
    const [searcheditems,setsearcheditems]=useState('')
    const [selectedcart, setseletedcart] = useState('');
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    const navigate = useNavigate()
    const [activeCategory, setActiveCategory] = useState("All")
    const [showCategory, setshowCategory] = useState(false)
    const {data,note,runEffect,changeRunEffect1,Error1,id,signout,runEffect2}= useOutletContext()

    // useEffect(() => {
    //     const selectedid = data?.items?.filter(prev => prev.selected === true)
    //        setseletedcart(selectedid && selectedid[0]?._id)
    //    })
    useEffect(() => {
        const searching=()=>{
        const searchedProd =  items.filter(prev=>prev.itemname==setsearcheditems)
        setitems(searchedProd)}
        startSearch&&searching()
    },[setsearcheditems])

    const handleSearch = (e)=>{
        setsearcheditems(e.target.value)
     }
    function searchfunc() {
        setshowinput1(prev => !prev)
        setitems('')
        setshowinput(false)
        setstartSearch(prev=>!prev)
        setshowCategory(false)
    }

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };
    const buyorder = async (id) => {  
        const selectedid = data?.items?.filter(prev => prev.selected === true)
        const myCartId = selectedid[0]?._id
     const option = {
                 method: 'POST',
                 headers: {
                     'content-type': 'application/json',
                 }
             }
             try {
                if( data||data?.items?.length<1 && myCartId===undefined){
                    navigate('/listcols')
                 }if( data||data?.items.length>0&&myCartId===undefined){
                     navigate('/listcols')
                 }
                 const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/addcart/${myCartId}/${id}`, option);
                 const data1 = await response.json()
                console.log(data1)
                
             }
 
             catch (err) {
             seterror(err.message === 'Failed to fetch' ? { 'message': 'Failed to add cart' }:err)
             console.log(err)
             }
             setadded(prev => !prev)
             setTimeout(() => {
             setadded(prev => !prev)  
             }, 2000);
         
     }
    // useEffect(() => {
    //     window.scrollTo(0, scroll)
        
    // }, [popout])

const getusersDocuments = async () => {
   
    const option = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }
    try {
        const response = await fetch('https://backend-e-commerce-g7of.onrender.com/getdemo', option);
        const data = await response.json()
       if(data && activeCategory !== 'All'){
        const filteredProd = data.filter(prev=>prev.description==activeCategory.toLowerCase())
        console.log(filteredProd )
        setitems(filteredProd)
        setshowCategory(true)}
        else{
            setitems(data)
            setshowCategory(true)
        }
    }
    catch (err) {
        seterror(err)
    }  
}
useLayoutEffect(() => {
 !startSearch&&getusersDocuments()
}, [activeCategory,startSearch]);

return (
        <div className={` ${items.length >= 1 ?'h-full pb-10':'h-screen'}  ${bgcolor} `}>
            <header className={`fixed flex sm:justify-between gap-2 ${bgcolor} ${textcolor}  $  sm:gap-0 items-center h-20 md:h-24 lg:h-24 px-2 sm:px-5 md:px-2 lg:px-4 w-full m-0  z-10 `}>
                {!showinput1 ? <NavLink to='../' relative='path' className={' sm:absolute  '}> <FaAngleLeft className='font-bold z-40 hover:cursor-pointer  text-xl md:text-2xl '  ></FaAngleLeft></NavLink> : <FaAngleLeft onClick={searchfunc}  className='font-bold hover:cursor-pointer md:absolute  text-xl md:text-2xl ' ></FaAngleLeft>}
                {showinput1 ? <form className=' w-full flex relative sm:w-130 md:w-25  sm:m-auto' ><input type='text' placeholder='Search' className={`w-full   rounded-lg ${!mode.colormode?'bg-gray-200':'bg-stone-800'} py-1  md:pr-12 pl-3 pr-11  outline-none ${mode.colormode?'border-yellow-900 bg-stone-700 placeholder-white':'border-black'} `}  autoFocus  /><div className='bg-brown flex items-center justify-center text-xl hover:cursor-pointer  rounded-e-lg absolute h-full right-0 w-16 ' ><FaSearch className='text-white ' /></div></form>
                    : <h1 className=' sm:m-auto  text-xl sm:text-2xl font-semibold'>Products</h1>}
                <div  className={`${showinput1 ? 'hidden' : 'block'} right-4  sm:right-6 md:right-4 lg:right-6 absolute hover:cursor-pointer ${!mode.colormode?'bg-gray-200':'bg-stone-800'} p-2 rounded-lg`} onClick={searchfunc}><FaSearch  /></div>
            </header >
            <div className={` bg-yellow-900 ${ added && !error?.message? 'opacity-90':'opacity-0'}  w-106 transition-all added flex h-10 justify-center items-center fixed  text-white  rounded-full  `} >
                <p>Added to cart</p>
            </div>
            <div className={`sm:pt-24 pt-16     `}>
               {showCategory&&!startSearch&&<div className={`flex flex-col gap-3 lg:gap-4  w-full ${bgcolor}  justify-center mb-3 sticky top-0 z-20   pb-3 pt-4 `}>
                    <input className='outline-none hidden  border w-130 border-black lg:w-25 m-auto h-9 lg:h-11 rounded-lg pl-4 placeholder:pl-4  ' value={searcheditems} onChange={handleSearch} placeholder='Search products' />
                    <div className='flex px-3  sm:justify-center gap-4 overflowPro   overflow-x-auto     md:gap-12 lg:gap-20 sm:gap-10'>
                    {["All", "Clothes", "Shoes", "Glasses", "Watches"].map((category) => (
                        <button className={`w-350  flex justify-center items-center flex-shrink-0 font-semibold sm:w-16 lg:w-13 ${mode.colormode?'bg-stone-800':'bg-gray-200'} ${textcolor} py-1 md:py-2    hover:bg-brown hover:text-white ${activeCategory === category.toLowerCase()?'bg-brown text-white':''}    rounded-lg `}  onClick={() => handleCategoryClick(category)}>{category}</button>
                    ))}
                    </div>
                </div>}
                {items.length>1? <div className='grid grid-cols-2 lg:pt-3 px-3 gap-x-3 gap-y-5 md:gap-x-6 md:gap-y-8 lg:px-7  sm:gap-5 sm:px-5  md:px-2 md:grid-cols-3 lg:grid-cols-4          '>
                    {items.map(prev => {
                        return (<div className={`p-2 md:p-3  ${bgcolor} ${textcolor}  rounded-lg border-2 ${mode.colormode&&'bg-opacity-50 bg-black border-none shadow-stone-700  shadow-md'} shadow-lg  `}>
                            <img src={prev.image} alt='' className='rounded-lg w-full lg:h-52 object-cover ' />
                            <div className='flex flex-col pt-2 gap-1 sm:gap-2'>
                                <div className='flex text-brown sm:text-lg lg:text-xl '>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                                <h1 className='text-lg sm:font-bold lg:text-xl'>{prev.itemname}</h1>
                                <p className='font-semibold md:text-lg lg:text-xl'>{`$${prev.price}`}</p>
                                <button className='w-full bg-brown font-semibold py-1 sm:py-2 sm:text-lg lg:text-xl text-white' onClick={()=>buyorder(prev._id)} >Add to cart</button>
                            </div>
                        </div>)
                    })}
                </div>:startSearch?<p className={` text-lg ${textcolor} popout  absolute`}>Make your search</p>:  
                    <motion.div animate={{ rotate: 360 }} initial={{ x: '50%', x: '-50%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className='absolute popout '>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6" stroke={mode.colormode?"white":'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 18V22" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.929 4.929L7.757 7.757" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.243 16.243L19.071 19.071" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12H6" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 12H22" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.929 19.071L7.757 16.243" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.243 7.757L19.071 4.929" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    </motion.div>}
            </div> 
            
        </div>
    )
}

export default Product