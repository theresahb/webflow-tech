import React from 'react'
import { footerLinks } from '../../data/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col gap-24 pt-32 pb-12 bg-[rgb(24,0,48)] sx:px-4 sm:px-14">
            <div className="flex flex-col justify-center items-center gap-20 text-white lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center items-center text-center gap-4 lg:justify-start lg:text-start">
                    <div className="">
                        <Image src={'/assets/logo-white.svg'} width={120} height={60} />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <p className='text-lg font-medium'>4517 Washington Ave. <br/>Manchester, Kentucky 39495</p>
                        <p><a href="mailto:tech@example.com">tech@example.com</a></p>
                        <div className="flex items-center gap-4">
                            <button type='submit' className="flex justify-center items-center outline-none">
                                <a href='facebook.com'><Image src={'/assets/facebook.svg'} width={20} height={20} className='white' /></a>
                            </button>
                            <button type='submit' className="flex justify-center items-center outline-none">
                                <a href='instagram.com'><Image src={'/assets/instagram.svg'} width={20} height={20} className='white' /></a>
                            </button>
                            <button type='submit' className="flex justify-center items-center outline-none">
                                <a href='x.com'><Image src={'/assets/brand-x.svg'} width={20} height={20} className='white' /></a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-32 sx:gap-12 sx:flex-col sm:flex-row">
                    {footerLinks.map((item) => (
                        <div key={item.id} className='flex flex-col gap-4 text-center'>
                            <p className='text-2xl font-semibold'>{item.text}</p>
                            {item.link.map((list) => (
                                <ul key={list.id} className='flex flex-col gap-2'>
                                    <li className='transition ease-linear duration-400 delay-200 hover:text-primaryColor'><a href={list.link}>{list.text}</a></li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 text-white font-medium border-t border-[#ffffff36] pt-8 sx:text-center sx:text-sm lg:gap-0 lg:flex-row lg:justify-between">
                <p>©Tech. All Rights Reserved 2023. Licensing</p>
                <p>Webflow Templatesby 128.digital. Powered by Webflow</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
