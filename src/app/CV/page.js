"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const CV = () => {
    const router = useRouter();

    const navigateToHome = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <style jsx global>{`
                .smooth-scroll {
                    scroll-behavior: smooth;
                }
                body, html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }
            `}</style>
            <div className="w-full p-4 sm:p-8 md:p-14">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center sm:justify-start mb-8">
                        <div className="flex justify-start items-start bg-black">
                            <div className="flex flex-row border-2 border-white p-4 bg-black md:ml-[22px]">
                                <div
                                    onClick={navigateToHome}
                                    className="text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2"
                                >
                                    Home
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cv-wrapper flex-auto w-full h-[calc(100vh-200px)] md:h-[calc(100vh-100px)]">
                        <div className="relative w-full h-full">
                            <iframe
                                src="/JanitRajkarnikarResume2024 (1).pdf"
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ border: 'none' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-4 left-0 right-0 text-center">
                <a
                    href="/JanitRajkarnikarResume2024 (1).pdf"
                    download
                    className="inline-block bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200"
                >
                    Download CV
                </a>
            </div>
            <style jsx>{`
                .cv-wrapper {
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default CV;