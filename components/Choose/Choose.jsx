import React from 'react'
import Hero from './Hero'
import About from './About'
import Offers from './Offers'
import Contact from '../Home/Contact'
import Footer from '../Home/Footer'
import Projects from './Projects'

const Choose = () => {
  return (
    <main>
        <div className="flex flex-col">
            <Hero />
            <About />
            <Offers />
            <Projects />
            <Contact />
            <Footer />
        </div>
    </main>
  )
}

export default Choose
