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
          <div className="max-w-[1200px] mx-auto mt-[100px] md:flex items-center justify-between md:h-[500px] px-6">
            {/* Left Content */}
            <div className="w-[730px]">
              <div className="md:text-[40px] text-[30px] leading-2 w-full text-[#347A64] font-bold leading-tight">
                What is Bent GFRP Rebar?
              </div>

              <div className="mb-6 mt-2 text-gray-600 leading-1 font-semibold">
                The Smart Choice for Base Slabs and Floors
              </div>

              <p className="text-[16px] mt-4 text-gray-600">
                Bent GFRP Rebar is a modern composite material that consists of
                a high tensile strength GFRP Rebar and polymer resin matrix.
                Engineers craft it into shapes such as hooks, angles, or curves
                to cater to specific construction requirements. Unlike
                traditional steel, bent GFRP rebar is designed to endure harsh
                environmental conditions without corroding or deteriorating.
              </p>

              <p className="text-[16px] mt-4 text-gray-600">
                This makes it especially useful in projects requiring
                long-lasting durability, resistance to chemical exposure, and
                superior performance in demanding conditions.
              </p>

              <button className="mt-6 bg-[#347A64] w-[200px] h-[50px] rounded flex items-center justify-center text-white font-semibold hover:bg-[#347A64] transition">
                Download Brochure
              </button>
            </div>

            {/* Right Image */}
            <div className="mt-20 h-[400px] w-[300px] flex items-center justify-center">
              <img
                src="/main-assets/img/service/Bent-GFRP.jpg"
                alt="Building"
                className=""
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mt-10 px-6 space-y-4 text-gray-600">
          <p>
            The composition of Bent GFRP rebar allows it to combine strength
            with flexibility. This unique combination ensures that it meets the
            structural demands of modern construction while being easy to work
            with. Whether used in infrastructure projects or industrial
            settings, bent GFRP rebar proves to be an invaluable addition to the
            construction industry.
          </p>

          <p>
            Bent GFRP Rebar, Bent Glass Fibre Reinforced Polymer, is a modern
            construction material. It is a substitute for steel reinforcement
            bars. Bent GFRP Rebar offers durability, corrosion resistance,
            strength, lightweight, and non-conductive properties, making it an
            ideal choice for various construction applications.
          </p>
        </div>

        {/* ================= RIGHT FIXED ICON + SLIDE DETAILS ================= */}
        <div
          className="fixed right-0 top-90 md:top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
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
                info@fiberonrebar.com
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
                +91 92748 31310
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
                Morbi, Gujrat, India
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
