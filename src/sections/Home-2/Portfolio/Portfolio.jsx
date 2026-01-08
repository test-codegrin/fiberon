"use client";

const Portfolio = () => {
  return (
    <main className="min-h-screen w-full text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-[#508A76] px-6 py-2 text-xs md:text-sm font-semibold tracking-widest uppercase shadow-lg">
            Comparison
          </span>

          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Mechanical Property Comparison
            <br />
            <span className="text-[#508A76]">
              Brownbar vs Metal Rebars
            </span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-white/70">
            A detailed comparison between conventional steel rebars and modern
            GFRP rebars across mechanical, durability, and environmental
            properties.
          </p>
        </div>

        {/* ================= TABLE CARD ================= */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm md:text-base text-gray-800">

              {/* Table Head */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#508A76] text-white">
                  <th className="px-6 py-4 text-center font-semibold">
                    Properties of TMT Bars
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Steel Bar
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    GFRP (Brownbar)
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {[
                  ["Tensile Strength (MPa / N/mm²)", "500", "1000+"],
                  ["Shear Strength (MPa / N/mm²)", "120", "170"],
                  ["Bond Strength (MPa / N/mm²)", "14*", "12.5"],
                  ["Compression Strength (MPa / N/mm²)", "500", "450"],
                  ["Modulus of Elasticity (GPa)", "160 – 200", "65"],
                  ["Elongation (%)", "25", "4"],
                  [
                    "Durability",
                    "As per special building codes",
                    "Not less than 80 years",
                  ],
                  ["Density (ton/m³)", "7.8", "1.9"],
                  [
                    "Corrosion Resistance",
                    "Rust formation over time",
                    "Corrosion-free in alkaline concrete",
                  ],
                  [
                    "Ecological Compatibility",
                    "Environment friendly",
                    "No harmful or toxic emissions",
                  ],
                  [
                    "Electrical Conductivity",
                    "Conductive",
                    "Dielectric (Non-conductive)",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    } hover:bg-[#508A76]/10`}
                  >
                    <td className="px-6 py-4 font-semibold text-[#508A76]">
                      {row[0]}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-[#508A76]">
                      {row[1]}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-[#508A76]">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-10 text-center">
          <p className="text-xs md:text-sm text-white/60">
            © {new Date().getFullYear()} REBAR-X · Mechanical Property Comparison
          </p>
        </div>

      </div>
    </main>
  );
};

export default Portfolio;
