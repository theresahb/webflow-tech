import React from 'react'
import Hero from './Hero'
import Leads from './Leads'
import Questions from './Questions'
import Footer from '../../shared/Footer'
import Build from '../Values/Build'

const Team = () => {
  return (
    <main>
        <div className="flex flex-col">
            <Hero />
            <Leads />
            <Questions />
            <Build />
            <Footer />
        </div>
    </main>
  )
}

export default Team
