import React from 'react'
import { valueTestimonies } from '../../data/data'
import Image from 'next/image'
import Link from 'next/link'

const Testimony = () => {
  return (
    <section>
        <div className="flex flex-col gap-16 py-24 sx:px-4 lg:px-14">
            <div className="flex justify-between w-full sx:flex-col sx:items-start sx:gap-4 sm:flex-row sm:items-end">
                <div className="flex flex-col gap-4 sx:w-full sm:w-[70%]">
                    <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                        <h3 className='text-primaryColor font-semibold'>Testimonials</h3>
                    </div>
                    <div className="">
                        <h1 className='sx:text-2xl sm:text-3xl md:text-5xl text-secondaryColor font-bold'>
                            Happy customers say about us
                        </h1>
                    </div>
                </div>
                <div className="">
                    <Link href={'/testimonials'}>
                        <button className="about-btn flex justify-between items-center gap-8 w-full text-white bg-primaryColor font-medium px-6 py-3 border border-primaryColor rounded-full transition ease-linear duration-400 delay-100">
                            <p>View All</p>
                            <div className="">●</div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="grid gap-8 w-full sx:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {valueTestimonies.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-col gap-8 sx:p-4 sm:p-8 border border-[#8000ff33] bg-[#8000ff09] rounded-lg">
                            <div className="">
                                <Image src={'/assets/stars.svg'} width={100} height={50} />
                            </div>
                            <div className="">
                                <p className='font-medium text-[#180030] sx:text-base sm:text-lg'>{item.text}</p>
                            </div>
                            <p className="font-semibold text-primaryColor text-lg">{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Testimony
