"use client";

import Image from "next/image";
import { X } from "lucide-react";

export default function SpeakerLightbox({
                                            src,
                                            onClose,
                                        }: {
    src: string;
    onClose: () => void;
}) {
    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white"
            >
                <X size={32} />
            </button>

            <div className="relative w-[90vw] h-[80vh]">
                <Image
                    src={src}
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
