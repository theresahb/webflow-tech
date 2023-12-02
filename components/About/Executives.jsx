import React from 'react'
import { executives } from '../../data/data'
import Image from 'next/image'

const Executives = () => {
  return (
    <section>
        <div className="flex flex-col gap-14 px-4 py-32 w-full md:px-8 lg:px-14">
            <div className="flex justify-between items-center sx:flex-col sx:gap-4 sx:justify-start sx:items-start sm:flex-col sm:gap-4 sm:justify-start sm:items-start">
                <h1 className="text-5xl text-secondaryColor font-extrabold sx:text-3xl sm:text-4xl">Executive Team</h1>
                <p className="text-paragraphGray font-medium w-[50%] sx:w-full sm:w-full">
                    Our success is a result of teamwork and building upon our technical expertise and creative style providing a 
                    full-service solution to our clients.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {executives.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 relative">
                        <div className="rounded-xl overflow-hidden">
                            <Image 
                            src={item.image}
                            width={500}
                            height={300}
                            className="w-full" />
                        </div>
                        <div className="flex flex-col gap-2 absolute right-2 bottom-20">
                            <button type='submit' className="flex justify-center items-center bg-secondaryColor w-8 h-8 rounded-full p-[0.4rem] outline-none">
                                <a href={item.facebook}><Image src={'/assets/facebook.svg'} width={30} height={30} className='white' /></a>
                            </button>
                            <button type='submit' className="flex justify-center items-center bg-secondaryColor w-8 h-8 rounded-full p-[0.4rem] outline-none">
                                <a href={item.instagram}><Image src={'/assets/instagram.svg'} width={30} height={30} className='white' /></a>
                            </button>
                            <button type='submit' className="flex justify-center items-center bg-secondaryColor w-8 h-8 rounded-full p-[0.4rem] outline-none">
                                <a href={item.x}><Image src={'/assets/brand-x.svg'} width={30} height={30} className='white' /></a>
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[1.3rem] text-secondaryColor font-bold">{item.name}</h3>
                            <p className="text-paragraphGray font-medium">{item.portfolio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Executives
