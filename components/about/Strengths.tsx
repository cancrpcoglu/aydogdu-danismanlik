"use client";

import { motion } from "framer-motion";
export default function Strengths() {
    return (
        <section className="max-w-6xl mx-auto px-5 py-15">
            <h3 className="max-w-6xl mx-auto text-3xl font-serif font-bold text-[#0B1D39] mb-8">Güçlü Yönlerim</h3>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-[#0B1D39]">

                {[
                    {
                        title: "🔬 Bilimin Işığında, Sezginin Gücüyle",
                        text: "Analitik Psikoloji, TA ve BDT gibi bilimsel metodolojileri sezgisel yaklaşımla birleştiriyorum."
                    },
                    {
                        title: "🌍 Global Standartlarda Uzmanlık",
                        text: "CPCC & ORSC akreditasyonları ile uluslararası koçluk standartlarında hizmet veriyorum. Danışanlarım dünya standartlarında güvenli ellerde."
                    },
                    {
                        title: "🧭 Bütünsel Yol Arkadaşlığı",
                        text: "Hem koç hem eğitmen hem de gelişim danışmanı bakış açısı ile 360° rehberlik sunuyorum."
                    },
                    {
                        title: "🎯 Farkındalıktan Eyleme",
                        text: "İçgörüleri somut adımlara dönüştürerek sürdürülebilir değişim sağlıyorum."
                    },
                    {
                        title: "✨ Sade, Net ve Odaklı",
                        text: "Zihinsel süreçleri sadeleştirerek danışanlarımın netlik kazanmasını sağlıyorum."
                    },
                    {
                        title: "🤝 Sahici ve Cesaretlendirici",
                        text: "Danışanlarım sahici, enerjik, net ve cesaretlendirici bir tarzım olduğunu söylüyor."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p>{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>

    );
}
