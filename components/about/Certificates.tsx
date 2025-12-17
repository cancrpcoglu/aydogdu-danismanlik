"use client";

import Image from "next/image";

export default function Certifications() {
    return (
        <section className="max-w-6xl mx-auto px-5 py-15">
            <h3 className="text-3xl font-serif font-bold text-[#0B1D39] mb-10">
                Sertifikalarım
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <div className="relative w-50 h-28 flex items-center justify-center border border-[#0B1D39] rounded-lg bg-white">
                    <Image src="/cpcc.png" alt="CPCC" fill className="object-contain" />
                </div>

                <div className="relative w-50 h-28 flex items-center justify-center border border-[#0B1D39] rounded-lg bg-white">
                    <Image src="/orsc.png" alt="ORSC" width={100} height={0} className="object-contain" />
                </div>
            </div>
        </section>
    );
}
