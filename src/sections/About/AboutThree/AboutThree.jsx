"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";

const About = () => {
  const [activeHover, setActiveHover] = useState(null);
  return (
    <section
      id="about-sec"
      className="relative overflow-hidden max-w-[1400px] mx-auto py-0 bg-white"
    >
      <div className="relative md:h-[1000px] py-50 max-w-[1400px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="relative flex justify-between">
            <div className="h-[800px]">
              <img
                src="/main-assets/img/normal/about_2-1.png"
                alt="About"
                className="w-full max-w-[600px] rounded-xl shadow-lg"
              />
            </div>

            {/* Experience Counter */}
            <div className="absolute bottom-30 md:bottom-0 w-[250px] h-[210px] right-10 bg-[#347A64] rounded-xl px-0 py-5 shadow-md">
              <div className="flex justify-center gap-4">
                <div className="w-25 h-25">
                  <img
                    src="/main-assets/img/hero/trusted-white.webp"
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold w-auto text-white">
                    <CountUp start={0} end={40} duration={1} /> +
                  </h3>
                  <p className="text-sm text-white">Business Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="flex justify-center md:justify-start underline leading-2 items-center gap-1.5 text-2xl font-semibold text-[#347A64] uppercase">
              About Us
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#347A64]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#347A64]">FIBERON</b> was founded with a
                single vision to redefine how the world builds strength. We are
                a new-generation manufacturer of GFRP (Glass Fibre Reinforced
                Polymer) Rebars, engineered for unmatched durability, tensile
                power, and long-lasting performance.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#347A64]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#347A64]">Driven by a team</b> of passionate
                enginners and innovators,{" "}
                <b className="text-[#347A64]">FIBERON</b> combines advanced
                materials, cutting-edge technology, and a deep understanding of
                modern construction challenges. Our rebars are four times
                lighter than steel yet completely resistant to corrosion, rust,
                and chemicals, making them ideal for bridges, highways, and
                marine infrastructure.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#347A64]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#347A64]">Over the years, FIBERON</b> has
                earned trust across Indias infrastructure sector for
                engineering reliability that endures generations. Every bar we
                produce is enhanced with nano composite reinforcement
                technology, delivering superior strength, flexibility, and
                sustainability.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#347A64]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#347A64]">With</b> an unwavering commitment
                to quality and innovation, we aim to help India build stronger,
                smarter, and more enduring structures.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#347A64]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#347A64]">At FIBERON,</b> we do not just
                make rebars; we engineer confidence and durability in every bar.
              </p>
            </div>

            <div className="bg-[#347A64] p-1.5 text-center text-white text-[19px] my-6 border-l-4 border-[#347A64]">
              <p className="text-white mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                GFRP REBAR IS APPROVED BY HYDERABAD IIT - MUMBAI IIT AND
                ALSO APPROVED BY GOVT OF INDIA
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/pages/innerpage/about"
              className="inline-flex items-center gap-1.5 px-8 py-3 text-white font-semibold rounded-md bg-[#347A64] transition"
            >
              Explore Our Company
              <i className="ri-arrow-right-up-line text-[20px]"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= RIGHT FIXED ICON + SLIDE DETAILS ================= */}
        <div
          className="fixed right-0 md:top-80 lg:top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
          onMouseLeave={() => setActiveHover(null)}>
          {/* ===== Email ===== */}
          <div
            onMouseEnter={() => setActiveHover("email")}
            className="relative h-[50px] w-[260px]">
            {/* Sliding Text */}
            <div
              className={`absolute right-[50px] top-0 h-full flex items-center bg-white text-[#347A64] shadow-md border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "email"
                  ? "translate-x-0"
                  : "translate-x-[230px]"
              }`}>
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
    </section>
  );
};

export default About;
