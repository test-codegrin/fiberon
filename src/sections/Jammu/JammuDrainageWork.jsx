import React from "react";
import Contect from "../Contact";

export default function JammuDrainageWork() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* =================== TITLE =================== */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Jammu Drainage Work
        </h2>

        <p className="text-gray-700 mb-10">
          FIBERON Composites Rebar was tasked with reinforcing drain
          infrastructure in Jammu, a region known for its diverse weather
          conditions and frequent rainfall. The project aimed to enhance the
          durability and longevity of the drainage system, which is crucial for
          managing stormwater and preventing flooding. We provided Glass Fiber
          Reinforced Polymer (GFRP) rebar, offering a modern solution for the
          construction and reinforcement of the drain system.
        </p>

        {/* =================== IMAGE + CHALLENGES =================== */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* IMAGE */}
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img
              src="/main-assets/img/product/Jammu Drainage Work.jpg"
              alt="RCC Road Construction Ahmedabad"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* CHALLENGES */}
          <div>
            <h3 className="text-xl font-bold mb-4">Challenges Faced</h3>

            <ol className="space-y-4 text-gray-700 list-decimal pl-5">
              <li>
                <span className="font-bold">Weather Variability:</span>
                <br />
                Jammu’s climate features heavy rainfall and varying
                temperatures, which can lead to rapid wear and corrosion of
                traditional steel reinforcement in drains.
              </li>

              <li>
                <span className="font-bold">High Corrosion Risks:</span>
                <br />
                Exposure to water and sediment can accelerate the deterioration
                of steel rebar, leading to costly maintenance and repair issues.
              </li>

              <li>
                <span className="font-bold">
                  Structural Integrity Needs:
                </span>
                <br />
                The drain system required strong, durable reinforcement to
                handle high volumes of stormwater and resist potential
                structural damage over time.
              </li>
            </ol>

            <button className="mt-6 bg-[#347A63] text-white font-bold px-6 py-3 rounded">
              Download Brochure
            </button>
          </div>
        </div>

        {/* =================== SOLUTIONS =================== */}
        <div className="mt-14">
          <h3 className="text-xl font-bold mb-4">Solutions Implemented</h3>

          <ol className="space-y-4 text-gray-700 list-decimal pl-5">
            <li>
              <span className="font-bold">
                Incorporation of GFRP Rebar:
              </span>
              <br />
              We selected GFRP rebar for its superior resistance to corrosion
              and weather conditions. GFRP rebar does not rust or weaken when
              exposed to water, making it ideal for drain systems in Jammu’s
              challenging environment.
            </li>

            <li>
              <span className="font-bold">Enhanced Durability: </span>
              <br />
              GFRP rebar’s high tensile strength and resistance to environmental
              stress ensured that the drains would maintain their structural
              integrity even under heavy stormwater flow and temperature
              fluctuations.
            </li>

            <li>
              <span className="font-bold">
                Reduced Maintenance Requirements:{" "}
              </span>
              <br />
              By using GFRP rebar, we significantly decreased the need for
              future maintenance. The material’s resistance to corrosion and
              wear reduces long-term repair costs and extends the lifespan of
              the drainage system.
            </li>
          </ol>
        </div>

        {/* =================== PROJECT OUTCOME =================== */}
        <div className="mt-14">
          <h3 className="text-xl font-bold mb-4">Project Outcome</h3>

          <p className="text-gray-700">
            We completed the drain work in Jammu efficiently, adhering to
            project timelines and budget constraints. The reinforced drains have
            exhibited excellent performance, effectively managing stormwater
            without signs of deterioration. The use of GFRP rebar has provided a
            reliable, low-maintenance solution that enhances the overall
            resilience of the drainage infrastructure.
          </p>
        </div>

        {/* =================== CONCLUSION =================== */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Conclusion</h3>

          <p className="text-gray-700">
            FIBERON Composites Rebar’s implementation of GFRP rebar in Jammu’s drain
            work highlights our commitment to delivering innovative and durable
            solutions for infrastructure projects. Our approach ensured the
            drains can withstand the region’s demanding weather conditions,
            providing a long-lasting and cost-effective solution for managing
            stormwater and preventing flooding.
          </p>
        </div>
      </div>

      <Contect />
    </section>
  );
}
