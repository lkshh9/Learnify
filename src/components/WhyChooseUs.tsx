"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Unique Integration of YouTube Playlists",
      description:
        "Our platform stands out by seamlessly converting your YouTube playlists into structured, ad-free courses. Enjoy a focused learning experience without the distractions of YouTube’s ads and suggestions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Unique Integration
        </div>
      ),
    },
    {
      title: " Personalized Learning Paths",
      description:
        "Our platform allows for personalized learning journeys. Users can easily track their progress, manage their courses, and tailor their learning experience to meet their specific needs and goals.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/courcategory.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "User-Friendly and Intuitive Interface",
      description:
        "We prioritize ease of use with a clean, intuitive interface. Whether you’re an admin or a learner, navigating through the platform is simple and straightforward, making your educational journey smooth and enjoyable.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Intuitive Interface
        </div>
      ),
    },
    {
      title: "Detailed Progress Tracking and Analytics",
      description:
        "Stay on top of your learning with detailed analytics. Our platform provides insights into your course completion rates, time spent on lessons, and identifies areas where you can improve.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Progress Tracking
        </div>
      ),
    }
    // {
    //   title: "Comprehensive Learning Management System",
    //   description:
    //     "We offer a robust LMS that allows admins to create, upload, and manage courses. Users can easily browse, enroll, and track their progress across a wide range of courses.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
    //       Robust LMS
    //     </div>
    //   ),
    // }
    // {
    //   title: "Flexible Course Customization",
    //   description:
    //     "Admins can create customized courses by combining YouTube content with other educational materials. This flexibility allows for a comprehensive and tailored learning experience for users.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    //       Course Customization
    //     </div>
    //   ),
    // },
    // {
    //   title: "Community and Collaboration",
    //   description:
    //     "Join a thriving community of learners and educators. Share playlists, collaborate on courses, and participate in discussions to enhance your learning experience and network with like-minded individuals.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
    //       Community
    //     </div>
    //   ),
    // },
    // {
    //   title: "Commitment to Continuous Improvement",
    //   description:
    //     "SWe are dedicated to continuously improving our platform based on user feedback. Our commitment to innovation ensures that you always have access to the best tools and features for your learning needs.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    //       Continuous Improvement
    //     </div>
    //   ),
    // }
  ];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
