import CourseTestimonials from "@/components/CourseTestimonials";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { IdeaStory } from "@/components/IdeaStory";
import Instructors from "@/components/Instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Course Project</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <CourseTestimonials />
      <UpcomingWebinars />
      <IdeaStory />
      <Instructors />
      <Footer />
    </main>
    
  )
}
