"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="
        max-w-7xl mx-auto
        px-5 sm:px-6
        pt-8 sm:pt-10
        pb-16 sm:pb-20
        grid grid-cols-1 md:grid-cols-2
        gap-12 md:gap-16
        items-center
      "
        >
            {/* TEXT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center md:text-left"
            >
                <h1
                    className="
            font-serif font-bold text-[#0B1D39]
            text-[40px] leading-[1.08]
            sm:text-[56px] sm:leading-[1.06]
            md:text-6xl md:leading-tight
            tracking-tight
          "
                >
                    {/* Mobilde kontrollü satır kırma */}
                    <span className="block md:inline">Bilimin Işığında,</span>
                    <br className="hidden md:block" />
                    <span className="block md:inline">Sezginin Gücüyle</span>
                    <br className="hidden md:block" />
                    <span className="block md:inline">Gerçek Dönüşüm</span>
                </h1>

                <p className="text-[#1b2a41] mt-6 text-base sm:text-lg leading-relaxed">
                    Gelişim Danışmanı, Eğitmen, Moderatör,
                </p>
                <p className="text-[#1b2a41] text-base sm:text-lg leading-relaxed">
                    CPCC Koç – Yetişkin, Ergen, İlişki, Yönetici ve Takım Koçu
                </p>

                {/* ICON GRID */}
                <div className="grid grid-cols-2 gap-4 mt-6 text-[#0B1D39] text-sm sm:text-base">
                    <div>
                        <p className="font-semibold">🎓 ODTÜ</p>
                        <p className="text-[#1b2a41]">İktisat ve Sosyoloji</p>
                    </div>

                    <div>
                        <p className="font-semibold">📘 24+ Yıl</p>
                        <p className="text-[#1b2a41]">Kurumsal Deneyim</p>
                    </div>

                    <div>
                        <p className="font-semibold">📚 1700+ Gün</p>
                        <p className="text-[#1b2a41]">Eğitim ve Seminer</p>
                    </div>

                    <div>
                        <p className="font-semibold">🏅 1200+ Saat</p>
                        <p className="text-[#1b2a41]">Koçluk</p>
                    </div>
                </div>

                <p className="italic text-[#1b2a41] mt-8 text-sm sm:text-base">
                    “24 Yıllık Deneyim, ODTÜ’lü Bakış Açısı ve Global Koçluk Standartlarıyla
                    Potansiyelinizi Harekete Geçirin.”
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
                    <a
                        href="#services-preview"
                        className="px-6 py-3 bg-[#D67C45] hover:bg-[#c96f3d] text-white rounded-md transition text-center"
                    >
                        Hizmetlere Göz At
                    </a>

                    <a
                        href="/contact"
                        className="px-6 py-3 border border-[#0B1D39] text-[#0B1D39] rounded-md hover:bg-[#0B1D39] hover:text-white transition text-center"
                    >
                        İletişime Geç
                    </a>
                </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="
          relative w-full
          h-[320px] sm:h-[420px] md:h-[480px]
          rounded-2xl overflow-hidden shadow-lg
        "
            >
                <Image
                    src="/profile.jpg"
                    alt="Irmak Aydoğdu"
                    fill
                    className="object-cover object-[50%_65%]"
                    quality={96}
                    priority
                />
            </motion.div>
        </section>
    );
}
