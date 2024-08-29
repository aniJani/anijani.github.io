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
            <div className="w-full p-4 sm:p-14">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-start mb-8">
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
                    <div className="cv-wrapper flex-auto w-full max-h-screen">
                        <embed
                            src="/JanitRajkarnikarResume24.pdf"
                            type="application/pdf"
                            className="cv-embed w-full h-[calc(100vh-100px)] border-gray-700 rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .cv-wrapper {
                    padding: 0; /* Ensure no padding on the wrapper div */
                    margin: 0;
                }
                .cv-embed {
                    padding: 0; /* Ensure no padding on the embed element */
                    margin: 0;
                    border: none; /* Removes any inherited border */
                    width: 100%;
                    height: calc(100vh - 100px); /* Ensures it occupies full height */
                }
            `}</style>
        </div>
    );
};

export default CV;
