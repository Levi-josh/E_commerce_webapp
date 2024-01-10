import React from 'react'
import { useState } from 'react'
import { FaArrowDown, FaChevronDown, FaTimes } from 'react-icons/fa'
import { useOutletContext } from 'react-router-dom'

const Checkout = () => {
    const { nextcart2, showcountry, selectcountry } = useOutletContext()
    return (
        <div className='pt-6 sm:pt-8 pb-20 gap-5 sm:gap-7 lg:gap-0 flex flex-col lg:justify-between  lg:flex-row lg:items-start h-full'>
            <div className={`fixed w-130 sm:w-25 md:w-10 bg-white popout lg:w-12    z-10 h-80 sm:h-96 lg:h-72  rounded-xl border-t border-neutral-100 py-4  ${showcountry ? 'block' : 'hidden'}  `}>
                <div className=' h-full '>
                    <div className='flex border-b-0.5 border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center pl-3 md:pl-4 md:gap-4 gap-3'><input type='radio' className=' md:w-4 md:h-4' /><p>china</p></div>
                    <div className='flex border-b-0.5 border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center pl-3 md:pl-4 md:gap-4 gap-3'><input type='radio' className='md:w-4 md:h-4' /><p>usa</p></div>
                </div>
            </div>
            <div className='flex flex-col gap-5 sm:gap-8 w-110 sm:w-130 md:w-140 m-auto lg:w-22 '>
                <div className='flex flex-col gap-4 border border-black px-5 md:px-7 py-6 rounded-lg w-full'>
                    <h1 className='font-bold sm:text-lg lg:text-xl '>Contact Information</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <label className='font-semibold text-gray-600 lg:text-lg'>FIRST NAME</label>
                                <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='First name' />
                            </div>
                            <div className='flex flex-col gap-2  w-full'>
                                <label className='font-semibold text-gray-600 lg:text-lg'>LAST NAME</label>
                                <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Last name' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-gray-600 lg:text-lg'>PHONE NUMBER</label>
                            <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Phone number' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-gray-600 lg:text-lg'>EMAIL ADDRESS</label>
                            <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Email address' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 border border-black px-5 md:px-7 py-6 rounded-lg'>
                    <h1 className='font-bold sm:text-lg lg:text-xl  '>Shipping Address</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-gray-600 lg:text-lg'>STREET ADDRESS *</label>
                            <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Street address' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className=' text-gray-600 font-semibold lg:text-lg'>COUNTRY *</label>
                            <div className='relative '>
                                <div className='flex w-full border border-black p-2 rounded-md justify-between items-center'>

                                    <label className=' text-gray-600 shadow'>Country</label>

                                    <FaChevronDown onClick={selectcountry} />

                                </div>
                            </div>
                        </div>





                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold text-gray-600 lg:text-lg'>TOWN/CITY *</label>
                            <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Town/city' />
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-gray-600 lg:text-lg'>STATE</label>
                                <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='State' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-gray-600 lg:text-lg'>ZIP CODE</label>
                                <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Zip code' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className='lg:w-4lg:h-4' />
                            <p className=' text-gray-600 lg:text-lg whitespace-nowrap'>use a different billing address (optional)</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 border border-black px-5 md:px-7 py-6 rounded-lg'>
                    <h1 className='font-bold sm:text-lg lg:text-xl '>Payment Method</h1>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-2 w-full border border-black p-2 rounded-md'>
                            <input type='radio' className='lg:w-4' />
                            <p className='font-bold lg:text-lg'>Pay by Card Credit</p>
                        </div>
                        <div className='flex gap-2 w-full border border-black p-2 rounded-md'>
                            <input type='radio' className=' lg:w-4' />
                            <p className='font-bold lg:text-lg'>Paypal</p>
                        </div>
                        <div className='border-b-0.5 border-black'></div>
                    </div>

                    <div className='flex flex-col gap-4 mt-3'>
                        <div className='flex flex-col gap-2  '>
                            <label className='font-semibold text-gray-600 lg:text-lg' >CARD NUMBER</label>
                            <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Card number' />
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-gray-600 lg:text-lg'>EXPIRATION DATE</label>
                                <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Expiration date' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-gray-600 lg:text-lg'>CVC</label>
                                <input type='text' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Cvc' />
                            </div>
                        </div>
                    </div>

                </div>
                <button className='hidden lg:block py-3 rounded-lg text-white text-lg font-semibold    bg-yellow-800' onClick={nextcart2}>Place order</button>
            </div>




            <div className='w-110 border sm:w-130 border-black px-5 py-3 md:px-7 md:py-5 m-auto md:w-140 mt-0 lg:w-10 rounded-lg'>
                <h1 className='text-lg  font-bold sm:text-xl lg:text-2xl'>Order Summary</h1>
                <div className='flex gap-5  border-b lg:w-full   border-gray-400  pb-5  mt-5    '>
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-40 sm:w-52  ' />
                    <div className='grid grid-cols-2 place-content-between   '>
                        <h1>watch</h1>
                        <h1>$100</h1>
                        <div className='w-16 h-8 border border-black text-center'>-3+</div>
                        <FaTimes />

                        <h1>subtotal:</h1>
                        <h1>$300</h1>

                    </div>
                </div>
                <div className='flex justify-between items-center border-gray-400 border-b  py-3 sm:py-4 '>
                    <h1 className='sm:text-lg lg:text-xl font-medium'>Shipping</h1>
                    <h1 className='sm:text-lg lg:text-xl font-semibold'>free</h1>
                </div>
                <div className='flex justify-between items-center border-gray-400 border-b  py-3 sm:py-4  '>
                    <h1 className='sm:text-lg lg:text-xl font-medium'>Subtotal</h1>
                    <h1 className='sm:text-lg lg:text-xl font-semibold'>$1200</h1>
                </div>
                <div className='flex justify-between items-center pt-3 sm:pt-4 font-semibold '>
                    <h1 className='text-lg sm:text-xl lg:text-2xl'>Total</h1>
                    <h1 className=' text-lg sm:text-xl lg:text-2xl'>$2000</h1>
                </div>
            </div>
            <button className='lg:hidden block m-auto w-110 sm:w-130 md:w-140 py-3 font-semibold rounded-lg text-white  bg-yellow-800' onClick={nextcart2}>Place order</button>

        </div>
    )
}

export default Checkout