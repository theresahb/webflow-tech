import React, { useState } from 'react'
import Navbar from '../../shared/Navbar'

const Hero = () => {
    const liColor = 'text-secondaryColor';
    const borderColor = 'gray-200'; 
    const logo = '/assets/logo.svg';
    const menuBorder = 'gray-200'

    return (
        <header>
            <div className="bg-white">
                <Navbar liColor={liColor} borderColor={borderColor} logo={logo} menuBorder={menuBorder} />
                <section>
                    <div className="flex flex-col gap-8 px-4 py-24 md:w-full md:px-8 lg:px-14 lg:w-[70%]"
                    style={{
                        backgroundImage: `url(${'/assets/about-logo-home.svg'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                    >
                        <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                            <h3 className='text-primaryColor font-semibold'>About us</h3>
                        </div>
                        <div className="flex flex-col gap-6 sx:pr-0 sm:pr-20 md:pr-40">
                            <h1 className='sx:text-4xl text-secondaryColor font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
                                We help online businesses grow. <span className='text-primaryColor'>Together.</span>
                            </h1>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
