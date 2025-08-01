/* eslint-disable react/no-unescaped-entities */

"use client"
import { Github, Linkedin, Mail } from 'lucide-react';
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

  const carouselItems3 = [
    { category: "", title: "", src: "/infolaya1.png" },
    { category: "", title: "", src: "/infolaya2.png" },
    { category: "", title: "", src: "/infolaya3.png" },
  ];

  const carouselItems4 = [
    { category: "", title: "", src: "/baagchal1.png" },
    { category: "", title: "", src: "/baagchal2.png" },
    { category: "", title: "", src: "/baagchal3.png" },
    { category: "", title: "", src: "/baagchal4.png" },
  ];

  const carouselItems5 = [
    { category: "", title: "", src: "/gtn1.png" },
    { category: "", title: "", src: "/gtn2.png" },
    { category: "", title: "", src: "/gtn3.png" },
    { category: "", title: "", src: "/gtn4.png" },
  ];

  const carouselItems6 = [
    { category: "", title: "", src: "/ponpon1.png" },
    { category: "", title: "", src: "/ponpon2.png" },
    { category: "", title: "", src: "/ponpon3.png" },
    { category: "", title: "", src: "/ponpon4.png" },
  ];

  const carouselItems7 = [
    { category: "", title: "", src: "/spr1.png" },
    { category: "", title: "", src: "/spr2.png" },
    { category: "", title: "", src: "/spr3.png" },
    { category: "", title: "", src: "/spr4.png" },
    { category: "", title: "", src: "/spr5.png" },
  ];

  const TheDesignersTouchTechStack = ["React", "Node.js", "Three.js", "Express", "Firebase", "AWS"];
  const EmokiTechStack = ["React Native", "Node.js", "SQLite", "Express", "Flask", "Firebase", "MongoDB"];
  const CalorieTrackerTechStack = ["React Native", "Node.js", "SQLite"];
  const InfolayaTechStack = ["Next.js", "Node.js", "FastAPI", "MongoDB", "Firebase"];
  const BaagchalTechStack = ["Next.js", "Node.js", "Socket.io", "MongoDB", "Azure"];
  const GTNTechStack = ["Next.js", "Node.js", "MongoDB"];
  const PonPonTechStack = ["React", "TypeScript", "Tauri", "Node.js"];
  const SpeedReaderTrainerTechStack = ["Next.js", "Node.js"];

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
                width={320}
                height={260}
                className="mx-auto object-contain rounded-lg shadow-lg sm:w-80 sm:h-64 w-64 h-52"
              />
              <div className="mt-4 space-y-2">
                <a href="https://www.linkedin.com/in/janitrajkarnikar/" className="flex items-center justify-center text-gray-300 hover:text-white">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a href="https://github.com/aniJani" className="flex items-center justify-center text-gray-300 hover:text-white">
                  <Github className="w-5 h-5 mr-2" />
                  Github
                </a>
                <a href="mailto:rajkarnikarjanit22@gmail.com" className="flex items-center justify-center text-gray-300 hover:text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Mail
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto text-center md:text-left md:ml-10 md:mt-20">
            <div className="mt-0 sm:mt-8 text-white max-w-xl">
              <h1 className="text-2xl sm:text-5xl font-bold">Hi, I'm Janit.</h1>
              <p className="mt-1 sm:mt-4 text-lg">
                I'm in my third year of undergrad, majoring in <span className="font-semibold text-white">Computer Science</span> with minors in <span className="font-semibold text-white">Economic Data Analysis</span> and <span className="font-semibold text-white">Mathematics</span>.
                I have hands-on experience with Machine Learning techniques and enjoy working on applications that leverage data-driven insights to solve real-world problems.
              </p>
              <p className="mt-1 sm:mt-4 text-lg">
                I'm also interested in research, particularly in cybersecurity, where I'm delving into key challenges and contributing to the development of practical solutions.
              </p>
            </div>
          </div>
        </div>

        <section id="projects-section" className="w-full max-w-5xl mt-20">
          <div className="flex items-start mb-12">
            <h2 className="text-4xl font-bold text-white text-left mr-8">Projects:</h2>
            <div className="text-gray-400 text-sm">
              <ul className="space-y-2">
                <li>
                  <a href="#designers-touch" className="hover:underline transition-all duration-300 ease-in-out">1. The Designer's Touch</a>
                </li>
                <li>
                  <a href="#emoki" className="hover:underline transition-all duration-300 ease-in-out">2. Emoki</a>
                </li>
                <li>
                  <a href="#baagchal" className="hover:underline transition-all duration-300 ease-in-out">3. Baagchal</a>
                </li>
                <li>
                  <a href="#gtn" className="hover:underline transition-all duration-300 ease-in-out">4. Guess The Nepali</a>
                </li>
                <li>
                  <a href="#ponpon" className="hover:underline transition-all duration-300 ease-in-out">5. PonPon</a>
                </li>
                <li>
                  <a href="#speed-reader-trainer" className="hover:underline transition-all duration-300 ease-in-out">6. Speed Reader Trainer</a>
                </li>
                <li>
                  <a href="#infolaya" className="hover:underline transition-all duration-300 ease-in-out">7. Infolaya</a>
                </li>
                <li>
                  <a href="#calorie-tracker" className="hover:underline transition-all duration-300 ease-in-out">8. Calorie Tracker</a>
                </li>
              </ul>
            </div>
          </div>
          {/* The Designer's Touch */}
          <div id="designers-touch" className="mb-2 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">The Designer's Touch</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {TheDesignersTouchTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300">A creative platform where users can design custom t-shirts and other merchandise, with a real-time 3D preview. </p>
            <Carousel items={carouselItems1.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>

          {/* Emoki */}
          <div id="emoki" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Emoki</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {EmokiTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-2">An emotion tracking app that aggregates users' emotions over time, helping them understand their emotional patterns.</p>
            <Carousel items={carouselItems2.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* Baagchal */}
          <div id="baagchal" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Baagchal</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {BaagchalTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-2">A digital implementation of the traditional Nepali board game Baagchal, featuring multiplayer functionality and real-time gameplay. The website is currently live at <a href="https://www.baagchal.com/" className="text-blue-500 hover:underline"> www.baagchal.com</a>.</p>
            <Carousel items={carouselItems4.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* Guess The Nepali */}
          <div id="gtn" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Guess The Nepali</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {GTNTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-2">A fun and interactive game that challenges players to guess Nepali people's ethnicities. Made as a tribute to the cultural diversity in Nepal. The website is currently live at <a href="https://www.guessthenepali.com/" className="text-blue-500 hover:underline"> www.guessthenepali.com</a>.</p>
            <Carousel items={carouselItems5.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* PonPon */}
          <div id="ponpon" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">PonPon</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {PonPonTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-2">A small and cute pomodoro timer that occupies a small portion of your screen. The code is available at <a href="https://github.com/aniJani/PonPon" className="text-blue-500 hover:underline"> https://github.com/aniJani/PonPon</a>.</p>
            <Carousel items={carouselItems6.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* Speed reader trainer */}
          <div id="speed-reader-trainer" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Speed Reader Trainer</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {SpeedReaderTrainerTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
              <p className="text-gray-300 mb-2">A speed reading trainer that helps users improve their reading speed and comprehension. The website is live at <a href="https://speed-reader-trainer.vercel.app/" className="text-blue-500 hover:underline"> https://speed-reader-trainer.vercel.app/</a>.</p>
              <Carousel items={carouselItems7.map((item, index) => (
                <Card key={index} card={item} index={index} layout={true} />
              ))} />
            </div>

          </div>
          {/* Infolaya */}
          <div id="infolaya" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Infolaya</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {InfolayaTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-2">A no code Data Processing and Visualization platform that transforms complex data into recommendations and insights allowing users with no technical expertise to easily analyze and visualize their data. The website is currently live at <a href="https://www.infolaya.tech/" className="text-blue-500 hover:underline"> www.infolaya.tech</a>.</p>
            <Carousel items={carouselItems3.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>


          {/* Calorie Tracker */}
          <div id="calorie-tracker" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Calorie Tracker</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {CalorieTrackerTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-2">A mobile app with a very simple interface that helps users track their daily calorie intake.</p>
            <Carousel items={carouselItems.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
        </section>
      </main>
    </>
  );
}
