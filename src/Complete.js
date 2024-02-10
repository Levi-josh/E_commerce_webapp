import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Complete = () => {
    const { nextcart3 } = useOutletContext()
    return (
        <div className='pt-6 sm:pt-8 pb-20 h-full'>
            <div className='m-auto px-5 w-110 md:w-150 lg:w-200 shadow-xl border-0.5 md:border border-slate-300 shadow-slate-300 py-6 sm:py-14 md:py-16  md:text-center   '>
                <p className='md:text-lg lg:text-xl font-medium text-yellow-900'>Thank you!</p>
                <div className='flex flex-col md:gap-1 mt-3 mb-5 sm:my-4 md:mb-7 md:mt-2 lg:mt-3 lg:mb-10 '>
                    <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl '>Your order has been</h1> <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl'>received</h1>
                </div>
                <div className='flex md:justify-center gap-1 md:gap-2 lg:gap-3 overflow-auto '>
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-16  sm:w-24 lg:w-32 ' />
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className=' w-16  sm:w-24 lg:w-32 ' />
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-16  sm:w-24 lg:w-32 ' />
                </div>
                <div className='flex flex-col  gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 pb-4 mt-8'>
                    <p className='text-gray-600 font-medium'>Order code:</p>
                    <p className='font-semibold'>#231_486e</p>
                </div>
                <div className='flex flex-col gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 py-4'>
                    <p className='text-gray-600 font-medium'>Date:</p>
                    <p className='font-semibold'>October 19,2023</p>
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
                        <p>#231_486e</p>
                        <p>October 19,2023</p>
                        <p>$250.000</p>
                        <p>Credit card</p>
                    </div>
                </div>

                <button className=' w-full py-3 sm:w-22 md:w-48 block m-auto  bg-yellow-900 text-white md:py-2 rounded-3xl mt-9 md:mt-8 md:font-medium lg:font-semibold text-lg'>Purchase history</button>
            </div>
        </div>
    )
}

export default Complete