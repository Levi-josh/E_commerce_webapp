import React, { useLayoutEffect } from 'react'
import { Link, NavLink,useOutletContext } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaSearch, FaBell,FaExclamationCircle,FaPlusSquare, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaInstagram, FaFacebook, FaYoutube, FaFacebookMessenger, FaFacebookF, FaStarHalf, FaStarHalfAlt, FaUserCircle, FaAngleLeft, FaTimesCircle } from 'react-icons/fa'
function Product() {
    const [popout, setpopout] = useState(false)
    const [showinput, setshowinput] = useState(false)
    const [showinput1, setshowinput1] = useState(false)
    const [items,setitems]=useState([])
    const [error,seterror]=useState([])
    const [checked,setchecked]=useState(true)
    const [newcartText, setnewcartText] = useState('');
    const [displaynote,setdisplaynote]= useState(false)
    const [scroll, setscroll] = useState(0)
    const [selectedcart, setseletedcart] = useState('');
    const {data,note,runEffect,changeRunEffect1,Error,id,signout,runEffect2}= useOutletContext()
    function searchfunc() {
        setshowinput1(prev => !prev)
        setshowinput(false)
    }
    const buyorder = async (id) => {   
        if (data.items.length<1) {
         throw Error({'message':'Empty cart'})
        } 
     const option = {
                 method: 'POST',
                 headers: {
                     'content-type': 'application/json',
                 }
             }
             try {
                 const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/addcart/${selectedcart}/${id}`, option);
                 const data = await response.json()
                console.log(data)
                
             }
 
             catch (err) {
             seterror(err.message === 'Failed to fetch' ? { 'message': 'Failed to add cart' }:err)
             console.log(err)
             }
        //  setadded(prev => !prev)
        //  setTimeout(() => {
        //  setadded(prev => !prev)  
        //  }, 2000);
         
     }
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
const handleChange = (e) => {
    setnewcartText(e.target.value)
}
const handleSubmit = async (e) => {
e.preventDefault()

const option = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body:JSON.stringify({"id":data._id,"title":newcartText})
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/newcart`, option);
                const data = await response.json()
               console.log(data)
            }

            catch (err) {
            seterror(err) 
            console.log(err)
    } 
    setnewcartText('')
    setshowinput(false)
    }
 
const selectcartFunc = async(id)=> {
   
    const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/select/${id}`, option);
                const data = await response.json()
               console.log(data)
            }

            catch (err) {
            seterror(err) 
            console.log(err)
     }
}

    return (
        <div className={` ${popout ? 'p-home' : ''}h-full pb-10`}>
            <header className='fixed flex sm:justify-between gap-4 sm:gap-0 items-center h-20 sm:h-24 md:h-24 lg:h-24 px-2 sm:px-5 md:px-2 lg:px-4 w-full m-0 bg-white z-10 shadow-lg '>
                {!showinput1 ? <NavLink to='../' relative='path' className={' sm:absolute '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink> : <FaAngleLeft onClick={searchfunc} className='font-bold sm:absolute  text-xl md:text-2xl ' ></FaAngleLeft>}
                {showinput1 ? <input className='outline-none  border rounded-xl w-130 sm:w-140 border-black lg:w-25 sm:m-auto h-9  pl-2 placeholder:pl-2 ' placeholder='Search products' />
                    : <h1 className=' sm:m-auto  text-xl sm:text-2xl font-semibold'>Products</h1>}
                <FaSearch onClick={searchfunc} className={`${showinput1 ? 'hidden' : 'block'} right-4  sm:right-6 md:right-4 lg:right-6 absolute`} />
            </header >


            <motion.div className={`fixed   w-130 sm:w-25 md:w-22   bg-white popout lg:w-10    z-20 h-80 sm:h-96 lg:h-80    rounded-xl border-t   ${popout&&!error.message ? 'block ' : 'hidden'}  `}>
                <FaTimesCircle className='absolute right-0  text-yellow-900 z-40 text-xl sm:text-2xl hover:cursor-pointer ' onClick={() => {
                    setscroll(scroll)
                    setpopout(prev => !prev)
                    setshowinput(false)
                }} />
                <div className='flex fixed rounded-t-xl top-0   bg-white w-full z-10 px-8 justify-between items-center py-4 sm:py-4 shadow-lg'>
                    <h1 className='text-xl lg:text-2xl font-extrabold'>Cart</h1>
                    <button className='w-10 p-1 lg:w-350  xl:w-14 bg-yellow-900 text-white font-semibold whitespace-nowrap' onClick={() => { setshowinput(prev => !prev) }}>New cart</button>
                </div>
                <div className='px-4 pt-16 sm:pt-16 lg:pt-16 h-80 sm:h-96 overflow-y-auto lg:h-80 overflow-div     '>
                {id?
                    data.items ?
                        <div>
                            <div>
                                {showinput && <form className=' relative mt-3 sm:mt-4' ><input type='text' placeholder='create new cart' className='w-full py-1 lg:py-2 md:pr-12 pl-3 pr-11 border border-black outline-none ' value={newcartText} autoFocus onChange={handleChange} /><div className='bg-yellow-900'><FaPlusSquare className='absolute md:right-5 sm:right-4 right-3 text-lg lg:text-xl  flex top-2   lg:top-3' onClick={handleSubmit} /></div></form>}
                            </div>
                            {data?.items?.map(prev => {
                            return (<div className='flex justify-between  py-3 border-b border-yellow-900 hover:cursor-pointer  '>
                                    <NavLink to={`/cart/${prev._id}`}>  <p className='font-semibold sm:text-lg lg:text-xl  '>{prev.title}</p></NavLink>
                                    <input type="radio" className='hover:cursor-pointer accent-yellow-900  lg:w-4' name='collection' checked={checked === prev.selected} onClick={() => selectcartFunc(prev._id)} />
                                </div>)
                            }).reverse()}
                        </div> : 
                        <motion.div animate={{rotate:360}} initial={{x:'50%',x:'-50%'}} transition={{duration:2,repeat: Infinity, ease: 'linear'}} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
                        <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
                        </motion.div>:
                        <p className='font-semibold sm:text-lg lg:text-xl popout fixed'>Empty!</p>
                    }
                </div>
            </motion.div>
            
            {error?.message  && <div className={` w-107 sm:w-108 md:w-109 flex items-center justify-center   rounded-xl shadow-xl outline-yellow-900  outline outline-2  fixed popout z-30 bg-white min-h-101 sm:min-h-102 lg:min-h-101 `}>
                <div className='flex md:items-start flex-col md:flex-row  gap-3 md:gap-5'>
                    <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                    <div className='flex flex-col justify-center gap-1'>
                        <h1 className='font-bold sm:text-xl '>{error?.message}</h1>
                        <p className='md:text-lg'>Check your internet connection</p>
                        <div><button className='px-6 py-1 rounded-full bg-yellow-900 text-white' onClick={()=>window.location.reload()}>Reload</button></div>
                    </div>
                </div>
            </div>}
            {items.length >= 1  ? <>
                <div className='sm:pt-28 pt-24    '>

                    <div className='flex flex-col gap-3 lg:gap-4  w-full bg-white   justify-center mb-3 sticky top-20 sm:top-24  py-3  sm:py-4 '>
                        <input className='outline-none hidden  border w-130 border-black lg:w-25 m-auto h-9 lg:h-11 rounded-2xl pl-4 placeholder:pl-4  ' placeholder='Search products' />
                        <div className='flex px-3 sm:justify-center justify-between gap-2 md:gap-12 lg:gap-20 sm:gap-10'>
                            <button className='w-full font-semibold sm:w-16 lg:w-13 bg-white py-1 md:py-2 text-black border hover:bg-yellow-900 hover:text-white focus:bg-yellow-900 focus:text-white border-yellow-900 rounded-full '>Clothes</button>
                            <button className='w-full font-semibold sm:w-16 lg:w-13 bg-white  border py-1 md:py-2 text-black hover:bg-yellow-900 hover:text-white focus:bg-yellow-900 focus:text-white border-yellow-900 rounded-full'>Shoes</button>
                            <button className='w-full font-semibold sm:w-16 lg:w-13 bg-white py-1 md:py-2 text-black border hover:bg-yellow-900 hover:text-white focus:bg-yellow-900 focus:text-white border-yellow-900 rounded-full'>Glasses</button>
                            <button className='w-full font-semibold sm:w-16 lg:w-13 bg-white py-1 md:py-2 text-black border  hover:bg-yellow-900 hover:text-white focus:bg-yellow-900 focus:text-white border-yellow-900 rounded-full '>Watches</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-1 md:gap-2 lg:px-8 xl:gap-16 xl:px-16 sm:gap-5 sm:px-5 lg:gap-8 md:px-2 px-1 md:grid-cols-3 mt-5 sm:mt-8            '>

                        {items.map(prev => {
                            return (<div className=' p-2 md:p-3 lg:p-7  rounded-lg border-2 shadow-lg           '>
                                <img src={prev.image} alt='' className='rounded-lg w-full lg:h-52 ' />
                                <div className='flex flex-col pt-2 gap-1 sm:gap-2'>
                                    <div className='flex text-yellow-800 sm:text-lg lg:text-xl '>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalfAlt />
                                    </div>
                                    <h1 className='text-lg sm:font-bold font-semibold lg:text-xl'>{prev.itemname}</h1>
                                    <p className='font-semibold md:text-lg lg:text-xl'>{`$${prev.price}`}</p>
                                    <button className='w-full bg-yellow-800 font-semibold py-1 sm:py-2 sm:text-lg lg:text-xl text-white' >Add to cart</button>
                                </div>
                            </div>)
                        })}
                    </div>
                </div> </>: !error?.message && <motion.div animate={{rotate:360}} initial={{x:'50%',x:'-50%'}} transition={{duration:2,repeat: Infinity, ease: 'linear'}} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
            <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
            </motion.div>}
        </div>
    )
}

export default Product