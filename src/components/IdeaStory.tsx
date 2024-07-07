"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { Roboto } from "next/font/google";

import localFont from "next/font/local";


const myFont = localFont({
  src: '/fonts/CalSans-SemiBold.woff2'
});

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400'],
// });

export function IdeaStory() {
  return (
    <div>
      <div className="text-center mt-10">
        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'> SNEAK PEAK</h2>
        <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'> Our Story and Vision</h2>
      </div>
      <div className="mt-10">
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <p className={twMerge(myFont.className, "text-xl mb-4")}>
                  {item.title}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title: "Why We Built This Feature",
    description: (
      <>
        <p>
          At Course LMS, we&apos;re dedicated to providing an unparalleled learning experience.
          Our latest feature—transforming YouTube playlists into structured, ad-free courses was born out of a simple yet powerful idea
          <br />
          My idea is to develop a website where users will put their YouTube course playlist as a link and then that playlist 
          will be added as a course to the user account, with no ads like a course platform for a YouTube playlist.
          In short, it takes your YouTube playlists and converts them into organized courses. 
          This ensures a focused and uninterrupted learning environment, making it easier to track your progress and manage your courses. 
          Users are no longer distracted by YouTube suggestions and can watch YouTube lectures for free without ads on our platform.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
      </>
    ),
    badge: "Idea",
    image:
      "/gaudmire.png",
  },
  {
    title: "How It All Started",
    description: (
      <>
        <p>
          This idea emerged while working on our Course LMS platform, where admins can create courses, and users can view and browse all available courses. 
          We envisioned an additional feature where users can add a YouTube playlist as a course, simplifying the learning process and keeping everything organized.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Beginning",
    image:
      "/tb2.webp",
  },
  {
    title: "Why It Matters",
    description: (
      <>
        <p>
          We believe in structured learning. While some might use adblockers, we know there&apos;s value in presenting content in an organized way. 
          Inspired by tools that allow users to import their YouTube music playlists to Spotify, we thought, &quot;Why not do the same for educational content?&quot;
          This feature might not be for everyone, but for those who value a distraction-free, well-organized learning experience, it can be incredibly beneficial.
        </p>
      </>
    ),
    badge: "Forward",
    image:
      "/tb1.webp",
  },
];
