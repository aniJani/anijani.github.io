"use client";
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

    const navigateToResume = () => {
        router.push('../../CV');
    };

    return (
        <div className="flex justify-start items-start bg-black">
            <div className="flex flex-row border-2 border-white p-4 bg-black">
                <div
                    onClick={scrollToProjects}
                    className="text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2"
                >
                    Projects
                </div>
                <div onClick={navigateToResume}
                    className="text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2">CV</div>
            </div>
        </div>
    );
};

export default Navbar;