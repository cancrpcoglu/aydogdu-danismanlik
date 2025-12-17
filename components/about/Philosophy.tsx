"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
    return (
        <section className="max-w-6xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-20"
            >
                <h3 className="text-3xl font-serif font-bold text-[#0B1D39] mb-6">Koçluk Felsefem</h3>

                <p className="text-lg text-[#1b2a41] leading-relaxed max-w-4xl">
                    Danışanlarımın yüzeysel sorunların ötesine geçerek kendi özlerindeki potansiyel ve güçle yeniden
                    bağ kurmalarını sağlamayı amaçlıyorum. Her süreç; bilimsel yaklaşımlar, deneyimsel teknikler ve
                    sezgisel anlayışı birleştiren kişiye özel bir yolculuktur.
                </p>
            </motion.div>
        </section>
    );
}
