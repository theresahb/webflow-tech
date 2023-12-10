import React from 'react'
import Navbar from '../../shared/Navbar'

const Hero = () => {
    const liColor = 'text-white';
    const borderColor = '[#ffffff2c]'; 
    const logo = '/assets/home-logo.svg';
    const menuButton = 'white'

    return (
        <header>
            <div className="bg-secondaryColor"
            style={{
                backgroundImage: `url(${'/assets/build.webp'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Navbar liColor={liColor} borderColor={borderColor} logo={logo} menuButton={menuButton} />
                <section className='flex justify-center items-center text-center'>
                    <div className="flex flex-col justify-center items-center gap-8 px-14 py-40 sx:w-full md:w-[70%]">
                        <h1 className='text-white font-semibold sx:text-4xl sm:text-6xl md:text-7xl'>Frequently asked questions</h1>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
