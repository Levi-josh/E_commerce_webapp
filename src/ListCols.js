import React from 'react'
import { useSelector } from 'react-redux'
import {  motion } from 'framer-motion'
import { FaAngleLeft,FaEllipsisV  } from 'react-icons/fa'
import {  NavLink } from 'react-router-dom'

const ListCols = () => {
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
  return (
    <div className={`w-full h-screen  ${bgcolor} ${textcolor}`}>
      <header className={`fixed flex sm:justify-between gap-4  items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4 w-full m-0  z-10  `}>
          <NavLink to='../' className={'sm:absolute '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>
          <div className='sm:m-auto flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold'>
              <h1 className=''>Cart</h1>
          </div>
          <FaEllipsisV className='absolute right-3 sm:static' />
      </header >
      <div className={' w-full h-full pt-24 px-3 lg:px-4'}>
        <div className='flex item-center w-full flex-col gap-3 '>
        <div className='w-full flex items-center justify-end'>
          <div className='flex items-center justify-center bg-yellow-900 h-10 w-40 rounded-xl'>
          <FaEllipsisV/>
          <p>Create new cart</p>
        </div>
        </div>
        <p className={''}>Click on "select cart" to choose a the cart you want your items to be in</p>
        </div>
        <div className={`flex items-center mt-10 p-2 sm:p-5 rounded-xl w-full  h-40 shadow-lg ${mode.colormode&&' shadow-stone-800  shadow-md border border-stone-800'}`}> 
          <div className='flex items-center gap-2 sm:gap-5 w-full h-full '>
            <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='w-32 h-full rounded-xl       bg-no-repeat bg-cover bg-center   ' />
            <div className='flex flex-col justify-between h-full w-full '>
              <p>my new colletion</p>
              <p>added items : 0</p>
              <div><input type='checkbox' className='sm:w-6 sm:h-6 w-5 h-5'/></div>
              <div className='flex items-center text-sm lg:hidden justify-center bg-yellow-900 rounded-xl w-full sm:w-32 h-10'>
              <p>View cart</p>
            </div>
            </div>
          </div>
            <div className='items-center hidden lg:flex text-base justify-center bg-yellow-900 rounded-xl w-24 sm:w-32 h-10'>
              <p>Select cart</p>
            </div>
        </div>
        <div className={`flex items-center mt-10 p-2 sm:p-5 rounded-xl w-full  h-40 shadow-lg ${mode.colormode&&' shadow-stone-800  shadow-md border border-stone-800'}`}> 
          <div className='flex items-center gap-2 sm:gap-5 w-full h-full '>
            <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='w-32 h-full rounded-xl       bg-no-repeat bg-cover bg-center   ' />
            <div className='flex flex-col justify-between h-full w-full '>
              <p>my new colletion</p>
              <p>added items : 0</p>
              <div><input type='checkbox' className='sm:w-6 sm:h-6 w-5 h-5'/></div>
              <div className='flex items-center text-sm lg:hidden justify-center bg-yellow-900 rounded-xl w-full sm:w-32 h-10'>
              <p>View cart</p>
            </div>
            </div>
          </div>
            <div className='items-center hidden lg:flex text-base justify-center bg-yellow-900 rounded-xl w-24 sm:w-32 h-10'>
              <p>Select cart</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ListCols