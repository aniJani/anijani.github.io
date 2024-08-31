"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CV = () => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
                        {isMobile ? (
                            <div className="text-white text-center p-4">
                                <p>If the PDF is not visible please download it. Thanks!</p>
                                <a
                                    href="/JanitRajkarnikarResume24.pdf"
                                    download
                                    className="mt-4 inline-block bg-white text-black font-bold py-2 px-4 rounded"
                                >
                                    Download CV
                                </a>
                            </div>
                        ) : (
                            <embed
                                src="/JanitRajkarnikarResume24.pdf"
                                type="application/pdf"
                                className="cv-embed w-full h-full border-gray-700 rounded-lg"
                            />
                        )}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .cv-wrapper {
                    padding: 0;
                    margin: 0;
                }
                .cv-embed {
                    padding: 0;
                    margin: 0;
                    border: none;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default CV;