import React from 'react'

const Build = () => {
    return (
        <div className="relative"> 
            <div className={`flex h-screen w-full`}>
                <div className="bg-[#f1e3ff]  w-[16.66%]"></div>
                <div className="bg-[#e3c8ff]  w-[16.66%]"></div>
                <div className="bg-[#d3a7ff]  w-[16.66%]"></div>
                <div className="bg-[#bd7aff]  w-[16.66%]"></div>
                <div className="bg-[#ad5aff]  w-[16.66%]"></div>
                <div className="bg-[#93f]  w-[16.66%]"></div>
                <div className="bg-[#8000ff]  w-[16.66%]"></div>
                <div className="absolute z-10 my-0 mx-auto">
                    <div className="flex flex-col justify-center items-center gap-8 text-center text-white sx:px-4 md:px-12 py-32">
                        <h1 className='font-bold sx:text-4xl sm:text-5xl md:text-7xl lg:text-8xl'>Let’s build something different</h1>
                        <p className='text-lg font-medium'>
                            Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, 
                            and unparalleled support.
                        </p>
                        <button className="build-btn flex justify-between items-center gap-8 text-secondaryColor bg-white font-medium px-6 py-3 rounded-full transition ease-linear duration-500 delay-100 hover:text-white hover:bg-primaryColor">
                            <p>Get in Touch</p>
                            <div className="">●</div>
                        </button>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Build
