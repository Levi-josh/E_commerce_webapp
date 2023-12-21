import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Shopcart = () => {
    return (
        <div className='pt-6 sm:pt-8 / sm:gap-11 md:gap-14 lg:gap-15  '>
            <div className='lg:flex items-start lg:w-120 xl:w-110 m-auto gap-5 lg:mt-10 '>
                <div className=' lg:w-130 lg:flex lg:flex-col lg:justify-center items-center  '>

                    <ul className='border-b border-black pb-6 pl-3 sm:pl-5 sm:pb-7 sm:w-140 sm:m-auto  justify-between lg:m-0 lg:flex lg:pb-0 lg:pl-0  lg:w-full'>
                        <li className='sm:text-lg lg:col-span-3'>Product</li>
                        <div className='flex  '>
                            <li className='hidden lg:grid lg:col-span-1'>Quatity</li>
                            <li className='hidden lg:grid lg:col-span-1'>Price</li>
                            <li className='hidden lg:grid lg:col-span-1'>Subtotal</li>
                        </div>
                    </ul>

                    <div className='flex gap-5 justify-center border-b sm:w-140 lg:w-full   border-gray-400 mt-5 sm:mt-8  sm:pb-8  sm:m-auto pb-5 lg:flex lg:justify-between  '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-40 sm:w-52 lg:hidden ' />
                        <div className='grid grid-cols-2 place-items-center gap-x-10 lg:hidden  '>
                            <h1>watch</h1>
                            <h1>$100</h1>
                            <div className='w-16 h-8 border border-black text-center'>-3+</div>
                            <FaTimes />

                            <h1>subtotal:</h1>
                            <h1>$300</h1>

                        </div>

                        <div className='hidden lg:flex  '>
                            <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-40 hidden lg:block ' />
                            <div >
                                <h1>watch</h1>
                                <FaTimes />
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='hidden lg:flex w-16 h-8 lg:h-10 lg:w-28 border border-black  justify-center items-center '>-3+</div>
                            <h1 className='hidden lg:block '>$100</h1>
                            <h1 className='hidden lg:block'>$300</h1>
                        </div>

                    </div>
                </div>


                <div className='w-110 border sm:w-140 md:w-140 border-black m-auto px-5 mt-10 sm:mt-14 md:px-10 sm:px-10  py-3 sm:py-7 lg:px-3 xl:px-8 lg:py-2 xl:py-6 lg:mt-0 lg:w-22'>
                    <h1 className='font-bold sm:text-lg md:text-xl lg:text-2xl '>Cart summary</h1>
                    <div className='flex  border border-black mt-5 justify-between p-3 lg:mt-4 xl:mt-5 '>
                        <div className='flex gap-2'>
                            <input type='radio' className='lg:w-4 ' />
                            <p className='sm:text-lg lg:text-xl font-semibold'>Free shipping</p>
                        </div>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>$0.00</h1>
                    </div>
                    <div className='flex   border border-black mt-5 justify-between p-3  '>
                        <div className='flex gap-2'>
                            <input type='radio' className='lg:w-4 ' />
                            <p className='sm:text-lg lg:text-xl font-semibold'>Express shipping</p>
                        </div>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>+$20.00</h1>
                    </div>
                    <div className='flex   border border-black mt-5 justify-between p-3 '>
                        <div className='flex gap-2'>
                            <input type='radio' className='lg:w-4 ' />
                            <p className='sm:text-lg lg:text-xl font-semibold'>Pick up</p>
                        </div>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>%21.00</h1>
                    </div>
                    <div className='flex justify-between items-center border-gray-400 border-b  p-3 mt-3'>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>Subtotal</h1>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>$1200</h1>
                    </div>
                    <div className='flex justify-between items-center p-3 my-3'>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>Total</h1>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>$2000</h1>
                    </div>
                    <button className='w-full text-center bg-blue-700 text-white py-3 sm:text-lg lg:text-xl  lg:py-4 rounded-lg'>Checkout</button>
                </div>
            </div>
        </div >
    )
}

export default Shopcart