import React, { useEffect, useState } from 'react'
import { chooseProjects } from '../../data/data'
import Image from 'next/image'
import Link from 'next/link';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 1;

    const nextItems = () => {
        const newIndex = currentIndex + itemsPerPage;
        if (newIndex < chooseProjects.length - itemsPerPage + 1) {
            setCurrentIndex(newIndex);
        } else {
            // Start from the top if reaching the end
            setCurrentIndex(0);
        }
    };

    const prevItems = () => {
        const newIndex = currentIndex - itemsPerPage;
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
        } else {
            // Go to the end if reaching the top
            setCurrentIndex(chooseProjects.length - itemsPerPage);
        }
    };

    return (
        <section>
            <div className="flex sx:flex-col sx:gap-8 md:gap-0 md:flex-row sx:px-4 lg:px-14 py-32">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 w-[70%]">
                        <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                            <h3 className='text-primaryColor font-semibold'>Our Work</h3>
                        </div>
                        <div className="">
                            <h1 className='sx:text-3xl md:text-5xl text-secondaryColor font-extrabold'>
                                Our latest projects
                            </h1>
                        </div>
                    </div>
                    <Link href={'/case-studies'}>
                        <button className="about-btn flex justify-between items-center gap-4 text-white bg-primaryColor font-medium px-6 py-3 border border-primaryColor rounded-full transition ease-linear duration-400 delay-100">
                            <p>View More</p>
                            <div className="">●</div>
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col gap-12 w-full relative">
                    <div className="snap-x snap-mandatory">
                        {chooseProjects.slice(currentIndex, currentIndex + itemsPerPage).map((project) => (
                            <div key={project.id} className="snap-center grid sx:grid-cols-1 lg:grid-cols-2 gap-4 border-b border-gray-200 transition ease-linear duration-500 delay-200">
                                {project.projects.map((item) => (
                                    <div key={item.id} className="flex flex-col justify-between gap-4 pb-14 transition ease-linear duration-500 delay-200 border-b hover:border-b hover:border-primaryColor">
                                        <div className="overflow-hidden">
                                            <Image 
                                            src={item.image}
                                            width={500}
                                            height={300}
                                            objectFit='contain'
                                            className="w-full transition ease-linear duration-500 delay-200 hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Link href={`/case-studies/${item.link}`}>
                                                <h1 className='font-bold text-secondaryColor transition ease-linear duration-400 delay-100 sx:text-xl sm:text-2xl hover:text-primaryColor'>{item.text}</h1>
                                            </Link>
                                            <p className='font-medium text-paragraphGray'>{item.subtext}</p>
                                        </div>
                                        <div className="text-primaryColor font-medium">
                                            {item.categories.map((category, categoryIndex) => (
                                                <span key={categoryIndex} className='text-lg text-primaryColor hover:text-secondaryColor'>
                                                    <Link href={`/${category.link}`}>{category.name}</Link>
                                                    {categoryIndex < item.categories.length - 1 ? " / " : ""}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <button onClick={prevItems}  className="arrow border border-slate-300 hover:text-white hover:bg-violet-700 rounded-full p-3">
                            <Image src={'/assets/arrow-right.svg'} width={25} height={25} className='right-arrow rotate-180' />
                        </button>
                        <button onClick={nextItems} className="arrow border border-slate-300 hover:text-white hover:bg-violet-700 rounded-full p-3">
                            <Image src={'/assets/arrow-right.svg'} width={25} height={25} className='right-arrow' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
