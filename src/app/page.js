import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex justify-center items-start p-14">
      {/* Left Side: Navbar and Text */}
      <div className="flex-initial mr-10">
        <div className="ml-[-30px]"> {/* Negative margin to move Navbar left */}
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
      <div className="flex-none ml-10 text-center">
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
    </main>
  );
}
