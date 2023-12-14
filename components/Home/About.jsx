import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center gap-16 px-2 py-36 sm:px-4 lg:px-16 lg:py-16">
            <div className="flex w-full sx:flex-col sx:gap-8 sx:items-start lg:flex-row lg:items-end lg:gap-12">
                <div className="flex flex-col gap-4 sx:w-full lg:w-[70%]">
                    <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                        <h3 className='text-primaryColor font-semibold sx:text-xs sm:text-base'>Who we are</h3>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className='sx:text-2xl sm:text-3xl md:text-5xl text-secondaryColor font-extrabold'>
                            We are more than just a company
                        </h1>
                        <p className='sx:text-sm md:text-lg text-paragraphGray font-medium'>
                            We are architects of innovation, trailblazers of technological advancement, and partners in your success. 
                            As a dynamic and forward-thinking organization, we are dedicated to reshaping industries and empowering 
                            businesses to navigate the digital age with confidence.
                        </p>
                    </div>
                </div>
                <div className="">
                    <Link href={'/about-us'}>
                        <button className="about-btn flex justify-between items-center gap-8 w-full text-white bg-primaryColor font-medium px-6 py-3 border border-primaryColor rounded-full transition ease-linear duration-500 delay-100">
                            <p>Learn More</p>
                            <div className="">●</div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex items-center w-full sx:flex-col sx:gap-8 lg:flex-row lg:gap-8">
                <div className="w-full">
                    <Image 
                    src={'/assets/about.webp'}
                    width={500}
                    height={300}
                    className="w-full"
                    />
                </div>
                <div className="flex sx:flex-row sx:gap-4 lg:flex-col lg:gap-8">
                    <div className="flex flex-col gap-2 md:border-b md:border-gray-300 md:pb-6 sx:border-none sx:items-center sx:text-center">
                        <h1 className='sx:text-2xl sm:text-3xl md:text-5xl font-bold text-primaryColor'>12+</h1>
                        <p className='text-paragraphGray font-medium sx:text-xs sm:text-base'>Years of experience in software development</p>
                    </div>
                    <div className="flex flex-col gap-2 sx:items-center sx:text-center">
                        <h1 className='sx:text-2xl sm:text-3xl md:text-5xl font-bold text-primaryColor'>50</h1>
                        <p className='text-paragraphGray font-medium sx:text-xs sm:text-base'>Winning awards as one of the top world company</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
