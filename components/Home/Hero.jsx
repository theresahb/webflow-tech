import React from 'react'
import Image from 'next/image'
import Navbar from '../../shared/Navbar'

const Hero = () => {
    const liColor = 'text-white';
    const borderColor = '#ffffff2c'; 
    const logo = '/assets/home-logo.svg';
    const menuButton = 'white'

    return (
        <header>
            <div className=""
            style={{
                backgroundImage: `url(${'/assets/home-bg.webp'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Navbar liColor={liColor} borderColor={borderColor} logo={logo} menuButton={menuButton} />
                <section>
                    <div className="flex flex-col justify-center items-center text-center gap-8 sx:px-4 md:px-14 py-20 lg:px-48">
                        <div className="">
                            <Image src={'/assets/union.svg'} width={70} height={70} />
                        </div>
                        <div className="flex flex-col gap-8 text-white">
                            <h1 className='font-bold sx:text-4xl sm:text-5xl lg:text-7xl'>Transforming ideas into inspiring experiences</h1>
                            <p className='text-lg font-medium'>
                                Your one-stop digital software solutions company. At Tech, we thrive on transforming your ideas into 
                                cutting-edge digital realities.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 sx:flex-col sm:flex-row">
                            <button className="bg-white font-medium px-6 py-3 rounded-full transition ease-linear duration-400 delay-100 hover:bg-primaryColor hover:text-white">Start a Project</button>
                            <button className="bg-transparent text-white font-medium px-6 py-3 rounded-full border border-white transition ease-linear duration-400 delay-100 hover:text-primaryColor">Our Work</button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
