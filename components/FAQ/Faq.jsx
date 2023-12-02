import React from 'react'
import Navbar from './Navbar'
import Questions from './Questions'
import Footer from '../Home/Footer'

const Frequent = () => {
    return (
        <main>
            <div className="flex flex-col">
                <Navbar />
                <Questions />
                <Footer />
            </div>
        </main>
    )
}

export default Frequent
