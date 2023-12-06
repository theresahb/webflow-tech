import React from 'react'
import Hero from './Hero'
import Build from '../Home/Build'
import Projects from '../Home/Projects'
import Testimony from '../Home/Testimony'
import Contact from '../Home/Contact'
import Footer from '../Home/Footer'
import Culture from './Culture'
import Features from './Features'
import Executives from './Executives'

const About = () => {
  return (
    <main>
        <div className="flex flex-col">
            <Hero />
            <Culture />
            <Features />
            <Executives />
            <Build />
            <Projects />
            <Testimony />
            <Contact />
            <Footer />
        </div>
    </main>
  )
}

export default About
