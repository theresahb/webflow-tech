import React from 'react'

const Mail = () => {
    return (
        <section>
            <div className="">
                <form action="" method="get" className='flex flex-col gap-8 p-8 rounded-xl bg-secondaryColor'>
                    <h1 className="text-white font-bold sx:text-xl sm:text-3xl md:text-4xl">Start a project</h1>
                    <div className="flex items-center gap-6 sx:flex-col sm:flex-row">
                        <div className="border border-[#bba6cf48] rounded-xl px-4 py-5 w-full bg-[#ab8acc1e] font-medium">
                            <input type="email" name="" id="" placeholder='Email' className='bg-transparent w-full border-0 outline-none caret-white text-white placeholder:font-medium' />
                        </div>
                        <button type="submit" 
                            className='text-white bg-primaryColor font-medium sm:w-fit sx:w-full px-8 py-4 rounded-full transition ease-linear duration-500 delay-200 hover:text-white hover:bg-primaryColor'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Mail
