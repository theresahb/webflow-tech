import React from 'react'
import { solutions } from '../../data/data'

const Solutions = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center gap-16 px-4 lg:px-14 py-32">
            <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                <h3 className='text-primaryColor font-semibold'>Variety solution for IT services</h3>
            </div>
            <div className="grid gap-10 sx:grid-cols-1 md:grid-cols-2">
                {solutions.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-col gap-8 border-b-2 border-gray-200 pb-10 transition ease-linear duration-500 delay-100 hover:border-primaryColor">
                            <h1 className='font-bold text-secondaryColor transition ease-linear duration-500 delay-100 cursor-pointer hover:text-primaryColor sx:text-xl sm:text-3xl md:text-5xl'>{item.text}</h1>
                            <p className='font-medium text-paragraphGray'>{item.subtext}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Solutions
