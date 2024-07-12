"use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id:1,
        name: 'Tyler durden',
        designation: "Fight Club founder",
        image:'/1.jpeg'
    },
    {
        id:2,
        name: 'Walter White',
        designation: "Meth Teacher",
        image:'/Walter_White_2010.webp'
    },
    {
        id:3,
        name: 'Kabir Singh',
        designation: "Surgeon",
        image:'/kws.webp'
    },
    {
        id:4,
        name: 'Gus Fring',
        designation: "restaurant entrepreneur",
        image:'/Gus.webp'
    }
]

function Instructors() {
  return (
    <div className='relative h-[50rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl mt-10 md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet your friendly Developer</h2>
        <p className='text-base md:text-lg text-white text-center mb-2'>Discover the talented developers who will guide your programming journey</p>
        <div className='flex flex-row items-center justify-center mt-10 w-full'>
            <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors
