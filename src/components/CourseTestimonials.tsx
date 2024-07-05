"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const courseTestimonials = [
  {
    quote:'CourseTube has revolutionized the way I learn. Turning YouTube playlists into structured courses without ads is a game-changer. I can focus on my studies without distractions and track my progress effortlessly.',
    name: 'Sarah J',
    title: 'Student'
  },
  {
    quote:'As an educator, CourseTube has been an invaluable tool. I can easily create and manage courses, and my students love the ad-free YouTube integration. It’s made our online classes much more engaging and organized.',
    name: 'Mark T.',
    title: 'Educator'
  },
  {
    quote:'Balancing work and learning can be tough, but CourseTube makes it so much easier. I can turn my favorite YouTube tutorials into courses that fit my schedule. The progress tracking features help me stay on top of my learning goals.',
    name: 'Emily R.',
    title: 'Professional'
  },
  {
    quote:'The flexibility and ease of use of CourseTube are unmatched. I can upload custom course content and integrate YouTube playlists seamlessly. It’s perfect for creating a comprehensive learning environment for our users.',
    name: 'James L.',
    title: 'Admin'
  },
]


function CourseTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Heary our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={courseTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
      </div>
    </div>
  )
}

export default CourseTestimonials
