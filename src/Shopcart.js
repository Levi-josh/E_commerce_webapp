import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Shopcart = () => {
    return (
        <div className='pt-6'>
            <div className='lg:flex items-start lg:w-110 m-auto gap-5 lg:mt-10 '>
                <div className='lg:w-full lg:flex lg:flex-col lg:justify-center items-center  '>

                    <ul className='border-b border-black pb-6 pl-3 lg:justify-between  lg:flex lg:pb-0 lg:pl-0  lg:w-full'>
                        <li>Product</li>

                        <li className='hidden lg:block'>Quatity</li>
                        <li className='hidden lg:block'>Price</li>
                        <li className='hidden lg:block'>Subtotal</li>

                    </ul>

                    <div className='flex gap-10 justify-center border-b lg:w-full   border-gray-400 mt-5 sm:mt-5 sm:m-auto pb-5  lg:justify-start '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-40 lg:hidden ' />
                        <div className='grid grid-cols-2 place-items-center gap-x-10 lg:hidden  '>
                            <h1>watch</h1>
                            <h1>$100</h1>
                            <div className='w-16 h-8 border border-black text-center'>-3+</div>
                            <FaTimes />

                            <h1>subtotal:</h1>
                            <h1>$300</h1>

                        </div>
                        <div className='lg:flex hidden justify-between w-full'>
                            <div className='flex'>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-40 hidden lg:block ' />
                                <div >
                                    <h1>watch</h1>
                                    <FaTimes />
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex hidden'>
                            <div className='w-16 h-8 border border-black text-center'>-3+</div>
                            <h1>$100</h1>
                            <h1>$300</h1>
                        </div>

                    </div>
                </div>

                <div className='w-110 border sm:w-130 border-black m-auto px-5 mt-10  py-3 lg:mt-0 lg:w-140'>
                    <h1 className='font-bold sm:text-lg md:text-xl lg:text-2xl '>Cart summary</h1>
                    <div className='flex  border border-black mt-5 justify-between p-3  '>
                        <div className='flex gap-2'>
                            <input type='radio' />
                            <p>Free shipping</p>
                        </div>
                        <h1>$0.00</h1>
                    </div>
                    <div className='flex   border border-black mt-5 justify-between p-3  '>
                        <div className='flex gap-2'>
                            <input type='radio' />
                            <p>Free shipping</p>
                        </div>
                        <h1>$0.00</h1>
                    </div>
                    <div className='flex   border border-black mt-5 justify-between p-3 '>
                        <div className='flex gap-2'>
                            <input type='radio' />
                            <p>Free shipping</p>
                        </div>
                        <h1>$0.00</h1>
                    </div>
                    <div className='flex justify-between items-center border-gray-400 border-b  p-3 mt-3'>
                        <h1>Subtotal</h1>
                        <h1>$1200</h1>
                    </div>
                    <div className='flex justify-between items-center p-3 my-3'>
                        <h1>Total</h1>
                        <h1>$2000</h1>
                    </div>
                    <button className='w-full text-center bg-blue-700 text-white py-3 lg:py-4 rounded-lg'>Checkout</button>
                </div>
            </div>
        </div >
    )
}

export default Shopcart