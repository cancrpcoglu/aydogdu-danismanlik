"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { speakerImages } from "./Images";

export default function SpeakerSlider() {
    const [index, setIndex] = useState(0);

    // 👉 Mobile swipe state
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const swipeThreshold = 50; // px

    // ⏱️ Otomatik geçiş
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 2000);

        return () => clearInterval(interval);
    }, [index]);

    const prev = () =>
        setIndex((prev) => (prev - 1 + speakerImages.length) % speakerImages.length);

    const next = () =>
        setIndex((prev) => (prev + 1) % speakerImages.length);

    // 📱 Touch handlers (mobile swipe)
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;

        if (distance > swipeThreshold) next();      // sola swipe
        if (distance < -swipeThreshold) prev();     // sağa swipe

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section className="w-full bg-[#F8F7F3] py-20">
            <div className="max-w-5xl mx-auto px-5 relative">

                {/* Fotoğraf (Swipe Alanı) */}
                <div
                    className="relative w-full object-center h-[520px] rounded-2xl overflow-hidden shadow-lg"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <Image
                        src={speakerImages[index]}
                        alt="Konuşmacı"
                        fill
                        className="object-contain object-[50%_60%]"
                        priority
                    />
                </div>

                {/* Sol Ok (desktop) */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow hidden md:flex"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Sağ Ok (desktop) */}
                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow hidden md:flex"
                >
                    <ChevronRight size={28} />
                </button>

            </div>
        </section>
    );
}
