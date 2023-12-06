import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '../../data/data'
import Link from 'next/link'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)
    const [expandedItem, setExpandedItem] = useState(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setIsModalOpen(!isModalOpen);
    };

    const handleMenuClick = () => {
        setMenuOpen(true)
    }

    const handleMenuClose = () => {
        setMenuOpen(false)
    }

    const handleItemClick = (itemId) => {
        setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
    };

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
                                            <div className="absolute top-10 -left-10 mt-2 px-8 z-10 w-[20rem] lg:flex" >
                                              <div className="flex flex-col gap-4 w-fit bg-white pl-4 pr-8 py-4 rounded-lg">
                                                {navLinks[activeTab].content && isModalOpen && (
                                                  <ul className='flex flex-col gap-2'>
                                                    {navLinks[activeTab].content.map((submenuItem) => (
                                                        <li key={submenuItem.id}
                                                            className='cursor-pointer font-medium rounded transition duration-500 ease-in-out hover:text-primaryColor'>
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
                        <button className="sx:flex lg:hidden outline-none" onClick={handleMenuClick}>
                            <Image src={'/assets/menu-btn.svg'} width={30} height={30} className='white' />
                        </button>
                        {menuOpen && (
                            <div className="flex flex-col gap-4 sx:px-2 sm:px-4 sx:py-2 sm:py-4 lg:hidden w-1/2 bg-white absolute top-0 left-0 z-10 h-full min-h-full">
                                <div className="flex justify-between items-center">
                                    <div className="">
                                        <Image src={'/assets/logo.svg'} width={50} height={50} className='w-[7rem]' />
                                    </div>
                                    <button className="flex lg:hidden outline-none " onClick={handleMenuClose}>
                                        <Image src={'/assets/close.svg'} width={10} height={10} className='w-[1.1rem]' />
                                    </button>
                                </div>
                                
                                <div className="">
                                    {navLinks.map((item) => (
                                        <div key={item.id} className="flex flex-col gap-1 font-medium">
                                            <div 
                                            className="menu-text flex justify-between items-center cursor-pointer"
                                            onClick={() => handleItemClick(item.id)}>
                                                <p className='sx:text-base sm:text-lg mb-1'>
                                                    {item.text}
                                                </p>
                                                {item.content ? (
                                                    <button className={`${expandedItem === item.id && item.content ? 'rotate-180' : 'rotate-0'} flex lg:hidden outline-none`}>
                                                        <Image src={'/assets/chevron-down.svg'} width={10} height={10} className='w-[1rem]' />
                                                    </button>
                                                ) : null}
                                            </div>
                                            {expandedItem === item.id && item.content && (
                                                <ul className="flex flex-col gap-2 pl-4 mb-2">
                                                    {item.content && item.content.map((subItem) => (
                                                        <li key={subItem.id}
                                                            className='sx:text-base sm:text-lg cursor-pointer font-medium transition duration-500 ease-in-out hover:text-primaryColor'>
                                                            <Link href={subItem.link}>{subItem.text}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <button className="nav-btn flex justify-between items-center gap-8 w-fit bg-primaryColor sx:px-2 sm:px-4 sx:py-2 sm:py-4 transition ease-linear duration-500 delay-100 lg:flex">
                                    <p className='text-white font-medium sx:text-xs sm:text-base'>Get in Touch</p>
                                    <div className="nav-arrow transition ease-linear duration-500 delay-100 ">
                                        <Image src={'/assets/white-arrow.png'} width={10} height={10} />
                                    </div>
                                </button>
                            </div>
                        )}
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
