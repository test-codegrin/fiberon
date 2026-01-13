import Image from "next/image";

export default function ProductsPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-black leading-tight">
            GFRP REBAR : Building Tomorrow Today.
          </h1>
          <p className="mt-4 text-gray-600">
            The Pioneers Of GFRP Rebar In India.
          </p>

          <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded">
            Download Brochure
          </button>
        </div>

        <div className="flex justify-end">
          <img
            src="/images/hero-rebar.png"
            alt="GFRP Rebar"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="bg-yellow-400 py-14">
        <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-5 gap-8 items-center text-white">

          {[
            ["5000+", "Projects Completed"],
            ["17+", "Years of Experience"],
            ["5000+", "Metric Tons Sold"],
            ["100%", "Customer Satisfied"],
          ].map(([num, label], i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl font-bold">{num}</h3>
              <p className="mt-2">{label}</p>
            </div>
          ))}

          <img
            src="/images/stats-worker.png"
            alt="Worker"
            width={200}
            height={250}
            className="mx-auto"
          />
        </div>
      </section>

      {/* ================= ABOUT GFRP ================= */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/images/gfrp-bundle.png"
          alt="GFRP Rebars"
          width={500}
          height={350}
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">GFRP Rebar</h2>
          <p className="text-gray-700 leading-relaxed">
            GFRP Rebar, or Glass Fibre Reinforced Polymer, is a modern
            construction composite rebar. It is a substitute for steel rebar.
            GFRP bars are corrosion resistant, stronger, lighter, cheaper,
            non-conductive, and cost-effective.
          </p>

          <button className="mt-6 bg-yellow-400 text-black px-6 py-3 font-semibold rounded">
            Download Brochure
          </button>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="bg-yellow-400 py-20">
        <h2 className="text-center text-3xl font-bold mb-14">
          MRG GFRP Rebar Advantages
        </h2>

        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 text-center">
          {[
            "Corrosion Resistant",
            "Stronger",
            "Lighter",
            "Cost Effective",
            "Zero Maintenance",
            "Longer Life Span",
            "Eco Friendly",
            "Dielectric",
            "Easy To Transport",
            "Water Resistant",
            "Less Thermal Expansion",
            "Radio Transparent",
          ].map((item, i) => (
            <div key={i} className="font-semibold text-black">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= ATTRIBUTES ================= */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/grid-bg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Attributes Of MRG GFRP Rebars
          </h2>

          <div className="bg-yellow-400 p-8 rounded-xl max-w-xl">
            <h3 className="font-bold mb-4">Corrosion Free Application</h3>
            <ul className="list-decimal ml-5 space-y-2">
              <li>Marine precast walls</li>
              <li>Railway sleepers</li>
              <li>Bridge decks</li>
              <li>Roads & Infrastructure</li>
              <li>Underwater structures</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= APPLICATION GRID ================= */}
      <section className="py-20 max-w-[1300px] mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-14">
          GFRP Rebar Application
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {[
            "Base Slab",
            "RCC Roads",
            "Foundations",
            "Swimming Pools",
            "Drainage",
            "Bridge Decks",
          ].map((title, i) => (
            <div key={i} className="border p-4 text-center">
              <img
                src={`/images/app${i + 1}.jpg`}
                alt={title}
                width={300}
                height={200}
                className="mx-auto mb-4"
              />
              <h4 className="font-semibold">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="bg-black py-20 text-white">
        <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-6">
              Get high performance GFRP composites at best prices.
            </p>

            <p>📍 Nashik, Maharashtra</p>
            <p className="mt-2">📧 info@mrg-composites.com</p>
            <p className="mt-2">📞 +91 98765 43210</p>
          </div>

          <form className="grid grid-cols-2 gap-4">
            <input className="p-3 col-span-1" placeholder="First Name" />
            <input className="p-3 col-span-1" placeholder="Last Name" />
            <input className="p-3 col-span-2" placeholder="Email" />
            <textarea
              className="p-3 col-span-2"
              placeholder="Message"
              rows="4"
            ></textarea>

            <button className="bg-yellow-400 text-black px-6 py-3 col-span-2 font-semibold">
              Submit Form
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
