"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

const Service = () => {
  return (
    <section className="w-full max-w-[1400px] lg:mt-[50px] xl:mt-0 mx-auto py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          {/* <p className="text-[#347A64] font-semibold tracking-wide uppercase mb-2">
            What We Do
          </p> */}
          <div className="text-3xl md:text-[45px] font-bold text-[#347A64]">
            Our Services That We Provide
          </div>
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div className="mb-20">
          <div className="relative overflow-hidden">
            {/* ===== Rod Image ===== */}
            <img
              src="/main-assets/img/hero/All Rods.png"
              alt="Rebar Rod Sizes"
              className="w-full h-auto object-cover"
            />

            {/* ===== Sizes Bar ===== */}
            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur">
              <div className="max-w-350 bg-[#347A63] text-white flex-1 flex gap-20 mx-auto">
                <div className="flex gap-20 items-center text-xs sm:text-sm font-medium ">
                  {[
                    "6 mm",
                    "8 mm",
                    "10 mm",
                  ].map((size) => (
                    <div
                      key={size}
                      className="flex text-center py-2"
                    >
                      {size}
                    </div>
                  ))}
                </div>

                <div className="flex gap-21 items-center text-xs sm:text-sm font-medium">
                  {[
                    "12 mm",
                    "14 mm",
                    "16 mm",
                  ].map((size) => (
                    <div
                      key={size}
                      className="flex text-center py-2 w-[80px] items-center justify-center"
                    >
                      {size}
                    </div>
                  ))}
                </div>

                <div className="flex gap-30 items-center text-xs sm:text-sm font-medium">
                  {[
                    "18 mm",
                    "20 mm",
                    "22 mm",
                  ].map((size) => (
                    <div
                      key={size}
                      className="flex text-center py-2 w-[88px] items-center justify-center"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl border-t-4 border-[#347A64] shadow-md p-6 hover:shadow-xl transition">
            <span className="text-4xl font-bold text-[#347A64]">01</span>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              General Construction
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              There are many passages of lorem ipsum available.
            </p>
            <Link
              href="/pages/innerpage/service-details"
              className="inline-flex items-center gap-2 mt-5 text-[#347A64] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border-t-4 border-[#347A64] shadow-md p-6 hover:shadow-xl transition">
            <span className="text-4xl font-bold text-[#347A64]">02</span>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              Renovation & Remodeling
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              There are many passages of lorem ipsum available.
            </p>
            <Link
              href="/pages/innerpage/service-details"
              className="inline-flex items-center gap-2 mt-5 text-[#347A64] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border-t-4 border-[#347A64] shadow-md p-6 hover:shadow-xl transition">
            <span className="text-4xl font-bold text-[#347A64]">03</span>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              Commercial Construction
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              There are many passages of lorem ipsum available.
            </p>
            <Link
              href="/pages/innerpage/service-details"
              className="inline-flex items-center gap-2 mt-5 text-[#347A64] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border-t-4 border-[#347A64] shadow-md p-6 hover:shadow-xl transition">
            <span className="text-4xl font-bold text-[#347A64]">04</span>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              Virtual Design & Building
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              There are many passages of lorem ipsum available.
            </p>
            <Link
              href="/pages/innerpage/service-details"
              className="inline-flex items-center gap-2 mt-5 text-[#347A64] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* ================= CTA SECTION ================= */}
        <div className="mt-20 bg-[#347A64] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between text-white">
          <div>
            <div className="text-2xl font-bold">
              Need any services?
            </div>
            <p className="text-white/70">
              Get in touch with us today!
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
              <Phone />
            </div>
            <div>
              <Link
                href="tel:+123551579209"
                className="font-semibold text-white text-lg block"
              >
                +123 551 579 209
              </Link>
              <span className="text-sm text-white/80">
                Mon - Sat : 10am - 07pm
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
