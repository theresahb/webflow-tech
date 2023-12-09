import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className='text-center'>
            <h1>Oooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href='/' className='text-[#4979ff] underline'>Homepage</Link></p>
        </div>
    )
}

export default NotFound
