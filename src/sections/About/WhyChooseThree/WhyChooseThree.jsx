/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";

const WhyChooseThree = () => {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== SECTION TITLE ===== */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[#347A64] font-semibold text-md uppercase tracking-wide">
            {/* <img  
              src="/main-assets/img/icon/section-subtitle-icon.svg"
              width={18}
              height={18}
              alt="icon"
            /> */}
            Why Choose Us
          </span>

          <div className="mt-4 text-3xl md:text-4xl text-[#347A64] font-bold">
            High Quality Innovative Design
          </div>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We deliver smart, reliable, and cost-effective solutions that help
            your business grow faster.
          </p>
        </div>

        {/* ===== CONTENT GRID ===== */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-center">

          {/* ===== LEFT FEATURES ===== */}
          <div className="space-y-8">
            {[
              {
                title: "Technology",
                text: "We use modern technologies to build scalable and secure solutions.",
                icon: "/main-assets/img/icon/why-icon1-1.svg",
              },
              {
                title: "Core Planning",
                text: "Strategic planning ensures long-term success and growth.",
                icon: "/main-assets/img/icon/why-icon1-2.svg",
              },
              {
                title: "Project Result",
                text: "Delivering measurable results with proven methodologies.",
                icon: "/main-assets/img/icon/why-icon1-3.svg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl border-2 border-[#347A64] hover:border-[#347A64] transition"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[#347A64]/10">
                  <img src={item.icon} width={32} height={32} alt="icon" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#347A64]">
                    {item.title}
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== CENTER IMAGE ===== */}
          <div className="flex justify-center">
            <img
              src="/main-assets/img/normal/why_1-1.png"
              width={420}
              height={420}
              alt="Why Choose Us"
              className="rounded-2xl"
            />
          </div>

          {/* ===== RIGHT FEATURES ===== */}
          <div className="space-y-8">
            {[
              {
                title: "Trusted Clients",
                text: "Long-term relationships built on trust and quality.",
                icon: "/main-assets/img/icon/why-icon1-4.svg",
              },
              {
                title: "Skilled Team",
                text: "Experienced professionals dedicated to excellence.",
                icon: "/main-assets/img/icon/why-icon1-5.svg",
              },
              {
                title: "Save Money",
                text: "Optimized solutions that reduce cost without compromise.",
                icon: "/main-assets/img/icon/why-icon1-6.svg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl border-2 border-[#347A64] hover:border-[#347A64] transition"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[#347A64]/10">
                  <img src={item.icon} width={32} height={32} alt="icon" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#347A64]">
                    {item.title}
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseThree;
