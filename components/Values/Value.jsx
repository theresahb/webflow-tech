import React from 'react'
import Hero from './Hero'
import Advantages from './Advantages'
import Testimony from './Testimony'
import Footer from '../../shared/Footer'
import Build from './Build'

const Value = () => {
  return (
    <main>
        <div className="flex flex-col">
            <Hero />
            <Advantages />
            <Testimony />
            <Build />
            <Footer />
        </div>
    </main>
  )
}

export default Value
