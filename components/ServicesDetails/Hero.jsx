import React from 'react'
import Navbar from '../../shared/Navbar';

const Hero = ({ title, about }) => {
    const liColor = 'text-white';
    const borderColor = '[#ffffff2c]'; 
    const logo = '/assets/home-logo.svg';
    const menuButton = 'white'

    return (
        <header>
            <div className="bg-[#180030f3]"
            style={{
                backgroundImage: `url(${'/assets/ellipse.png'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Navbar liColor={liColor} borderColor={borderColor} logo={logo} menuButton={menuButton} />
                <section>
                    <div className="flex flex-col justify-center items- my-0 mx-auto text-center gap-8 px-14 py-40 sx:w-full lg:w-[70%]">
                        <h1 className='text-white sx:text-3xl md:text-5xl lg:text-7xl font-bold'>{title}</h1>
                        <p className="text-white sx:text-base md:text-lg lg:text-xl font-medium">
                            {about}
                        </p>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
