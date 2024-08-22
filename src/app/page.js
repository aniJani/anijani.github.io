import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Navbar from "./components/navbar";
import { Card, Carousel } from "./components/ui/apple-cards-carousel"; // Import both Carousel and Card

export default function Home() {
  // Placeholder data for the carousel
  const carouselItems = [
    {
      category: "Project 1",
      title: "Amazing App",
      src: "/Headshot1.png",
      content: "This is a placeholder for Project 1 content."
    },
    {
      category: "Project 2",
      title: "Awesome Website",
      src: "/placeholder-image-2.jpg",
      content: "This is a placeholder for Project 2 content."
    },
    // Add more items as needed
  ];

  return (
    <main className="min-h-screen bg-black flex flex-col justify-center items-start p-14">
      <div className="flex flex-col md:flex-row justify-center items-start w-full">
        {/* Left Side: Navbar and Text */}
        <div className="flex-initial mr-10">
          <div className="ml-[-30px]">
            <Navbar />
          </div>
          <div className="mt-8 text-white max-w-xl">
            <h1 className="text-5xl font-bold">Hi, I'm Janit.</h1>
            <p className="mt-4 text-lg">
              I'm in my second year of undergrad, majoring in <span className="font-semibold text-white">Computer Science</span> with a minor in <span className="font-semibold text-white">Economic Data Analysis</span>.
              I am broadly interested in leveraging computational methods to develop tools and simulations that accelerate advancements in technology.
            </p>
            <p className="mt-4 text-lg">
              My background includes hands-on research experience in software engineering, data analysis, and machine learning.
              I'm passionate about creating innovative solutions to complex problems.
            </p>
          </div>
        </div>

        {/* Right Side: Image and Links */}
        <div className="flex-none ml-10 text-center mt-10 md:mt-0">
          <Image
            src="/Headshot1.png"
            alt="Descriptive alt text"
            width={290}
            height={230}
            className="object-contain rounded-lg shadow-lg"
          />
          <div className="mt-4 space-y-2">
            <a href="https://www.linkedin.com/in/janit-rajkarnikar-18b2782b1/" className="flex items-center justify-center text-gray-300 hover:text-white">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/aniJani" className="flex items-center justify-center text-gray-300 hover:text-white">
              <Github className="w-5 h-5 mr-2" />
              Github
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: Apple Cards Carousel */}
      <div className="w-full mt-10">
        <Carousel items={carouselItems.map((item, index) => (
          <Card key={index} card={item} index={index} layout={true} />
        ))} />
      </div>
    </main>
  );
}