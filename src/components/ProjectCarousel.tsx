"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ProjectCarouselProps {
    images: string[];
    projectTitle: string;
}

export default function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if(isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused, images.length]);

    return (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-foreground/10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <Image
                src={images[currentIndex]}
                alt={projectTitle}
                fill
                className="object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentIndex
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'  
                         }`}
                    />
                ))}
            </div>
        </div>
    );
}