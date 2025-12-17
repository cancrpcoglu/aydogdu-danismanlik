"use client";
import { motion } from "framer-motion";

export default function SocialProof() {
    return (
        <section className="bg-[#F2F1EB] py-16 mt-10">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

                {[
                    { value: "24+", label: "Yıllık Kurumsal Deneyim" },
                    { value: "1200+", label: "Saat Koçluk Tecrübesi" },
                    { value: "2", label: "ODTÜ Diploması" },
                    { value: "ICF", label: "Global Koçluk Standartları" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <h3 className="text-3xl font-bold text-[#0B1D39]">{stat.value}</h3>
                        <p className="text-[#1b2a41]">{stat.label}</p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
