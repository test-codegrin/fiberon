"use client";

import Portfolio from "~/sections/Home-2/Portfolio";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Product() {
  const metalRebar = [
    ["2.75 kg", "Ø6"],
    ["4.74 kg", "Ø8"],
    ["7.40 kg", "Ø10"],
    ["10.65 kg", "Ø12"],
    ["14.52 kg", "Ø14"],
    ["18.93 kg", "Ø16"],
    ["24.00 kg", "Ø18"],
    ["35.76 kg", "Ø22"],
    ["46.22 kg", "Ø25"],
    ["58.02 kg", "Ø28"],
    ["75.79 kg", "Ø32"],
  ];

  const frpRebar = [
    ["0.46 kg", "Ø4.5"],
    ["0.57 kg", "Ø6"],
    ["0.94 kg", "Ø7"],
    ["1.23 kg", "Ø8"],
    ["1.65 kg", "Ø10"],
    ["2.48 kg", "Ø12"],
    ["3.24 kg", "Ø14"],
    ["4.87 kg", "Ø16"],
    ["6.28 kg", "Ø18"],
    ["8.08 kg", "Ø20"],
    ["9.80 kg", "Ø22"],
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 flex justify-between items-center">
        <div className="w-[600px]">
          <div className="text-4xl md:text-5xl font-bold leading-tight text-[#347A64]">
            GFRP Rebar
            <span className="block text-black">Building Tomorrow Today</span>
          </div>

          <p className="mt-6 text-gray-600 text-lg">
            The pioneers of GFRP Rebar manufacturing in India, delivering
            corrosion-free and future-ready construction solutions.
          </p>

          <button className="mt-8 bg-[#347A64] text-white font-semibold px-8 py-3 rounded-md hover:opacity-90 transition">
            Download Brochure
          </button>
        </div>

        <div className="w-[350px] h-[320px] bg-gray-100 rounded-xl">
          <img
            src="/main-assets/img/product/steel-3.webp"
            alt="steel-3"
            className="h-[320px] rounded-xl"
          />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-[#347A64] max-w-[1400px] mx-auto py-20 text-white">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 items-center text-center">
          {[
            ["5000+", "Projects Completed"],
            ["17+", "Years of Experience"],
            ["5000+", "Metric Tons Sold"],
            ["100%", "Customer Satisfaction"],
          ].map(([value, label], i) => (
            <div key={i}>
              <div className="text-4xl font-bold">{value}</div>
              <p className="mt-2 text-sm opacity-90">{label}</p>
            </div>
          ))}

          <div className="w-full h-[220px]">
            <img
              src="/main-assets/img/product/shop-man.png"
              className="h-100 max-w-auto mx-auto"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ================= GFRP INFO ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div className="w-full h-[360px] bg-[#347A64] rounded-xl">
          <img src="/main-assets/img/product/steel.png" alt="GFRP Info" />
        </div>

        <div>
          <div className="text-4xl font-bold text-[#347A64] mb-6">
            What is GFRP Rebar?
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            Glass Fibre Reinforced Polymer (GFRP) Rebar is a next-generation
            reinforcement solution. It is corrosion-resistant, lightweight,
            stronger than steel, non-conductive, and highly durable for
            aggressive environments.
          </p>

          <button className="mt-8 bg-[#347A64] text-white px-8 py-4 font-semibold rounded-md hover:opacity-90 transition">
            Download Brochure
          </button>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="bg-gray-50 py-24">
        {/* Section Title */}
        <div className="text-center text-3xl font-bold text-[#347A64] mb-16">
          MRG GFRP Rebar Advantages
        </div>

        {/* Advantages Grid */}
        <div className="bg-[#347A64] max-w-[1400px] mx-auto py-16 px-6 rounded-2xl">
          <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-center">
            {[
              {
                title: "Corrosion Resistant",
                img: "/main-assets/img/product/1-1.png",
              },
              { title: "Stronger", img: "/main-assets/img/product/1-2.png" },
              { title: "Lighter", img: "/main-assets/img/product/3.png" },
              {
                title: "Cost Effective",
                img: "/main-assets/img/product/4.png",
              },
              {
                title: "Zero Maintenance",
                img: "/main-assets/img/product/5-2.png",
              },
              {
                title: "Longer Life Span",
                img: "/main-assets/img/product/6.png",
              },
              { title: "Eco Friendly", img: "/main-assets/img/product/7.png" },
              { title: "Dielectric", img: "/main-assets/img/product/8.png" },
              {
                title: "Easy Transport",
                img: "/main-assets/img/product/9.png",
              },
              {
                title: "Water Resistant",
                img: "/main-assets/img/product/10.png",
              },
              {
                title: "Low Thermal Expansion",
                img: "/main-assets/img/product/11.png",
              },
              {
                title: "Radio Transparent",
                img: "/main-assets/img/product/12-1.png",
              },
              { title: "Durable", img: "/main-assets/img/product/13.png" },
              {
                title: "Lower Installation Cost",
                img: "/main-assets/img/product/14.png",
              },
              {
                title: "Easy Site Handling",
                img: "/main-assets/img/product/15.png",
              },
              {
                title: "Faster Installation",
                img: "/main-assets/img/product/16.png",
              },
              {
                title: "Reduced Concrete Cover",
                img: "/main-assets/img/product/17-1.png",
              },
              {
                title: "Overlap Cost Savings",
                img: "/main-assets/img/product/18.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                {/* Title */}
                <p className="font-semibold text-sm text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ATTRIBUTES ================= */}
      <section
        className="relative max-w-[1400px] mx-auto py-24 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/main-assets/img/product/steel-1.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative">
          <div className="text-4xl font-semibold text-white max-w-155 w-full mx-auto h-15 bg-[#347A64] mb-16">
            <div className="flex items-center justify-center h-full">
              Attributes of MRG GFRP Rebars
            </div>
          </div>

          <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="bg-[#347A64] text-white p-10 rounded-2xl shadow-xl">
              <div className="font-bold text-2xl mb-6">
                Corrosion-Free Applications
              </div>

              <ol className="list-decimal ml-5 space-y-2 text-md">
                <li>Marine precast walls</li>
                <li>Railway sleepers</li>
                <li>Bridge decks & slabs</li>
                <li>Road infrastructure</li>
                <li>Underwater structures</li>
              </ol>

              <div className="mt-8 space-y-3 text-md">
                <p>• Non-conductive & non-magnetic applications</p>
                <p>• Chemical & industrial resistance</p>
                <p>• Multiple structural use-cases</p>
              </div>
            </div>

            {/* Right Image / Visual */}
            <div className="w-full h-[320px] rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/main-assets/img/product/steel-2.jpg"
                alt="GFRP Rebar"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATION GRID ================= */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center text-3xl font-bold text-[#347A64] mb-16">
          GFRP Rebar Applications
        </div>

        {/* Application Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              title: "Parking Areas",
              img: "/main-assets/img/product/parking-area.jpg",
            },
            {
              title: "Concrete Slabs",
              img: "/main-assets/img/product/concrete-slab.jpg",
            },
            {
              title: "Industrial Roofing",
              img: "/main-assets/img/product/industrial-roffting.avif",
            },
            {
              title: "RCC Roads",
              img: "/main-assets/img/product/rcc-roads.avif",
            },
            {
              title: "Drainage Systems",
              img: "/main-assets/img/product/drainage-system.jpg",
            },
            {
              title: "Pavements",
              img: "/main-assets/img/product/pavements.avif",
            },
            {
              title: "Friction Slabs",
              img: "/main-assets/img/product/pavements.avif",
            },
            {
              title: "Foundations",
              img: "/main-assets/img/product/foundations.jpg",
            },
            {
              title: "Precaste Elements",
              img: "/main-assets/img/product/precaste elements.avif",
            },
            {
              title: "Crash Barriers",
              img: "/main-assets/img/product/crash-barriers.jpg",
            },
            {
              title: "Chemical Plants",
              img: "/main-assets/img/product/chemical plants.avif",
            },
            {
              title: "Walls",
              img: "/main-assets/img/product/walls.avif",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group border rounded-2xl overflow-hidden text-center hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-2 border-b-3 border-[#347A64] rounded-2xl">
                <div className="font-semibold text-md text-[#347A64] ">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-10 md:mb-14">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#347A64] mb-2">
              Table of Substitution
            </div>
            <p className="text-[#347A64] max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
              Equivalent tensile strength comparison between Metal Rebar and FRP
              Rebar
            </p>
          </div>

          {/* ================= TABLE WRAPPER ================= */}
          <div className="rounded-2xl p-4 sm:p-5 md:p-8 overflow-x-auto">
            <div className="min-w-[280px] md:min-w-full grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-6">
              {/* ================= METAL TABLE ================= */}
              <div>
                <div className="bg-[#224F3E] p-3 mb-2">
                  <h4 className="text-center text-white font-semibold mb-3 tracking-wide text-sm md:text-base">
                    METAL REBAR
                  </h4>

                  <div className="max-w-[400px] uppercase text-white mb-2 mx-auto flex justify-between text-xs md:text-[16px]">
                    <div className="border w-[48%] py-2 text-center">
                      Weight <br /> (PER 12m BAR)
                    </div>
                    <div className="border w-[48%] flex items-center justify-center py-2">
                      Diameter
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  {metalRebar.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-2 text-center py-2 md:py-3
                    ${i % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#DADADA]"}`}
                    >
                      <div className="font-medium text-sm md:text-lg text-gray-800">
                        {row[0]}
                      </div>
                      <div className="text-gray-700 text-sm md:text-lg">
                        {row[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= CENTER EQUAL ================= */}
              <div className="hidden md:flex flex-col items-center">
                <div className="h-[48px]" />
                <div className="space-y-2 w-full mt-[114px]">
                  {metalRebar.map((_, i) => (
                    <div
                      key={i}
                      className="h-[38px] mt-[14px] flex items-center justify-center bg-[#347A64] text-white font-bold rounded-sm"
                    >
                      =
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= FRP TABLE ================= */}
              <div>
                <div className="bg-[#224F3E] p-3 mb-2">
                  <h4 className="text-center text-white font-semibold mb-3 tracking-wide text-sm md:text-base">
                    FIBERGLASS REBAR (FRP)
                  </h4>

                  <div className="max-w-[400px] uppercase text-white mb-2 mx-auto flex justify-between text-xs md:text-[16px]">
                    <div className="border w-[48%] py-2 text-center">
                      Weight <br /> (PER 12m BAR)
                    </div>
                    <div className="border w-[48%] flex items-center justify-center py-2">
                      Diameter
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  {frpRebar.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-2 text-center py-2 md:py-3
                    ${i % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#DADADA]"}`}
                    >
                      <div className="font-medium text-sm md:text-lg text-gray-800">
                        {row[0]}
                      </div>
                      <div className="text-gray-700 text-sm md:text-lg">
                        {row[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      {/* ================= CONTACT ================= */}
      <section className="relative max-w-[1400px] rounded-xl mx-auto bg-[#347A64] py-28 text-white">
        {/* Decorative Overlay */}
        <div className="relative max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* ================= LEFT INFO ================= */}
          <div className="space-y-6">
            <div className="text-4xl font-bold mb-6">Contact Us</div>

            <p className="text-white/90 mb-10 text-lg max-w-md">
              Get high-performance GFRP composite solutions designed for
              durability, safety, and long-term cost savings.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  <MapPin />
                </span>
                <span>Nashik, Maharashtra, India</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">
                  <Mail />
                </span>
                <span>info@mrg-composites.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">
                  <Phone />
                </span>
                <span>+91 98765 43210</span>
              </div>
            </div>

            <button className="mt-10 bg-white text-[#347A64] px-10 py-3 font-semibold rounded-lg hover:bg-gray-100 transition">
              Download Brochure
            </button>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl text-black">
            <h3 className="text-2xl font-bold text-[#347A64] mb-6">
              Send Us a Message
            </h3>

            <form className="grid grid-cols-2 gap-5">
              <div className="rounded-lg border border-[#347A64]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="col-span-2 md:col-span-1 p-4 focus:outline-none focus:ring-2 focus:ring-[#347A64]"
                />
              </div>

              <div className="rounded-lg border border-[#347A64]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="col-span-2 md:col-span-1 p-4 focus:outline-none focus:ring-2 focus:ring-[#347A64]"
                />
              </div>

              <div className="rounded-lg border border-[#347A64]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="col-span-2 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#347A64]"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Your Message"
                className="col-span-2 p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#347A64]"
              ></textarea>

              <button
                type="submit"
                className="col-span-2 bg-[#347A64] text-white py-3 font-semibold rounded-lg hover:opacity-90 transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
