import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center gap-12 text-center bg-[#180030]"
        style={{
            backgroundImage: `url(${'/assets/white-bg.webp'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <div className="flex flex-col justify-center items-center gap-4 text-white px-14 py-32">
                <h1 className='text-8xl font-bold sx:text-5xl'>Let’s build something different</h1>
                <p className='text-lg font-medium'>
                    Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, 
                    and unparalleled support.
                </p>
                <button className="nav-btn flex justify-between items-center gap-8 bg-primaryColor px-5 py-4 w-fit transition ease-linear duration-500 delay-100">
                    <p className='text-white font-medium'>Get in Touch</p>
                    <div className="nav-arrow transition ease-linear duration-500 delay-100">
                        <Image src={'/assets/white-arrow.png'} width={10} height={10} />
                    </div>
                </button>
            </div>
            <div className="flex items-end overflow-hidden py-4">
                <div className="-rotate-6 overflow-hidden rounded-t-2xl">
                    <Image 
                    src={'/assets/contact1.webp'}
                    width={500}
                    height={300}
                    className="w-full" />
                </div>
                <div className="rotate-3 overflow-hidden rounded-t-2xl">
                    <Image 
                    src={'/assets/contact2.webp'}
                    width={500}
                    height={300}
                    className="w-full" />
                </div>
                <div className="-rotate-6 overflow-hidden rounded-t-2xl">
                    <Image 
                    src={'/assets/contact3.webp'}
                    width={500}
                    height={300}
                    className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
