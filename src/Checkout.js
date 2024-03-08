import React from 'react'
import { useState,useEffect } from 'react'
import { FaArrowDown, FaChevronDown, FaTimes } from 'react-icons/fa'
import { useNavigate, useOutletContext } from 'react-router-dom'

const Checkout = () => {
    const { nextcart2, showcountry, getcountry,checkitems,data, cart, countries,deleteitem  } = useOutletContext()
    const [selectedcountry, setselectedcountry] = useState()
    const [error,setError]=useState()
    const navigate = useNavigate()
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
               setError(err.message === 'Failed to fetch' ? { 'message': 'Failed to increase' }:err) 
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
               setError(err.message === 'Failed to fetch' ? { 'message': 'Failed to reduce' }:err) 
               console.log(err)
           }
       }
    const selectcountry = async (id) => {
        getcountry()
         const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                 },
                body:JSON.stringify({
                "id":id,
                "id1":`${cart._id}`
                })
        }
        try {
                const response = await fetch('https://backend-e-commerce-g7of.onrender.com/selcountry', option);
                const data = await response.json()
                console.log(data)
            }
            catch (err) {
            setError(err)
            console.log(err)
            }
    }
    const selectpayment = async (id) => {
        console.log(id)
        console.log(cart._id)
         const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                 }
        }
        try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/payment/${cart._id}/${id}`, option);
                const data = await response.json()
                console.log(data)
            }
            catch (err) {
            setError(err)
            console.log(err)
            }
    }
useEffect(() => { 
  if (checkitems?.progess===true) {
      navigate('/cart/:id/complete')  
    }
}, [checkitems]);
  
    return (
        <div className='pt-6 sm:pt-8   gap-5 sm:gap-7 lg:gap-0 flex flex-col lg:justify-between  lg:flex-row lg:items-start h-full'>
           {checkitems?.progess === false && <><div className={`fixed w-130 sm:w-25 md:w-10 bg-white popout lg:w-12    z-40 h-80 sm:h-96 lg:h-72  rounded-xl border-t border-neutral-100 py-4  ${showcountry ? 'block' : 'hidden'}  `}>
                <div className=' h-full overflow-y-auto '>
                    {countries.map(prev => { return (<div className='flex border-b-0.5  border-black py-2 sm:py-3 text-lg md:text-xl font-semibold items-center px-3 md:px-4 justify-between '><input type='radio' className=' md:w-4 md:h-4 accent-yellow-900' checked={prev.checked===true} onChange={() => selectcountry(prev._id)} /><p>{prev.country}</p></div>)})}
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
                            <input type='email' className='outline-none border border-black w-full rounded-md py-1 px-2' placeholder='Email address' />
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
                            <div className=' '>
                                <div className='flex w-full border border-black p-2 rounded-md justify-between items-center'>

                                    <label className=' text-gray-600 '>{`${cart.country?cart.country:"country"}`}</label>

                                    <FaChevronDown onClick={getcountry} />

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
                        {cart?.Paymethod?.map(prev => {return( <>   
                        <div key={prev._id} className='flex gap-2 w-full border border-black p-2 rounded-md'>
                            <input type='radio' name='payment' className='lg:w-4 accent-yellow-800 ' onChange={()=>selectpayment(prev._id)} />
                                    <p className='font-bold lg:text-lg'>{prev.payname}</p>
                        </div>
                           </> )})}                   
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
                <button className='hidden lg:block py-3 text-white text-lg font-semibold rounded-3xl     bg-yellow-900' onClick={nextcart2}>Place order</button>
            </div>




            <div className='w-110 border sm:w-130 border-black px-5 py-3 md:px-7 md:py-5 m-auto md:w-140 mt-0 lg:w-10 rounded-lg'>
                <h1 className='text-lg  font-bold sm:text-xl lg:text-2xl'>Order Summary</h1>
                {cart?.product?.map(prev => {
                    return (<div className='flex gap-5  border-b lg:w-full   border-gray-400  pb-5  mt-5    '>
                        <img src={prev.image} className='w-40 sm:w-52  ' />
                        <div className='flex flex-col justify-between w-22   '>
                                <div className='flex items-center justify-start'>
                                    <h1 className='font-bold whitespace-nowrap'>{prev.itemname}</h1>
                                  
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='font-bold'>Price:</h1>
                                    <p>{`$${prev.price}`}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='font-bold'>Subtotal:</h1>
                                    <p>{`$${prev.subtotal}`}</p>
                                </div>
                                
                                <div className='w-full h-8 border flex justify-between'>
                                    <button className='bg-neutral-100 font-bold text-lg text-black w-20' onClick={() => reducequantity(prev._id)}>-</button>
                                    <div>{prev.quantity}</div>
                                    <button className='w-20 bg-gray-100 font-bold text-black text-lg' onClick={() => increasequantity(prev._id)}>+</button>
                                </div>
                        </div>
                    </div>)
                })}
                <div className='flex justify-between items-center border-gray-400 border-b  py-3 sm:py-4 '>
                    <h1 className='sm:text-lg lg:text-xl font-medium'>Shipping</h1>
                    <h1 className='sm:text-lg lg:text-xl font-semibold'>{cart.shipvalue.name}</h1>
                </div>
                <div className='flex justify-between items-center border-gray-400 border-b  py-3 sm:py-4  '>
                    <h1 className='sm:text-lg lg:text-xl font-medium'>Items Purchased</h1>
                    <h1 className='sm:text-lg lg:text-xl font-semibold'>20</h1>
                </div>
                <div className='flex justify-between items-center pt-3 sm:pt-4 font-semibold '>
                    <h1 className='text-lg sm:text-xl lg:text-2xl'>Total Amount</h1>
                    <h1 className=' text-lg sm:text-xl lg:text-2xl'>$2000</h1>
                </div>
            </div>
            <button className='lg:hidden block m-auto w-110 sm:w-130 md:w-140 py-3 font-semibold rounded-3xl  text-white  bg-yellow-900' onClick={nextcart2}>Place order</button>
            </>  }
        </div>
    )
}

export default Checkout