import React from 'react'
import Navbar from '../../shared/Navbar';
import Image from 'next/image';

const Hero = ({ data }) => {
    const liColor = 'text-secondaryColor';
    const borderColor = 'gray-200'; 
    const logo = '/assets/logo.svg';
    const menuBorder = 'gray-200'

    return (
        <header>
            <div className="bg-white">
                <Navbar liColor={liColor} borderColor={borderColor} logo={logo} menuBorder={menuBorder} />
                <section
                    style={{
                    backgroundImage: `url(${'/assets/dark-ellipse.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
                >
                    <div className="flex justify-between items-center w-full py-24 sx:flex-col sx:gap-8 md:px-4 md:flex-row md:gap-0 lg:px-14">
                        <div className="flex flex-col gap-4 sx:px-4 sm:px-8 sx:w-full md:px-0 md:w-[40%]">
                            <h1 className='text-secondaryColor sx:text-5xl lg:text-6xl font-bold'>{data.name}</h1>
                            <p className="text-secondaryColor sx:text-base md:text-lg font-medium">
                                Explore the transformative journey as Tech collaboratively empowers clients to achieve their 
                                digital innovation goals.
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
