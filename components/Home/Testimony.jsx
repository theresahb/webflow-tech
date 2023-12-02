import React from 'react'
import { testimonies } from '../../data/data'
import Image from 'next/image'

const Testimony = () => {
  return (
    <section>
        <div className="flex flex-col gap-12 py-32 overflow-hidden sx:px-4 md:px-14">
            <div className="flex flex-col gap-8 text-center md:px-20">
                <h1 className='font-bold text-secondaryColor sx:text-2xl sm:text-3xl md:text-5xl'>Trusted by more than 1000+ company’s around the world</h1>
                <p className='font-medium text-paragraphGray sx:text-sm sm:text-lg'>
                    We are more than just a business; we are a community driven by our passion for serving our customers with excellence. 
                    Our success is intertwined with the success of each individual and company we proudly call our customers.
                </p>
            </div>
            <div className="overflow-hidden w-[180%]">
                <div className="grid grid-cols-5 grid-rows-1 gap-8 sx:w-[200%] lg:w-full overflow-hidden">
                    {testimonies.map((item) => {
                        return (
                            <div key={item.id} className="testimony flex flex-col justify-between gap-8 sx:p-4 md:p-8 border border-[#8000ff33] bg-[#8000ff09] rounded-lg overflow-hidden">
                                <div className="">
                                    <Image src={'/assets/stars.svg'} width={100} height={50} />
                                </div>
                                <div className="">
                                    <p className='font-medium text-[#180030] text-lg'>{item.text}</p>
                                </div>
                                <p className="font-semibold text-primaryColor text-lg">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimony
