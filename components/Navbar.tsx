"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <header className="w-full bg-[#FAF9F6] shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo5.png"
                        alt="Aydoğdu Danışmanlık"
                        width={160}
                        height={160}
                        quality={100}
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* ================= Desktop Menü ================= */}
                <nav className="hidden md:flex gap-8 text-lg text-[#0B1D39] font-medium">

                    <Link href="/">Anasayfa</Link>
                    <Link href="/about">Hakkımda</Link>
                    <Link href="/services">Hizmetler</Link>
                    <Link href="/speaker">Galeri</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">İletişim</Link>
                    <a
                        href="https://calendly.com/irmakaydo/web-gorusme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto px-2 py-1 rounded-lg bg-[#0f430f] text-white font-medium hover:opacity-80 transition"
                    >
                        Randevu Al
                    </a>

                </nav>

                {/* ================= Mobile Hamburger ================= */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
                <Menu size={28} />
            </button>
        </div>

            {open && (
                <div className="md:hidden px-6 py-4 flex flex-col gap-4 text-lg">
                    <Link href="/" onClick={() => setOpen(false)}>Anasayfa</Link>
                    <Link href="/about" onClick={() => setOpen(false)}>Hakkımda</Link>
                    <Link href="/services" onClick={() => setOpen(false)}>Hizmetler</Link>
                    <Link href="/speaker" onClick={() => setOpen(false)}>Konuşmacı</Link>
                    <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>İletişim</Link>
                </div>
            )}
        </header>
    );
}
