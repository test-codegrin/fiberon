"use client";

import Link from "next/link";

const BreadcumbSeven = () => {
  return (
    <section
      className="relative w-full py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/main-assets/img/bg/breadcrumb-bg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Our Projects
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-3 text-sm md:text-base">
          <Link
            href="/pages/homepage/home-1"
            className="flex items-center gap-2 text-white hover:text-[#347A63] transition font-medium"
          >
            HOME
          </Link>

          <span className="text-gray-300">/</span>

          <span className="text-[#347A63] font-semibold">
            OUR PROJECTS
          </span>
        </div>
      </div>
    </section>
  );
};

export default BreadcumbSeven;
