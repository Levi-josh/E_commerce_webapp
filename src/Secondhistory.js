import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { appcontext } from './History'
import { useContext } from 'react'
import { FaHistory } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
const Secondhistory = () => {
const params = useParams()
const data1 = useOutletContext()
const [data,setdata]=useState()
const [laptopdata,setdata2]=useState()
const [error, setError] = useState()
const [error2, setError2] = useState()
const data2 = useContext(appcontext)
const mode = useSelector((state)=>state.changemode.value)
const bgcolor = mode?.colorBgtext
const textcolor = mode?.colortext  
useEffect(() => {
    const gethistory = async () => {
            
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/gethistory/${data1._id}/${params.id}`, option);
                const data = await response.json()
                setdata(data)
            }

            catch (err) {
                setError(err)

            }
        }
        gethistory()
}, []);
useEffect(() => {
    const gethistory2 = async () => {
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/gethistory/${data2?._id}/${params.id}`, option);
                const data = await response.json()
                setdata2(data)
            }

            catch (err) {
                setError2(err)

            }
        }
        gethistory2()
}, [params.id]);
console.log(data2?._id)
    return (
        <div className={`lg:fixed lg:w-126 w-full  lg:ml-0  ${data?.product?'h-full md:h-screen':'h-screen'} right-0 pb-10 pt-24 sm:pt-52 lg:pt-24`}>
            <div className='lg:hidden '>
            {data?.product?
            <div className='lg:overflow-y-scroll h-full '>
                <div className={`m-auto px-5 w-110 md:w-150 xl:w-250 lg:w-200 shadow-xl border-0.5 md:border border-stone-700 ${!mode.colormode&&'shadow-slate-300'}  py-6 sm:py-14 md:py-16  md:text-center   `}>
                    <p className={`md:text-lg lg:text-xl font-medium ${mode.colormode?'text-yellow-800':'text-yellow-900'} `}>Thank you!</p>
                    <div className='flex flex-col md:gap-1 mt-3 mb-5 sm:my-4 md:mb-7 md:mt-2 lg:mt-3 lg:mb-10 '>
                        <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl '>Your order has been</h1> <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl'>received</h1>
                    </div>
                    <div className='flex md:justify-center gap-1 md:gap-2 lg:gap-3 overflow-auto'>
                        {data?.product?.map(prev => {return(
                            <img src={prev.image} className='w-24  sm:w-24 lg:w-32 ' />
                        )})}
                    </div>
                    <div className='flex flex-col  gap-1 md:flex-row md:hidden border-b-0.5 border-stone-700 pb-4 mt-8'>
                        <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} font-medium`}>Order code:</p>
                        <p className='font-semibold'>{`#${data?.ordercode}`}</p>
                    </div>
                    <div className='flex flex-col gap-1 md:flex-row md:hidden border-b-0.5 border-stone-700 py-4'>
                        <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} font-medium`}>Date:</p>
                        <p className='font-semibold'>{`${data?.date}`}</p>
                    </div>
                    <div className='flex flex-col  gap-1 md:flex-row md:hidden border-b-0.5 border-stone-700 py-4'>
                        <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} font-medium`}>Total:</p>
                        <p className='font-semibold'>$250.000</p>
                    </div>
                    <div className='flex flex-col gap-1 md:flex-row md:hidden border-b-0.5 border-stone-700 py-4'>
                        <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} font-medium`} >Payment method:</p>
                        <p className='font-semibold'>Credit card</p>
                    </div>
          
                    <div className='md:flex text-left hidden md:flex-row md:justify-center gap-10 mt-8 items-center '>
                        <div className='lg:text-lg font-semibold text-gray-600 flex flex-col gap-3  '>
                            <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `} >Order code:</p>
                            <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `} >Date:</p>
                            <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `} >Total Amount:</p>
                            <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'}`} >Payment method:</p>
                        </div>
                        <div className='flex flex-col gap-3 lg:text-lg font-bold'>
                            <p>{`#${data?.ordercode}`}</p>
                            <p>{`${data?.date}`}</p>
                            <p>$250.000</p>
                            <p>Credit card</p>
                        </div>
                    </div>
                </div>
                    </div> :
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

            {/* laptop view */}
            <div className='hidden lg:block  h-full lg:overflow-y-scroll '>
            {params.id?
            laptopdata?.product ?
                    <div className=''>
                        <div className='m-auto px-5 w-110 md:w-150 xl:w-250 lg:w-200 shadow-xl border-0.5 md:border border-slate-300 lg:shadow-none shadow-slate-300 lg:border-none py-6 sm:py-14 md:py-16  md:text-center   '>
                            <p className={`md:text-lg lg:text-xl font-medium ${mode.colormode?'text-yellow-800':'text-yellow-900'}`}>Thank you!</p>
                            <div className='flex flex-col md:gap-1 mt-3 mb-5 sm:my-4 md:mb-7 md:mt-2 lg:mt-3 lg:mb-10 '>
                                <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl '>Your order has been</h1> <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl'>received</h1>
                            </div>
                            <div className='flex md:justify-center gap-1 md:gap-2 lg:gap-3 overflow-auto'>
                                {laptopdata?.product?.map(prev => {
                                    return (
                                        <img src={prev.image} className='w-16  sm:w-24 lg:w-32 ' />
                                    )
                                })}
                            </div>
                   
                            <div className='md:flex text-left hidden md:flex-row md:justify-center gap-10 mt-8 items-center '>
                                <div className='lg:text-lg font-semibold text-gray-600 flex flex-col gap-3  '>
                                    <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `}>Order code:</p>
                                    <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `}>Date:</p>
                                    <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `}>Total Amount:</p>
                                    <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `}>Payment method:</p>
                                </div>
                                <div className='flex flex-col gap-3 lg:text-lg font-bold'>
                                    <p>{`#${laptopdata?.ordercode}`}</p>
                                    <p>{`${laptopdata?.date}`}</p>
                                    <p>$250.000</p>
                                    <p>Credit card</p>
                                </div>
                            </div>
                        </div>
                        </div> :
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
                        </motion.div> :
                        <div className='w-full gap-3 flex lg:pt-40  justify-center items-center'><FaHistory className='text-2xl text-yellow-900 ' /><p className='text-lg font-bold'>your order history will appear here</p></div>}
                    </div>
        </div>
    )
}

export default Secondhistory