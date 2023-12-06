import React from 'react'
import Hero from './Hero'
import Testimonies from './Testimonies'
import Footer from '../../shared/Footer'

const Testimonials = () => {
    return (
        <main>
            <div className="flex flex-col">
                <Hero />
                <Testimonies />
                <Footer />
            </div>
        </main>
    )
}

export default Testimonials
