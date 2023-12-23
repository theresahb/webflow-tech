import React from 'react'
import Hero from './Hero'
import Footer from '../../shared/Footer'
import Filter from './Filter'
import Projects from './Projects'
import { useState } from 'react';

const CaseStudies = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <main>
            <div className="flex flex-col">
                <Hero />
                <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Projects searchTerm={searchTerm} />
                <Footer />
            </div>
        </main>
    )
}

export default CaseStudies
