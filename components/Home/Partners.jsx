import React from 'react'
import Image from 'next/image'
import { companies } from '../../data/data'

const Partners = () => {

    return (
        <section>
            <div className="flex flex-col justify-center items-center gap-8 bg-gray-100 px-24 py-16 overflow-hidden">
                <div className="flex gap-8 items-center overflow-hidden ">
                    {companies.map((item, index) => (
                        <div key={item.id} className="partners w-[10rem]">
                            <Image 
                            src={item.image}
                            width={'20rem'}
                            height={'100%'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partners
