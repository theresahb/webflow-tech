import React from 'react'
import Image from 'next/image'

const Culture = () => {
  return (
    <section>
        <div className="flex flex-col">
            <div className="">
                <Image 
                src={'/assets/frame.svg'}
                width={500}
                height={300}
                className="w-full" />
            </div>
            <div className="flex flex-col gap-20 bg-[#2b1343]"
            style={{
                backgroundImage: `url(${'/assets/about-logo-home.svg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            >
                <div className="flex flex-col gap-12 px-4 pt-16 md:px-8 lg:px-14">
                    <div className="bg-[#ffffff3a] px-4 py-2 w-fit rounded border border-[#ffffff2d]">
                        <h3 className='text-white font-semibold'>Our culture</h3>
                    </div>
                    <div className="flex flex-col gap-20 text-white">
                        <div className="flex flex-col gap-4">
                            <h1 className='text-5xl font-bold sx:text-3xl sm:text-4xl md:text-5xl'>Flexible & Understanding</h1>
                            <p className='sm:text-sm md:text-base'>
                                We understand that life is full of twists and turns, and sometimes plans need to be adjusted. 
                                That's why we take a dynamic and accommodating approach to provide you with tailored solutions.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className='text-5xl font-bold sx:text-3xl sm:text-4xl md:text-5xl'>Growth & Development</h1>
                            <p className='sm:text-sm md:text-base'>
                                We understand that growth takes many forms – from personal development to organizational advancement. 
                                Our mission is to be your partner in this transformative journey, providing you with the resources, 
                                tools, and guidance you need to thrive.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className='font-bold sx:text-3xl sm:text-4xl md:text-5xl'>Open & Transparent</h1>
                            <p className='sm:text-sm md:text-base'>
                                We understand that transparency is not just a buzzword; it's a guiding principle that influences 
                                everything we do. From our communication with clients, partners, and team members to our business 
                                practices and decision-making, we strive to be forthright and candid.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-end overflow-hidden pt-4">
                    <div className="-rotate-6 overflow-hidden rounded-t-2xl">
                        <Image 
                        src={'/assets/contact1.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                    <div className="rotate-3 overflow-hidden rounded-t-2xl">
                        <Image 
                        src={'/assets/contact2.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                    <div className="-rotate-6 overflow-hidden rounded-t-2xl">
                        <Image 
                        src={'/assets/contact3.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Culture
