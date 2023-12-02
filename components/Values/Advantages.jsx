import Image from 'next/image'
import React from 'react'

const Advantages = () => {
  return (
    <section>
        <div className="flex flex-col gap-24 py-32 sx:px-4 lg:px-24">
            <div className="flex gap-8 sx:flex-col md:flex-row">
                <div className="md:text-5xl sx:text-2xl sm:text-4xl text-secondaryColor font-extrabold">
                    <h1>Why to work with us</h1>
                </div>
                <div className="flex flex-col gap-12 sx:w-full sm:w-[80%]">
                    <div className="flex sx:gap-2 md:gap-4">
                        <div className="sx:w-16 sx:h-1 md:w-20 md:h-2 bg-secondaryColor mt-8"></div>
                        <div className="flex flex-col gap-4">
                            <h1 className='text-secondaryColor font-bold leading-[4rem] sx:text-xl sm:text-4xl md:text-4xl lg:text-[3.5rem] lg:leading-[4rem]'>
                                <span className='text-primaryColor'>We take care</span> about your business
                            </h1>
                            <p className="text-paragraphGray font-medium sx:text-sm sm:text-base">
                                At Tech, we understand that your business is more than just a venture; it's your vision, your passion, 
                                and your livelihood
                            </p>
                        </div>
                    </div>
                    <div className="flex sx:gap-2 md:gap-4">
                        <div className="sx:w-16 sx:h-1 md:w-20 md:h-2 bg-secondaryColor mt-8"></div>
                        <div className="flex flex-col gap-4">
                            <h1 className='text-secondaryColor font-bold leading-[4rem] sx:text-xl sm:text-4xl md:text-4xl lg:text-[3.5rem] lg:leading-[4rem]'>
                                <span className='text-primaryColor'>Experts</span> in various areas on <span className='text-primaryColor'>board</span>
                            </h1>
                            <p className="text-paragraphGray font-medium sx:text-sm sm:text-base">
                                At Tech our strength lies in the diverse expertise of our team members. We take pride in having a cadre of experts
                            </p>
                        </div>
                    </div>
                    <div className="flex sx:gap-2 md:gap-4">
                        <div className="sx:w-16 sx:h-1 md:w-20 md:h-2 bg-secondaryColor mt-8"></div>
                        <div className="flex flex-col gap-4">
                            <h1 className='text-secondaryColor font-bold leading-[4rem] sx:text-xl sm:text-4xl md:text-4xl lg:text-[3.5rem] lg:leading-[4rem]'>
                                Transparent <span className='text-primaryColor'>communication</span>
                            </h1>
                            <p className="text-paragraphGray font-medium sx:text-sm sm:text-base">
                                We consider transparent communication to be the cornerstone of successful partnerships. We firmly believe that 
                                clear, open, and honest dialogue is essential for building trust
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sx:gap-24">
                <div className="flex sx:flex-col sx:gap-12 lg:flex-row lg:justify-between lg:items-center">
                    <div className="lg:flex lg:justify-between lg:items-center md:my:0 md:mx-auto md:w-[30rem]">
                        <Image 
                        src={'/assets/author.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                    <div className="flex flex-col gap-4 sx:w-full lg:w-[50%]">
                        <p className="text-primaryColor font-medium sx:text-sm sm:text-base">About Company</p>
                        <h1 className='sx:text-2xl sm:text-3xl md:text-5xl text-secondaryColor font-bold'>Inception & Vision</h1>
                        <p className="text-paragraphGray font-medium sx:text-sm sm:text-base">
                            Our journey began 2010 years ago when a group of visionary IT professionals came together with a shared 
                            dream – to bridge the gap between technology and business success. We recognized that the world of IT 
                            was constantly evolving, and businesses needed a partner who could not only keep pace with change but 
                            also harness its potential.
                        </p>
                    </div>
                </div>
                <div className="flex sx:flex-col-reverse sx:gap-12 lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex flex-col gap-4 sx:w-full lg:w-[50%]">
                        <p className="text-primaryColor font-medium">About Company</p>
                        <h1 className='sx:text-2xl sm:text-3xl md:text-5xl text-secondaryColor font-bold'>Building Expertise</h1>
                        <p className="text-paragraphGray font-medium sx:text-sm sm:text-base">
                            In the early years, we invested heavily in building our expertise. Our team tirelessly honed their skills, 
                            staying on the cutting edge of emerging technologies, and mastering the intricacies of IT strategy, 
                            software development, infrastructure optimization, and more.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden lg:flex lg:justify-between lg:items-center md:my:0 md:mx-auto md:w-[30rem]">
                        <Image 
                        src={'/assets/group.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 ">
                <h1 className="md:text-5xl sx:text-3xl text-secondaryColor font-bold sx:text-center lg:text-start">Our Values</h1>
                <div className="grid gap-8 sm:grid-cols-2 sm:place-content-center sm:place-items-center lg:grid-cols-3">
                    <div className="flex flex-col gap-4 bg-gray-50 border border-gray-300 px-4 py-8 rounded-lg">
                        <h3 className="md:text-3xl sx:text-xl text-secondaryColor font-bold">Client-Centricity</h3>
                        <p className="text-paragraphGray text-sm font-medium">
                            Our clients are at the heart of everything we do. We prioritize your needs
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 text-white bg-primaryColor px-4 py-8 rounded-lg">
                        <h3 className="md:text-3xl sx:text-xl font-bold">Innovation</h3>
                        <p className="font-medium text-sm">
                            You'll work on exciting projects and leverage cutting-edge evolving technologies
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 bg-gray-50 border border-gray-300 px-4 py-8 rounded-lg">
                        <h3 className="md:text-3xl sx:text-xl text-secondaryColor font-bold">Team Spirit</h3>
                        <p className="text-paragraphGray font-medium text-sm">
                            Our team is like a family. We believe in teamwork and mutual support
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Advantages
