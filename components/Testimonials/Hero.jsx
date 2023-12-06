import React from 'react'
import Navbar from '../../shared/Navbar'

const Hero = () => {
    const liColor = 'text-white';
    const borderColor = '#ffffff2c'; 
    const logo = '/assets/home-logo.svg';
    const menuButton = 'white'

    return (
        <header>
            <div className="bg-secondaryColor"
            style={{
                backgroundImage: `url(${'/assets/ellipse.png'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Navbar liColor={liColor} borderColor={borderColor} logo={logo} menuButton={menuButton} />
                <section>
                    <div className="flex flex-col justify-center items-center text-center gap-8 px-14 py-40">
                        <h1 className='text-white sx:text-3xl md:text-5xl lg:text-6xl font-semibold'>Testimonials</h1>
                        <p className="text-white sx:text-base md:text-lg font-medium">
                            Welcome to our Testimonials page, where we let our satisfied clients and customers speak for us.
                        </p>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
