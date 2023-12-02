import React, { useState } from 'react'
import { questions } from '../../data/data'
import Image from 'next/image';

const Questions = () => {
    const [showAnswers, setShowAnswers] = useState(Array(questions.length).fill(false));
    
    const handleToggle = (index) => {
        const updatedShowAnswers = [...showAnswers];
        updatedShowAnswers[index] = !updatedShowAnswers[index];
        setShowAnswers(updatedShowAnswers);
    };

    return (
        <section>
            <div className="flex justify-start items-start px-4 py-32 w-full sx:px-4 sx:flex-col sm:px-4 sm:flex-col md:px-4 md:flex-col lg:flex-row lg:px-14">
                <div className="flex flex-col gap-8 py-24 sm:w-full md:w-[70%] lg:w-[40%]">
                    <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                        <h3 className='text-primaryColor font-semibold'>FAQ</h3>
                    </div>
                    <div className="flex flex-col gap-6 pr-40">
                        <h1 className='text-5xl text-secondaryColor font-bold'>
                            The most common questions
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center sm:w-full md:w-full lg:w-[60%]">
                    {questions.map((item, index) => (
                        <div key={item.id} className="flex flex-col items-center justify-center w-full gap-2 px-4 py-7 transition ease-linear duration-500 delay-200 bg-[#e6e5e53f] border border-[#e6e5e5dc] rounded-lg">
                            <div className={`flex justify-between items-center gap-12 cursor-pointer w-full `} onClick={() => handleToggle(index)}>
                                <h1 className={`text-secondaryColor font-bold md:text-xl lg:text-2xl`}>{item.question}</h1>
                                <button className="flex justify-center items-center p-1 bg-transparent border border-[#e6e5e5c9] rounded-sm">
                                    <Image src={showAnswers[index] ? '/assets/minus.svg' : '/assets/plus.svg'} alt="" width={30} height={40} />
                                </button>
                            </div>
                            {showAnswers[index] && (
                                <div className="flex items-center duration-500">
                                    <p className='text-paragraphGray font-medium sx:text-xs md:text-sm lg:text-base'>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Questions
