'use client';

import Link from "next/link";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Header() {
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <div>
            <header className="bg-[#FFF3E7] p-4 flex justify-center">
                <h1 className="text-4xl flex items-center">
                    <span className="text-[#808080]">TO</span>
                    <span className="text-[#D67447]">D</span>
                    <CheckCircle className="text-[#D67447] w-8 h-8" />
                </h1>
            </header>

            <nav className="bg-[#F7F7F7] w-full">
                <div className="flex">
                    <div
                        className={`flex flex-1 justify-center cursor-pointer ${activeTab === "personal"
                            ? "border-b-2 border-[#D67447]"
                            : "border-b-2 border-transparent"
                            }`}
                    >
                        <Link
                            onClick={() => setActiveTab("personal")}
                            href="/" className="text-lg font-medium">
                            Personal
                        </Link>
                    </div>

                    <div
                        className={`flex flex-1 justify-center cursor-pointer ${activeTab === "professional"
                            ? "border-b-2 border-[#D67447]"
                            : "border-b-2 border-transparent"
                            }`}
                    >
                        <Link
                            onClick={() => setActiveTab("professional")}
                            href="/professional" className="text-lg font-medium">
                            Professional
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}