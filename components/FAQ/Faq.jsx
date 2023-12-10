import React from 'react'
import Hero from './Hero'
import Questions from './Questions'
import Footer from '../../shared/Footer'
import Build from '../Values/Build'

const Frequent = () => {
    return (
        <main>
            <div className="flex flex-col">
                <Hero />
                <Questions />
                <Build />
                <Footer />
            </div>
        </main>
    )
}

export default Frequent
