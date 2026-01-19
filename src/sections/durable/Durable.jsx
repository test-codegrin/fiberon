/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

export default function DurablePage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded">
            <img
              src="/main-assets/img/product/13.png"
              alt="Corrosion Resistant Icon"
              width={40}
              height={40}
            />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-[#347A64]">
            Durable
          </div>
        </div>

        {/* INTRO */}
        <p className="text-gray-700 leading-relaxed mb-10 max-w-4xl">
          Durability is crucial in ensuring the safety and longevity of
          construction projects. Builders and contractors constantly face
          challenges that threaten the durability of structures, including
          material fatigue, environmental stress, and maintenance costs. GFRP
          Rebar (Glass Fiber Reinforced Polymer Rebar) offers exceptional
          resistance, cost-effectiveness, non-conductive, and lighter,
          strengthening and prolonging the lifespan of the structures.
        </p>

        {/* CHALLENGES */}
        <h2 className="text-2xl font-semibold text-[#347A64] mb-4">
          Challenges to Achieving Durable Structures
        </h2>

        <p className="text-gray-700 mb-6">
          In construction, durability determines the ability of structures to
          withstand time, weather, and usage. Traditional materials like steel
          often fall short due to environmental factors. Steel reinforcement
          corrodes over time, weakening the integrity of buildings and
          infrastructure.
        </p>

        <ul className="space-y-3 mb-12">
          <li className="flex gap-3">
            <span className="text-[#347A64] font-bold">✓</span>
            <p className="text-gray-700">
              <b>Structural Integrity:</b> Environmental stress, such as
              moisture and chemical exposure, degrade materials, causing cracks
              and structural failure.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-[#347A64] font-bold">✓</span>
            <p className="text-gray-700">
              <b>Increased Maintenance Costs:</b> Regular repairs and
              replacements due to material degradation inflate maintenance
              expenses over time.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-[#347A64] font-bold">✓</span>
            <p className="text-gray-700">
              <b>Reduced Lifespan of Structures:</b> Poor material durability
              shortens the lifespan of construction, requiring premature
              replacements and increasing long-term costs.
            </p>
          </li>

            <p>Builders need a solution that ensures lasting durability and reduces the need for frequent maintenance.</p>
        </ul>

        {/* TWO COLUMN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#347A64] mb-4">
              What Is GFRP Rebar?
            </h2>
            <p className="text-gray-700 mb-4">
              GFRP Rebar stands for Glass Fiber Reinforced Polymer Rebar. This
              advanced composite material consists of high-strength glass fibers
              bonded with a polymer resin matrix.
            </p>
            <p className="text-gray-700 mb-6">
              Unlike steel rebar, GFRP rebar resists corrosion, making it ideal
              for durable construction. GFRP rebar’s lightweight, high tensile
              strength, and non-corrosive properties ensure that structures
              remain stronger and safer over time.
            </p>

            <button className="inline-flex items-center rounded-md bg-[#347A64] px-6 py-3 text-white font-semibold hover:bg-opacity-90 transition">
              Download Brochure
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/main-assets/img/product/Roads.jpg"
              alt="GFRP Rebar"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* WHY CHOOSE */}
        <h2 className="text-2xl font-semibold text-[#347A64] mb-6">
          Why Choose GFRP Rebar for Durable Construction?
        </h2>

        <div className="space-y-4 mb-14">
          {[
            "Superior Durability: GFRP rebar resists moisture, chemicals, and environmental stress, ensuring long-term structural integrity.",
            "Corrosion Resistance: Unlike steel, GFRP rebar does not rust, eliminating costly maintenance caused by corrosion.",
            "Lightweight and Easy Installation: GFRP rebar is lightweight, simplifying transportation and reducing installation time and labor costs.",
            "Cost-Effectiveness: Reduced maintenance and longer lifespan translate into lower lifecycle costs.",
            "High Strength-to-Weight Ratio: GFRP rebar provides excellent load-bearing capacity while remaining lightweight.",
          ].map((item, index) => (
            <div key={index} className="flex gap-3">
              <span className="text-[#347A64] font-bold">✓</span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        {/* APPLICATIONS */}
        <h2 className="text-2xl font-semibold text-[#347A64] mb-6">
          Applications of GFRP Rebars
        </h2>

        <div className="space-y-3 mb-16">
          {[
            "Marine Structures: Resistant to saltwater corrosion, ensuring durability in coastal environments.",
            "Industrial Plants: Withstands harsh chemicals and extreme conditions.",
            "Bridges and Highways: Enhances longevity and reduces maintenance needs.",
            "Water Treatment Plants: Ideal for chemically aggressive environments.",
            "Residential & Commercial Buildings: Improves lifespan of foundations, slabs, and rooftops.",
          ].map((item, index) => (
            <div key={index} className="flex gap-3">
              <span className="text-[#347A64] font-bold">✓</span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        {/* CONCLUSION */}
        <h2 className="text-2xl font-semibold text-[#347A64] mb-4">
          Conclusion: GFRP Rebar – The Key to Durable Construction
        </h2>
        <p className="text-gray-700 max-w-4xl">
          For builders and contractors seeking lasting solutions, GFRP rebar is
          the ultimate choice. Its corrosion resistance, lightweight nature, and
          high strength make it ideal for modern construction projects. Whether
          in marine environments, industrial plants, or residential buildings,
          GFRP rebar delivers unmatched durability and reliability.
        </p>
      </div>
    </section>
  );
}
