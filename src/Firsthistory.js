import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { NavLink, useOutletContext } from 'react-router-dom'
import { useContext } from 'react'
import { appcontext } from './History'
import { useSelector } from 'react-redux'
const Firsthistory = () => {
    const data = useContext(appcontext)
    const data1 = useOutletContext()
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    
    return (
        <div className='lg:w-12 w-full    lg:fixed pt-20 sm:pt-24 md:pt-24 lg:pt-24   h-screen'>

            <div className='lg:overflow-y-scroll h-full hidden lg:block '>
                {data?.history?.map(prev => {return(<>
                    <NavLink to={`/history/${prev._id}`}>
                        <div className='lg:px-3 md:px-6 sm:px-6 px-5 border-b border-gray-400  pt-4 pb-2 sm:pt-5 sm:pb-3 xl:px-4 flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <p> History for your <span className='font-semibold'>{prev.title}</span> cart</p>
                                <FaEllipsisV />
                            </div>
                            <p className='font-semibold'>2 minntes ago</p>
                        </div>
                    </NavLink>
                    </>
                )}).reverse()}
                

            </div>
            <div className='lg:hidden h-full '>
                {data1?.history?.map(prev => {return(<>
                    <NavLink to={`/history/${prev._id}`}>
                        <div className='lg:px-3 md:px-6 sm:px-6 px-5 border-b border-gray-400  pt-4 pb-2 sm:pt-5 sm:pb-3 xl:px-4 flex flex-col'>
                            <div className='flex justify-between items-center'>
                              <p> History for your <span className='font-semibold'>{prev.title}</span> cart</p>
                                <FaEllipsisV />
                            </div>
                            <p className='font-semibold'>2 minntes ago</p>
                        </div>
                    </NavLink>
                    </>
                )}).reverse()}
                

            </div>
        </div>
    )
}

export default Firsthistory