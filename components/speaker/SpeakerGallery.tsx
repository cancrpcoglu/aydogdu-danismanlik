"use client";

import { useState } from "react";
import Image from "next/image";
import { speakerImages } from "./Images";
import SpeakerLightbox from "./SpeakerLightbox";

export default function SpeakerGallery() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <section className="bg-[#F8F7F3] py-24">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-serif font-bold text-[#0B1D39] mb-10 text-center">
                    Galeri
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {speakerImages.map((src, i) => (
                        <div
                            key={i}
                            onClick={() => setActive(src)}
                            className="relative h-[220px] cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <Image
                                src={src}
                                alt=""
                                fill
                                className="object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    ))}
                </div>

                {active && (
                    <SpeakerLightbox src={active} onClose={() => setActive(null)} />
                )}

            </div>
        </section>
    );
}
