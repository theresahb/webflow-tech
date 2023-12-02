import React from 'react'
import { projects } from '../../data/data'
import Image from 'next/image'

const Projects = () => {
  return (
    <section>
        <div className="flex flex-col gap-12 px-4 py-32 md:px-8 lg:px-14 ">
            <div className="flex justify-between items-end w-full sx:flex-col sx:gap-8 sx:items-start">
                <div className="flex flex-col gap-4 w-[70%] sx:w-full">
                    <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                        <h3 className='text-primaryColor font-semibold sx:text-sm sm:text-base'>Our Work</h3>
                    </div>
                    <div className="">
                        <h1 className='text-secondaryColor font-extrabold sx:text-2xl sm:text-6xl md:text-7xl'>
                            Our latest projects
                        </h1>
                    </div>
                </div>
                <div className="">
                    <button className="about-btn flex justify-between items-center gap-8 text-white bg-primaryColor font-medium px-6 py-3 border border-primaryColor rounded-full transition ease-linear duration-400 delay-100">
                        <p>Learn More</p>
                        <div className="">●</div>
                    </button>
                </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                {projects.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-col justify-between gap-4">
                            <div className="overflow-hidden">
                                <Image 
                                src={item.image}
                                width={500}
                                height={300}
                                objectFit='contain'
                                className="w-full transition ease-linear duration-500 delay-200 hover:scale-110" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-bold text-secondaryColor sx:text-xl sm:text-2xl'>{item.text}</h1>
                                <p className='font-medium text-paragraphGray sx:text-sm sm:text-base'>{item.subtext}</p>
                            </div>
                            <div className="flex items-center gap-1 text-primaryColor font-medium">
                                <p className='text-primaryColor hover:text-secondaryColor cursor-pointer sx:text-base sm:text-lg'>{item.category1}</p> / 
                                <p className='text-primaryColor hover:text-secondaryColor cursor-pointer sx:text-base sm:text-lg'>{item.category2}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Projects
