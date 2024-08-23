"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

export const CarouselContext = createContext({});

export const Carousel = ({ items, initialScroll = 0 }) => {
    const carouselRef = React.useRef(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <CarouselContext.Provider value={{}}>
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div className={cn(
                        "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                    )}></div>

                    <div className={cn(
                        "flex flex-row justify-start gap-4 pl-4",
                        "max-w-7xl mx-auto"
                    )}>
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </CarouselContext.Provider>
    );
};
export const Card = ({
    card,
    index,
    layout = false,
}) => {
    const [open, setOpen] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useOutsideClick(containerRef, () => handleClose());

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setImageDimensions({ width: naturalWidth, height: naturalHeight });
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 h-screen z-50 overflow-hidden flex items-center justify-center">
                        <div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                        />
                        <div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            ref={containerRef}
                            className="relative z-[60] max-h-[90vh] max-w-[90vw] p-4"
                        >
                            <button
                                className="fixed top-4 right-4 h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center z-50"
                                onClick={handleClose}
                            >
                                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                            </button>
                            <Image
                                src={card.src}
                                alt={card.title}
                                width={imageDimensions.width}
                                height={imageDimensions.height}
                                className="rounded-3xl object-contain max-h-[calc(90vh-2rem)] max-w-[calc(90vw-2rem)]"
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>
                )}
            </AnimatePresence>
            <motion.button
                onClick={handleOpen}
                className={cn(
                    "rounded-3xl bg-gray-100 dark:bg-neutral-900 overflow-hidden flex flex-col items-start justify-start relative z-10",
                    // Reverted to original dimensions
                    "h-72 w-56 md:h-[36rem] md:w-96"
                )}
            >
                <BlurImage
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-contain absolute z-10 inset-0" // Changed to object-contain
                    onLoad={handleImageLoad}
                />
                {/* Space for text */}
                <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full text-white z-20">
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>
            </motion.button>
        </>
    );
};



export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    onLoad,
    ...rest
}) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <Image
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={(e) => {
                setLoading(false);
                if (onLoad) onLoad(e);
            }}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};

