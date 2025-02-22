import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBook from '../components/FreeBook'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <FreeBook />
            {/* <Cards/> */}
            <Footer />
        </>
    )
}

export default Home
