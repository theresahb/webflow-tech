import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/Home/Home'
import MetaHead from '../shared/MetaHead/MetaHead'

export default function Home() {
  return (
    <div className=''>
      <MetaHead title='Home' />
      <HomePage />
    </div>
  )
}
