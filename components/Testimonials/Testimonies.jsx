import React from 'react'
import { testimonials } from '../../data/data'
import Image from 'next/image'

const Testimonies = () => {
  return (
    <section>
        <div className="flex flex-col gap-24 py-32 sx:px-4 md:px-4 lg:px-14">
            <div className="grid gap-8 w-full sx:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-col justify-between gap-8 p-8 border border-[#8000ff33] bg-[#8000ff09] rounded-lg">
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
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-8 sx:w-full lg:w-[70%]">
                    <div className="border-l-4 border-primaryColor sx:pl-4 md:pl-12">
                        <p className='text-secondaryColor font-bold py-8 sx:text-xl md:text-3xl'>
                            "Our organization partnered with Tech for our cybersecurity needs, and the results have been exceptional. 
                            Their cutting-edge solutions and proactive monitoring have kept our data secure. I highly recommend their services."
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <div className="w-fit h-fit rounded-full overflow-hidden">
                            <Image src={'/assets/test-avi.webp'} width={50} height={50} />
                        </div>
                        <p className='text-lg text-secondaryColor font-semibold'>Jain Wong</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonies
