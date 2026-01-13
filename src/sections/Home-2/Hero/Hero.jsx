"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const [activeHover, setActiveHover] = useState(null);

  return (
    <>
      <div className="pb-50 max-w-[1400px] mx-auto">
        {/* ================= HERO SECTION ================= */}
        <div className="relative">
          <div className="max-w-[1300px] mx-auto mt-[100px] md:flex items-center justify-between md:h-[500px] px-6">
            {/* Left Content */}
            <div className="w-[430px]">
              <p className="text-[50px] leading-1 w-full font-bold leading-tight">
                <span className="text-[#347A64]">GFRP </span>REBAR <br /> MANUFACTURER
              </p>

              <p className="text-[16px] mt-4 text-gray-600">
                Revolutionize your projects with MRG GFRP Rebar — twice the
                strength, zero corrosion, and a lighter build for enduring
                performance in any environment.
              </p>

              <button className="mt-6 bg-[#347A64] w-[200px] h-[50px] rounded flex items-center justify-center text-white font-semibold hover:bg-[#347A64] transition">
                Download Brochure
              </button>
            </div>

            {/* Right Image */}
            <div className="mt-20">
              <img
                src="/main-assets/img/hero/building.png"
                alt="Building"
                className="max-w-[500px]"
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT FIXED ICON + SLIDE DETAILS ================= */}
        <div
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
          onMouseLeave={() => setActiveHover(null)}
        >
          {/* ===== Email ===== */}
          <div
            onMouseEnter={() => setActiveHover("email")}
            className="relative h-[50px] w-[260px]"
          >
            {/* Sliding Text */}
            <div
              className={`absolute right-[50px] top-0 h-full flex items-center bg-white text-[#347A64] shadow-md border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "email"
                  ? "translate-x-0"
                  : "translate-x-[230px]"
              }`}
            >
              <span className="px-4 text-sm whitespace-nowrap">
                india@mrg-composites.com
              </span>
            </div>

            {/* Fixed Icon */}
            <div className="absolute right-0 top-0 w-[50px] h-[50px] bg-[#347A64] text-white flex items-center justify-center">
              <div className="">
                <Mail size={20} />
              </div>
            </div>
          </div>

          {/* ===== Phone ===== */}
          <div
            onMouseEnter={() => setActiveHover("phone")}
            className="relative h-[50px] w-[260px]"
          >
            <div
              className={`absolute right-[50px] top-0 h-full flex items-center bg-white text-[#347A64] shadow-md border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "phone"
                  ? "translate-x-0"
                  : "translate-x-[230px]"
              }`}
            >
              <span className="px-4 text-sm whitespace-nowrap">
                +91 63515 37947
              </span>
            </div>

            <div className="absolute right-0 top-0 w-[50px] h-[50px] bg-[#347A64] text-white flex items-center justify-center">
              <Phone size={20} />
            </div>
          </div>

          {/* ===== Location ===== */}
          <div
            onMouseEnter={() => setActiveHover("location")}
            className="relative h-[50px] w-[260px]"
          >
            <div
              className={`absolute right-[50px] top-0 h-full flex items-center bg-white shadow-md text-[#347A64] border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "location"
                  ? "translate-x-0"
                  : "translate-x-[230px]"
              }`}
            >
              <span className="px-4 text-sm whitespace-nowrap">
                Our Location
              </span>
            </div>

            <div className="absolute right-0 top-0 w-[50px] h-[50px] bg-[#347A64] text-white flex items-center justify-center">
              <MapPin size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
