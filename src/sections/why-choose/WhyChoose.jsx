"use client";
import { useState } from "react";
import Link from "next/link";
const PRIMARY = "#347A64";

export default function WhyChooseBentGFRP() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Coastal and Marine Projects",
      content:
        "Corrosion resistance ensures structural longevity in salt-laden environments.",
    },
    {
      title: "Infrastructure Development",
      content:
        "Ideal for bridges, highways, and tunnels due to durability and lightweight properties.",
    },
    {
      title: "Industrial Facilities",
      content:
        "Performs exceptionally well in chemically aggressive and high-temperature environments.",
    },
  ];

  return (
    <section className="relative w-full bg-cover bg-center py-10">
      {/* OVERLAY */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-350 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div data-aos="fade-up" className="">
            <h2 className="text-4xl text-[#347A64] font-bold mb-6">
              Why Choose Bent GFRP Rebar?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              Choosing bent GFRP rebar ensures that construction projects
              achieve superior performance, cost savings, and sustainability.
              Its unique properties make it the material of choice for
              demanding environments.
            </p>

            <Link className="w-45 h-12.5 bg-[#347A64] mt-6 rounded flex items-center justify-center text-white font-semibold hover:bg-[#2f6b58] transition" href="/contact?subject=Download%20Brochure">
                <button>
                  Download Brochure
                </button>
              </Link>
          </div>

          {/* ================= RIGHT ACCORDION ================= */}
          <div data-aos="fade-down" className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-md">
                {/* HEADER */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className={`w-full flex items-center justify-between px-6 py-3 border-2 font-semibold text-left transition ${
                    openIndex === index
                      ? "bg-[#FFF] text-[#347A64]"
                      : "text-[#347A64] bg-[#FFF]"
                  }`}
                  // style={{
                  //   backgroundColor:
                  //     openIndex === index ? "#FFF" : "PRIMARY",
                  // }}
                >
                  <span>{item.title}</span>
                  <span
                    className={`w-10 h-10 flex items-center justify-center text-xl font-bold ${
                      openIndex === index
                        ? "bg-[#347A64] text-[#fff] "
                        : "bg-[#fff] text-[#347A64]"
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* CONTENT */}
                {openIndex === index && (
                  <div
                    className="px-6 py-5 text-[#fff] border-b-4 border-[#FFF] rounded-b-lg"
                    style={{ backgroundColor: "#347A64" }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}