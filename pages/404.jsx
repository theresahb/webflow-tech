import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const NotFound = () => {
    // const router = useRouter()
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 3000)
    // }, [])

    return (
        <section>
            <div className="flex flex-col justify-center items-center gap-8 h-screen">
                <div className="">
                    <Image src={'/assets/logo.svg'} width={50} height={50} className='w-[7rem]' />
                </div>
                <div className="flex flex-col justify-center items-center text-center mb-8">
                    <div className="flex items-center sx:text-6xl md:text-[10rem] font-bold text-primaryColor">
                        <span className=''>4</span>
                        <div className="">
                            <Image src={'/assets/globe404.svg'} width={50} height={50} className='sx:w-[3rem] md:w-[10rem]' />
                        </div>
                        <span className=''>4</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="sx:text-xl sm:text-5xl text-secondaryColor font-bold">Something’s not right.</h1>
                        <p className="sx:text-sm sm:text-base font-medium text-paragraphGray">We can’t find the page you are looking for.</p>
                    </div>
                </div>
                <Link href={'/'}>
                    <button className="about-btn flex justify-between items-center gap-8 text-white bg-primaryColor font-medium px-6 py-3 border border-primaryColor rounded-full transition ease-linear duration-400 delay-100">
                        <p>Back to Homepage</p>
                        <div className="">●</div>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default NotFound
