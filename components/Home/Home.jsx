import React from 'react'
import Hero from './Hero'
import Partners from './Partners'
import About from './About'
import Services from './Services'
import Solutions from './Solutions'
import Build from './Build'
import Projects from './Projects'
import Testimony from './Testimony'
import Contact from './Contact'
import Footer from '../../shared/Footer'

const HomePage = () => {
    return (
        <main>
            <div className="flex flex-col">
                <Hero />
                <Partners />
                <About />
                <Services />
                <Solutions />
                <Build />
                <Projects />
                <Testimony />
                <Contact />
                <Footer />
            </div>
        </main>
    )
}

export default HomePage
