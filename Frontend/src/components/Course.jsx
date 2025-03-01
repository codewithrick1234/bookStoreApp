import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import list from "../../public/list.json"
import { Link } from "react-router-dom"
import axios from "axios"

function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    }, [])
    // console.log(list)
    return (

        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className=' mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        We're delighted to have you {" "} <span className='text-pink-500'>Here! :)</span>
                    </h1>
                    <p className='mt-12'>
                    Our platform is designed to provide you with the best learning experience, helping you master new skills with ease. Whether you're a beginner or an experienced learner, our carefully curated courses ensure a seamless and enriching journey. Dive into a world of knowledge, stay ahead with industry-relevant insights, and achieve your goals with confidence. Let’s get started!"
                    </p>
                    <Link to={"/"}>
                        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                            Back</button>
                    </Link>
                </div>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default Course
