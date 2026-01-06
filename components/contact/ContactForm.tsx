"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // 🔎 DEBUG – console'da kontrol et
        console.log("SERVICE_ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
        console.log("TEMPLATE_ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
        console.log("PUBLIC_KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

        if (!formRef.current) return;

        setSuccess(false);
        setError(false);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef.current!,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then((res) => {
                // 🔵 BURAYA EKLEDİK
                console.log("✅ EmailJS SUCCESS:", res);

                setSuccess(true);
                formRef.current?.reset();

                setTimeout(() => {
                    setSuccess(false);
                }, 4000);
            })
            .catch((err) => {
                // 🔴 BURAYA EKLEDİK
                console.error("❌ EmailJS ERROR:", err);

                setError(true);

                setTimeout(() => {
                    setError(false);
                }, 4000);
            });
    };

    return (
        <section id="contact" className="w-full py-24">
            <div className="max-w-6xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-serif font-bold text-[#0B1D39] mb-12 text-center"
                >
                    Dönüşümü Başlatın
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* SOL */}
                    <div className="space-y-3 text-[#1b2a41]">
                        <p className="text-lg leading-relaxed">
                            Hizmet verdiğim her kurumun ve her danışanımın hikâyesi biricik.
                            Sizin hikâyenizi birlikte parlatmak için sizi dinlemeye hazırım.
                        </p>

                        <p className="text-right text-lg font-bold">Irmak Aydoğdu</p>

                        <div className="space-y-3 text-lg">
                            <p>📧 <strong>Email:</strong> irmak@aydogdudanismanlik.com</p>
                            <p>📱 <strong>Telefon:</strong> +90 532 746 20 28</p>
                            <p>📍 <strong>Konum:</strong> One Tower Business Club, Oran, Kudüs Cad. 6/1, 06550 Çankaya/ Ankara</p>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/irmakaydogdu1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xl text-[#0B1D39] hover:text-[#0A66C2] font-medium transition"
                        >
                            <Linkedin size={22} />
                            <strong>LinkedIn</strong>
                        </a>
                    </div>

                    {/* SAĞ */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300">

                        {/* 🔔 Bildirimler */}
                        {success && (
                            <div className="mb-4 rounded-md bg-green-100 border border-green-400 text-green-800 px-4 py-3">
                                Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapılacaktır.
                            </div>
                        )}

                        {error && (
                            <div className="mb-4 rounded-md bg-red-100 border border-red-400 text-red-800 px-4 py-3">
                                Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                            </div>
                        )}

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

                            <input type="hidden" name="title" value="Yeni İletişim Formu" />

                            <div>
                                <label className="block font-medium mb-1">Ad Soyad</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Mesajınız</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#D67C45] hover:bg-[#c96f3d] text-white py-3 rounded-md font-semibold"
                            >
                                Gönder
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
