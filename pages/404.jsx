import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    // const router = useRouter()
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 3000)
    // }, [])

    return (
        <div className='flex flex-col gap-4 justify-center items-center text-center h-screen bg-[#180030f3] text-white'>
            <h1 className='text-5xl font-semibold'>Oooops...</h1>
            <h2 className='text-3xl font-semibold'>That page cannot be found</h2>
            <p className='text-2xl font-semibold'>Go back to the <Link href='/' className='text-[#4979ff] underline'>Homepage</Link></p>
        </div>
    )
}

export default NotFound
