import React from "react";
import Contect from "../Contact";

export default function RccRoad() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* =================== TITLE =================== */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          RCC Road Construction Ahmedabad
        </h2>

        <p className="text-gray-700 mb-10">
          MRG Composites Rebar partnered with AAJ BUILDCON in Ahmedabad to
          reinforce a major urban road using Glass Fiber Reinforced Polymer
          (GFRP Rebar). This project aimed to enhance the durability of the
          roadway, reduce maintenance costs, and increase its lifespan, all
          while handling heavy traffic and environmental stressors.
        </p>

        {/* =================== IMAGE + CHALLENGES =================== */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* IMAGE */}
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img
              src="/main-assets/img/product/RCC-Road.jpg"
              alt="RCC Road Construction Ahmedabad"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* CHALLENGES */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Challenges Faced
            </h3>

            <ol className="space-y-4 text-gray-700 list-decimal pl-5">
              <li>
                <span className="font-semibold">Heavy Traffic Loads:</span>
                <br />
                The road construction handles a high volume of traffic,
                including commercial vehicles. It requires reinforcement
                bars that can withstand significant loads without compromising
                structural integrity.
              </li>

              <li>
                <span className="font-semibold">
                  Harsh Environmental Conditions:
                </span>
                <br />
                Ahmedabad’s extreme temperatures and monsoon flooding had
                caused corrosion and fatigue in steel rebars used in the past,
                leading to frequent repairs.
              </li>

              <li>
                <span className="font-semibold">
                  Time and Budget Constraints:
                </span>
                <br />
                The project had to be completed quickly to minimize traffic
                disruptions and stay within a strict budget.
              </li>
            </ol>

            <button className="mt-6 bg-[#347A63] text-white font-semibold px-6 py-3 rounded">
              Download Brochure
            </button>
          </div>
        </div>

        {/* =================== SOLUTIONS =================== */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-4">
            Solutions Implemented
          </h3>

          <ol className="space-y-4 text-gray-700 list-decimal pl-5">
            <li>
              <span className="font-semibold">Use of GFRP Rebar:</span>
              <br />
              GFRP rebar resists corrosion and does not rust, making it ideal
              for Ahmedabad’s climate while withstanding heavy traffic loads.
            </li>

            <li>
              <span className="font-semibold">Efficient Installation:</span>
              <br />
              The lightweight nature of GFRP rebar simplified transportation
              and installation, reducing construction time and costs.
            </li>

            <li>
              <span className="font-semibold">Long-Term Durability:</span>
              <br />
              With higher tensile strength than steel, GFRP rebar ensured
              superior load-bearing capacity and reduced maintenance needs.
            </li>
          </ol>
        </div>

        {/* =================== PROJECT OUTCOME =================== */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-4">
            Project Outcome
          </h3>

          <p className="text-gray-700">
            The road reinforcement project was completed on time and within
            budget. The new roadway shows enhanced durability, effectively
            handling heavy traffic and harsh environmental conditions without
            signs of deterioration. Maintenance requirements have been
            significantly reduced, delivering long-term savings for the city.
          </p>
        </div>

        {/* =================== CONCLUSION =================== */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">
            Conclusion
          </h3>

          <p className="text-gray-700">
            By choosing GFRP rebar, MRG Composites Rebar delivered a durable and
            cost-effective solution for Ahmedabad’s road infrastructure. This
            project demonstrates our commitment to innovation and quality,
            ensuring safer and more reliable roads for residents.
          </p>
        </div>

      </div>

      <Contect />
    </section>
  );
}
