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
  const [ran,setRan]=useState(false)

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
      setRan(true)
      const response = await fetch('https://backend-e-commerce-g7of.onrender.com/login', option);
      const data = await response.json()
      data?.UserId &&changeRunEffect()
      data?.UserId && localStorage.setItem('myid',data?.UserId)
      data?.UserId && navigate(`/`)
      if(!response.ok){
        setRan(false) 
      }
      setuser(data)
    }
    catch (err) {
      setRan(false);
      setError(err)
      console.log(err.message)
    }
    setFormData({input1:'',input2:''})   
  };
 
    return (
        <div className={`flex justify-center  ${bgcolor} ${textcolor} fixed sm:items-center items-start w-full  h-screen `}>
            <NavLink to='/landing'> <FaAngleLeft className='font-bold absolute top-5 left-3 z-20 text-white sm:text-black  sm:top-10 sm:left-5  text-2xl sm:text-3xl ' ></FaAngleLeft></NavLink>

            <div className={`w-full sm:w-140  lg:w-130  xl:w-140 lg:h-96  sm:rounded-xl overflow-hidden  ${window.matchMedia('(max-width: 600px)').matches?'':mode.colormode?'addShadow2':'addShadow'}  justify-center lg:items-center   items-start flex flex-col lg:flex-row gap-10  lg:gap-12 `}>
                <div className='w-full md:h-full flex items-center justify-center hero '>
                  <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='h-full w-full lg:rounded-bl-xl lg:rounded-tl-xl  lg:rounded-t-none        bg-no-repeat bg-cover bg-center object-cover   ' />
                  <div className=' text-white bg-blurblack absolute px-10 py-3 z-30 font-semibold text-lg sm:text-xl rounded-lg '><p>Glamour Grove</p></div>
                </div>
                <form  onSubmit={handleSubmit}className='flex flex-col gap-5 lg:gap-5 pb-6  w-full  lg:pr-12 lg:pl-0 px-3 sm:px-7 lg:px-6   '>
                    <h1 className='font-bold lg:text-center text-2xl lg:text-3xl '>Sign In</h1>
                    <div>
                    <p className='lg:text-center'>Don't have an accout yet? <NavLink to={'/signup'}><span className={`${mode.colormode?'text-yellow-700':'text-yellow-900'} font-medium `}>Sign Up</span></NavLink> </p>
                    <div className='w-full relative h-14 flex items-end'>
                    {user.username&&<p className=' text-red-600 absolute top-0  text-sm sm:text-base'>{user.username}</p>}
                    <input type='text' placeholder='Username'  value={formData.input1} name="input1" onChange={handlechange} className={`outline-none  ${mode.colormode?'bg-stone-800 ':'bg-fadeblack'}  py-1 pl-2 lg:py-2   ${mode.colormode?'text-white placeholder:text-white':'text-black placeholder:text-black'}   w-full`} />
                    </div>
                    <div className='w-full relative h-14 flex items-end '>
                    {user.password&&<p className=' text-red-600 absolute top-0 text-sm sm:text-base'>{user.password}</p>}
                    <input type='password' placeholder='Password'  value={formData.input2} name="input2" onChange={handlechange}  className={`outline-none   ${mode.colormode?'bg-stone-800 ':'bg-fadeblack'} py-1 lg:py-2 pl-2  ${mode.colormode?'text-white placeholder:text-white':'text-black placeholder:text-black'}  w-full  `} />
                    </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type='checkbox' className={`${mode.colormode?'bg-stone-800 ':'bg-gray-200'} accent-yellow-900 sm:w-4 sm:h-4 hover:cursor-pointer lg:w-5 lg:h-5`} />
                        <p className='whitespace-nowrap  lg:font-semibold'>I agree to the terms and condition</p>
                    </div>
                    <button className={`w-full relative py-2 md:py-3  sm:text-lg lg:text-xl font-semibold flex items-center justify-center  bg-yellow-900 text-white  ${disabled ? mode.colormode?'opacity-50 cursor-not-allowed':'opacity-80 cursor-not-allowed' : 'opacity-100'}`} disabled={disabled}>{!ran?`Sign In`:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 18V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.929 4.929L7.757 7.757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16.243 16.243L19.071 19.071" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.929 19.071L7.757 16.243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16.243 7.757L19.071 4.929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </motion.div>}
                  </button>
                </form>
            </div>
        </div>
    )
}

export default Login