import Image from 'next/image'
import React from 'react'

const ServiceDescription = ({ description, describe, track, benefits }) => {
    return (
        <section>
            <div className="flex flex-col gap-16 py-24 sx:px-4 lg:px-14">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-secondaryColor sx:text-xl md:text-4xl">{description}</h1>
                        <p className='font-medium text-paragraphGray'>{describe}</p>
                    </div>
                    <div className="flex sx:flex-col sx:gap-4 lg:flex-row lg:gap-8">
                        <div className="sx:w-full lg:w-[45%]">
                            <Image 
                            src={'/assets/description.webp'}
                            width={500}
                            height={300}
                            objectFit='cover'
                            className="w-full h-full rounded-lg overflow-hidden" />
                        </div>
                        <div className="sx:w-full lg:w-[55%] pb-7 pt-12">
                            <ul className="flex flex-col gap-5">
                                {track.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-secondaryColor sx:text-base sm:text-2xl font-bold border-b border-gray-300 pb-5 sx:pl-4 lg:pl-0">
                                        <div className="">
                                            <Image 
                                            src={'/assets/checkmark.svg'} 
                                            width={20} 
                                            height={20}
                                            className="" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-secondaryColor sx:text-xl md:text-4xl">Benefits</h1>
                    <ul className="flex flex-col gap-4">
                        {benefits.map((list) => (
                            <li className="">
                                <span className="text-xl font-extrabold text-violet-600 mr-2">•</span>
                                <span className="font-semibold text-paragraphGray mr-1">{list.title}</span>
                                <span className="text-paragraphGray">{list.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ServiceDescription
