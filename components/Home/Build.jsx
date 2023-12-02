import React from 'react'
import Image from 'next/image'

const Build = () => {
  return (
    <section>
        <div className="flex py-32 w-full sx:flex-col sx:gap-8 sx:px-4 md:flex-row md:justify-between md:items-center lg:px-14"
        style={{
            backgroundImage: `url(${'/assets/build.webp'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <div className="flex sm:justify-start sm:items-start sm:w-full sx:justify-start sx:items-start sx:w-full sx:flex-col md:gap-4 md:w-[70%]">
                <h1 className='font-bold text-white sx:text-3xl md:text-6xl lg:text-8xl'>Let’s build something different</h1>
                <p className='font-medium text-white sx:text-sm md:text-lg'>
                    Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert 
                    guidance, and unparalleled support.
                </p>
            </div>
            <div className="flex flex-col justify-start items-start">
                <div className="grid sx:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sx:w-[100%]">
                    <div className="bg-[#e3c8ff] sx:w-full lg:w-[20rem] h-16"></div>
                    <div className="bg-[#d3a7ff] sx:w-full lg:w-[20rem] h-16"></div>
                    <div className="bg-[#bd7aff] sx:w-full lg:w-[20rem] h-16"></div>
                    <div className="bg-[#ad5aff] sx:w-full lg:w-[20rem] h-16"></div>
                    <div className="bg-[#93f] sx:w-full lg:w-[20rem] h-16"></div>
                    <button className="nav-btn flex justify-between items-center gap-8 bg-primaryColor sx:w-full lg:w-[20rem] px-4 py-4 transition ease-linear duration-500 delay-100">
                        <p className='text-white font-medium'>Get in Touch</p>
                        <div className="nav-arrow transition ease-linear duration-500 delay-100">
                            <Image src={'/assets/white-arrow.png'} width={10} height={10} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Build
