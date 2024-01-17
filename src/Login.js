import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex justify-center items-center w-full  h-screen '>
            <NavLink to='../' path='relative'> <FaArrowLeft className='font-bold absolute top-5 left-5 sm:top-10 sm:left-10  text-xl sm:text-2xl lg:hidden' ></FaArrowLeft></NavLink>

            <div className='w-130 sm:w-140  md:w-130 lg:w-140 md:h-96  justify-center md:items-center   items-start flex flex-col md:flex-row shadow-xl gap-3 sm:gap-6 md:gap-10 lg:gap-12 '>
                <div className='w-full md:h-full'>
                    <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='h-full w-full        bg-no-repeat bg-cover bg-center   ' />
                </div>
                <div className='flex flex-col gap-3 pb-3 sm:pb-6 md:py-5 w-full md:pr-10 lg:pr-12 md:pl-0 px-3 sm:px-6   '>
                    <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl '>Sign In</h1>
                    <p className=''>Don't have an accout yet? <span className='text-yellow-800 font-semibold '>Sign Up</span></p>
                    <input type='text' placeholder='First Name' className='py-2 lg:py-3 outline-none border-b  text-black placeholder:text-neutral-300 placeholder:font-semibold' />
                    <input type='text' placeholder='Last Name' className='py-2 lg:py-3 outline-none border-b text-black placeholder:text-neutral-300  placeholder:font-semibold' />
                    <input type='password' placeholder='Password' className='py-2 lg:py-3 outline-none border-b  text-black placeholder:font-semibold placeholder:text-neutral-200  ' />
                    <div className='flex'>
                        <input type='checkbox' />
                        <p className=''>I agree to the terms and condition.</p>
                    </div>
                    <button className='w-full py-2 md:py-3 rounded-xl bg-yellow-800 text-white'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Login