import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Leads from './Leads'
import Questions from './Questions'
import Footer from '../Home/Footer'

const Team = () => {
  return (
    <main>
        <div className="flex flex-col">
            <Navbar />
            <Hero />
            <Leads />
            <Questions />
            <Footer />
        </div>
    </main>
  )
}

export default Team
