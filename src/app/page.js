"use client"
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import Navbar from "./components/navbar";
import { Card, Carousel } from "./components/ui/apple-cards-carousel";

export default function Home() {
  const carouselItems = [
    { category: "", title: "", src: "/CalorieTracker (2).jpg" },
    { category: "", title: "", src: "/CalorieTracker (3).jpg" },
    { category: "", title: "", src: "/CalorieTracker (1).jpg" },
    { category: "", title: "", src: "/CalorieTracker (5).jpg" },
    { category: "", title: "", src: "/CalorieTracker (4).jpg" },
  ];

  const carouselItems1 = [
    { category: "", title: "", src: "/dt.png" },
    { category: "", title: "", src: "/dt2.png" },
    { category: "", title: "", src: "/dt3.png" },
    { category: "", title: "", src: "/dt4.png" },
    { category: "", title: "", src: "/dt6.png" },
    { category: "", title: "", src: "/dt7.png" },
    { category: "", title: "", src: "/dt8.png" },
  ];

  const carouselItems2 = [
    { category: "", title: "", src: "/Emoki (1).jpg" },
    { category: "", title: "", src: "/Emoki (2).jpg" },
    { category: "", title: "", src: "/Emoki (3).jpg" },
    { category: "", title: "", src: "/Emoki (4).jpg" },
    { category: "", title: "", src: "/Emoki (5).jpg" },
    { category: "", title: "", src: "/Emoki (6).jpg" },
  ];

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      <style jsx global>{`
      .smooth-scroll {
        scroll-behavior: smooth;
      }
    `}</style>
      <main className="min-h-screen bg-black flex flex-col items-center p-4 w-full sm:p-14 smooth-scroll">
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-center">
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

          <div className="w-full md:w-auto text-center md:text-left md:ml-10 md:mt-20">
            <div className="mt-8 text-white max-w-xl">
              <h1 className="text-5xl font-bold">Hi, I'm Janit.</h1>
              <p className="mt-4 text-lg">
                I'm in my second year of undergrad, majoring in <span className="font-semibold text-white">Computer Science</span> with a minor in <span className="font-semibold text-white">Economic Data Analysis</span>.
                I have hands-on experience with Machine Learning techniques and enjoy working on applicaitons that leverage data-driven insights to solve real-world problems.
              </p>
              <p className="mt-4 text-lg">
                I'm also interested in research, particularly in cybersecurity, where I'm delving into key challenges and contributing to the development of practical solutions.
              </p>
            </div>
          </div>
        </div>

        <section id="projects-section" className="w-full max-w-5xl mt-20">
          <div className="flex items-start mb-12">
            <h2 className="text-4xl font-bold text-white text-left mr-8">Projects</h2>
            <div className="text-gray-400 text-sm">
              <ul className="space-y-2">
                <li>
                  <a href="#calorie-tracker" className="hover:underline transition-all duration-300 ease-in-out">1. Calorie Tracker</a>
                </li>
                <li>
                  <a href="#designers-touch" className="hover:underline transition-all duration-300 ease-in-out">2. The Designer's Touch</a>
                </li>
                <li>
                  <a href="#emoki" className="hover:underline transition-all duration-300 ease-in-out">3. Emoki</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Calorie Tracker */}
          <div id="calorie-tracker" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Calorie Tracker</h3>
            <p className="text-gray-300 mb-2">A mobile app with a very simple interface that helps users track their daily calorie intake.</p>
            <Carousel items={carouselItems.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>

          {/* The Designer's Touch */}
          <div id="designers-touch" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">The Designer's Touch</h3>
            <p className="text-gray-300">A creative platform where users can design custom t-shirts and other merchandise, with a real-time 3D preview.</p>
            <Carousel items={carouselItems1.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>

          {/* Emoki */}
          <div id="emoki" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Emoki</h3>
            <p className="text-gray-300 mb-2">An emotion tracking app that aggregates users' emotions over time, helping them understand their emotional patterns.</p>
            <Carousel items={carouselItems2.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
        </section>
      </main>
    </>
  );
}