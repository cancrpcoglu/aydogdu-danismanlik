"use client";

import Image from "next/image";

type Category = {
    title: string;
    companies: string[];
};

const categories: Category[] = [
    {
        title: "Finans, Sigorta ve Bankacılık",
        companies: [
            "agesa",
            "allianz",
            "garanti",
            "garanti-leasing",
            "garanti-mortgage",
            "hsbc",
            "qnb",
            "sekerbank",
            "teb",
        ],
    },
    {
        title: "Teknoloji, Telekomünikasyon ve Bilişim",
        companies: ["kocsistem", "turkcell", "turktelekom", "vodafone"],
    },
    {
        title: "Sanayi, Enerji ve Otomotiv",
        companies: [
            "akdeniz-chemson",
            "borusan1",
            "erdemir",
            "guzelenerji",
            "isdemir",
            "mais",
            "mmk",
            "oyak",
            "oyak-cimento",
            "petrolofisi",
        ],
    },
    {
        title: "Hızlı Tüketim, Hizmet ve Perakende",
        companies: [
            "arcelik",
            "danone",
            "hektas",
            "imperial",
            "omsan",
            "oyak-pazarlama",
            "yildizholding",
        ],
    },
    {
        title: "Sağlık ve İlaç",
        companies: ["bbraun", "boehringer"],
    },
];

export default function References() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {categories.map((category, i) => (
                <div key={i} className="mb-20">

                    {/* KATEGORİ BAŞLIK */}
                    <h2 className="text-3xl font-bold text-[#0B1D39] text-center mb-12">
                        {category.title}
                    </h2>

                    {/* LOGO GRID */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

                        {category.companies.map((company) => (

                            <div
                                key={company}
                                className="
                  w-full
                  h-32
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  shadow-sm
                "
                            >
                                <div className="relative w-[140px] h-[70px]">
                                    <Image
                                        src={`/references/${company}.png`}
                                        alt={company}
                                        fill
                                        className="object-contain"
                                        sizes="140px"
                                    />
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            ))}
        </div>
    );
}