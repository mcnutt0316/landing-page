"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ProjectCarouselProps {
    images: string[];
    projectTitle: string;
}

export default function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(false);
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-foreground/10">
            <p className="text-center pt-20">Carousel coming soon!</p>
        </div>
    );
}