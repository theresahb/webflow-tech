import { useEffect, useState } from 'react';
import { caseCategories } from '../../data/data';
import Link from 'next/link';
import Image from 'next/image';
import Mail from './Mail';
import Success from './Success';

const Projects = ({ searchTerm }) => {
    const [filteredImages, setFilteredImages] = useState([]);
    const [filteredImages2, setFilteredImages2] = useState([]);

    useEffect(() => {
        const filtered = searchTerm === '' ? caseCategories.case1 : caseCategories.case1.filter((image) => image.type.includes(searchTerm));
        setFilteredImages(filtered);
      }, [searchTerm]);
    
      useEffect(() => {
        const filtered2 = searchTerm === '' ? caseCategories.case2 : caseCategories.case2.filter((image) => image.type.includes(searchTerm));
        setFilteredImages2(filtered2);
      }, [searchTerm]);

    return (
        <div className="flex sx:flex-col-reverse sx:gap-8 md:flex-row md:gap-12 py-12 sx:px-4 lg:px-14">
            <div className="flex flex-col gap-8">
                <div className='grid grid-cols-1 gap-12'>
                    {filteredImages.map((item) => (
                        <div key={item.id} className="flex flex-col justify-between gap-4 border-b border-gray-300 pb-8">
                            <div className="overflow-hidden rounded-lg">
                                <Image 
                                src={item.image}
                                width={500}
                                height={300}
                                objectFit='contain'
                                className="w-full transition ease-linear duration-500 delay-200 hover:scale-110" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link href={`case-studies/${item.link}`}>
                                    <h1 className='font-bold text-secondaryColor transition ease-linear duration-400 delay-100 sx:text-xl sm:text-2xl md:text-3xl hover:text-primaryColor'>{item.text}</h1>
                                </Link>
                                <p className='font-medium text-paragraphGray sx:text-sm sm:text-base'>{item.subtext}</p>
                            </div>
                            <div className="text-primaryColor font-medium">
                                {item.categories.map((category, categoryIndex) => (
                                    <span key={categoryIndex} className='text-lg text-primaryColor hover:text-secondaryColor sx:text-base sm:text-lg'>
                                        <Link href={`case-studies-categories/${category.link}`}>{category.name}</Link>
                                        {categoryIndex < item.categories.length - 1 ? " / " : ""}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Mail />
            </div>
            <div className="flex flex-col gap-8">
                <Success />
                <div className='grid grid-cols-1 gap-12'>
                    {filteredImages2.map((item) => (
                        <div key={item.id} className="flex flex-col justify-between gap-4 border-b border-gray-300 pb-8">
                            <div className="overflow-hidden rounded-lg">
                                <Image 
                                src={item.image}
                                width={500}
                                height={300}
                                objectFit='contain'
                                className="w-full transition ease-linear duration-500 delay-200 hover:scale-110" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link href={`case-studies/${item.link}`}>
                                    <h1 className='font-bold text-secondaryColor transition ease-linear duration-400 delay-100 sx:text-xl sm:text-2xl md:text-3xl hover:text-primaryColor'>{item.text}</h1>
                                </Link>
                                <p className='font-medium text-paragraphGray sx:text-sm sm:text-base'>{item.subtext}</p>
                            </div>
                            <div className="text-primaryColor font-medium">
                                {item.categories.map((category, categoryIndex) => (
                                    <span key={categoryIndex} className='text-lg text-primaryColor hover:text-secondaryColor sx:text-base sm:text-lg'>
                                        <Link href={`case-studies-categories/${category.link}`}>{category.name}</Link>
                                        {categoryIndex < item.categories.length - 1 ? " / " : ""}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;