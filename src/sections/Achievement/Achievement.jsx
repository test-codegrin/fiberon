"use client";

import { useState } from "react";
import Image from "next/image";

const tabsData = [
  {
    id: "cai",
    label: "CONSTRUCTION ARCHITECTURE INTERIOR EXPO 2023",
    images: [
      "/main-assets/img/expo/achievement-1.jpg",
      "/main-assets/img/expo/achievement-2.jpg",
      "/main-assets/img/expo/achievement-3.jpg",
      "/main-assets/img/expo/achievement-4.jpg",
      "/main-assets/img/expo/achievement-5.jpg",
      "/main-assets/img/expo/achievement-6.jpg",
      "/main-assets/img/expo/achievement-7.jpg",
      "/main-assets/img/expo/achievement-8.jpg",
    ],
  },
  {
    id: "smart",
    label: "7TH SMART CITIES INDIA EXPO",
    images: [
      "/main-assets/img/expo/achievement-9.jpg",
      "/main-assets/img/expo/achievement-10.jpg",
      "/main-assets/img/expo/achievement-11.jpg",
      "/main-assets/img/expo/achievement-12.jpg",
      "/main-assets/img/expo/achievement-13.jpg",
      "/main-assets/img/expo/achievement-14.jpg",
      "/main-assets/img/expo/achievement-15.jpg",
      "/main-assets/img/expo/achievement-16.jpg",
    ],
  },
  {
    id: "shapatya",
    label: "SHAPATYA",
    images: [
      "/main-assets/img/expo/achievement-1.jpg",
      "/main-assets/img/expo/achievement-2.jpg",
      "/main-assets/img/expo/achievement-3.jpg",
      "/main-assets/img/expo/achievement-4.jpg",
      "/main-assets/img/expo/achievement-5.jpg",
      "/main-assets/img/expo/achievement-6.jpg",
      "/main-assets/img/expo/achievement-7.jpg",
      "/main-assets/img/expo/achievement-8.jpg",
    ],
  },
  {
    id: "rahsta",
    label: "RAHSTA EXPO 2024 - MUMBAI",
    images: [
      "/main-assets/img/expo/achievement-9.jpg",
      "/main-assets/img/expo/achievement-10.jpg",
      "/main-assets/img/expo/achievement-11.jpg",
      "/main-assets/img/expo/achievement-12.jpg",
      "/main-assets/img/expo/achievement-13.jpg",
      "/main-assets/img/expo/achievement-14.jpg",
      "/main-assets/img/expo/achievement-15.jpg",
      "/main-assets/img/expo/achievement-16.jpg",
    ],
  },
  {
    id: "kenya",
    label: "KENYA BUILDCON 2025",
    images: [
      "/main-assets/img/expo/achievement-1.jpg",
      "/main-assets/img/expo/achievement-2.jpg",
      "/main-assets/img/expo/achievement-3.jpg",
      "/main-assets/img/expo/achievement-4.jpg",
      "/main-assets/img/expo/achievement-5.jpg",
      "/main-assets/img/expo/achievement-6.jpg",
      "/main-assets/img/expo/achievement-7.jpg",
      "/main-assets/img/expo/achievement-8.jpg",
    ],
  },
];

export default function Achievement() {
  const [activeTab, setActiveTab] = useState("cai");

  const activeImages =
    tabsData.find((tab) => tab.id === activeTab)?.images || [];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ================= TABS ================= */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition
                ${
                  activeTab === tab.id
                    ? "bg-[#347A63] text-white"
                    : "bg-[#347A63] text-white"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================= IMAGE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[280px] overflow-hidden rounded-md group"
            >
              <img
                src={img}
                alt="Expo Gallery"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
