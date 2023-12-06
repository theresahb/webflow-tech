import React from 'react'
import Hero from './Hero'
import Leads from './Leads'
import Questions from './Questions'
import Footer from '../../shared/Footer'

const Team = () => {
  return (
    <main>
        <div className="flex flex-col">
            <Hero />
            <Leads />
            <Questions />
            <Footer />
        </div>
    </main>
  )
}

export default Team
