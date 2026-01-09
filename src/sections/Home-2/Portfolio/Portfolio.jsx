"use client";

const Portfolio = () => {
  return (
    <main className="min-h-screen  max-w-[1400px] mx-auto w-full py-14 md:py-20 xl:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block rounded-full bg-[#4c8b78] px-4 sm:px-6 py-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase shadow-lg">
            Comparison
          </span>

          <h2 className="mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-tight">
            Mechanical Property Comparison
            <br />
            <span className="text-[#4c8b78] text-[25px] sm:text-2xl md:text-3xl lg:text-4xl">
              Brownbar vs Metal Rebars
            </span>
          </h2>

          <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-white/70 px-2 sm:px-0">
            A detailed comparison between conventional steel rebars and modern
            GFRP rebars across mechanical, durability, and environmental
            properties.
          </p>
        </div>

        {/* ================= TABLE CARD ================= */}
        <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">

          {/* Table Wrapper */}
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#4c8b78]/40">
            <table className="min-w-[720px] md:min-w-full border-collapse text-xs sm:text-sm md:text-base text-gray-800">

              {/* Table Head */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#4c8b78] text-white">
                  <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold whitespace-nowrap">
                    Properties of TMT Bars
                  </th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold whitespace-nowrap">
                    Steel Bar
                  </th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold whitespace-nowrap">
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
                    } hover:bg-[#4c8b78]/10`}
                  >
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 font-semibold text-[#4c8b78] whitespace-nowrap">
                      {row[0]}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-[#4c8b78] whitespace-nowrap">
                      {row[1]}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-[#4c8b78] whitespace-nowrap">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
