"use client";

import { motion } from "framer-motion";

export default function ServicesPreview() {
    return (
        <section id="services-preview" className="max-w-6xl mx-auto px-6 py-20">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-serif font-bold text-[#0B1D39] mb-10"
            >
                Hizmetler
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">

                {/* Kurumsal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-6 border border-[#ddd] rounded-xl shadow-sm hover:shadow-md transition"
                >
                    <h3 className="text-2xl font-semibold text-[#0B1D39] mb-4">🏢 Kurumsal Alanda</h3>
                    <ul className="text-[#1b2a41] list-disc pl-6 space-y-2">
                        <li>Eğitim ve Seminer
                        </li>
                        <li>Yönetici ve Takım Koçluğu</li>
                        <li>Moderatörlük ve Fasilitasyon
                        </li>
                        <li>Değerlendirme ve Gelişim Merkezi Danışmanlığı
                        </li>
                    </ul>
                </motion.div>

                {/* Bireysel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="p-6 border border-[#ddd] rounded-xl shadow-sm hover:shadow-md transition"
                >
                    <h3 className="text-2xl font-semibold text-[#0B1D39] mb-4">🧘 Bireysel Alanda</h3>
                    <ul className="text-[#1b2a41] list-disc pl-6 space-y-2">
                        <li>Kariyer Koçluğu
                        </li>
                        <li>Öğrenci ve Genç Koçluğu</li>
                        <li>Yaşam Koçluğu
                        </li>
                        <li>İlişki Koçluğu</li>
                        <li>Eğitim ve Seminer</li>
                    </ul>
                </motion.div>

            </div>
        </section>
    );
}
