"use client";
import { motion } from "framer-motion";

export default function WhyMe() {
    return (
        <section id="neden-ben" className="max-w-6xl mx-auto px-6 py-20">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-serif font-bold text-[#0B1D39] mb-10"
            >
                Neden Aydoğdu Danışmanlık?
            </motion.h2>

            {/* METİN BLOĞU */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-lg mb-12 text-[#1b2a41] leading-relaxed space-y-6"
            >
                <p>
                    Merhaba, ben <strong>Irmak Aydoğdu</strong>. ODTÜ'de başladığım yolculuğuma,
                    cebime hem İktisat hem de Sosyoloji diplomalarını koyarak çıktım.
                    Amacım sadece iş dünyasının rakamlarını değil, o rakamları yaratan insanları
                    ve ilişkileri de derinlemesine anlamaktı.
                </p>

                <p>
                    İş Bankası, Turkcell gibi saygın kurumların mutfağında geçen yıllarım ve
                    danışmanlık tecrübelerim bana kurumsal dünyanın gerçeklerini öğretti.
                    Şimdiye kadar 20 binden fazla kişinin gelişim yolculuğuna eşlik etmiş olmaktan gurur duyuyorum.
                    Bugün ise 1.700 günün üzerinde eğitim, 1.200 saati aşkın koçluk deneyimim
                    Bugün ise 1.200 saati aşkın koçluk deneyimim ve global yetkinliklerimle
                    bireylerin ve kurumların gelişim yolculuklarına rehberlik ediyorum.
                </p>

                <p>
                    Psikologlar bir arkeolog gibidir; geçmişe iner ve “neden” sorusunu sorar.
                    Ben ise bir mimar gibiyim; geleceğe bakar, “nasıl” sorusunu sorar ve
                    hayatınızı sağlam temeller üzerine inşa etmenize odaklanırım.
                </p>

                <p>
                    Eğer geçmişten gelen bir depresyon söz konusuysa sizi bir uzmana yönlendiririm.
                    Ancak geleceğe bakmak, hedeflerinizi netleştirmek ve harekete geçmek istiyorsanız,
                    Aydoğdu Danışmanlık sizin için doğru adrestir.
                </p>
            </motion.div>

            {/* ÖNE ÇIKAN YÖNLER */}
            <div className="grid md:grid-cols-2 gap-10">
                {[
                    {
                        title: "🔬 Bilim ve Sezgi Dengesi",
                        text: "Analitik Psikoloji, TA ve BDT gibi bilimsel metodolojileri sezgisel yaklaşımla birleştiriyorum."
                    },
                    {
                        title: "🎓 Çift Yönlü Bakış (İktisat ve Sosyoloji)",
                        text: "Rakamları ve insanı birlikte ele alan bütünsel bir perspektif sunuyorum."
                    },
                    {
                        title: "🌍 Global Standartlar, Yerel Deneyim",
                        text: "CTI ve CRR Global akreditasyonlarıyla, 24 yıllık Türkiye deneyimini bir araya getiriyorum."
                    },
                    {
                        title: "🎯 Sonuç Odaklı Yaklaşım",
                        text: "Farkındalığı eyleme dönüştüren, sürdürülebilir değişim yaratan koçluk süreçleri tasarlıyorum."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-[#0B1D39] mb-2">
                            {item.title}
                        </h3>
                        <p className="text-[#1b2a41] leading-relaxed">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
