"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section id="about" className="w-full py-15 ">

            <div className="max-w-6xl mx-auto px-6">

                {/* Başlık */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-serif font-bold text-[#0B1D39] mb-12"
                >
                    Hakkımda
                </motion.h2>

                {/* Ana grid (metin + fotoğraf) */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* ======== Sol: Metin ======== */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5 text-lg text-[#1b2a41] leading-relaxed"
                    >
                        <p>
                            İnsan zihni, davranışları ve gelişimine duyduğum merakla başlayan profesyonel yolculuğum,
                            <strong> 24 yılı geride bıraktı.</strong> ODTÜ İktisat ve Sosyoloji eğitimim bana hem analitik
                            hem insani boyutta derin ve geniş bir bakış açısı kazandırdı.
                        </p>

                        <p>
                            Kariyerimin ilk sekiz yılı, Türkiye İş Bankası ve Turkcell’de eğitim ve gelişim süreçlerinin
                            merkezinde geçti. Turkcell Akademi’nin kuruluş ekibinde yer almak, büyük vizyonların nasıl
                            hayata geçtiğini deneyimlememi sağladı.
                        </p>

                        <p>
                            Ardından masanın diğer tarafına geçtim. 2008 - 2014 yılları arasında iki farklı eğitim danışmanlık şirketinde danışman ve yönetici olarak çalıştım. Finans, teknoloji, enerji ve perakende gibi
                            birçok sektörde kurum içi dinamikleri yakından gözlemledim ve değerlendirdim. Bu zengin yolculuk, profesyonel koçluğu yetkinliklerime eklememle farklı bir boyuta taşındı. 2012 yılında CRR Global’in İlişki ve Takım Koçluğu eğitimleriyle başlayan bu serüven, 2015’te CTI’dan aldığım "Profesyonel Co-Active Koç (CPCC)" ünvanı ile taçlandı.
                        </p>

                        <p>
                            2014’ten bu yana kurucusu olduğum <strong>Aydoğdu Danışmanlık</strong> çatısı altında koçluk, eğitim
                            ve danışmanlık hizmetleri sunuyorum. Danışanlarımın yüzeysel sorunların ötesine geçerek kendi özlerindeki potansiyel ve güçle yeniden bağ kurmalarını sağlamayı hedefliyorum. Her danışanımın hikayesi biricik. Bu yüzden gelişim süreçlerini bilimsel temellere dayanan, deneyimle harmanlanmış ve kişiye özel stratejilerle birlikte kurguluyoruz. Oldukları yerden olmak istedikleri yere uzanan bu yolculukta onlara rehberlik etmek; yaşamlarını daha odaklı ve anlamlı kılmalarını sağlamak benim en büyük hayat amacım.
                        </p>
                    </motion.div>

                    {/* ======== Sağ: Fotoğraf ======== */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg"
                    >
                            <Image
                                src="/profile2.jpg"
                                alt="Irmak Aydoğdu"
                                fill
                                className="object-cover object-[50%_20%]"
                            />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
