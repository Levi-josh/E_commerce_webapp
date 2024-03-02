import React, { useState,useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom'

const Shopcart = () => {
    const { nextcart, cart, shopitems,deleteitem } = useOutletContext()
    const navigate = useNavigate()
    const [error,seterror]=useState()
    const increasequantity = async(id) => {
     const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/addquan/${id}/${cart?._id}`, option);
                const data = await response.json()
               console.log(data)
            }

            catch (err) {
           // seterror(err) 
            console.log(err)
            }
    }
    const reducequantity = async(id) => {
     const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/redquan/${id}/${cart?._id}`, option);
                const data = await response.json()
               console.log(data)
            }

            catch (err) {
            //seterror(err) 
            console.log(err)
        }
        console.log(id)
        console.log(cart._id)
    }
    const selectpayment = async (id) => {
    
        const option = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            }
        }
        try {
            const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/shipping/${cart._id}/${id}`, option);
            const data = await response.json()
            console.log(data)
        }

        catch (err) {
            seterror(err)
            console.log(err)
        }
    }
useEffect(() => { 
    if (shopitems?.progess===true) {
        navigate('/cart/:id/checkout') 
      
    }
}, [shopitems]);
    return (
        <div className='pt-6 sm:pt-8  sm:gap-11 md:gap-14 lg:gap-15 h-full  '>
            {shopitems?.progess===false && <div className='lg:flex items-start lg:w-120 xl:w-110 m-auto gap-10 lg:mt-10 '>
                <div className=' lg:w-140 lg:flex lg:flex-col lg:justify-center items-center border w-110 sm:w-140 m-auto lg:m-0   '>

                    {/*} <ul className='border-b border-black pb-6 pl-3 sm:pl-5 sm:pb-7 sm:w-140 sm:m-auto  justify-between lg:m-0 lg:flex lg:pb-0 lg:pl-0  lg:w-full'>
                        <li className='sm:text-lg lg:col-span-3'>Product</li>
                        <div className=' hidden  '>
                            <li className='hidden lg:grid lg:col-span-1'>Quatity</li>
                            <li className='hidden lg:grid lg:col-span-1'>Price</li>
                            <li className='hidden lg:grid lg:col-span-1'>Subtotal</li>
                        </div>
    <               /ul>*/}

                    {cart?.product?.map(prev => {
                        return (<div className='flex gap-2 sm:gap-5 lg:gap-0 justify-center border-b w-full    border-gray-400 mt-5 sm:mt-8  sm:pb-8   sm:m-auto pb-5 lg:justify-evenly   '>
                            <img src={prev.image} className='w-40 sm:w-52  h-full  ' />
                            <div className='flex flex-col  w-22 '>
                                <div className='grid grid-cols-2 grid-rows-4   gap-x-18 gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-7    '>
                                    <h1 className='md:font-bold whitespace-nowrap'>{prev.itemname}</h1>
                                    <div className=' pt-1 ' onClick={() => deleteitem(prev._id)}><FaTimes /></div>
                                    <h1 className='font-bold'>Price:</h1>
                                    <p>{`$${prev.price}`}</p>
                                    <h1 className='font-bold'>Subtotal:</h1>
                                    <p>{`$${prev.subtotal}`}</p>
                                </div>
                                <div className='w-full h-8 border flex justify-between'>
                                    <button className='bg-neutral-100 font-bold text-lg text-black w-20' onClick={() => reducequantity(prev._id)}>-</button>
                                    <div>{prev.quantity}</div>
                                    <button className='w-20 bg-gray-100 font-bold text-black text-lg' onClick={() => increasequantity(prev._id)}>+</button>
                                </div>

                            </div>
                            {/*<div className='hidden lg:flex  '>
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
                        </div>*/}

                        </div>)
                    })}
                </div>


                <div className='w-110 border sm:w-140 md:w-140 border-black m-auto px-5 mt-10 sm:mt-14 md:px-10 sm:px-10  py-3 sm:py-7 lg:px-3 xl:px-8 lg:py-2 xl:py-6 lg:mt-0 lg:w-25'>
                    <h1 className='font-bold sm:text-lg md:text-xl lg:text-2xl '>Cart summary</h1>
                    {cart.shipping.map(prev => {
                        return (<div className='flex  border border-black mt-5 justify-between p-3 lg:mt-4 xl:mt-5 '>
                            <div className='flex gap-2'>
                                <input type='radio' name='checkout' className='lg:w-4  accent-yellow-800 ' checked={prev.checked === true} onClick={() => selectpayment(prev._id)} />
                                <p className='sm:text-lg lg:text-xl font-semibold'>{prev.name}</p>
                            </div>
                            <h1 className='sm:text-lg lg:text-xl font-semibold'>{`$${prev.price}.00`}</h1>
                        </div>)
                    })}
                  
                    <div className='flex justify-between items-center border-gray-400 border-b  p-3 mt-3'>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>Items Purchased</h1>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>20</h1>
                    </div>
                    <div className='flex justify-between items-center p-3 my-3'>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>Total Amount</h1>
                        <h1 className='sm:text-lg lg:text-xl font-semibold'>$2000</h1>
                    </div>
                    <button className='w-full text-center bg-yellow-900 text-white py-3 sm:text-lg lg:text-xl rounded-full   lg:py-4  ' onClick={nextcart}>Checkout</button>
                </div>
            </div>}
        </div >
    )
}

export default Shopcart