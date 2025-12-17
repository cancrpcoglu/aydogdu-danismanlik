"use client";

import { motion } from "framer-motion";

export default function Blog() {
    return (
        <section id="blog" className="w-full py-24">
            <div className="max-w-8xl mx-auto px-8">

                {/* Başlık */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-serif font-bold text-[#0B1D39] mb-60 text-shadow-green-500 align-text-bottom text-center"
                >
                    Yakında...
                </motion.h2>
                </div>
            </section>

    );
}