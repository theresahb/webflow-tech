import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '../../data/data'
import Link from 'next/link'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setIsModalOpen(!isModalOpen);
    };

    // const handleTabEnter = (index) => {
    //     setActiveTab(index);
    //     setIsModalOpen(true);
    // };

    // const handleTabLeave = () => {
    //     setIsModalOpen(false);
    // };

    return (
        <header>
            <div className=""
            style={{
                backgroundImage: `url(${'/assets/home-bg.webp'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <nav>
                    <div className="flex justify-between items-center w-full border-b border-[#ffffff2c] py-8 pr-8 pl-4 sx:px-4 md:pl-8 lg:pr-0 lg:pl-12 lg:py-0">
                        <div className="">
                            <Image src={'/assets/home-logo.svg'} width={50} height={50} className='w-[7rem]' />
                        </div>
                        <ul className="hidden items-center gap-12 lg:flex">
                            {navLinks.map((item, index) => {
                                return (
                                    <div className=' relative'>
                                        <li 
                                            key={item.id} 
                                            onClick={() => handleTabClick(index)}
                                            className='text-white font-medium cursor-pointer transition ease-linear duration-400 delay-100 hover:text-primaryColor'>
                                            {item.text}
                                        </li>
                                        {activeTab === index && navLinks[activeTab].content && isModalOpen && (
                                            <div className="absolute top-10 -left-10 mt-2 px-8 z-10 w-[10rem] lg:flex" >
                                              <div className="flex flex-col gap-2 w-fit bg-white px-2 py-2 rounded-lg">
                                                {navLinks[activeTab].content && isModalOpen && (
                                                  <ul className='flex flex-col gap-2'>
                                                    {navLinks[activeTab].content.map((submenuItem) => (
                                                        <li key={submenuItem.id}
                                                            className='cursor-pointer rounded transition duration-500 ease-in-out hover:text-primaryColor'>
                                                            <Link href={submenuItem.link}>{submenuItem.text}</Link>
                                                        </li>
                                                    ))}
                                                  </ul>
                                                )}
                                              </div>
                                            </div>
                                          )}
                                        
                                    </div>
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
                    <div className="flex flex-col justify-center items-center text-center gap-8 sx:px-4 md:px-14 py-20 lg:px-48">
                        <div className="">
                            <Image src={'/assets/union.svg'} width={70} height={70} />
                        </div>
                        <div className="flex flex-col gap-8 text-white">
                            <h1 className='font-bold sx:text-4xl sm:text-5xl lg:text-7xl'>Transforming ideas into inspiring experiences</h1>
                            <p className='text-lg font-medium'>
                                Your one-stop digital software solutions company. At Tech, we thrive on transforming your ideas into 
                                cutting-edge digital realities.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 sx:flex-col sm:flex-row">
                            <button className="bg-white font-medium px-6 py-3 rounded-full transition ease-linear duration-400 delay-100 hover:bg-primaryColor hover:text-white">Start a Project</button>
                            <button className="bg-transparent text-white font-medium px-6 py-3 rounded-full border border-white transition ease-linear duration-400 delay-100 hover:text-primaryColor">Our Work</button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Navbar
