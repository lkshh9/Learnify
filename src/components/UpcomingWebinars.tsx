"use client"
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const extra = [
    {
      title:'Interactive Quizzes and Assessments',
      description:'Enhance your learning with interactive quizzes and assessments embedded within each course. Test your knowledge and track your improvement over time.',
      isAppear: true
    },
    {
      title:'Certificate of Completion',
      description:'Receive a certificate of completion for each course you finish. Showcase your achievements and add value to your professional profile.',
      isAppear: true
    },
    {
      title:'Offline Access',
      description:'Download courses and playlists to access them offline. Learn on-the-go without the need for an internet connection.',
      isAppear: true
    },
    {
      title:'AI-Powered Recommendations',
      description:'Get personalized course and playlist recommendations powered by AI. Discover new content that matches your interests and learning goals.',
      isAppear: true
    },
    {
      title:'AI-Powered Recommendations',
      description:'Get personalized course and playlist recommendations powered by AI. Discover new content that matches your interests and learning goals.',
      isAppear: true
    },
    {
      title:'AI-Powered Recommendations',
      description:'Get personalized course and playlist recommendations powered by AI. Discover new content that matches your interests and learning goals.',
      isAppear: true
    }
  ]


  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'> SOMETHING MORE ... </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Learning Journey</p>
        </div>
        <div className='mt-10'>
        <HoverEffect items={extra.map(extra => (
          {
            title: extra.title,
            description: extra.description,
            link: '/'
          }
        ))} />
        </div>
        {/* <div className='mt-10 text-center'></div> */}
      </div>
    </div>
  )
}

export default UpcomingWebinars


