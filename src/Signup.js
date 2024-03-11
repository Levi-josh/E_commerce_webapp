import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaArrowLeft } from 'react-icons/fa'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'

const Signup = () => {

    const [error,setError]=useState('')
    const { data, runEffect, changeRunEffect} = useOutletContext()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({input1:'',input2:''});
    const [disabled,setdisabled]=useState(true)
    const [user,setuser]=useState({})
  
    useEffect(()=>{
      setdisabled(formData.input1 ==='' || formData.input2 ===''?true:false)
    },[formData])
  
    const handlechange = (event)=>{
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      })
     
    }  
   const handleSubmit = async (e) => {
    e.preventDefault();
   
    setError("")
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
        const response = await fetch('https://backend-e-commerce-g7of.onrender.com/signup', option);
        const data = await response.json()
        setuser(data)
      }
      catch (err) {
        setError(err)
        console.log(err.message)
      }
      setFormData({input1:'',input2:''})   
      user?.UserId &&changeRunEffect()
     console.log( user)
     user?.UserId && navigate(`/`)
     user?.UserId && localStorage.setItem('myid',user?.UserId)
    
    };
   
  return (
    <div className='flex justify-center items-center w-full  h-screen '>
    <NavLink to='../' path='relative'> <FaAngleLeft className='font-bold absolute top-5 left-3  sm:top-10 sm:left-5  text-2xl sm:text-3xl ' ></FaAngleLeft></NavLink>

    <div className='w-130 sm:w-140  lg:w-130  xl:w-140 lg:h-96 outline outline-2 rounded-xl outline-yellow-900  justify-center lg:items-center   items-start flex flex-col lg:flex-row shadow-xl gap-3 sm:gap-6  lg:gap-12 '>
        <div className='w-full md:h-full'>
          <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='h-full w-full lg:rounded-l-xl rounded-t-xl lg:rounded-t-none        bg-no-repeat bg-cover bg-center object-cover   ' />
        </div>
        <form  onSubmit={handleSubmit}className='flex flex-col gap-3 sm:gap-4 lg:gap-5 pb-3 sm:pb-6  w-full  lg:pr-12 lg:pl-0 px-3 sm:px-7 lg:px-6   '>
            <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl '>Sign Up</h1>
            <div>
            <p className=''>Have an account already?<NavLink to={'/login'}><span className='text-yellow-900 font-semibold text-lg '>Sign In</span></NavLink> </p>
            <div className='w-full relative h-11  sm:h-14 flex items-end'>
            {user.username&&<p className=' text-red-500 absolute top-0  text-sm sm:text-base'>{user.username}</p>}
            <input type='text' placeholder='Username'  value={formData.input1} name="input1" onChange={handlechange} className='   outline-none  border border-yellow-900 sm:py-1 pl-2    text-black placeholder:text-neutral-300 placeholder:font-semibold  w-full' />
            </div>
            <div className='w-full relative h-11  sm:h-14 flex items-end '>
            {user.password&&<p className=' text-red-500 absolute top-0 text-sm sm:text-base'>{user.password}</p>}
            <input type='password' placeholder='Password'  value={formData.input2} name="input2" onChange={handlechange}  className='  outline-none  border border-yellow-900 sm:py-1 pl-2  text-black placeholder:font-semibold placeholder:text-neutral-200 w-full  ' />
            </div>
            </div>
            <div className='flex items-center gap-3'>
                <input type='checkbox' className=' accent-yellow-900 sm:w-4 sm:h-4 hover:cursor-pointer lg:w-5 lg:h-5' />
                <p className='whitespace-nowrap  lg:font-semibold'>I agree to the terms and condition</p>
            </div>
            <button className={`w-full py-2 md:py-3 rounded-xl smtext-lg lg:text-xl font-semibold  bg-yellow-900 text-white  ${disabled ? 'opacity-80 cursor-not-allowed' : 'opacity-100'}`} disabled={disabled}>Sign Up</button>
        </form>
    </div>
</div>
  )
}

export default Signup