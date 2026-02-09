"use client";

import { useState } from "react";
import Image from "next/image";

const tabsData = [
  {
    id: "iit",
    label: "IIT HYDERABAD",
    images: [
      "/main-assets/img/certificates/Certificates-1.jpg",
      "/main-assets/img/certificates/Certificates-2.jpg",
      "/main-assets/img/certificates/Certificates-3.jpg",
    ],
  },
  {
    id: "standards",
    label: "UGANDA NATIONAL BUREAU OF STANDARDS",
    images: [
      "/main-assets/img/certificates/Certificates-4.jpg",
      "/main-assets/img/certificates/Certificates-5.jpg",
      "/main-assets/img/certificates/Certificates-6.jpg",
      "/main-assets/img/certificates/Certificates-7.jpg",
      "/main-assets/img/certificates/Certificates-8.jpg",
    ],
  },
  {
    id: "SGS",
    label: "SGS",
    images: [
      "/main-assets/img/certificates/Certificates-9.jpg",
      "/main-assets/img/certificates/Certificates-10.jpg",
    ],
  },
  {
    id: "geo",
    label: "GEO DESIGNS & RESEARCH (P) LTD",
    images: [
      "/main-assets/img/certificates/Certificates-11.jpg",
    ],
  },
  {
    id: "g.s",
    label: "SHRI G.S. INSTITUTE OF TECHNOLOGY & SCIENCE",
    images: [
      "/main-assets/img/certificates/Certificates-12.jpg",
      "/main-assets/img/certificates/Certificates-13.jpg",
    ],
  },
  {
    id: "dubai",
    label: "DUBAI MUNICIPALITY",
    images: [
      "/main-assets/img/certificates/Certificates-14.jpg",
      "/main-assets/img/certificates/Certificates-15.jpg",
    ],
  },
  {
    id: "American",
    label: "AMERICAN CONCRETE INSTITUTE",
    images: [
      "/main-assets/img/certificates/Certificates-16.jpg",
      "/main-assets/img/certificates/Certificates-17.jpg",
      "/main-assets/img/certificates/Certificates-18.jpg",
      "/main-assets/img/certificates/Certificates-19.jpg",
      "/main-assets/img/certificates/Certificates-20.jpg",
      "/main-assets/img/certificates/Certificates-21.jpg",
      "/main-assets/img/certificates/Certificates-22.jpg",
    ],
  },
];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("iit");

  const activeImages =
    tabsData.find((tab) => tab.id === activeTab)?.images || [];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ================= TABS ================= */}
        {/* <div className="flex flex-wrap gap-3 justify-center mb-12">
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
        </div> */}

        {/* ================= IMAGE GRID ================= */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[450px] border-[#347A63] border-2  overflow-hidden rounded-md group"
            >
              <img
                src={img}
                alt="certificates Gallery"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div> */}

        <div className="">
          <img src="/main-assets/img/certificates/Certificates-23.jpg" alt="Certificates" className="max-w-[400px] mx-auto h-auto" />
        </div>
      </div>
    </section>
  );
}
