import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = ({ data }) => {
    return (
        <section>
            <div className="flex flex-col gap-12 sx:pt-12 lg:pt-32 pb-12 bg-gray-50 sx:px-4 lg:px-14">
                <div className="flex flex-col sx:gap-10 lg:gap-20">
                    <div className="flex sx:flex-col sx:gap-4 lg:flex-row lg:gap-8 lg:justify-between lg:items-end">
                        <h1 className="font-bold sx:text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-secondaryColor">{data.text}</h1>
                        <p className="font-medium text-paragraphGray">{data.subtext}</p>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <Image 
                        src={data.image}
                        width={500}
                        height={100}
                        className='w-full h-[500px]' />
                    </div>
                </div>
                <div className="flex sx:flex-col lg:flex-row lg:justify-between items-center sx:gap-6 lg:gap-12 w-full">
                    <div className="flex flex-col gap-2 sx:w-full lg:w-[60%]">
                        <h1 className="font-bold text-secondaryColor sx:text-xl md:text-3xl lg:text-4xl">Background</h1>
                        <p className='font-medium text-paragraphGray'>{data.background}</p>
                    </div>
                    <div className="flex flex-col px-6 py-4 rounded-lg border border-gray-300 sx:w-full lg:w-[40%]">
                        <div className="flex justify-between items-center py-3 border-b border-gray-300">
                            <p className="font-medium text-paragraphGray">Industry:</p>
                            <p className="font-semibold text-secondaryColor">{data.industry}</p>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-300">
                            <p className="font-medium text-paragraphGray">Location:</p>
                            <div className="flex items-center gap-2">
                                <p className="font-semibold text-secondaryColor">{data.location}</p>
                                <div className="">
                                    <Image 
                                    src={data.flag}
                                    width={20}
                                    height={20}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 py-3">
                            <p className="font-medium text-paragraphGray">Services Used:</p>
                            <div className="flex gap-4 flex-wrap">
                                {data.services && data.services.map((item) => (
                                    <Link href={`/services/${item.link}`}>
                                        <button className="font-semibold text-secondaryColor border border-gray-300 px-4 py-2 rounded-full">{item.name}</button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
