"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

const Service = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          {/* <p className="text-[#4c8b78] font-semibold tracking-wide uppercase mb-2">
            What We Do
          </p> */}
          <div className="text-3xl md:text-[45px] font-bold text-[#4c8b78]">
            Our Services That We Provide
          </div>
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div className="mb-20">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src="/main-assets/img/service/BAR.png"
              alt="Rebar Services"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl border-t-4 border-[#4c8b78] shadow-md p-6 hover:shadow-xl transition">
            <span className="text-4xl font-bold text-[#4c8b78]">01</span>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              General Construction
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              There are many passages of lorem ipsum available.
            </p>
            <Link
              href="/pages/innerpage/service-details"
              className="inline-flex items-center gap-2 mt-5 text-[#4c8b78] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border-t-4 border-[#4c8b78] shadow-md p-6 hover:shadow-xl transition">
            <span className="text-4xl font-bold text-[#4c8b78]">02</span>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              Renovation & Remodeling
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              There are many passages of lorem ipsum available.
            </p>
            <Link
              href="/pages/innerpage/service-details"
              className="inline-flex items-center gap-2 mt-5 text-[#4c8b78] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border-t-4 border-[#4c8b78] shadow-md p-6 hover:shadow-xl transition">
            <span className="text-4xl font-bold text-[#4c8b78]">03</span>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              Commercial Construction
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              There are many passages of lorem ipsum available.
            </p>
            <Link
              href="/pages/innerpage/service-details"
              className="inline-flex items-center gap-2 mt-5 text-[#4c8b78] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border-t-4 border-[#4c8b78] shadow-md p-6 hover:shadow-xl transition">
            <span className="text-4xl font-bold text-[#4c8b78]">04</span>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              Virtual Design & Building
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              There are many passages of lorem ipsum available.
            </p>
            <Link
              href="/pages/innerpage/service-details"
              className="inline-flex items-center gap-2 mt-5 text-[#4c8b78] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* ================= CTA SECTION ================= */}
        <div className="mt-20 bg-[#4c8b78] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between text-white">
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
