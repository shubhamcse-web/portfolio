import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
// import { motion } from 'framer-motion'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi my name is Shubham Mishra",
      "who love react.js",
      "<ButLoveToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000.
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full mx-auto h-[54px] w-[54px] object-cover' src="https://lh3.googleusercontent.com/-bzQ5yp2MwuA/AAAAAAAAAAI/AAAAAAAAAAA/ACD5Jx6fwWs73AXzhbxIi1WClnTdeAXMDg/photo.jpg?sz=46" alt="hello" />
      <h1>
      <span>{text}</span>
      </h1>
    </div>
  )
}