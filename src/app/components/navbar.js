"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const router = useRouter();

    const scrollToProjects = (e) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="flex justify-start items-start bg-black">
            <div className="flex flex-row gap-1 bg-black">
                <Link
                    href="#publications-section"
                    className="text-white/80 font-medium text-sm uppercase tracking-wider cursor-pointer px-4 py-2 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                    Publications
                </Link>
                <button
                    onClick={scrollToProjects}
                    className="text-white/80 font-medium text-sm uppercase tracking-wider cursor-pointer px-4 py-2 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                    Projects
                </button>
                <Link
                    href="/Janit-Rajkarnikar.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 font-medium text-sm uppercase tracking-wider cursor-pointer px-4 py-2 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                    CV
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;