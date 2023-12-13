import React from 'react';
import { useState } from 'react'

const Demo = () => {
    const [error, setError] = useState("");
    const [text, setText] = useState("")
    const [customtext, setcustomText] = useState("")
    const [links, setLinks] = useState([])

    const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzM4NTY1YWU4NTEzMDA0OWE3ZjExOSIsImlhdCI6MTcwMjM2NDc1NiwiZXhwIjoxNzAyNjIzOTU2fQ.29RPaDpScicEZpifAF1V91A8-_ViUGx9l-YLU6TMbm8"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const option = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${accesstoken} `
            },
            body: JSON.stringify({ originalUrl: text, customText: customtext })
        }
        try {

            const response = await fetch('https://weblify.onrender.com/v1/urls', option);
            const data = await response.json()
            setLinks(data.data)
            console.log(data)
            setText('')
        }

        catch (err) {
            setError(err)

        }
    };

    const handleInput = (e) => {
        const data = e.target.value
        setText(data)
        setError("")

    }
    const handlecustomInput = (e) => {
        const data = e.target.value
        setcustomText(data)
        setError("")

    }


    return (
        <div>
            {text}
            {error}<br></br>
            {customtext}
            {links}
            <form onSubmit={handleSubmit} className='justify-center   flex   items-center flex-col md:flex-row xl:flex-row  md:gap-5 lg: lg:gap-5 xl:gap-5 md mt-4 gap-5  md:mt-8 lg:mt-10'>
                <input type='text' placeholder='Enter your long link here' className=' rounded-full outline-none m-auto md:m-0  px-4    h-9 w-80 text-lg placeholder:text-black  placeholder:text-center md:placeholder:text-start
             sm:w-96 md:h-8 lg:w-200 lg:h-9 xl:w-250  xl:h-10 md:w-150' required name='text' onChange={handleInput} value={text} />
                <input type='text' placeholder='enter custom text ' required name='customtext' onChange={handlecustomInput} value={customtext} />
                <button className='bg-blue-600 w-80 font-semibold m-auto md:m-0  h-9 rounded-full text-lg text-white  md:text-sm  lg:h-9 lg:w-40 xl:w-48 xl:h-10  lg:text-base xl:text-lg md:w-28 md:h-8 sm:w-96' type='submit'>shorten url</button>
            </form>
        </div>
    )
}

export default Demo