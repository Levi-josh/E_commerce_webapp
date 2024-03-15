import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaArrowLeft, FaSpinner } from 'react-icons/fa'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'

const Signup = () => {

    const [error,setError]=useState('')
    const { data, runEffect, changeRunEffect} = useOutletContext()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({input1:'',input2:''});
    const [disabled,setdisabled]=useState(true)
    const [user,setuser]=useState({})
    const [response, setresponse] = useState({});
    const [showtext,setshowtext]=useState(false)

    // useEffect(()=>{
    //  user?.UserId && subscribeToPush(data?.UserId)
    //  response?.ok && sendPushNotification(data?.UserId)
    // },[])

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
      
    const sendPushNotification = async (userId) => {
      try {
        // Send request to the server to trigger push notification for a specific user
        const res = await fetch(`https://backend-e-commerce-g7of.onrender.com/send-notification/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(res)
      } catch (error) {
        console.error('Error sending push notification:', error);
      
      }
    }; 
    const subscribeToPush = async (userId) => {
      
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'BK3JoQ6S3KgLGwUfe3fyr3lH2fXb6kihvuHsLeDaObR1qG8VtRhBcRd_r-8-wMd4KTV79XtfPu83Vjq3bFEmqyo',
        });
        const options =  {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, subscription }),
          }
        // Send subscription and user ID to the server
       const res= await fetch(`https://backend-e-commerce-g7of.onrender.com/subscribe`, options);
        console.log(res)
        res?.ok && sendPushNotification(userId)
      setresponse(res)
    
      } catch (error) {
        console.error('Error subscribing to push notifications:', error);
        
      }
    };
 
   const handleSubmit = async (e) => {
    e.preventDefault();
    setresponse(null)
    setshowtext(true)
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
        const subscribed = data?.UserId && subscribeToPush(data?.UserId)
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
      user?.UserId &&changeRunEffect()
    };
  return (
    <div className='flex justify-center items-center w-full  h-screen '>
    <NavLink to='../' path='relative'> <FaAngleLeft className='font-bold absolute top-5 left-3  sm:top-10 sm:left-5  text-2xl sm:text-3xl ' ></FaAngleLeft></NavLink>

    <div className='w-130 sm:w-140  lg:w-130  xl:w-140 lg:h-96  rounded-xl  justify-center lg:items-center   items-start flex flex-col lg:flex-row shadow-2xl gap-3 sm:gap-6  lg:gap-12 '>
        <div className='w-full md:h-full'>
          <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='h-full w-full lg:rounded-bl-xl lg:rounded-tl-xl rounded-t-xl lg:rounded-t-none        bg-no-repeat bg-cover bg-center object-cover   ' />
        </div>
        <form  onSubmit={handleSubmit}className='flex flex-col gap-3 sm:gap-4 lg:gap-5 pb-3 sm:pb-6  w-full  lg:pr-12 lg:pl-0 px-3 sm:px-7 lg:px-6   '>
            <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl '>Sign Up</h1>
            <div>
            <p className=''>Have an account already?<NavLink to={'/login'}><span className='text-yellow-900 font-medium  '>Sign In</span></NavLink> </p>
            <div className='w-full relative h-14 flex items-end'>
            {user.username&&<p className=' text-red-500 absolute top-0  text-sm sm:text-base'>{user.username}</p>}
            <input type='text' placeholder='Username'  value={formData.input1} name="input1" onChange={handlechange} className='   outline-none  border border-yellow-900 py-1 pl-2    text-black placeholder:text-neutral-300 placeholder:font-semibold  w-full' />
            </div>
            <div className='w-full relative h-14 flex items-end '>
            {user.password&&<p className=' text-red-500 absolute top-0 text-sm sm:text-base'>{user.password}</p>}
            <input type='password' placeholder='Password'  value={formData.input2} name="input2" onChange={handlechange}  className='  outline-none  border border-yellow-900 py-1 pl-2  text-black placeholder:font-semibold placeholder:text-neutral-200 w-full  ' />
            </div>
            </div>
            <div className='flex items-center gap-3'>
                <input type='checkbox' className=' accent-yellow-900 sm:w-4 sm:h-4 hover:cursor-pointer lg:w-5 lg:h-5' />
                <p className='whitespace-nowrap  lg:font-semibold'>I agree to the terms and condition</p>
            </div>
            <button className={`w-full py-2 md:py-3 rounded-xl smtext-lg lg:text-xl font-semibold  bg-yellow-900 text-white  ${disabled ? 'opacity-80 cursor-not-allowed' : 'opacity-100'}`} disabled={disabled}><p className={`${showtext?'invisible':'visible'}`}>Sign In</p>{(showtext) && <FaSpinner className='absolute popout'/>}</button>
        </form>
    </div>
</div>
  )
}

export default Signup