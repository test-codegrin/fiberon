"use client";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="max-w-350 mx-auto text-gray-700">
      {/* ================= HERO SECTION ================= */}
      <section className="text-[#347A63] py-20 text-center">
        <div className="max-w-350 mx-auto px-6">
          <div className="text-4xl md:text-5xl font-bold mb-2">GFRP REBAR</div>
          <div className="text-xl md:text-2xl font-medium mb-2">
            Strength You Can Trust
          </div>
          <div className="max-w-3xl xl:text-xl w-150 mx-auto opacity-90">
            The pioneers of GFRP Rebar manufacturing in India, delivering
            corrosion-free and future-ready construction solutions.
          </div>
        </div>
      </section>

      {/* ================= WHAT IS GFRP ================= */}
      <section className="max-w-350 mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-md p-10">
          <h2 className="text-3xl font-bold text-[#347A63] mb-6">
            What is GFRP Rebar?
          </h2>
          <p className="mb-4">
            Glass Fibre Reinforced Polymer (GFRP) Rebar is a next-generation
            reinforcement solution. It is corrosion-resistant, lightweight,
            stronger than steel, non-conductive, and highly durable for
            aggressive environments.
          </p>

          <h3 className="text-xl font-semibold text-[#347A63] mt-8 mb-4">
            Corrosion-Free Applications
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm list-disc pl-5">
            <li>Marine precast walls</li>
            <li>Railway sleepers</li>
            <li>Bridge decks & slabs</li>
            <li>Road infrastructure</li>
            <li>Underwater structures</li>
            <li>Non-conductive & non-magnetic applications</li>
            <li>Chemical & industrial resistance</li>
            <li>Multiple structural use-cases</li>
          </ul>
        </div>
      </section>

      {/* ================= BENT GFRP ================= */}
      <section className="bg-white py-16">
        <div className="max-w-350 mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-[#347A63]">
            What is Bent GFRP Rebar?
          </h2>
          <p className="text-lg font-medium text-gray-800">
            The Smart Choice for Base Slabs and Floors
          </p>

          <p>
            Bent GFRP Rebar is a modern composite material made from high
            tensile strength GFRP rebar and polymer resin matrix. Engineers
            craft it into hooks, angles, and curves to meet specific structural
            requirements.
          </p>

          <p>
            Unlike traditional steel, bent GFRP rebar resists corrosion,
            chemical exposure, moisture, and harsh environmental conditions. It
            combines flexibility with strength, making it ideal for
            infrastructure and industrial applications.
          </p>

          <p>
            Bent Glass Fibre Reinforced Polymer is a substitute for steel
            reinforcement bars. It offers durability, lightweight performance,
            non-conductive properties, and long-term structural reliability.
          </p>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="max-w-350 mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#347A63] text-center mb-30">
          Advantages of Bent GFRP Rebar
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Corrosion Resistance",
              desc: "Does not rust or degrade when exposed to moisture, chemicals, or salts. Reduces maintenance and replacement costs.",
            },
            {
              title: "Lightweight",
              desc: "Significantly lighter than steel, easier to transport and install while maintaining superior strength.",
            },
            {
              title: "Non-Conductive & Non-Magnetic",
              desc: "Ideal for medical facilities, power plants, and sensitive environments.",
            },
            {
              title: "Environmentally Friendly",
              desc: "Lower carbon footprint than steel production and longer service life.",
            },
            {
              title: "High Strength-to-Weight Ratio",
              desc: "Provides exceptional tensile strength without adding unnecessary structural weight.",
            },
            {
              title: "Thermal Compatibility",
              desc: "Minimal thermal expansion ensures compatibility with concrete in fluctuating temperatures.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#347A63] mb-3">
                ✓ {item.title}
              </h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-[#347A63] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Bent GFRP Rebar?
          </h2>
          <p className="mb-8 opacity-90">
            Choosing bent GFRP rebar ensures superior performance, long-term
            cost savings, and sustainability. Its unique properties make it the
            material of choice for demanding environments.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Download%20Brochure"
              className="bg-white text-[#347A63] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Download Brochure
            </Link>
            <Link
              href="/contact"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#347A63] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
