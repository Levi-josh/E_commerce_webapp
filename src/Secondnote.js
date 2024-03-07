import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { useContext, useEffect,useState } from 'react'
import { appcontext } from './Note'
import { motion } from 'framer-motion'
import { FaBell,FaExclamationCircle } from 'react-icons/fa'
const Secondnote = () => {
const params = useParams()
const data1 = useOutletContext()
const [data,setdata]=useState()
const [laptopdata,setdata2]=useState()
const [error, setError] = useState()
const [error2, setError2] = useState()
const data2 = useContext(appcontext)
   
useEffect(() => {
    const getnote = async () => {
            
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/getnote/${data1._id}/${params.id}`, option);
                const data = await response.json()
                setdata(data)
            }

            catch (err) {
                setError(err)
            }
        }
        getnote()
}, []);
useEffect(() => {
    const getnote = async () => {
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/getnote/${data2._id}/${params.id}`, option);
                const data = await response?.json()
                setdata2(data)
                console.log(data)
            }

            catch (err) {
                setError2(err)

            }
        }
        getnote()
}, [params.id]);
  console.log(data2) 
    return (
    <div className='lg:fixed flex items-center flex-col lg:w-126 w-full lg:ml-0 h-full right-0 pt-28 sm:pt-36 md:pt-40 lg:pt-40 '>
        <div className='lg:hidden'>
                {error?.message&&<div className={` w-107 sm:w-108 md:w-109 flex items-center justify-center   rounded-xl shadow-xl outline-yellow-900  outline outline-2  fixed popout z-30 bg-white min-h-101 sm:min-h-102 lg:min-h-101 `}>
                        <div className='flex md:items-start flex-col md:flex-row  gap-3 md:gap-5'>
                            <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                            <div className='flex flex-col justify-center gap-1'>
                                <h1 className='font-bold sm:text-xl '>{error?.message}</h1>
                                <p className='md:text-lg'>Check your internet connection</p>
                                < div><button className='px-6 py-1 rounded-full bg-yellow-900 text-white' onClick={()=>window.location.reload()}>Reload</button></div>
                            </div>
                        </div>
                </div>}
            {data?.note && !error?.message ?<>
            <div className='flex flex-col items-center gap-3 sm:gap-5'>

                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='  w-105 h-105 sm:w-106 sm:h-106 outline-2 outline outline-yellow-900  rounded-full  bg-no-repeat bg-cover bg-center    ' />
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-900 '>Glamour Grove</h1>
            </div>
            <div className='w-110 m-auto sm:w-130 mt-3 sm:mt-5'><p className=''>{data?.note}</p></div></>
            : !error?.message&&<motion.div animate={{rotate:360}} initial={{x:'50%',x:'-50%'}} transition={{duration:2,repeat: Infinity, ease: 'linear'}} className='fixed popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
                <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
            </motion.div>
            }
            </div>

            <div className='lg:block hidden'>
                {error2?.message === 'Failed to fetch' && <div className={` w-107 sm:w-108 md:w-109 flex items-center justify-center   rounded-xl shadow-xl outline-yellow-900  outline outline-2  absolute popout z-30 bg-white min-h-101 sm:min-h-102 lg:min-h-101 `}>
                    <div className='flex md:items-start flex-col md:flex-row  gap-3 md:gap-5'>
                        <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                        <div className='flex flex-col justify-center gap-1'>
                            <h1 className='font-bold sm:text-xl '>{error2?.message}</h1>
                            <p className='md:text-lg'>Check your internet connection</p>
                            < div><button className='px-6 py-1 rounded-full bg-yellow-900 text-white' onClick={() => window.location.reload()}>Reload</button></div>
                        </div>
                    </div>
                </div>}
                {params.id  ?
                    laptopdata?.note? <>
                        <div className='flex flex-col items-center gap-3'>

                            <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='  w-105 h-105 sm:w-106 sm:h-106 outline-2 outline outline-yellow-900  rounded-full  bg-no-repeat bg-cover bg-center    ' />
                            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-900 '>Glamour Grove</h1>
                        </div>
                        <div className='w-130 mt-3 m-auto'><p className=''>{laptopdata?.note}</p></div></>
                    :!error2?.message&&<motion.div animate={{rotate:360}} initial={{x:'50%',x:'-50%'}} transition={{duration:2,repeat: Infinity, ease: 'linear'}} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
                        <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
                    </motion.div>
                :<div className='flex items-center gap-3 pt-20'><FaBell className='text-2xl text-yellow-900'/> <p className='font-bold text-lg'>Your notifications will appear here</p></div>}
        </div>
    </div>
    )
}

export default Secondnote