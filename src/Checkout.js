import React from 'react'
import { FaArrowDown, FaTimes } from 'react-icons/fa'

const Checkout = () => {
    return (
        <div className='pt-6 sm:pt-8 pb-20 gap-5 lg:gap-0 flex flex-col lg:justify-between  lg:flex-row lg:items-start'>
            <div className='flex flex-col gap-5 w-110 sm:w-140 m-auto lg:w-22 '>
                <div className='flex flex-col gap-3 border border-black px-5 md:px-7'>
                    <h1>Contact Information</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <label>FIRST NAME</label>
                                <input type='text' className='outline-none border border-black' />
                            </div>
                            <div className='flex flex-col gap-2  w-full'>
                                <label>LAST NAME</label>
                                <input type='text' className='outline-none border border-black' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>PHONE NUMBER</label>
                            <input type='text' className='outline-none border border-black' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>EMAIL ADDRESS</label>
                            <input type='text' className='outline-none border border-black' />
                        </div>
                    </div>
                </div>
                <div className='border border-black px-5 md:px-7'>
                    <h1>Shipping Address</h1>
                    <div>
                        <div>
                            <label>STREET ADDRESS *</label>
                            <input type='text' className='outline-none border border-black' />
                        </div>
                        <div>
                            <label>COUNTRY *</label>
                            <div>
                                <FaArrowDown />
                            </div>
                        </div>
                        <div>
                            <label>TOWN/CITY *</label>
                            <input type='text' className='outline-none border border-black' />
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col gap-2'>
                                <label>STATE</label>
                                <input type='text' className='outline-none border border-black' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>ZIP CODE</label>
                                <input type='text' className='outline-none border border-black' />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <input type='checkbox' />
                            <p>use a different billing address (optional)</p>
                        </div>
                    </div>
                </div>
                <div className='border border-black px-5 md:px-7'>
                    <h1>Payment Method</h1>
                    <div>
                        <div>
                            <input type='radio' />
                            <p>Pay by Card Credit</p>
                        </div>
                        <div>
                            <input type='radio' />
                            <p>Paypal</p>
                        </div>
                        <hr></hr>
                        <div>
                            <label>CARD NUMBER</label>
                            <input type='text' className='outline-none border border-black' />
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col gap-2'>
                                <label>EXPIRATION DATE</label>
                                <input type='text' className='outline-none border border-black' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>CVC</label>
                                <input type='text' className='outline-none border border-black' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className='w-110 border border-black px-5 py-3 md:px-7 md:py-5 m-auto sm:w-140 mt-0 lg:w-10'>
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

        </div>
    )
}

export default Checkout