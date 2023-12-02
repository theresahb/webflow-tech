import React from 'react'
import Navbar from './Navbar'
import Testimonies from './Testimonies'
import Footer from '../Home/Footer'

const Testimonials = () => {
    return (
        <main>
            <div className="flex flex-col">
                <Navbar />
                <Testimonies />
                <Footer />
            </div>
        </main>
    )
}

export default Testimonials
