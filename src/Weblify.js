import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Weblify = () => {
    const [handleChange, sethandlechange] = useState(true)

    function changeicon() {
        sethandlechange(prev => !prev)
    }

    return (
        <div className='w-full h-full '>
            <header className='h-20 w-full bg-black text-white'>
                <button onClick={changeicon} className='bg-blue-700 w-10 h-10'></button>
                <h1>weblify</h1>
            </header>


            <div className={`${!handleChange ? "fixed pt-14 w-52 duration-500 ease-out  transition-all  bg-white shadow-xl pl-2 z-10 lg:hidden shadow-blue-300 h-screen" : "duration-500 left-0 ease-out  transition-all fixed pt-14 w-0   overflow-x-hidden  lg:hidden bg-white shadow-xl pl-2 z-10 shadow-blue-300 h-screen"}`}>
                <div className="flex mb-14">
                    <img src='https://ton.twitter.com/1.1/ton/data/dm/1726511273951580309/1726511270738685953/6sWDM2EH.jpg:thumb' className="w-6 h-6 mr-2" />
                    <NavLink to='/DashBoardHome/DashBoard' className='text-xl font-bold' >Dashboard</NavLink>

                </div>

                <div className="flex w-full">
                    <img src='https://ton.twitter.com/1.1/ton/data/dm/1726511273951580309/1726511270738685953/6sWDM2EH.jpg:thumb' className="w-6 h-6 mr-2" />
                    <NavLink to='/' className='text-xl font-bold hover:text-blue-500 active:text-blue-300' >Analytics</NavLink>
                    <img src='https://ton.twitter.com/1.1/ton/data/dm/1726511273951580309/1726511270738685953/6sWDM2EH.jpg:thumb' className="w-5 h-6 ml-12 mt-1" />
                </div>

                <div>

                </div>

            </div>

            <div className="fixed pt-14 w-52 bg-white shadow-xl pl-2 z-10 shadow-blue-300 h-screen lg:block hidden" >
                <div className="flex mb-14">
                    <img src="https://ton.twitter.com/1.1/ton/data/dm/1726511273951580309/1726511270738685953/6sWDM2EH.jpg:thumb" className="w-6 h-6 mr-2" />
                    <NavLink to='/DashBoardHome/DashBoard' className='text-xl font-bold' >Dashboard</NavLink>

                </div>

                <div className="flex w-full">
                    <img src='https://ton.twitter.com/1.1/ton/data/dm/1726511273951580309/1726511270738685953/6sWDM2EH.jpg:thumb' className="w-6 h-6 mr-2" />
                    <NavLink to='/' className='text-xl font-bold  text-blue-500' >Analytics</NavLink>
                    <img src='https://ton.twitter.com/1.1/ton/data/dm/1726511273951580309/1726511270738685953/6sWDM2EH.jpg:thumb' className="w-5 h-6 ml-12 mt-1" />
                </div>

                <div>

                </div>

            </div>
            <div className=' lg:ml-60  '>
                <h1 className='lg:hidden w-110  m-auto mt-10 font-bold text-xl sm:w-140'> Analytics</h1>
                <p className='w-110  m-auto mt-12 text-lg mb-3 lg:mt-8 lg:w-22 sm:w-140 lg:m-0 lg:mb-3 lg:text-xl font-medium'>shorturl1ttt</p>
                <div className='  py-12   w-110 sm:w-140 lg:w-22 border-2 border-blue-700 m-auto lg:m-0 break-words  px-2 '>
                    <div className='flex gap-3'>

                        <h1 className='font-bold flex'>Original<span className='flex-nowrap'> URL:</span></h1>
                        <p className=' '>http//www.example.com/page1</p>
                    </div>
                    <div className='flex'>
                        <h1>Custom text</h1>
                        <p>customtext1</p>

                    </div>
                    <div className='flex'>
                        <h1>Click count</h1>
                        <p>100</p>
                    </div>
                    <div className='flex'>
                        <h1>View count</h1>
                        <p>500</p>
                    </div>

                </div>

            </div>
            <div className='lg:ml-60'>
                <table className='border border-blue-600 w-110 m-auto lg:mt-12 lg:m-0 lg:w-140 h-60 mt-10'>
                    <tbody>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Weblify