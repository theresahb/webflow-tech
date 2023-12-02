import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <section>
        <div className="flex flex-col gap-12 px-4 py-32 md:px-8 lg:px-14">
            <div className="bg-[#8000ff21] px-4 py-2 w-fit rounded">
                <h3 className='text-primaryColor font-semibold'>Why we are better</h3>
            </div>
            <div className="flex flex-col gap-24 sx:gap-20 sm:gap-32">
                <div className="flex sx:flex-col sx:gap-8 sm:flex-col sm:gap-8 md:flex-row md:justify-between md:items-center">
                    <div className="flex flex-col gap-4 sx:w-full sx:justify-start sx:items-start sm:w-full sm:justify-start sm:items-start lg:w-[50%]">
                        <h1 className='text-secondaryColor font-bold sx:text-3xl sm:text-4xl md:text-5xl'>Experience excellence with our expert team</h1>
                        <p className="text-paragraphGray font-medium sx:text-sm sm:text-base lg:text-lg">
                            We take pride in our exceptional team of experts who bring a wealth of experience to every project. 
                            With years of industry knowledge and a passion for innovation, our team is dedicated to delivering 
                            top-notch solutions that exceed your expectations.
                        </p>
                    </div>
                    <div className="sx:w-[15rem] sx:my-0 sx:mx-auto sm:w-[18rem] sm:my-0 sm:mx-auto md:w-[30rem]"
                    style={{
                        backgroundImage: `url(${'/assets/about-logo-home.svg'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <Image 
                        src={'/assets/trophy.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                </div>
                <div className="flex sx:flex-col-reverse sx:gap-8 sm:flex-col-reverse sm:gap-8 md:flex-row md:justify-between md:items-center">
                    <div className="sx:w-[15rem] sx:my-0 sx:mx-auto sm:w-[18rem] sm:my-0 sm:mx-auto md:w-[30rem]"
                    style={{
                        backgroundImage: `url(${'/assets/about-logo-home.svg'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <Image 
                        src={'/assets/settings.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                    <div className="flex flex-col gap-4 w-[50%] sx:w-full sx:justify-start sx:items-start sm:w-full sm:justify-start sm:items-start lg:w-[50%]">
                        <h1 className='text-5xl text-secondaryColor font-bold sx:text-3xl sm:text-4xl md:text-5xl'>Customized solutions for your unique needs</h1>
                        <p className="text-paragraphGray font-medium sx:text-sm sm:text-base lg:text-lg">
                            One size does not fit all, and we understand that your needs are unique. That's why we offer fully customized 
                            solutions tailored to your specific requirements. From the initial consultation to the final implementation, 
                            we collaborate closely with you to ensure the perfect fit for your goals.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center sx:flex-col sx:gap-8 sm:flex-col sm:gap-8 md:flex-row md:justify-between md:items-center">
                    <div className="flex flex-col gap-4 sx:w-full sx:justify-start sx:items-start sm:w-full sm:justify-start sm:items-start lg:w-[50%]">
                        <h1 className='text-secondaryColor font-bold sx:text-3xl sm:text-4xl md:text-5xl'>Transparent communication and collaboration</h1>
                        <p className="text-paragraphGray font-medium sx:text-sm sm:text-base lg:text-lg">
                            We take pride in our exceptional team of experts who bring a wealth of experience to every project. 
                            With years of industry knowledge and a passion for innovation, our team is dedicated to delivering top-notch 
                            solutions that exceed your expectations.
                        </p>
                    </div>
                    <div className="sx:w-[15rem] sx:my-0 sx:mx-auto sm:w-[18rem] sm:my-0 sm:mx-auto md:w-[30rem]"
                    style={{
                        backgroundImage: `url(${'/assets/about-logo-home.svg'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <Image 
                        src={'/assets/bubble.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                </div>
                <div className="flex justify-between items-center sx:flex-col sx:gap-8 sm:flex-col sm:gap-8">
                    <div className="sx:w-[30rem] sm:w-[40rem] md:w-[30rem]">
                        <Image 
                        src={'/assets/author.webp'}
                        width={500}
                        height={300}
                        className="w-full" />
                    </div>
                    <div className="flex flex-col gap-4 sx:w-full sx:justify-start sx:items-start sm:w-full sm:justify-start sm:items-start lg:w-[50%]">
                        <p className="text-primaryColor font-medium">When you choose Tech, you're choosing</p>
                        <h1 className='text-secondaryColor font-bold sx:text-3xl sm:text-4xl md:text-6xl'>Excellence, customization,  transparency.</h1>
                        <p className="text-paragraphGray font-medium sx:text-sm sm:text-base lg:text-lg">
                            Our dedicated team of experts will transform your ideas into cutting-edge digital realities, uniquely 
                            crafted to suit your needs. With us as your partner, you can rest assured that your vision will be 
                            brought to life with precision and care. Experience the difference of working with Tech today.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
