import React from 'react'
import Hero from './Hero'
import Questions from './Questions'
import Footer from '../../shared/Footer'

const Frequent = () => {
    return (
        <main>
            <div className="flex flex-col">
                <Hero />
                <Questions />
                <Footer />
            </div>
        </main>
    )
}

export default Frequent
