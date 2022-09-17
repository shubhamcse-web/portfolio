import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shubham's Portfolio</title>
      </Head>
      <h1 className='text-red-500'>Let's build awesome portfolio</h1>
    </div>
  )
}

export default Home
