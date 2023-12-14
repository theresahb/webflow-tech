import React, { useState } from 'react'
import { offers } from '../../data/data';
import Image from 'next/image';

const Offers = () => {
    const [showAnswers, setShowAnswers] = useState(Array(offers.length).fill(false));
    
    const handleToggle = (index) => {
        const updatedShowAnswers = [...showAnswers];
        updatedShowAnswers[index] = !updatedShowAnswers[index];
        setShowAnswers(updatedShowAnswers);
    };

    return (
        <section>
            <div className="flex items-start px-4 py-32 sx:flex-col sx:gap-8 sx:px-4 sm:flex-col sm:gap-8 sm:px-4 md:flex-col md:gap-8 md:px-4 lg:flex-row lg:justify-between lg:gap-12 lg:px-14">
                <div className="flex flex-col gap-8 sx:w-full sm:w-full md:w-[70%] lg:w-[40%]">
                    <h1 className="sx:text-3xl sm:text-5xl text-secondaryColor font-extrabold">We provide a wide range of IT services</h1>
                    <p className="text-paragraphGray font-semibold sx:text-sm sm:text-base">
                        Your expertise in IT consulting offers us a distinctive advantage that many other consulting firms lack. 
                        This specialized knowledge allows us to provide our clients with tailored solutions and insights from the competition.
                    </p>
                    <button className="nav-btn sx:hidden justify-between items-center gap-8 w-fit bg-primaryColor px-8 py-6 transition ease-linear duration-500 delay-100 lg:flex">
                        <p className='text-white font-medium'>Get in Touch</p>
                        <div className="nav-arrow transition ease-linear duration-500 delay-100">
                            <Image src={'/assets/white-arrow.png'} width={10} height={10} />
                        </div>
                    </button>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center sx:w-full sm:w-full md:w-full lg:w-[60%]">
                    {offers.map((item, index) => (
                        <div key={item.id} className="flex flex-col gap-2 w-full px-4 py-7 transition ease-linear duration-500 delay-200 border-b-[3px]  border-primaryColor">
                            <div className={`flex justify-between items-center cursor-pointer w-full`} onClick={() => handleToggle(index)}>
                                <h1 className={`text-secondaryColor font-extrabold transition ease-linear duration-400 delay-100 hover:text-primaryColor md:text-2xl lg:text-3xl`}>{item.offer}</h1>
                                <button className="flex justify-center items-center p-1 transition ease-linear duration-500 delay-200">
                                    <Image src={showAnswers[index] ? '/assets/minus.svg' : '/assets/plus.svg'} alt="" width={30} height={40} />
                                </button>
                            </div>
                            {showAnswers[index] && (
                                <div className="flex items-start duration-500">
                                    <p className='text-paragraphGray font-medium sx:text-xs md:text-sm lg:text-base'>{item.details}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Offers
