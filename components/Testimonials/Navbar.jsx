import React from 'react'
import Image from 'next/image'
import { navLinks } from '../../data/data'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <div className="bg-secondaryColor"
            style={{
                backgroundImage: `url(${'/assets/ellipse.png'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <nav>
                    <div className="flex justify-between items-center w-full border-b border-[#ffffff1e] py-8 pr-8 pl-4 sx:px-4 md:pl-8 lg:pr-0 lg:pl-12 lg:py-0">
                        <div className="">
                            <Image src={'/assets/logo2.svg'} width={50} height={50} className='w-[7rem]' />
                        </div>
                        <ul className="hidden items-center gap-12 lg:flex">
                            {navLinks.map((item) => {
                                return (
                                    <Link href={`${item.link ? item.link : ''}`}>
                                        <li key={item.id} className='text-white font-medium transition ease-linear duration-400 delay-100 hover:text-primaryColor'>{item.text}</li>
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
                            <Image src={'/assets/menu-btn.svg'} width={30} height={30} className='white' />
                        </button>
                    </div>
                </nav>
                <section>
                    <div className="flex flex-col justify-center items-center text-center gap-8 px-14 py-40">
                        <h1 className='text-white text-6xl font-semibold'>Testimonials</h1>
                        <p className="text-white text-lg font-medium">
                            Welcome to our Testimonials page, where we let our satisfied clients and customers speak for us.
                        </p>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Navbar
