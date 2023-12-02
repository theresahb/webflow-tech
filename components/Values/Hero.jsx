import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="sx:static md:relative">
            <div className="">
                <div className="flex sx:flex-col sm:w-full lg:flex-row">
                    <div className="flex flex-col gap-8 sx:justify-center sx:items-center sx:text-center sx:w-full lg:w-[70%] sx:py-8 lg:py-24 sx:px-4 md:justify-start md:items-start md:text-start md:px-0 md:pl-4 lg:pl-14">
                        <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                            <h3 className='text-primaryColor font-semibold'>About us</h3>
                        </div>
                        <div className="flex flex-col gap-6 lg:pr-40">
                            <h1 className='text-secondaryColor font-extrabold sx:text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                                Our Values
                            </h1>
                            <p className="text-paragraphGray font-medium lg:w-[80%]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                                Duis cursus, mi quis viverra ornare, eros
                            </p>
                        </div>
                    </div>
                    <div className="sm:static lg:absolute lg:top-20 lg:right-0 ">
                        <Image 
                        src={'/assets/team2.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                </div>
                <div className="flex items-center gap-8 bg-primaryColor py-12 px-8 sx:flex-col sm:flex-row">
                    <p className='text-white font-semibold sx:text-lg md:text-2xl'>Market leaders use Tech to grow</p>
                    <div className="grid grid-cols-3 sx:gap-4 sm:gap-8">
                        <div className="w-[80%]">
                            <Image 
                            src={'/assets/company-white-logo1.svg'}
                            width={100}
                            height={60}
                            className="w-full" />
                        </div>
                        <div className="w-[80%]">
                            <Image 
                            src={'/assets/company-white-logo2.svg'}
                            width={100}
                            height={60}
                            className="w-full" />
                        </div>
                        <div className="w-[80%]">
                            <Image 
                            src={'/assets/company-white-logo3.svg'}
                            width={100}
                            height={60}
                            className="w-full" />
                        </div>
                        <div className="w-[80%]">
                            <Image 
                            src={'/assets/company-white-logo4.svg'}
                            width={100}
                            height={60}
                            className="w-full" />
                        </div>
                        <div className="w-[80%]">
                            <Image 
                            src={'/assets/company-white-logo5.svg'}
                            width={100}
                            height={60}
                            className="w-full" />
                        </div>
                        <div className="w-[80%]">
                            <Image 
                            src={'/assets/company-white-logo6.svg'}
                            width={100}
                            height={60}
                            className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero
