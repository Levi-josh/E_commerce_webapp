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
    const [selectedcart, setseletedcart] = useState('');
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    const navigate = useNavigate()
    const {data,note,runEffect,changeRunEffect1,Error1,id,signout,runEffect2}= useOutletContext()

    useEffect(() => {
        const selectedid = data?.items?.filter(prev => prev.selected === true)
           setseletedcart(selectedid && selectedid[0]?._id)
       })

    function searchfunc() {
        setshowinput1(prev => !prev)
        setshowinput(false)
    }
    const buyorder = async (id) => {   
     const option = {
                 method: 'POST',
                 headers: {
                     'content-type': 'application/json',
                 }
             }
             try {
                if( data||data?.items?.length<1 && selectedcart===undefined){
                    navigate('/listcols')
                 }if( data||data?.items.length>0&&selectedcart===undefined){
                     navigate('/listcols')
                 }
                 const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/addcart/${selectedcart}/${id}`, option);
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

     console.log(error?.message)
    useEffect(() => {
        window.scrollTo(0, scroll)
        
    }, [popout])

useLayoutEffect(() => {
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
               setitems(data)
            }

            catch (err) {
                seterror(err)

            }
        }
        getusersDocuments()
}, [items]);

return (
        <div className={` ${items.length >= 1 ?'h-full pb-10':'h-screen'}  ${bgcolor} `}>
            <header className={`fixed flex sm:justify-between gap-4 ${bgcolor} ${textcolor}  $  sm:gap-0 items-center h-20 sm:h-24 md:h-24 lg:h-24 px-2 sm:px-5 md:px-2 lg:px-4 w-full m-0  z-10 shadow-lg `}>
                {!showinput1 ? <NavLink to='../' relative='path' className={' sm:absolute '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink> : <FaAngleLeft onClick={searchfunc} className='font-bold md:absolute  text-xl md:text-2xl ' ></FaAngleLeft>}
                {showinput1 ? <form className=' w-full flex relative sm:w-130 md:w-25  sm:m-auto' ><input type='text' placeholder='Search' className={`w-full   rounded-full ${!mode.colormode?'bg-gray-200':'bg-stone-800'} py-1  md:pr-12 pl-3 pr-11  outline-none ${mode.colormode?'border-yellow-900 bg-stone-700 placeholder-white':'border-black'} `}  autoFocus  /><div className='bg-yellow-900 flex items-center justify-center text-xl   rounded-e-full absolute h-full right-0 w-16 '><FaSearch className='text-white ' /></div></form>
                    : <h1 className=' sm:m-auto  text-xl sm:text-2xl font-semibold'>Products</h1>}
                <div  className={`${showinput1 ? 'hidden' : 'block'} right-4  sm:right-6 md:right-4 lg:right-6 absolute hover:cursor-pointer ${!mode.colormode?'bg-gray-200':'bg-stone-800'} p-2 rounded-lg`}><FaSearch onClick={searchfunc} /></div>
            </header >
            
            {error?.message  && <div className={` w-107 sm:w-108 md:w-109 flex items-center justify-center   rounded-xl shadow-xl outline-yellow-900  outline outline-2  fixed popout z-30 ${bgcolor} ${textcolor} min-h-101 sm:min-h-102 lg:min-h-101 `}>
                <div className='flex md:items-start flex-col md:flex-row  gap-3 md:gap-5'>
                    <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                    <div className='flex flex-col justify-center gap-1'>
                        {/* <h1 className='font-bold sm:text-xl '>{error?.message}</h1> */}
                        <div><button className='px-6 py-1 rounded-full bg-yellow-900 text-white' onClick={()=>{seterror({'message':undefined})}}>Ok</button></div>
                    </div>
                </div>
            </div>}
            <div className={` bg-yellow-900 ${ added && !error?.message? 'opacity-90':'opacity-0'}  w-106 transition-all added flex h-10 justify-center items-center fixed  text-white  rounded-full  `} >
                <p>Added to cart</p>
            </div>
            {items.length >= 1  ? <div>
                <div className={`sm:pt-28 pt-24     `}>

                    <div className={`flex flex-col gap-3 lg:gap-4  w-full ${bgcolor}  justify-center mb-3 sticky top-20 sm:top-24  py-3  sm:py-4 `}>
                        <input className='outline-none hidden  border w-130 border-black lg:w-25 m-auto h-9 lg:h-11 rounded-2xl pl-4 placeholder:pl-4  ' placeholder='Search products' />
                        <div className='flex px-3 sm:justify-center justify-between gap-2 md:gap-12 lg:gap-20 sm:gap-10'>
                            <button className={`w-full font-semibold sm:w-16 lg:w-13 ${mode.colormode?'bg-stone-800':'bg-gray-200'} ${textcolor} py-1 md:py-2  text-black  hover:bg-yellow-900 hover:text-white focus:bg-yellow-900 focus:text-white  rounded-full `}>Clothes</button>
                            <button className={`w-full font-semibold sm:w-16 lg:w-13 ${mode.colormode?'bg-stone-800':'bg-gray-200'} ${textcolor}   py-1 md:py-2 text-black hover:bg-yellow-900 hover:text-white focus:bg-yellow-900 focus:text-white  rounded-full`}>Shoes</button>
                            <button className={`w-full font-semibold sm:w-16 lg:w-13 ${mode.colormode?'bg-stone-800':'bg-gray-200'} ${textcolor} py-1 md:py-2 text-black  hover:bg-yellow-900 hover:text-white focus:bg-yellow-900 focus:text-white  rounded-full`}>Glasses</button>
                            <button className={`w-full font-semibold sm:w-16 lg:w-13 ${mode.colormode?'bg-stone-800':'bg-gray-200'} ${textcolor} py-1 md:py-2 text-black   hover:bg-yellow-900 hover:text-white focus:bg-yellow-900 focus:text-white  rounded-full `}>Watches</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-1 md:gap-2 lg:px-7  sm:gap-5 sm:px-5  md:px-2 px-1 md:grid-cols-3 lg:grid-cols-4 mt-5 sm:mt-8            '>

                        {items.map(prev => {
                            return (<div className={`p-2 md:p-3  ${bgcolor} ${textcolor}  rounded-lg border-2 ${mode.colormode&&'bg-opacity-50 bg-black border-none shadow-stone-700  shadow-md'} shadow-lg  `}>
                                <img src={prev.image} alt='' className='rounded-lg w-full lg:h-52 ' />
                                <div className='flex flex-col pt-2 gap-1 sm:gap-2'>
                                    <div className='flex text-yellow-800 sm:text-lg lg:text-xl '>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalfAlt />
                                    </div>
                                    <h1 className='text-lg sm:font-bold lg:text-xl'>{prev.itemname}</h1>
                                    <p className='font-semibold md:text-lg lg:text-xl'>{`$${prev.price}`}</p>
                                    <button className='w-full bg-yellow-800 font-semibold py-1 sm:py-2 sm:text-lg lg:text-xl text-white' onClick={()=>buyorder(prev._id)} >Add to cart</button>
                                </div>
                            </div>)
                        })}
                    </div>
                </div> </div>: !error?.message && <motion.div animate={{rotate:360}} initial={{x:'50%',x:'-50%'}} transition={{duration:2,repeat: Infinity, ease: 'linear'}} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
            <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
            </motion.div>}
        </div>
    )
}

export default Product