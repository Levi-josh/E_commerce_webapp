import React from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'

const Home = () => {
    return (
        <div className='h-screen'>

            <header className='fixed flex justify-between items-center h-14 px-3 w-full m-0 bg-white'>
                <h1 className='font-bold'>#Soundcity</h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Contact us</li>
                </ul>
                <div className='flex gap-3'>
                    <FaSearch />
                    <FaBell />
                    <FaBars className='md:hidden' />
                    <FaAddressBook className='hidden md:block' />
                </div>
            </header>
            <div className='overflow-hidden w-120 flex justify-center items-center sm:w-150 md:w-200 lg:w-300 xl:w-400 pt-16  m-auto'>
                <img src={homeimage} className='w-full  md:h-96 bg-no-repeat bg-cover bg-center' />
            </div>
            <section>
                <div className='mt-10 text-center mb-8'>
                    <h1 className='text-2xl font-bold'>simply unique/better  </h1>
                    <p><strong>soundcity</strong> is a gift and decoration store based in hcmc, vietnie since 2019.</p>
                </div>
                <div className='flex flex-col md:grid md:grid-cols-2   gap-8 md:gap-5  lg:gap-x-5 xl:gap-x-5 xl:gap-y-5 md:justify-items-center md:w-200 m-auto lg:w-300 xl:w-400   justify-center items-center'>

                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-72 h-48 lg:w-full md:h-72 md:w-80 sm:w-96 xl:h-100 sm:h-56' />
                    <img src={homeimage} className='w-72 h-48 lg:w-full md:h-72 md:w-80 xl:h-100 sm:w-96 sm:h-56' />
                    <img src={homeimage} className='w-72 h-48 lg:w-full md:h-72 md:w-80 xl:h-100 sm:w-96 sm:h-56' />
                    <img src={homeimage} className='w-72 h-48 lg:w-full md:h-72 md:w-80 xl:h-100 sm:w-96 sm:h-56 ' />

                </div>
            </section>
        </div>
    )
}

export default Home