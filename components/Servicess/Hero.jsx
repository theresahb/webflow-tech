import React from 'react'
import Navbar from '../../shared/Navbar';
import Image from 'next/image';

const Hero = () => {
    const liColor = 'text-secondaryColor';
    const borderColor = 'gray-200'; 
    const logo = '/assets/logo.svg';
    const menuBorder = 'gray-200'

    return (
        <header>
            <div className="bg-white"
            style={{
                backgroundImage: `url(${'/assets/ellipse.png'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Navbar liColor={liColor} borderColor={borderColor} logo={logo} menuBorder={menuBorder} />
                <section>
                    <div className="flex justify-between items-center w-full py-24 sx:flex-col sx:gap-8 md:px-4 md:flex-row md:gap-0 lg:px-14">
                        <div className="flex flex-col gap-4 sx:px-4 sm:px-8 sx:w-full md:px-0 md:w-[40%]">
                            <h1 className='text-secondaryColor sx:text-5xl lg:text-6xl font-bold'>Services</h1>
                            <p className="text-secondaryColor sx:text-base md:text-lg font-medium">
                                We believe in a collaborative approach, working closely with our clients to understand their goals 
                                and target audience
                            </p>
                        </div>
                        <div className="relative ">
                            <div className="">
                                <Image 
                                src={'/assets/service-hero.webp'}
                                width={400}
                                height={400}
                                objectFit="cover"
                                className="sx:w-[20rem] sx:h-[20rem] sm:w-[25rem] sm:h-[25rem] rounded-full"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-7 bg-primaryColor rounded-full w-[5rem] h-[5rem]'
                            >
                                <Image 
                                    src={'/assets/player-play-filled.svg'}
                                    width={400}
                                    height={400}
                                    objectFit="cover"
                                    className="play"
                                />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
