import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className="flex justify-between items-center px-4 w-full sx:flex-col sm:flex-col md:px-4 lg:px-14 lg:flex-row">
                <div className="flex flex-col gap-8 py-24 w-full">
                    <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                        <h3 className='text-primaryColor font-semibold'>Our team</h3>
                    </div>
                    <div className="flex flex-col gap-6 md:pr-40">
                        <h1 className='text-secondaryColor font-bold sx:text-xl sm:text-5xl md:text-6xl lg:text-7xl'>
                            Get to know Our Team
                        </h1>
                    </div>
                </div>
                <div className="flex relative">
                    <div className="absolute top-36 -left-40 z-10 rotate-6 rounded-lg overflow-hidden">
                        <Image 
                        src={'/assets/team1.webp'} 
                        width={350} 
                        height={300}
                        className="w-full" />
                    </div>
                    <div className="relative -rotate-6 rounded-lg overflow-hidden">
                        <Image 
                        src={'/assets/team2.webp'} 
                        width={350} 
                        height={300}
                        className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
