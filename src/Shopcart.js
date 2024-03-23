import React, { useState,useEffect } from 'react'
import { FaTimes,FaExclamationCircle } from 'react-icons/fa'
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Shopcart = () => {
    const { nextcart, cart, shopitems,deleteitem } = useOutletContext()
    const navigate = useNavigate()
    const [error,seterror]=useState()
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
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
            seterror(err.message === 'Failed to fetch' ? { 'message': 'Failed to increase' }:err) 
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
            seterror(err.message === 'Failed to fetch' ? { 'message': 'Failed to reduce' }:err) 
            console.log(err)
        }
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
            seterror(err.message === 'Failed to fetch' ? { 'message': 'Failed to select' }:err)
            console.log(err.message === 'Failed to fetch' ? { 'message': 'failed to select a cart' }:err)
        }
    }
useEffect(() => { 
    if (shopitems?.progess===true) {
        navigate('/cart/:id/checkout')   
    }
}, [shopitems]);
    return (
        <div className='pt-6 sm:pt-8  sm:gap-11 md:gap-14 lg:gap-15 h-full  '>
            {error?.message && <div className={` w-107 sm:w-108 md:w-109 flex items-center justify-center   rounded-xl shadow-xl outline-yellow-900  outline outline-2  fixed popout z-30 bg-white min-h-101 sm:min-h-102 lg:min-h-101 `}>
                <div className='flex md:items-start flex-col md:flex-row  gap-3 md:gap-5'>
                    <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                    <div className='flex flex-col justify-center gap-1'>
                        <h1 className='font-bold sm:text-xl '>{error?.message}</h1>
                        <p className='md:text-lg'>Check your internet connection</p>
                        < div><button className='px-6 py-1 rounded-full bg-yellow-900 text-white' onClick={() => seterror(null)}>Try again</button></div>
                    </div>
                </div>
            </div>}
            {shopitems?.progess===false && <div className='lg:flex items-start lg:w-120 xl:w-110 m-auto gap-10 lg:mt-10 '>
                <div className={` lg:w-140 lg:flex lg:flex-col lg:justify-center items-center border border-stone-700 w-110 sm:w-140 m-auto lg:m-0   `}>
                    {cart?.product?.map(prev => {
                        return (<div className={`flex gap-2 sm:gap-5 lg:gap-0 justify-center  w-full  border-stone-700 border-b mt-5 sm:mt-8  sm:pb-8   sm:m-auto pb-5 lg:justify-evenly   `}>
                            <img src={prev.image} className='w-40 sm:w-52  h-full  ' />

                                <div className='flex flex-col justify-between w-22   '>
                                    <div className='flex items-center justify-between'>
                                    <h1 className='sm:font-bold font-medium whitespace-nowrap'>{prev.itemname}</h1>
                                    <div className={`sm:w-7 sm:h-7 h-6 w-6 flex items-center justify-center hover:cursor-pointer ${mode.colormode?'bg-black border border-stone-700':'bg-black text-white'}   rounded-full  `} onClick={() => deleteitem(prev?._id)}><FaTimes /></div>
                                    </div>
                                    <div className='flex justify-between'>
                                    <h1 className='sm:font-bold font-medium '>Price:</h1>
                                    <p>{`$${prev.price}`}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                    <h1 className='sm:font-bold font-medium '>Subtotal:</h1>
                                    <p>{`$${prev.subtotal}`}</p>
                                    </div>
                                
                                    <div className='w-full h-8 border border-stone-700 flex justify-between'>
                                    <button className={` ${mode.colormode?'bg-black text-white border-r border-stone-700':'border-black bg-black text-white'} font-bold text-lg w-20`} onClick={() => reducequantity(prev._id)}>-</button>
                                    <div>{prev.quantity}</div>
                                    <button className={`w-20 ${mode.colormode?'bg-black text-white border-l border-stone-700':'border-black bg-black text-white'} font-bold  text-lg`} onClick={() => increasequantity(prev._id)}>+</button>
                                    </div>
                                </div>
                           
                        </div>)
                    })}
                </div>


                <div className={`w-110 border sm:w-140 md:w-140 ${mode.colormode?'border-stone-700':'border-black'} m-auto px-5 mt-10 sm:mt-14 md:px-10 sm:px-10  py-3 sm:py-7 lg:px-3 xl:px-8 lg:py-2 xl:py-6 lg:mt-0 lg:w-25`}>
                    <h1 className='font-bold sm:text-lg md:text-xl lg:text-2xl '>Cart summary</h1>
                    {cart.shipping.map(prev => {
                        return (<div className={`flex  border ${mode.colormode?'border-stone-700':'border-black'} mt-5 justify-between p-3 lg:mt-4 xl:mt-5 `}>
                            <div className='flex gap-2'>
                                <input type='radio' name='checkout' className='lg:w-4 text-black bg-black  accent-yellow-800 ' checked={prev.checked === true} onClick={() => selectpayment(prev._id)} />
                                <p className='sm:text-lg lg:text-xl font-semibold'>{prev.name}</p>
                            </div>
                            <h1 className='sm:text-lg lg:text-xl font-semibold'>{`$${prev.price}.00`}</h1>
                        </div>)
                    })}
                  
                    <div className={`flex justify-between items-center  border-stone-700  border-b  p-3 mt-3`}>
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