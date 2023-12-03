import React from 'react'
import { leads } from '../../data/data'
import Image from 'next/image'

const Leads = () => {
  return (
    <section>
        <div className="">
            <div className="grid gap-8 px-4 py-32 mt-28 sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-4 lg:grid-cols-4 lg:px-14">
                {leads.map((item) => (
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
            <div className="px-4 py-8 md:px-4 lg:px-14">
                <div className="flex flex-col gap-4 text-white px-14 py-28 leading-[5rem]"
                style={{
                    backgroundImage: `url(${'/assets/build2.webp'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                    <h1 className='font-bold sm:text-xl md:text-[5rem]'>Improve your</h1>
                    <h1 className='font-bold sx:pl-4 md:pl-24 sm:text-xl md:text-[5rem]'>business with the</h1>
                    <h1 className='font-bold sx:pl-4 md:pl-44 sm:text-xl md:text-[5rem]'>right solutions</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Leads
