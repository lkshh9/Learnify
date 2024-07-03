"use client"
import React from 'react'
import Link from 'next/link'
import featuresData from "@/data/featuresData.json"
import { BackgroundGradient } from './ui/background-gradient'

interface Feature{
    id: number,
    title: string,
    description: string,
    isVisible: boolean,
}

function FeaturedCourses() {
    const keyFeatures = featuresData.features.filter((feature: Feature) => feature.isVisible)

  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                    KEY FEATURES
                </h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Organize your Learning</p>
            </div>
        </div>
        <div className=' mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {keyFeatures.map((feature: Feature) => (
                <div key={feature.id} className="flex justify-center">
                    <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                        <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                            <p className='text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200'>
                                {feature.title}
                            </p>
                            <p className='text-sm text-neutral-600 mt-4 dark:text-neutral-400 flex-grow'>
                                {feature.description}
                            </p>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                View All Courses
            </Link>
        </div>
      
    </div>
  )
}

export default FeaturedCourses
