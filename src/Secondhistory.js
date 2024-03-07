import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { appcontext } from './History'
import { useContext } from 'react'
import { FaHistory } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Secondhistory = () => {
const params = useParams()
const data1 = useOutletContext()
const [data,setdata]=useState()
const [laptopdata,setdata2]=useState()
const [error, setError] = useState()
const [error2, setError2] = useState()
const data2 = useContext(appcontext)
   
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
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/gethistory/65ccb7984abbc67ca9a90231/${params.id}`, option);
                const data = await response.json()
                setdata2(data)
            }

            catch (err) {
                setError2(err)

            }
        }
        gethistory2()
}, [params.id]);
    return (
        <div className='lg:fixed lg:w-126 w-full lg:ml-0 h-full right-0 pt-24 sm:pt-52 lg:pt-24'>
            <div className='lg:hidden '>
            {data?.product?
            <div className='lg:overflow-y-scroll h-full '>
                <div className='m-auto px-5 w-110 md:w-150 xl:w-250 lg:w-200 shadow-xl border-0.5 md:border border-slate-300 shadow-slate-300 py-6 sm:py-14 md:py-16  md:text-center   '>
                    <p className='md:text-lg lg:text-xl font-medium text-yellow-800'>Thank you!</p>
                    <div className='flex flex-col md:gap-1 mt-3 mb-5 sm:my-4 md:mb-7 md:mt-2 lg:mt-3 lg:mb-10 '>
                        <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl '>Your order has been</h1> <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl'>received</h1>
                    </div>
                    <div className='flex md:justify-center gap-1 md:gap-2 lg:gap-3 overflow-auto'>
                        {data?.product?.map(prev => {return(
                            <img src={prev.image} className='w-16  sm:w-24 lg:w-32 ' />
                        )})}
                    </div>
                    <div className='flex flex-col  gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 pb-4 mt-8'>
                        <p className='text-gray-600 font-medium'>Order code:</p>
                        <p className='font-semibold'>{`#${data?.ordercode}`}</p>
                    </div>
                    <div className='flex flex-col gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 py-4'>
                        <p className='text-gray-600 font-medium'>Date:</p>
                        <p className='font-semibold'>{`${data?.date}`}</p>
                    </div>
                    <div className='flex flex-col  gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 py-4'>
                        <p className='text-gray-600 font-medium'>Total:</p>
                        <p className='font-semibold'>$250.000</p>
                    </div>
                    <div className='flex flex-col gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 py-4'>
                        <p className='text-gray-600 font-medium' >Payment method:</p>
                        <p className='font-semibold'>Credit card</p>
                    </div>
          
                    <div className='md:flex text-left hidden md:flex-row md:justify-center gap-10 mt-8 items-center '>
                        <div className='lg:text-lg font-semibold text-gray-600 flex flex-col gap-3  '>
                            <p>Order code:</p>
                            <p>Date:</p>
                            <p>Total Amount:</p>
                            <p>Payment method:</p>
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
                    <motion.div animate={{ rotate: 360 }} initial={{ x: '50%', x: '-50%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
                        <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
                    </motion.div>}
            </div>

            {/* laptop view */}
            <div className='hidden lg:block  h-full lg:overflow-y-scroll '>
            {params.id?
            laptopdata?.product ?
                    <div className=''>
                        <div className='m-auto px-5 w-110 md:w-150 xl:w-250 lg:w-200 shadow-xl border-0.5 md:border border-slate-300 lg:shadow-none shadow-slate-300 lg:border-none py-6 sm:py-14 md:py-16  md:text-center   '>
                            <p className='md:text-lg lg:text-xl font-medium text-yellow-800'>Thank you!</p>
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
                                    <p>Order code:</p>
                                    <p>Date:</p>
                                    <p>Total Amount:</p>
                                    <p>Payment method:</p>
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
                            <motion.div animate={{ rotate: 360 }} initial={{ x: '50%', x: '-50%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
                                <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
                            </motion.div> :
                        <div className='w-full gap-3 flex lg:pt-40  justify-center items-center'><FaHistory className='text-2xl text-yellow-900 ' /><p className='text-lg font-bold'>your history will appear here</p></div>}
                    </div>
        </div>
    )
}

export default Secondhistory