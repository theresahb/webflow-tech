import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="sm:static md:relative">
            <div className="">
                <div className="sm:flex sm:flex-col sm:w-full md:justify-start md:items-start">
                    <div className="flex flex-col gap-8 pl-4 sx:py-8 sm:w-full sx:justify-center sx:items-center sx:text-center sx:pl-0 sx:px-4 md:py-24 md:justify-start md:items-start md:text-start md:pl-4 md:w-[60%] lg:pl-14 lg:w-[70%]">
                        <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                            <h3 className='text-primaryColor font-semibold'>About us</h3>
                        </div>
                        <div className="sx:flex sx:flex-col gap-6 sx:my-0 sx:mx-auto sx:justify-center sx:items-center sx:pr-0 md:pr-40 md:mx-0 md:justify-start md:items-start">
                            <h1 className='text-secondaryColor font-extrabold sx:text-4xl sm:text-5xl lg:text-6xl'>
                                Why choose us
                            </h1>
                            <p className="text-paragraphGray font-medium sx:w-full md:w-[80%]">
                                We provide a wide range of IT services, from strategic planning and cybersecurity to cloud computing and 
                                custom software development.
                            </p>
                        </div>
                    </div>
                    <div className="sm:rounded-md sm:overflow-hidden sm:static sx:px-4 sx:pb-12 sm:px-4 md:absolute md:top-20 md:right-0 md:pr-4 lg:pr-14">
                        <Image 
                        src={'/assets/choose.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center items-center bg-secondaryColor px-4 py-16 sm:px-4 lg:px-14">
                    <div className="grid gap-8 sx:grid-cols-1 sm:grid-cols-3">
                        <div className="flex items-center gap-4 sx:flex-col sx:text-center">
                            <div className="">
                                <Image 
                                src={'/assets/trophy.webp'}
                                width={80}
                                height={60}
                                className="w-full" />
                            </div>
                            <p className='text-white sx:text-lg sm:text-2xl font-semibold'>Experience <br /> expert team</p>
                        </div>
                        <div className="flex items-center gap-4 sx:flex-col sx:text-center">
                            <div className="">
                                <Image 
                                src={'/assets/settings.webp'}
                                width={80}
                                height={60}
                                className="w-full" />
                            </div>
                            <p className='text-white sx:text-lg sm:text-2xl font-semibold'>Customized <br /> solutions</p>
                        </div>
                        <div className="flex items-center gap-4 sx:flex-col sx:text-center">
                            <div className="">
                                <Image 
                                src={'/assets/bubble.webp'}
                                width={80}
                                height={60}
                                className="w-full" />
                            </div>
                            <p className='text-white sx:text-lg sm:text-2xl font-semibold'>Transparent <br /> communication</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero
