import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section>
            <div className="flex flex-col gap-32 px-4 py-32 md:px-4 lg:px-14">
                <div className="flex flex-col gap-16">
                    <div className="flex justify-between items-center gap-12 w-full sx:flex-col sm:flex-col md:flex-col lg:flex-row">
                        <div className="flex flex-col gap-8 sx:w-full sm:w-full md:w-full lg:w-[50%]">
                            <h1 className="text-secondaryColor font-bold sx:text-4xl md:text-5xl">We are more than just a remarkable company</h1>
                            <p className="text-paragraphGray font-semibold">
                                We are architects of innovation, trailblazers of technological advancement, and partners in your 
                                success. As a dynamic and forward-thinking organization, we are dedicated to reshaping industries 
                                and empowering businesses to navigate the digital age with confidence.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 sx:flex-row sm:flex-row sm:w-full md:flex-row lg:flex-col lg:w-[40%]">
                            <div className="flex items-center sx:gap-4 md:gap-8 lg:border-b lg:border-gray-200 pb-6 sx:flex-col sx:items-start md:border-0 md:flex-col md:items-start lg:flex-row">
                                <h1 className="text-secondaryColor font-extrabold sx:text-6xl md:text-7xl">12+</h1>
                                <p className="text-paragraphGray font-semibold">Decades of experience in software development</p>
                            </div>
                            <div className="flex items-center sx:gap-4 md:gap-8 sx:flex-col sx:items-start md:flex-col md:items-start lg:flex-row">
                                <h1 className="text-secondaryColor font-extrabold sx:text-6xl md:text-7xl">300</h1>
                                <p className="text-paragraphGray font-semibold">Amassed a portfolio of numerous successfully completed projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Image 
                        src={'/assets/who.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                </div>
                <div className="">
                    <p className="text-secondaryColor font-bold leading-tight sx:text-2xl md:text-center md:text-4xl lg:text-5xl">
                        Your experience in IT&nbsp;
                        <span className='rounded-full sx:px-8 md:px-16'
                        style={{
                            backgroundImage: `url(${'/assets/text-image1.webp'})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}></span> consulting provides us&nbsp;
                        <span className='rounded-full sx:px-8 md:px-16'
                        style={{
                            backgroundImage: `url(${'/assets/text-image2.webp'})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}></span>
                        &nbsp;with a unique perspective that other consulting 
                        agencies may not have access
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
