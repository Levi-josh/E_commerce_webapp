import React, { useState } from 'react'
import { FaAngleLeft, FaArrowLeft } from 'react-icons/fa'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'
import image from './hotdog image.jpg'

const Login = () => {
 const [error,setError]=useState('')
  const { data, runEffect, changeRunEffect} = useOutletContext()
  const navigate = useNavigate()
 
    
 const handleSubmit = async (e) => {
e.preventDefault();
 
  setError("")
         
    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
  username:"levi joshua1",
  password:"test121"
})
    }
    try {

      const response = await fetch('https://backend-e-commerce-g7of.onrender.com/login', option);
      const data = await response.json()
    console.log(data)
    
    }

    catch (err) {
      setError(err)

    }
   changeRunEffect()
   navigate('/')
  };
    return (
        <div className='flex justify-center items-center w-full  h-screen '>
            <NavLink to='../' path='relative'> <FaAngleLeft className='font-bold absolute top-5 left-3  sm:top-10 sm:left-5  text-2xl sm:text-3xl ' ></FaAngleLeft></NavLink>

            <div className='w-130 sm:w-140  lg:w-130  xl:w-140 lg:h-96 outline outline-2 rounded-xl outline-yellow-900  justify-center lg:items-center   items-start flex flex-col lg:flex-row shadow-xl gap-3 sm:gap-6  lg:gap-12 '>
                <div className='w-full md:h-full'>
                    <img src={image} className='h-full w-full lg:rounded-l-xl rounded-t-xl lg:rounded-t-none        bg-no-repeat bg-cover bg-center object-cover   ' />
                </div>
                <form  onSubmit={handleSubmit}className='flex flex-col gap-3 sm:gap-4 lg:gap-5 pb-3 sm:pb-6  w-full  lg:pr-12 lg:pl-0 px-3 sm:px-7 lg:px-6   '>
                    <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl '>Sign In</h1>
                    <p className=''>Don't have an accout yet? <span className='text-yellow-900 font-semibold text-lg '>Sign Up</span></p>
                    <input type='text' placeholder='Username' className='   outline-none  border-b border-yellow-900   text-black placeholder:text-neutral-300 placeholder:font-semibold' />
                    <input type='password' placeholder='Password' className='  outline-none  border-b border-yellow-900  text-black placeholder:font-semibold placeholder:text-neutral-200  ' />
                    <div className='flex items-center gap-3'>
                        <input type='checkbox' className=' accent-yellow-900 sm:w-4 sm:h-4 hover:cursor-pointer lg:w-5 lg:h-5' />
                        <p className='whitespace-nowrap  lg:font-semibold'>I agree to the terms and condition</p>
                    </div>
                    <button className='w-full py-2 md:py-3 rounded-xl smtext-lg lg:text-xl font-semibold  bg-yellow-900 text-white'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login