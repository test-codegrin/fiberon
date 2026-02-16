/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";

export default function DurablePage() {
  return (
    <section className="w-full bg-white py-0 md:mt-3">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <div>
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
        <p className="text-gray-700 leading-relaxed mb-10">
          Durability is crucial in ensuring the safety and longevity of
          construction projects. Builders and contractors constantly face
          challenges that threaten the durability of structures, including
          material fatigue, environmental stress, and maintenance costs. GFRP
          Rebar (Glass Fiber Reinforced Polymer Rebar) offers exceptional
          resistance, cost-effectiveness, non-conductive, and lighter,
          strengthening and prolonging the lifespan of the structures.
        </p>

        {/* CHALLENGES */}
        <div className="text-2xl md:text-3xl font-semibold text-[#347A64] mb-3">
          Challenges to Achieving Durable Structures
        </div>

        <p className="text-gray-700 mb-6">
          In construction, durability determines the ability of structures to
          withstand time, weather, and usage. Traditional materials like steel
          often fall short due to environmental factors. Steel reinforcement
          corrodes over time, weakening the integrity of buildings and
          infrastructure.
        </p>

        <div className="space-y-4 mb-6">
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

        <p>
          Builders need a solution that ensures lasting durability and reduces
          the need for frequent maintenance.
        </p>

        {/* TWO COLUMN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* TEXT */}
          <div>
            <div className="text-2xl md:text-3xl font-semibold text-[#347A64] mb-3">
              What Is GFRP Rebar?
            </div>
            <p className="text-gray-700 mb-3">
              GFRP Rebar stands for Glass Fiber Reinforced Polymer Rebar. This
              advanced composite material consists of high-strength glass fibres
              bonded with a polymer resin matrix. Unlike steel rebar, GFRP Rebar
              resists corrosion, making it ideal for durable construction.
            </p>
            <p className="text-gray-700 mb-6">
              GFRP Rebar’s lightweight, high tensile strength, and non-corrosive
              properties ensure that structures remain stronger and safe over
              time. It eliminates the risks associated with steel corrosion,
              enabling long-term durability in challenging environments.
            </p>

            <Link
              className="w-45 h-12.5 bg-[#347A64] mt-6 rounded flex items-center justify-center text-white font-semibold hover:bg-[#2f6b58] transition"
              href="/contact?subject=Download%20Brochure"
            >
              <button>Download Brochure</button>
            </Link>
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
        <div>
          {/* ================= EFFECTS ================= */}
          <div className="text-2xl md:text-3xl font-semibold text-[#347A64] mb-6">
            Why Choose GFRP Rebar for Durable Construction?
          </div>

          <p>
            GFRP Rebar provides unparalleled durability for modern construction
            needs. Here’s why:
          </p>

          <ol className="list-decimal px-3 space-y-4 text-gray-700 leading-relaxed mb-8">
            <li>
              <b className="text-[#347A64]">Superior Durability:</b> GFRP Rebar
              resists moisture, chemicals, and environmental stressors, ensuring
              long-term structural integrity. GFRP Rebar is 2 times stronger and
              ¼ lighter than traditional steel rebar. It makes the construction
              stronger and can handle heavy traffic.
            </li>

            <li>
              <b className="text-[#347A64]">Corrosion Resistance:</b> Unlike
              steel, GFRP Rebar does not rust, even in humid or chemically
              aggressive conditions. The combination of glass fibres and polymer
              resin ensures that GFRP Rebar can withstand exposure to water,
              humidity, and harsh chemicals without rusting.
            </li>

            <li>
              <b className="text-[#347A64]">
                Lightweight and Easy Installation:
              </b>{" "}
              GFRP Rebar is ¼ the weight of steel, simplifying transportation
              and reducing installation time and labour costs. GFRP Rebar is an
              ideal choice for construction where weight is a major concern.
            </li>

            <li>
              <b className="text-[#347A64]">Cost-Effectiveness:</b> GFRP Rebar
              is a durable construction material That increases the life span of
              construction. It decreases the maintenance costs and time.
            </li>

            <li>
              <b className="text-[#347A64]">High Strength-to-Weight Ratio:</b>{" "}
              GFRP Rebar provides twice the tensile strength of steel, ensuring
              stronger and more reliable construction. GFRP bars are ¼ lighter
              than traditional steel rebar. It makes the construction lighter
              and provides more strength, so construction can withstand harsh
              conditions.
            </li>
          </ol>
        </div>

        {/* APPLICATIONS */}
        <div className="text-2xl md:text-3xl font-semibold text-[#347A64] mb-6">
          Applications of GFRP Rebars
        </div>

        <div className="space-y-3 mb-16 list-none">
          <li>
            <b className="text-[#347A64]">Marine Structures:</b> It resists
            saltwater and humidity, ensuring lasting durability in coastal and
            offshore projects.
          </li>

          <li>
            <b className="text-[#347A64]">Industrial Plants:</b> GFRP Rebar
            withstands chemicals and corrosive materials, making it ideal for
            industrial floors and power plants. GFRP Rebar is a stronger
            material that can handle heavy traffic in industrial plants and make
            it more durable for industrial construction.
          </li>

          <li>
            <b className="text-[#347A64]">Bridges and Highways:</b> Its
            corrosion resistance enhances the lifespan of infrastructure exposed
            to de-icing salts and environmental wear. GFRP Rebar is a stronger
            and lighter material. Bridges and highways go through heavy
            transportation, and construction should require materials that can
            handle traffic and harsh conditions.
          </li>

          <li>
            <b className="text-[#347A64]">Water Treatment Plants:</b> GFRP Rebar
            endures moisture and chemical exposure, making it a reliable choice
            for wastewater treatment facilities.
          </li>

          <p>
            <b className="text-[#347A64]">
              Residential and Commercial Buildings:
            </b>{" "}
            GFRP Rebar strengthens foundations, parking garages, and rooftop
            pools, offering a long-lasting solution for urban construction.
          </p>
        </div>

        {/* CONCLUSION */}
        <div className="">
          <div className="text-2xl md:text-3xl font-semibold text-[#347A64] mb-3">
            Comparison: GFRP Rebar vs Steel Rebar for Durability
          </div>
          <p className="text-gray-700">
            Glass Fibre Glass-reinforced polymer comes with various properties
            such as corrosion resistance, strength, lightweight, non-conductive,
            etc. The properties of GFRP Rebars make them durable construction
            materials. Steel is prone to corrosion when exposed to moisture,
            chemicals, or harsh environments, leading to frequent maintenance,
            structural degradation, and reduced lifespan. Additionally, its
            heavy weight increases transportation and installation costs. In
            contrast, GFRP Rebar is corrosion-resistant, lightweight (75%
            lighter than steel), and twice as strong, ensuring superior
            load-bearing capacity and structural integrity. With a longer
            lifespan, minimal maintenance needs, and cost-effectiveness, GFRP
            Rebar is the ideal choice for durable, sustainable construction.
          </p>
        </div>

        <div className="">
          <h2 className="text-2xl font-semibold text-[#347A64] mb-3">
            Conclusion: GFRP Rebar – The Key to Durable Construction
          </h2>
          <p className="text-gray-700">
            For builders and contractors seeking long-lasting solutions, GFRP
            Rebar is the answer. Its corrosion-resistant, lightweight, and
            durable properties make it the ultimate choice for modern
            construction projects. Whether it’s marine environments, industrial
            plants, or residential buildings, GFRP Rebar provides unmatched
            durability and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
