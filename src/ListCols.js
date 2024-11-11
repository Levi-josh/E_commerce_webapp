import React from 'react'
import { useSelector } from 'react-redux'
import {  motion } from 'framer-motion'
import { FaAngleLeft,FaCross,FaEllipsisV ,FaTelegramPlane,FaPlusSquare } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'
import {  NavLink,useOutletContext } from 'react-router-dom'

const ListCols = () => {
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    const [showinput, setshowinput] = useState(true)
    const [newcartText, setnewcartText] = useState('');
    const {data}= useOutletContext()
    const [error,seterror]=useState({})
    const [checked,setchecked]=useState(true)
    const selectcartFunc = async(id)=> {
      const option = {
                  method: 'PUT',
                  headers: {
                      'content-type': 'application/json',
                  }
              }
              try {
                  const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/select/${id}`, option);
                  const data = await response.json()
                 console.log(data)
              }
              catch (err) {
              seterror(err) 
              console.log(err)
      }
  }
    
  const handleChange = (e) => {
      setnewcartText(e.target.value)
  }
  const changeInput = ()=>{
    setshowinput(prev=>!prev)
  }
  const handleSubmit = async (e) => {
  e.preventDefault()
  const option = {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json',
                  },
                  body:JSON.stringify({"id":data._id,"title":newcartText})
              }
              try {
                  const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/newcart`, option);
                  const data = await response.json()
                 console.log(data)
              }
  
              catch (err) {
              seterror(err) 
              console.log(err)
      } 
      setnewcartText('')
      setshowinput(false)
      }
  return (
    <div className={`w-full h-screen  ${bgcolor} ${textcolor}`}>
      <header className={`fixed flex sm:justify-between gap-4  items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4 w-full m-0  z-10  `}>
        {showinput?<NavLink to='../' className={'sm:absolute '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>:<FaAngleLeft className='font-bold  text-xl md:text-2xl ' onClick={changeInput} ></FaAngleLeft>}
          <div className=' flex items-center w-full justify-center  '>
              {showinput?<h1 className='text-xl left-14 absolute sm:static sm:m-auto sm:text-2xl lg:text-3xl font-semibold'>Cart</h1>:
              <form className=' w-full flex relative md:w-25' ><input type='text' placeholder='create new cart' className={`w-full   rounded-full ${!mode.colormode?'bg-gray-200':'bg-stone-800'} py-1  md:pr-12 pl-3 pr-11  outline-none ${mode.colormode?'border-yellow-900 bg-stone-700 placeholder-white':'border-black'} `} value={newcartText} autoFocus onChange={handleChange} /><div className='bg-yellow-900 flex items-center justify-center text-2xl sm:text-3xl  rounded-e-full absolute h-full right-0 w-16 '><FaTelegramPlane className='text-white ' onClick={handleSubmit} /></div></form>}
          </div>
          {showinput&& <div onClick={changeInput} className='flex items-center absolute  right-3 text-white justify-center bg-yellow-900 px-4  sm:px-6 py-2 hover:cursor-pointer rounded-xl'>
          <p>Create cart</p>
          </div>}
      </header >
      <div className={' w-full h-full pt-20 sm:pt-24 px-3 lg:px-4'}>
        <div className='flex item-center w-full flex-col  '>
        <div className='w-full flex items-center justify-end'>
          {/* <div className='flex items-center justify-center bg-yellow-900 h-10 w-40 rounded-xl'>
          <FaEllipsisV/>
          <p>Create new cart</p>
        </div> */}
        </div>
        {data?.items?<div className={' w-full flex items-center justify-center flex-col lg:w-140 xl:w-25 m-auto'}>
        <p className={'text-sm sm:text-base'}>Click on check box to select a cart you want to add your items in.</p>
        <p className={'text-sm sm:text-base'}> Once the cart is selected,you can now go back to the home page to add your items to the selected cart.</p>
        </div>:showinput&&<div className='added w-full gap-2 items-center absolute flex flex-col'><p className='font-blod text-2xl sm:text-3xl lg:text-4xl  font-serif'>No carts yet!</p><p className=' text-sm sm:text-base'>Create a cart first before adding any item</p></div>}
        </div>
        {data?.items?.map(prev => { return <div className={`flex items-center lg:items-end mt-10 p-2 sm:p-5 rounded-xl w-full  lg:w-140 xl:w-25 lg:m-auto lg:mt-10  h-40 sm:h-44 shadow-lg ${mode.colormode&&' shadow-stone-800  shadow-md border border-stone-800'}`}> 
          <div className='flex items-center gap-2 sm:gap-5 w-full h-full '>
            <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='w-32 sm:w-56 md:w-64 h-full rounded-xl       bg-no-repeat bg-cover bg-center   ' />
            <div className='flex flex-col justify-between h-full w-full '>
              <p className={'text-sm sm:text-base'}>my new colletion</p>
              <p className={'text-sm sm:text-base'}>added items : 0</p>
              <div><input type='checkbox' checked={checked === prev.selected} onClick={() => selectcartFunc(prev._id)}className='sm:w-6 sm:h-6 w-5 h-5'/></div>
              <div className='flex items-center text-white  hover:cursor-pointer text-sm lg:hidden justify-center bg-yellow-900 rounded-xl w-full h-10'>
              <p>View cart</p>
            </div>
            </div>
          </div>
            <div className='items-center hidden text-white  hover:cursor-pointer lg:flex text-base justify-center bg-yellow-900 rounded-xl w-24 sm:w-44 h-10'>
              <p className={'text-sm sm:text-base'}>viewcart</p>
            </div>
        </div>})}
      </div>
    </div>
  )
}

export default ListCols