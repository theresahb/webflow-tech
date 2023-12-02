import React from 'react'
import Image from 'next/image'
import { navLinks } from '../../data/data'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <div className="bg-white">
                <nav>
                    <div className="flex justify-between items-center w-full border-b border-gray-200 py-8 pr-8 pl-4 sx:px-4 md:pl-8 lg:pr-0 lg:pl-12 lg:py-0">
                        <div className="">
                            <Image src={'/assets/tech-logo.svg'} width={50} height={50} className='w-[7rem]' />
                        </div>
                        <ul className="hidden items-center gap-12 lg:flex">
                            {navLinks.map((item) => {
                                return (
                                    <Link href={`${item.link !== '' ? item.link : null}`}>
                                        <li key={item.id} className='text-secondaryColor font-medium transition ease-linear duration-400 delay-100 hover:text-primaryColor'>{item.text}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                        <button className="nav-btn hidden justify-between items-center gap-8 bg-primaryColor px-8 py-8 transition ease-linear duration-500 delay-100 lg:flex">
                            <p className='text-white font-medium'>Get in Touch</p>
                            <div className="nav-arrow transition ease-linear duration-500 delay-100">
                                <Image src={'/assets/white-arrow.png'} width={10} height={10} />
                            </div>
                        </button>
                        <button className="flex lg:hidden outline-none">
                            <Image src={'/assets/menu-btn.svg'} width={30} height={30} className='' />
                        </button>
                    </div>
                </nav>
                <section>
                    <div className="flex flex-col gap-8 px-4 py-24 md:w-full md:px-8 lg:px-14 lg:w-[70%]"
                    style={{
                        backgroundImage: `url(${'/assets/about-logo-home.svg'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                    >
                        <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                            <h3 className='text-primaryColor font-semibold'>About us</h3>
                        </div>
                        <div className="flex flex-col gap-6 sx:pr-0 sm:pr-20 md:pr-40">
                            <h1 className='sx:text-4xl text-secondaryColor font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
                                We help online businesses grow. <span className='text-primaryColor'>Together.</span>
                            </h1>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Navbar
