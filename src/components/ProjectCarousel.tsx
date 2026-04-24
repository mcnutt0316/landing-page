"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
    images: string[];
    projectTitle: string;
}

export default function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goTo = useCallback(
        (next: number) => {
            setCurrentIndex((next + images.length) % images.length);
        },
        [images.length]
    );

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [isPaused, images.length]);

    return (
        <div
            className="group relative aspect-video overflow-hidden rounded-lg bg-foreground/10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Stacked slides — only the active one is opaque */}
            {images.map((src, i) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        i === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={src}
                        alt={projectTitle}
                        fill
                        className="object-cover"
                        priority={i === 0}
                    />
                </div>
            ))}

            {/* Hover-reveal nav arrows */}
            <button
                type="button"
                onClick={() => goTo(currentIndex - 1)}
                aria-label="Previous slide"
                className="absolute top-1/2 left-2.5 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-full bg-black/45 border border-white/15 text-white opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
            >
                <ChevronLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
            </button>
            <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                aria-label="Next slide"
                className="absolute top-1/2 right-2.5 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-full bg-black/45 border border-white/15 text-white opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
            >
                <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </button>

            {/* Dot indicators (active is a wider pill) */}
            <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                            i === currentIndex ? "w-[22px] bg-white" : "w-1.5 bg-white/45 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
