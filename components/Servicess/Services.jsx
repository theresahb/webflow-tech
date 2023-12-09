import React from 'react'
import Hero from './Hero'
import Projects from '../Home/Projects'
import Contact from '../Home/Contact'
import Footer from '../../shared/Footer'
import Consultation from './Consultation'
import Process from './Process'

const Services = () => {
    return (
        <main>
            <div className="flex flex-col">
                <Hero />
                <Consultation />
                <Process />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </main>
    )
}

export default Services
