"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const Carousel = ({ items, initialScroll = 0 }) => {
    const carouselRef = React.useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
        }
    }, [initialScroll]);

    return (
        <div
            ref={carouselRef}
            className="carousel-x flex w-full gap-3 overflow-x-auto overscroll-x-contain scroll-smooth py-1"
        >
            {items.map((item, index) => (
                <div key={"card" + index} className="shrink-0">
                    {item}
                </div>
            ))}
        </div>
    );
};

export const Card = ({ card, index }) => {
    const [open, setOpen] = useState(false);
    const [isLandscape, setIsLandscape] = useState(true);
    const containerRef = useRef(null);
    const alt = card.alt || "Project screenshot";

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event) => {
            if (event.key === "Escape") setOpen(false);
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    useOutsideClick(containerRef, () => {
        if (open) setOpen(false);
    });

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setIsLandscape(naturalWidth >= naturalHeight);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-[100] flex h-screen items-center justify-center overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="fixed inset-0 h-full w-full bg-[var(--color-scrim-strong)] backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            ref={containerRef}
                            role="dialog"
                            aria-modal="true"
                            aria-label={alt}
                            className="relative z-[110] max-h-[90vh] max-w-[92vw] p-2"
                        >
                            <button
                                type="button"
                                aria-label="Close image"
                                className="absolute -top-1 right-0 z-10 flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-paper)] text-[var(--color-ink)] shadow-md"
                                onClick={() => setOpen(false)}
                            >
                                <IconX className="h-5 w-5" />
                            </button>
                            <Image
                                src={card.src}
                                alt={alt}
                                width={1600}
                                height={1000}
                                className="max-h-[calc(90vh-2rem)] w-auto max-w-[calc(92vw-1rem)] rounded-[var(--radius-card)] object-contain"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={`Open ${alt}`}
                className={cn(
                    "group relative block overflow-hidden rounded-[var(--radius-card)]",
                    "border border-[var(--color-rule)] bg-[var(--color-paper-2)]",
                    "transition-colors duration-200 hover:border-[var(--color-accent)]",
                    isLandscape
                        ? "h-44 w-72 md:h-[17rem] md:w-[30rem]"
                        : "h-72 w-36 md:h-[26rem] md:w-[13rem]"
                )}
            >
                <BlurImage
                    src={card.src}
                    alt={alt}
                    fill
                    sizes="(max-width: 48rem) 18rem, 30rem"
                    className="object-contain"
                    onLoad={handleImageLoad}
                />
            </button>
        </>
    );
};

export const BlurImage = ({ height, width, src, className, alt, onLoad, ...rest }) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <Image
            className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
            onLoad={(e) => {
                setLoading(false);
                if (onLoad) onLoad(e);
            }}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            alt={alt || "Project screenshot"}
            {...rest}
        />
    );
};
