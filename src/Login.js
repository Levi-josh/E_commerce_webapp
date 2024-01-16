import React from 'react'

const Login = () => {
    return (
        <div className='flex justify-center items-center w-full pt-32  '>
            <div className='w-130 bg-yellow-800  sm:w-25 md:w-140   justify-center md:items-center   items-start flex flex-col md:flex-row shadow-xl '>
                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='sm:h-72 md:w-full       md:h-96 bg-no-repeat bg-cover bg-center   ' />
                <div className='flex flex-col gap-3 w-full bg-slate-500 '>
                    <h1>Sign In</h1>
                    <p className='whitespace-nowrap'>Don't have an accout yet?<span>Sign Up</span></p>
                    <input type='text' />
                    <input type='password' />
                    <div className='flex'>
                        <input type='checkbox' />
                        <p className='whitespace-nowrap'>I agree to the terms and condition.</p>
                    </div>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Login