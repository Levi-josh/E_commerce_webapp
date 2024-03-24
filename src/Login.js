import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaArrowLeft, FaSpinner } from 'react-icons/fa'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'
import image from './hotdog image.jpg'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const Login = () => {
 const [error,setError]=useState('')
  const { data, runEffect, changeRunEffect} = useOutletContext()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({input1:'',input2:''});
  const [disabled,setdisabled]=useState(true)
  const [user,setuser]=useState({})
  const [showtext,setshowtext]=useState(false)
  const mode = useSelector((state)=>state.changemode.value)
  const bgcolor = mode?.colorBgtext
  const textcolor = mode?.colortext

  useEffect(()=>{
    setdisabled(formData.input1 ==='' || formData.input2 ===''?true:false)
   
  },[formData])

  useEffect(()=>{
  setshowtext(false)
  
  },[user])

  const handlechange = (event)=>{
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
    setshowtext(false)
    setuser({})
  }  
 const handleSubmit = async (e) => {
  e.preventDefault();
  setshowtext(true)
  setError(null)
  setuser('')
      
    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
      username:formData.input1,
      password:formData.input2
})
    }
    try {

      const response = await fetch('https://backend-e-commerce-g7of.onrender.com/login', option);
      const data = await response.json()
      data?.UserId &&changeRunEffect()
      data?.UserId && localStorage.setItem('myid',data?.UserId)
      data?.UserId && navigate(`/`)
      setuser(data)
    
    }

    catch (err) {
      setError(err)
      console.log(err.message)

    }
    setFormData({input1:'',input2:''})   
  };
 
    return (
        <div className={`flex justify-center ${bgcolor} ${textcolor}  items-center w-full  h-screen `}>
            <NavLink to='../' path='relative'> <FaAngleLeft className='font-bold absolute top-5 left-3  sm:top-10 sm:left-5  text-2xl sm:text-3xl ' ></FaAngleLeft></NavLink>

            <div className={`w-130 sm:w-140  lg:w-130  xl:w-140 lg:h-96  rounded-xl ${mode.colormode?'shadow-stone-700 shadow-lg ':'shadow-2xl'}   justify-center lg:items-center   items-start flex flex-col lg:flex-row  gap-3 sm:gap-6  lg:gap-12 `}>
                <div className='w-full md:h-full'>
                  <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='h-full w-full lg:rounded-bl-xl lg:rounded-tl-xl rounded-t-xl lg:rounded-t-none        bg-no-repeat bg-cover bg-center object-cover   ' />
                </div>
                <form  onSubmit={handleSubmit}className='flex flex-col gap-3 sm:gap-4 lg:gap-5 pb-3 sm:pb-6  w-full  lg:pr-12 lg:pl-0 px-3 sm:px-7 lg:px-6   '>
                    <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl '>Sign In</h1>
                    <div>
                    <p className=''>Don't have an accout yet? <NavLink to={'/signup'}><span className={`${mode.colormode?'text-yellow-700':'text-yellow-900'} font-medium `}>Sign Up</span></NavLink> </p>
                    <div className='w-full relative h-14 lg:h-16 flex items-end'>
                    {user.username&&<p className=' text-red-600 absolute top-0  text-sm sm:text-base'>{user.username}</p>}
                    <input type='text' placeholder='Username'  value={formData.input1} name="input1" onChange={handlechange} className={`outline-none  ${mode.colormode?'bg-stone-800 border-stone-700 ':'bg-white border-yellow-900 '}  border py-1 pl-2 lg:py-2   ${mode.colormode?'text-white':'text-black'} placeholder:text-neutral-300 placeholder:font-semibold  w-full`} />
                    </div>
                    <div className='w-full relative h-14 flex items-end '>
                    {user.password&&<p className=' text-red-600 absolute top-0 text-sm sm:text-base'>{user.password}</p>}
                    <input type='password' placeholder='Password'  value={formData.input2} name="input2" onChange={handlechange}  className={`outline-none  border ${mode.colormode?'bg-stone-800 border-stone-700 ':'bg-white border-yellow-900 '} py-1 lg:py-2 pl-2  ${mode.colormode?'text-white':'text-black'} placeholder:font-semibold placeholder:text-neutral-200 w-full  `} />
                    </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type='checkbox' className=' accent-yellow-900 sm:w-4 sm:h-4 hover:cursor-pointer lg:w-5 lg:h-5' />
                        <p className='whitespace-nowrap  lg:font-semibold'>I agree to the terms and condition</p>
                    </div>
                    <button className={`w-full relative py-2 md:py-3 rounded-xl smtext-lg lg:text-xl font-semibold  bg-yellow-900 text-white  ${disabled ? mode.colormode?'opacity-50 cursor-not-allowed':'opacity-80 cursor-not-allowed' : 'opacity-100'}`} disabled={disabled}><p className={`${showtext?'invisible':'visible'}`}>Sign In</p>{(showtext) && <FaSpinner className='absolute popout'/>}</button>
                </form>
            </div>
        </div>
    )
}

export default Login