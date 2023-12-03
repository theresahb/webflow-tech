import React from 'react'
import { chooseProjects } from '../../data/data'
import Image from 'next/image'

const Projects = () => {
    return (
        <section>
            <div className="flex justify-between items-center px-14 py-32">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 w-[70%]">
                        <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                            <h3 className='text-primaryColor font-semibold'>Our Work</h3>
                        </div>
                        <div className="">
                            <h1 className='sx:text-4xl md:text-7xl text-secondaryColor font-extrabold'>
                                Our latest projects
                            </h1>
                        </div>
                    </div>
                    <div className="">
                        <button className="flex justify-between items-center gap-8 text-white bg-primaryColor font-medium px-6 py-3 rounded-full">
                            <p>Learn More</p>
                            <div className="">●</div>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full overflow-hidden">
                    {chooseProjects.map((project) => {
                        return (
                            <div key={project.id} className="flex gap-4">
                                {project.projects.map((item) => (
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
                                            <h1 className='text-2xl font-bold text-secondaryColor'>{item.text}</h1>
                                            <p className='font-medium text-paragraphGray'>{item.subtext}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-primaryColor font-medium">
                                            <p className='text-lg text-primaryColor'>{item.category1}</p> / 
                                            <p className='text-lg text-primaryColor'>{item.category2}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
