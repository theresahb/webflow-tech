import React from 'react'
import { consult } from '../../data/data'
import Image from 'next/image'

const Consultation = () => {
    return (
        <section>
            <div className="flex lg:justify-between lg:items-start md:gap-12 lg:gap-20 sx:flex-col-reverse sx:gap-12 sx:px-4 lg:flex-row lg:px-14 sx:py-12 lg:py-24">
                <form action="" method="get" className='flex flex-col gap-16 sticky top-0 bg-primaryColor sx:px-4 sm:px-8 sx:py-8 sm:py-12 rounded-lg'>
                    <h1 className="text-white font-extrabold sx:text-xl sm:text-3xl md:text-4xl">Request a free consultation</h1>
                    <div className="flex flex-col gap-6">
                        <div className="border border-[#bba6cfa9] rounded-lg px-4 py-5 bg-[#ab8acc1e] font-medium">
                            <input type="email" name="" id="" placeholder='Email' className='bg-transparent w-full border-0 outline-none caret-white text-white placeholder:font-medium' />
                        </div>
                        <div className="border border-[#bba6cfa9] rounded-lg px-4 py-5 bg-[#ab8acc1e] font-medium">
                            <input type="number" name="" id="" placeholder='Phone Number' className='bg-transparent w-full border-0 outline-none caret-white text-white placeholder:font-medium' />
                        </div>
                        <button type="submit" 
                            className='text-secondaryColor font-medium sx:w-fit lg:w-full bg-white px-8 py-4 rounded-full transition ease-linear duration-500 delay-200 hover:text-white hover:bg-primaryColor'>
                            Submit
                        </button>
                    </div>
                </form>
                <div className="flex flex-col gap-4 justify-center items-center sx:w-full sm:w-full md:w-full lg-[50%]">
                    {consult.map((item, index) => (
                        <div key={item.id} className="w-full py-7 border-b border-gray-300">
                            <div className={`flex justify-between items-center cursor-pointer w-full consult`}>
                                <h1 className={`head text-secondaryColor font-bold transition ease-linear duration-500 delay-200 hover:text-primaryColor sx:text-lg sm:text-xl md:text-2xl lg:text-3xl`}>{item.offer}</h1>
                                <button className="big-arrow flex justify-center items-center w-fit">
                                    <Image src={'/assets/arrow-dark-big.svg'} alt="" width={30} height={40} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Consultation
