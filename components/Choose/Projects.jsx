import React, { useEffect, useState } from 'react'
import { chooseProjects } from '../../data/data'
import Image from 'next/image'

const Projects = () => {
    const [current, setCurrent] = useState([]);

    useEffect(() => {
        // Set the initial projects to display (first two)
        setCurrent(chooseProjects.slice(0, 1).flatMap(project => project.projects));
    }, []);

    const handleNextClick = () => {
        // Get the current index and calculate the next index
        const currentIndex = chooseProjects.findIndex(project => project.projects === current);
        const nextIndex = (currentIndex + 2) % chooseProjects.length;
        // Set the next set of projects to display
        setCurrent(chooseProjects[nextIndex].projects);
    };

    
    // const [current, setCurrent] = useState(0)

    // useEffect(() => {
    //     setCurrent(current === chooseProjects.splice(0, 1) ? 0 : chooseProjects.splice(2, 3))
    // }, [current])

    // handleSlideChange = (index) => {
    //     setCurrent(index)
    // }

    

// //   const handleSlideChange = () => {
// //     // Update projects on slide change (next two)
// //     setCurrentProjects((prevProjects) => {
// //       const currentIndex = chooseProjects.findIndex(project => project.projects === prevProjects[0]);
// //       const nextProjects = chooseProjects[(currentIndex + 1) % chooseProjects.length].projects;
// //       return nextProjects;
// //     });
// //   };



//   const [current, setCurrent] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Set the initial projects to display (first two)
//     setCurrent(chooseProjects[currentIndex].projects);
//   }, [currentIndex]);

//   const handleNextClick = () => {
//     // Calculate the next index to display
//     const nextIndex = (currentIndex + 2) % chooseProjects.length;
//     // Set the next set of projects to display and update the current index
//     setCurrent(chooseProjects[nextIndex].projects);
//     setCurrentIndex(nextIndex);
//   };

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
                    {current.map((item, index) => (
                        
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
                    <p onClick={handleNextClick}>next</p>
                </div>
            </div>
        </section>
    )
}

export default Projects
