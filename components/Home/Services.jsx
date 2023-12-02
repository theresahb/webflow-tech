import React from 'react'
import { services } from '../../data/data'
import Image from 'next/image'

const Services = () => {
  return (
    <section>
        <div className="">
            <div className="flex flex-col justify-center items-center gap-24 sx:px-4 pt-12 pb-32 lg:px-16">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                        <h3 className='text-primaryColor font-semibold sx:text-xs sm:text-base'>Who we are</h3>
                    </div>
                    <h1 className='sx:text-2xl sm:text-3xl md:text-5xl text-secondaryColor font-extrabold'>How we help you</h1>
                </div>
                <div className="grid gap-6 grid-rows-2 sx:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((item) => {
                        return (
                            <div key={item.id} className="flex flex-col justify-between border border-[#8000ff33] bg-[#8000ff09] rounded-lg overflow-hidden">
                                <div className="flex flex-col gap-4 px-4 pt-6 pb-8 ">
                                    <div className="border border-[#8000ff33] p-2 w-fit bg-[#8000ff10] rounded">
                                        <Image src={item.image} width={30} height={30} />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className='sx:text-xl sm:text-2xl font-bold text-secondaryColor'>{item.text}</h1>
                                        <p className='font-medium text-paragraphGray sx:text-sm sm:text-base'>{item.subtext}</p>
                                    </div>
                                </div>
                                <button className="service-btn flex justify-between items-center bg-primaryColor px-5 py-4 border border-[#8000ff21] transition ease-linear duration-400 delay-100">
                                    <p className='text-white font-medium transition ease-linear duration-400 delay-100'>Learn More</p>
                                    <div className="service-arrow transition ease-linear duration-400 delay-100">
                                        <Image src={'/assets/white-arrow.png'} width={10} height={10} className='arrow-img transition ease-linear duration-400 delay-100' />
                                    </div>
                                </button>
                            </div>
                        )
                    })}
                </div>
                <button className="about-btn flex justify-between items-center gap-8 text-white bg-primaryColor font-medium px-6 py-3 border border-primaryColor rounded-full transition ease-linear duration-400 delay-100">
                    <p>View More</p>
                    <div className="">●</div>
                </button>
            </div>
            <div className="bg-[#2b1343] px-14 py-32 sx:px-4"
                style={{
                    backgroundImage: `url(${'/assets/white-bg.webp'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }}>
                    <p className='text-center font-bold text-white sx:text-2xl md:text-5xl'>
                        <span className='text-[#998aa9]'>We are committed to staying at</span> the forefront of technological 
                        innovation<span className='text-[#998aa9]'>, constantly exploring emerging trends and 
                        incorporating the</span> latest   advancements into our solutions.
                    </p>
            </div>
        </div>
    </section>
  )
}

export default Services
