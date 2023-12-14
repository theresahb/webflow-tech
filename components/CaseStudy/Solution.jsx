import Image from 'next/image'
import React from 'react'

const Solution = ({ data }) => {
    return (
        <section>
            <div className="flex flex-col gap-24 py-24 sx:px-4 lg:px-14 w-full">
                <div className="flex justify-center items-center sx:flex-col lg:flex-row gap-8">
                    <div className="grid gap-4 sx:grid-cols-1 sx:grid-rows-4 md:grid-cols-2 md:grid-rows-2 sx:w-full lg:w-[50%]">
                        {data.images.map((item) => (
                            <div key={item.id} className={`w-full h-fit rounded-md overflow-hidden`}>
                                <Image src={item.image} width={500} height={300} className='w-full h-[280px]' />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 sx:w-full lg:w-[50%]">
                        <h1 className="font-bold text-secondaryColor sx:text-xl md:text-3xl lg:text-4xl">Solution:</h1>
                        <p className="font-medium text-paragraphGray">{data.solution}</p>
                        <ul className="flex flex-col gap-3">
                            {data.solutionlist.map((list) => (
                                <li className="">
                                    <span className="text-xl font-extrabold text-violet-600 mr-2">•</span>
                                    <span className="font-semibold text-paragraphGray mr-1">{list.head}:</span>
                                    <span className="text-paragraphGray">{list.body}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex sx:flex-col sx:gap-6 md:gap-0 md:flex-row md:justify-between items-center">
                    <div className="flex flex-col gap-3 sx:w-full lg:w-[50%]">
                        <h1 className="font-bold text-secondaryColor sx:text-xl md:text-3xl lg:text-4xl">Result</h1>
                        {data.resultlist && 
                            <ul className="flex flex-col gap-4">
                            {data.resultlist.map((list) => (
                                <li className="">
                                    {list.head && <span className="text-xl font-extrabold text-violet-600 mr-2">•</span>}
                                    {list.head && <span className="font-semibold text-paragraphGray mr-1">{list.head}</span>}
                                    <span className="text-paragraphGray">{list.body}</span>
                                </li>
                            ))}
                        </ul>
                        }
                        {data.result && <p className="font-medium text-paragraphGray">{data.result}</p> }
                    </div>
                    <div className="sx:w-full lg:w-[45%]">
                        <Image 
                        src={'/assets/description.webp'}
                        width={500}
                        height={300}
                        objectFit='cover'
                        className="w-full h-full rounded-lg overflow-hidden" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution
