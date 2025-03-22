import React from 'react'
import { useSelector } from 'react-redux'
import {  motion } from 'framer-motion'
import { FaAngleLeft,FaTelegramPlane } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'
import {  NavLink,useNavigate } from 'react-router-dom'

const ListCols = () => {
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    const [showinput, setshowinput] = useState(true)
    const navigate = useNavigate()
    const [newcartText, setnewcartText] = useState('');
    const [data, setdata] = useState(null)
    const [error,seterror]=useState({})
    const [check,setchecked]=useState(true)
    const [isChecked, setIsChecked] = useState(false);
     useEffect(() => {
      const id = localStorage.getItem('myid')
      const getCollections = async () => {   
        const option = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        }
        try {
            const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/getCols/${id}`, option);
            const data = await response.json()
            console.log(id)
            console.log(data)
            setdata(data)
        }
        catch (err) {
            seterror(err)
            console.log(err.message)
        }
    } 
    getCollections()
     },[data])
    const selectcartFunc = async(event,id)=> {
      setIsChecked(event.target.checked);
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
                
                
              }
  
              catch (err) {
              seterror(err) 
              console.log(err)
      } 
      setnewcartText('')
      setshowinput(false)
      }

  return (
    <div className={`w-full overflow-auto h-screen   ${bgcolor} ${textcolor}`}>
        <header className={`fixed flex sm:justify-between gap-4 ${bgcolor} items-center h-20 sm:h-24 md:h-24 lg:h-24 px-3 lg:px-4 w-full m-0  z-10  `}>
          {showinput?<NavLink to='../' className={'sm:absolute '}> <FaAngleLeft className='font-bold  text-xl md:text-2xl ' ></FaAngleLeft></NavLink>:<FaAngleLeft className='font-bold  text-xl md:text-2xl hover:cursor-pointer  ' onClick={changeInput} ></FaAngleLeft>}
            <div className=' flex items-center w-full justify-center  '>
                {showinput?<h1 className='text-xl left-14 absolute sm:static sm:m-auto sm:text-2xl lg:text-3xl font-semibold'>Cart</h1>:
                <form  onSubmit={handleSubmit} className=' w-full flex relative md:w-25' ><input type='text' placeholder={`cart's name`} className={`w-full   rounded-lg ${!mode.colormode?'bg-gray-200':'bg-stone-800'} py-1  md:pr-12 pl-3 pr-11  outline-none ${mode.colormode?'border-yellow-900 bg-stone-700 placeholder-white':'border-black'}`} value={newcartText} autoFocus onChange={handleChange} /><button className='bg-yellow-900 flex items-center justify-center text-2xl sm:text-3xl  rounded-e-lg absolute h-full right-0 w-16 hover:cursor-pointer  '><FaTelegramPlane className='text-white ' /></button></form>}
            </div>
            {showinput&& <div onClick={changeInput} className='flex items-center absolute  right-3 text-white justify-center bg-brown px-4  sm:px-6 py-2 hover:cursor-pointer rounded-xl'>
            <p>Create cart</p>
            </div>}
        </header >
        <div className={' w-full h-full  pt-20 sm:pt-24 lg:pt-0 px-3 lg:items-start  lg:flex lg:justify-end lg:px-4'}>
          <div className='flex item-center  w-full lg:h-full lg:left-3 flex-col lg:fixed   top-24  lg:block lg:w-20   '>
            <div className={` w-full flex gap-3 md:gap-5 items-center md:items-start lg:items-center justify-start lg:h-175 p-5 sm:p-7 ${!mode.colormode?'bg-gray-200':'bg-stone-800'}  rounded-lg  flex-col lg:mt-10 lg:m-0  m-auto `}>
              <h1 className='font-bold sm:text-lg lg:text-xl'>How to add items to a cart</h1>
              <ul className='list-disc list-outside pl-2 sm:pl-3 space-y-2 sm:space-y-3'>
                <li className={'text-sm sm:text-base'}>Firstly,click on the "create cart" botton to create a cart.</li>
                <li className={'text-sm sm:text-base'}> Once the cart is created,check the input box to select the cart.</li>
                <li className={'text-sm sm:text-base'}> After following the above instructions,head back to add your items to your selected cart.</li>
              </ul>
            </div>
          </div>
        
          <div className='w-full lg:w-140 gap-7   lg:pl-5    h-auto  items-center mt-5 sm:mt-10 lg:mt-0 lg:pt-44 pb-10  flex flex-col'>
            {data?.length<1?
            <div className={` h-full pt-10 lg:pt-0 lg:pb-80`}><p className='font-blod text-2xl sm:text-3xl lg:text-4xl  font-serif'>No carts yet!</p><p className=' text-sm sm:text-base'>Create a cart first, before adding any item</p></div>:
            data?( data.map(prev => { return <div className={`flex items-center lg:items-end gap-10 p-2 sm:p-5 rounded-xl w-full      h-40 sm:h-44 shadow-lg  ${mode.colormode?'addShadow2':'addShadow'}  `}> 
              <div className='flex items-center gap-2 sm:gap-5 w-full h-full '>
                {!mode.colormode?<img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=626&ext=jpg&ga=GA1.2.103364066.1699032278&semt=ais" alt="" className='w-32 sm:w-56 md:w-64 h-full rounded-xl       bg-no-repeat bg-cover bg-center object-cover  ' /> :<img src='https://img.freepik.com/premium-photo/shopping-cart-black-background-shopping-trolley-grocery-push-cart-3d-render-illustration_989822-1813.jpg?size=626&ext=jpg&ga=GA1.1.732548087.1710974042&semt=ais' alt="" className='w-32 sm:w-56 md:w-64 h-full rounded-xl  bg-no-repeat bg-cover bg-center object-cover  '/>}
                <div className='flex flex-col justify-between h-full w-full '>
                  <p className={'text-sm sm:text-base'}>Cart Name: {prev.title}</p>
                  <p className={'text-sm sm:text-base'}>Added Items: {prev.total}</p>
                  <div><input type='checkbox' checked={isChecked?isChecked:isChecked||prev.selected} onChange={(event) => selectcartFunc(event,prev._id)}className='sm:w-6 sm:h-6 w-5 h-5 rounded-lg accent-yellow-800'/></div>
                  <div className='flex items-center text-white  hover:cursor-pointer text-sm lg:hidden justify-center bg-brown rounded-xl w-full h-10'onClick={()=>navigate(`/cart/${prev._id}`)}>
                    <p>View cart</p>
                  </div>
                </div>
              </div>
              <div className='items-center hidden text-white  hover:cursor-pointer lg:flex text-base justify-center bg-brown rounded-xl w-24 sm:w-44 h-10' onClick={()=>navigate(`/cart/${prev._id}`)}>
                  <p className={'text-sm sm:text-base'}>View cart</p>
              </div>
            </div>})):
            <motion.div animate={{ rotate: 360 }} initial={{ x: '50%', x: '-50%' }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className=' '>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V6" stroke={mode.colormode?"white":'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 18V22" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.929 4.929L7.757 7.757" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.243 16.243L19.071 19.071" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H6" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 12H22" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.929 19.071L7.757 16.243" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.243 7.757L19.071 4.929" stroke={mode.colormode?"white":'black'}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </motion.div>}
          </div>
        </div>
    </div>
  )
}

export default ListCols