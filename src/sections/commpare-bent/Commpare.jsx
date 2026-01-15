"use client";

import Image from "next/image";

export default function Advantages() {
  return (
    <>
      {/* ================= ADVANTAGES SECTION ================= */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-[#347A64] md:text-4xl font-bold text-center">
            Bent GFRP Rebar vs. Steel Rebar
          </h2>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-14 mt-[30px]">
            {/* LEFT */}
            <div className="space-y-12">
              {[
                {
                  title: "Weight",
                  desc: "GFRP rebar is ¼ lighter than traditional steel rebar. It is lightweight and easier to handle, while steel is heavy and requires more effort during installation.",
                },
                {
                  title: "Cost Efficiency",
                  desc: "Bent GFRP Rebar decreases maintenance costs due to its corrosion resistance, whereas steel requires frequent repairs and replacements.",
                },
                {
                  title: "Durability",
                  desc: "GFRP rebar offers long-term durability with minimal maintenance, while steel often demands regular upkeep.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-[45px] rounded-full bg-[#347A64] text-white font-bold">
                    <div className="flex w-10 h-10  items-center justify-center">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#347A64] font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="space-y-12">
              {[
                {
                  title: "Magnetic Properties",
                  desc: "GFRP rebar is non-magnetic, making it ideal for sensitive environments where steel causes interference.",
                },
                {
                  title: "Corrosion Resistance",
                  desc: "Bent GFRP rebar resists corrosion, unlike steel rebar which is prone to rust over time.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-[45px] rounded-full bg-[#347A64] text-white font-bold">
                    <div className="flex w-10 h-10  items-center justify-center">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#347A64] font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS IMAGE SECTION ================= */}
      <section className="w-full bg-[#f9f9f9] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-[#347A63] font-bold text-center mb-6">
            Applications of Bent GFRP Rebar
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Bent GFRP rebar has become an essential component in modern
            construction projects due to its adaptability, durability, and
            corrosion resistance.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Bridge Decks and Curbs",
                text: "Bent GFRP rebar reinforces bridge decks and curbs, providing excellent corrosion resistance and longer service life.",
                img: "/main-assets/img/service/Bridge.jpg",
              },
              {
                title: "Road and Highway Construction",
                text: "Used in retaining walls, barriers, and foundations to enhance durability and structural stability.",
                img: "/main-assets/img/service/Road.jpg",
              },
              {
                title: "Tunnels",
                text: "Lightweight and non-magnetic properties make it ideal for underground and tunneling structures.",
                img: "/main-assets/img/service/Tunnels.jpg",
              },
              {
                title: "Industrial Flooring",
                text: "Ensures industrial floors remain intact in chemically aggressive environments.",
                img: "/main-assets/img/service/Industrial Flooring.jpg",
              },
              {
                title: "Marine Structures",
                text: "Prevents corrosion in saltwater environments, ideal for docks, piers, and seawalls.",
                img: "/main-assets/img/service/Marine Structures.webp",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border-b-4 border-[#347A63] rounded-lg shadow-lg p-6 flex gap-5"
              >
                <div className="w-34 h-34 relative flex-shrink-0 rounded-md overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#347A63] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
