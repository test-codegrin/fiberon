"use client";

const ProductSpecificationPage = () => {
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
    <section className="w-full bg-[#0E0F12]/95 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Table of Substitution
          </h3>
          <p className="text-white max-w-2xl mx-auto text-sm md:text-base">
            Equivalent tensile strength comparison between Metal Rebar and FRP
            Rebar
          </p>
        </div>

        {/* ================= TABLE WRAPPER ================= */}
        <div className="rounded-2xl p-6 md:p-8 overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-[1fr_80px_1fr] gap-6">
            {/* ================= METAL TABLE ================= */}
            <div>
              <div className="bg-[#224F3E] p-3 mb-2">
                <h4 className="text-center text-white font-semibold mb-3 tracking-wide">
                  METAL REBAR
                </h4>

                {/* Column header */}
                <div className="">
                  <div className="max-w-[400px] uppercase text-white mb-2 mx-auto flex justify-between">
                    <div className="border text-[16px] w-[180px] py-2 flex items-center justify-center text-center">
                      Weight <br /> (PER 12m BAR)
                    </div>
                    <div className="border text-[16px] w-[180px] py-2 flex items-center justify-center">
                      Diameter
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                {metalRebar.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-2 text-center py-3
                    ${i % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#DADADA]"}`}
                  >
                    <div className="font-medium text-gray-800">{row[0]}</div>
                    <div className="text-gray-700">{row[1]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= CENTER EQUAL ================= */}
            <div className="flex flex-col items-center">
              <div className="h-[48px]" />
              <div className="space-y-2 w-full mt-[125px]">
                {metalRebar.map((_, i) => (
                  <div
                    key={i}
                    className="h-[50px] mt-[16px] flex items-center justify-center bg-[#2B2B2B] text-white font-bold rounded-md"
                  >
                    =
                  </div>
                ))}
              </div>
            </div>

            {/* ================= FRP TABLE ================= */}
            <div>
              <div className="bg-[#224F3E] p-3 mb-2">
                <h4 className="text-center text-white font-semibold mb-3 tracking-wide">
                  FIBERGLASS REBAR (FRP)
                </h4>

                {/* Column header */}
                <div className="">
                  <div className="max-w-[400px] uppercase text-white mb-2 mx-auto flex justify-between">
                    <div className="border text-[16px] w-[180px] py-2 flex items-center justify-center text-center">
                      Weight <br /> (PER 12m BAR)
                    </div>
                    <div className="border text-[16px] w-[180px] py-2 flex items-center justify-center">
                      Diameter
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                {frpRebar.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-2 text-center py-3
                    ${i % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#DADADA]"}`}
                  >
                    <div className="font-medium text-gray-800">{row[0]}</div>
                    <div className="text-gray-700">{row[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= INFO SECTION ================= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-[#508A76] font-semibold mb-2">Metal Rebar</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Steel reinforcement with higher weight and susceptibility to
              corrosion in harsh environments.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-[#508A76] font-semibold mb-2">
              Strength Equivalence
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Each row shows equivalent tensile strength between metal and FRP
              rebars.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-[#508A76] font-semibold mb-2">FRP Rebar</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lightweight, corrosion-resistant alternative offering long-term
              durability and reduced dead load.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecificationPage;
