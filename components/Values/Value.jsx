import React from 'react'
import Hero from './Hero'
import Advantages from './Advantages'
import Testimony from './Testimony'
import Footer from '../Home/Footer'

const Value = () => {
  return (
    <main>
        <div className="flex flex-col">
            <Hero />
            <Advantages />
            <Testimony />
            <Footer />
        </div>
    </main>
  )
}

export default Value
