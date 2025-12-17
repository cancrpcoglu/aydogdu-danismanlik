"use client";

import { useState } from "react";
import CorporateServices from "./CorporateServices";
import IndividualServices from "./IndividualServices";

export default function ServicesTabs() {
    const [activeTab, setActiveTab] = useState<"kurumsal" | "bireysel">("kurumsal");

    return (
        <section className="max-w-6xl mx-auto px-6 py-24">

            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-12">
                <button
                    onClick={() => setActiveTab("kurumsal")}
                    className={`px-6 py-3 rounded-full border transition ${
                        activeTab === "kurumsal"
                            ? "bg-[#D67C45] text-white"
                            : "bg-white text-[#0B1D39]"
                    }`}
                >
                    Kurumsal Hizmetler
                </button>

                <button
                    onClick={() => setActiveTab("bireysel")}
                    className={`px-6 py-3 rounded-full border transition ${
                        activeTab === "bireysel"
                            ? "bg-[#D67C45] text-white"
                            : "bg-white text-[#0B1D39]"
                    }`}
                >
                    Bireysel Hizmetler
                </button>
            </div>

            {/* Content */}
            {activeTab === "kurumsal" && <CorporateServices />}
            {activeTab === "bireysel" && <IndividualServices />}
        </section>
    );
}
