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

  const carouselItemsRepoSynth = [
    { category: "", title: "", src: "/reposynth.png" },
    { category: "", title: "", src: "/reposynth2.png" },
    { category: "", title: "", src: "/reposynth3.png" },
  ];

  const carouselItemsSuga = [
    { category: "", title: "", src: "/suga1.png" },
    { category: "", title: "", src: "/suga2.png" },
    { category: "", title: "", src: "/suga3.png" },
  ];

  const carouselItemsJB = [
    { category: "", title: "", src: "/jb1.png" },
    { category: "", title: "", src: "/jb3.png" },
  ];

  const carouselItemsPermitPro = [
    { category: "", title: "", src: "/pp.jpg" },
    { category: "", title: "", src: "/pp1.png" },
    { category: "", title: "", src: "/pp2.png" },
    { category: "", title: "", src: "/pp3.png" },
    { category: "", title: "", src: "/pp4.png" },
    { category: "", title: "", src: "/pp5.jpg" },
  ];

  const TheDesignersTouchTechStack = ["React", "Node.js", "Three.js", "Express", "Firebase", "AWS"];
  const EmokiTechStack = ["React Native", "Node.js", "SQLite", "Express", "Flask", "Firebase", "MongoDB"];
  const CalorieTrackerTechStack = ["React Native", "Node.js", "SQLite"];
  const InfolayaTechStack = ["Next.js", "Node.js", "FastAPI", "MongoDB", "Firebase"];
  const BaagchalTechStack = ["Next.js", "Node.js", "Socket.io", "MongoDB", "Azure"];
  const GTNTechStack = ["Next.js", "Node.js", "MongoDB"];
  const PonPonTechStack = ["React", "TypeScript", "Tauri", "Node.js"];
  const SpeedReaderTrainerTechStack = ["Next.js", "Node.js"];
  const RepoSynthTechStack = ["Python", "Rust", "TypeScript", "SentenceTransformers", "FAISS"];
  const SugaTechStack = ["FastAPI", "Next.js", "Supabase", "Electron"];
  const JBConstructionTechStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity", "D3.js"];
  const PermitProTechStack = ["React Native", "Expo", "TypeScript", "Django"];

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
              <div className="mt-4 space-y-3">
                <a href="https://www.linkedin.com/in/janitrajkarnikar/" className="flex items-center justify-center text-gray-300 hover:text-white transition-colors group">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <a href="https://github.com/aniJani" className="flex items-center justify-center text-gray-300 hover:text-white transition-colors group">
                  <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Github
                </a>
                <a href="mailto:rajkarnikarjanit22@gmail.com" className="flex items-center justify-center text-gray-300 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
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

        {/* Publications Section */}
        <section id="publications-section" className="w-full max-w-5xl mt-20">
          <h2 className="text-4xl font-bold text-white text-left mb-8">Publications:</h2>

          <div className="space-y-6">
            {/* First Author Paper */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <div className="text-white">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">First Author</p>
                <p className="text-lg mb-2">
                  <span className="font-semibold text-white">Janit Rajkarnikar</span><span className="text-gray-300">, N. Poudel, and N. Rahimi</span>
                </p>
                <p className="text-xl font-medium mb-3 text-blue-400 leading-relaxed">
                  Unsupervised Anomaly Detection in OpenStack Logs via Fine-Tuned RoBERTa Embeddings
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="italic">Journal of Cybersecurity, Digital Forensics and Jurisprudence, vol. 1, pp. 9–21, 2025</span>
                </p>
                <p className="text-gray-400 text-sm">
                  <a href="https://www.cdfjjournal.com/index.php/cdfj/article/view/3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">View Paper</a>
                </p>
              </div>
            </div>

            {/* Co-Author Paper */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <div className="text-white">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Co-Author</p>
                <p className="text-lg mb-2">
                  <span className="text-gray-300">Divine Precious-Esue, </span><span className="font-semibold text-white">Janit Rajkarnikar</span><span className="text-gray-300">, Brian Bellrose, et al.</span>
                </p>
                <p className="text-xl font-medium mb-3 text-blue-400 leading-relaxed">
                  Ensemble Machine Learning Approach to Phishing Website Detection
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="italic">Computers and Their Applications (CATA), Springer CCIS, 2025</span>
                </p>
                <p className="text-gray-400 text-sm">
                  DOI: <a href="https://doi.org/10.1007/978-3-031-92178-0_8" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">10.1007/978-3-031-92178-0_8</a>
                  <span className="mx-2">·</span>
                  <a href="https://doi.org/10.1007/978-3-031-92178-0_8" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">View Paper</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects-section" className="w-full max-w-5xl mt-16">
          <div className="flex items-start mb-12">
            <h2 className="text-4xl font-bold text-white text-left mr-8">Projects:</h2>
            <div className="text-gray-400 text-sm grid grid-cols-2 gap-x-8 gap-y-2">
              <a href="#suga" className="hover:underline transition-all duration-300 ease-in-out">1. Suga</a>
              <a href="#baagchal" className="hover:underline transition-all duration-300 ease-in-out">7. Baagchal</a>
              <a href="#reposynth" className="hover:underline transition-all duration-300 ease-in-out">2. RepoSynth</a>
              <a href="#gtn" className="hover:underline transition-all duration-300 ease-in-out">8. Guess The Nepali</a>
              <a href="#jb-construction" className="hover:underline transition-all duration-300 ease-in-out">3. Jackson Brothers Construction</a>
              <a href="#ponpon" className="hover:underline transition-all duration-300 ease-in-out">9. PonPon</a>
              <a href="#permit-pro" className="hover:underline transition-all duration-300 ease-in-out">4. Permit Pro</a>
              <a href="#speed-reader-trainer" className="hover:underline transition-all duration-300 ease-in-out">10. Speed Reader Trainer</a>
              <a href="#designers-touch" className="hover:underline transition-all duration-300 ease-in-out">5. The Designer's Touch</a>
              <a href="#infolaya" className="hover:underline transition-all duration-300 ease-in-out">11. Infolaya</a>
              <a href="#emoki" className="hover:underline transition-all duration-300 ease-in-out">6. Emoki</a>
              <a href="#calorie-tracker" className="hover:underline transition-all duration-300 ease-in-out">12. Calorie Tracker</a>
            </div>
          </div>
          {/* Suga */}
          <div id="suga" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Suga</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {SugaTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A workflow automation companion that captures and replays user actions, converting observed interactions into reusable automated workflows. The website is live at <a href="https://suga.cx" className="text-blue-500 hover:text-blue-400 transition-colors">suga.cx</a>.</p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/9iAq3HovZnc"
                title="Suga Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* RepoSynth */}
          <div id="reposynth" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">RepoSynth</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {RepoSynthTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A repository understanding and retrieval platform that extracts semantic representations and structural signals (AST/dependency graphs) to support code search and analysis. Features a Rust Tree-sitter parsing daemon with multi-stage caching for efficient re-analysis. The website is live at <a href="https://reposynth.com" className="text-blue-500 hover:text-blue-400 transition-colors">reposynth.com</a>.</p>
            <Carousel items={carouselItemsRepoSynth.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>

          {/* Jackson Brothers Construction */}
          <div id="jb-construction" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Jackson Brothers Construction</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {JBConstructionTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A business website for a family-owned general contractor, featuring an interactive service area map, headless CMS integration, and lead generation forms. The website is live at <a href="https://www.welikeconstruction.com" className="text-blue-500 hover:text-blue-400 transition-colors">welikeconstruction.com</a>.</p>
            <Carousel items={carouselItemsJB.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>

          {/* Permit Pro */}
          <div id="permit-pro" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Permit Pro</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {PermitProTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A cross-platform mobile app for the construction industry that transforms building permit data into actionable leads, featuring interactive heat maps, analytics dashboards, and in-app subscriptions. Made in collaboration with a local business owner. The app is available on the <a href="https://apps.apple.com/us/app/the-permit-pro/id6751512655" className="text-blue-500 hover:text-blue-400 transition-colors">App Store</a> and <a href="https://play.google.com/store/apps/details?id=com.permit.PermitPro" className="text-blue-500 hover:text-blue-400 transition-colors">Google Play</a>.</p>
            <Carousel items={carouselItemsPermitPro.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>

          {/* The Designer's Touch */}
          <div id="designers-touch" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">The Designer's Touch</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {TheDesignersTouchTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A creative platform where users can design custom t-shirts and other merchandise, with a real-time 3D preview.</p>
            <Carousel items={carouselItems1.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>

          {/* Emoki */}
          <div id="emoki" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Emoki</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {EmokiTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">An emotion tracking app that aggregates users' emotions over time, helping them understand their emotional patterns.</p>
            <Carousel items={carouselItems2.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* Baagchal */}
          <div id="baagchal" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Baagchal</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {BaagchalTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A digital implementation of the traditional Nepali board game Baagchal, featuring multiplayer functionality and real-time gameplay. The website is currently live at <a href="https://www.baagchal.com/" className="text-blue-500 hover:text-blue-400 transition-colors">www.baagchal.com</a>.</p>
            <Carousel items={carouselItems4.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* Guess The Nepali */}
          <div id="gtn" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Guess The Nepali</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {GTNTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A fun and interactive game that challenges players to guess Nepali people's ethnicities. Made as a tribute to the cultural diversity in Nepal. The website is currently live at <a href="https://www.guessthenepali.com/" className="text-blue-500 hover:text-blue-400 transition-colors">www.guessthenepali.com</a>.</p>
            <Carousel items={carouselItems5.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* PonPon */}
          <div id="ponpon" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">PonPon</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {PonPonTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A small and cute pomodoro timer that occupies a small portion of your screen. The artifact for windows is available at <a href="https://github.com/aniJani/PonPon" className="text-blue-500 hover:text-blue-400 transition-colors">github.com/aniJani/PonPon</a>.</p>
            <Carousel items={carouselItems6.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* Speed reader trainer */}
          <div id="speed-reader-trainer" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Speed Reader Trainer</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {SpeedReaderTrainerTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A speed reading trainer that helps users improve their reading speed and comprehension. The website is live at <a href="https://speed-reader-trainer.vercel.app/" className="text-blue-500 hover:text-blue-400 transition-colors"> https://speed-reader-trainer.vercel.app/</a>.</p>
            <Carousel items={carouselItems7.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
          {/* Infolaya */}
          <div id="infolaya" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Infolaya</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {InfolayaTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A no code Data Processing and Visualization platform that transforms complex data into recommendations and insights allowing users with no technical expertise to easily analyze and visualize their data. The website is currently live at <a href="https://www.infolaya.tech/" className="text-blue-500 hover:text-blue-400 transition-colors">www.infolaya.tech</a>.</p>
            <Carousel items={carouselItems3.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>


          {/* Calorie Tracker */}
          <div id="calorie-tracker" className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-semibold text-white mb-2">Calorie Tracker</h3>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {CalorieTrackerTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-white border border-white opacity-70 text-sm font-medium py-1 px-2 rounded-full hover:opacity-100 transition-opacity"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">A mobile app with a very simple interface that helps users track their daily calorie intake.</p>
            <Carousel items={carouselItems.map((item, index) => (
              <Card key={index} card={item} index={index} layout={true} />
            ))} />
          </div>
        </section>

      </main>
    </>
  );
}
