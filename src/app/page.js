import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Navbar from "./components/navbar";
import { Card, Carousel } from "./components/ui/apple-cards-carousel";

export default function Home() {
  const carouselItems = [
    {
      category: "",
      title: "",
      src: "/CalorieTracker (2).jpg"
    },
    {
      category: "",
      title: "",
      src: "/CalorieTracker (3).jpg"
    },
    {
      category: "",
      title: "",
      src: "/CalorieTracker (1).jpg"
    },
    {
      category: "",
      title: "",
      src: "/CalorieTracker (5).jpg"
    },
    {
      category: "",
      title: "",
      src: "/CalorieTracker (4).jpg"
    },
  ];

  const carouselItems1 = [
    {
      category: "",
      title: "",
      src: "/dt.png"
    },
    {
      category: "",
      title: "",
      src: "/dt2.png"
    },
    {
      category: "",
      title: "",
      src: "/dt3.png"
    },
    {
      category: "",
      title: "",
      src: "/dt4.png"
    },
    {
      category: "",
      title: "",
      src: "/dt6.png"
    },
    {
      category: "",
      title: "",
      src: "/dt7.png"
    },
    {
      category: "",
      title: "",
      src: "/dt8.png"
    },
  ];

  const carouselItems2 = [
    {
      category: "",
      title: "",
      src: "/Emoki (1).jpg"
    },
    {
      category: "",
      title: "",
      src: "/Emoki (2).jpg"
    },
    {
      category: "",
      title: "",
      src: "/Emoki (3).jpg"
    },
    {
      category: "",
      title: "",
      src: "/Emoki (4).jpg"
    },
    {
      category: "",
      title: "",
      src: "/Emoki (5).jpg"
    },
    {
      category: "",
      title: "",
      src: "/Emoki (6).jpg"
    },
  ];
  return (
    <main className="min-h-screen bg-black flex flex-col items-center p-4 w-full sm:p-14">
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-center">
        {/* Left Side: Navbar, Image, and Social Links */}
        <div className="w-full md:w-auto mb-10 md:mb-0 md:mr-10 text-center">
          <div className="flex justify-center mb-8 md:ml-[-30px]">
            <Navbar />
          </div>
          <div className="mt-8">
            <Image
              src="/Headshot1.png"
              alt="Descriptive alt text"
              width={290}
              height={230}
              className="mx-auto object-contain rounded-lg shadow-lg"
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

        {/* Right Side: Text Content */}
        <div className="w-full md:w-auto text-center md:text-left md:ml-10 md:mt-20">
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
      </div>

      {/* Bottom: Apple Cards Carousel */}
      <div className="max-w-5xl mt-10 flex justify-center w-full">
        <Carousel items={carouselItems.map((item, index) => (
          <Card key={index} card={item} index={index} layout={true} />
        ))} />
      </div>

      <div className="max-w-5xl mt-10 flex justify-center w-full">
        <Carousel items={carouselItems1.map((item, index) => (
          <Card key={index} card={item} index={index} layout={true} />
        ))} />
      </div>

      <div className="max-w-5xl mt-10 flex justify-center w-full">
        <Carousel items={carouselItems2.map((item, index) => (
          <Card key={index} card={item} index={index} layout={true} />
        ))} />
      </div>
    </main>
  );
}