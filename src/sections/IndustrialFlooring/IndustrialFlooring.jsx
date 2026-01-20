import React from "react";
import Contect from "../Contact";

export default function JammuDrainageWork() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* =================== TITLE =================== */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Industrial Flooring Amravati Maharashtra
        </h2>

        <p className="text-gray-700 mb-10">
          FIBERON Composites Rebar was selected to supply reinforcement for a
          new industrial flooring project in Amravati, Maharashtra. The client,
          a large manufacturing facility, required a durable and
          corrosion-resistant flooring solution to withstand heavy machinery,
          chemical exposure, and frequent traffic. We provided Glass Fiber
          Reinforced Polymer (GFRP) rebar to meet these demands, ensuring a
          long-lasting and cost-effective flooring solution.
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
                <span className="font-bold">Heavy Load Requirements:</span>
                <br />
                The facility needed a flooring that could support heavy
                machinery and constant vehicular traffic without deteriorating
                or cracking.
              </li>

              <li>
                <span className="font-bold">Chemical Resistance Needs:</span>
                <br />
                The industrial environment involved exposure to various
                chemicals, which could corrode traditional steel reinforcement
                and damage the flooring.
              </li>

              <li>
                <span className="font-bold">Structural Integrity Needs:</span>
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
              <span className="font-bold">Use of GFRP Rebar:</span>
              <br />
              We supplied GFRP rebar for the flooring, which provided superior
              tensile strength and corrosion resistance. Unlike steel, GFRP
              rebar does not rust or weaken when exposed to chemicals, making it
              ideal for industrial settings.
            </li>

            <li>
              <span className="font-bold">
                Efficient Installation Process:{" "}
              </span>
              <br />
              The lightweight nature of GFRP rebar allowed for faster and easier
              installation. This enabled us to complete the flooring project
              ahead of schedule, reducing downtime for the client.
            </li>

            <li>
              <span className="font-bold">Long-Term Durability:</span>
              <br />
              By choosing GFRP rebar, we ensured that the industrial flooring
              would withstand heavy loads and harsh conditions over the long
              term, reducing maintenance costs and improving safety.
            </li>
          </ol>
        </div>

        {/* =================== PROJECT OUTCOME =================== */}
        <div className="mt-14">
          <h3 className="text-xl font-bold mb-4">Project Outcome</h3>

          <p className="text-gray-700">
            We completed the industrial flooring project in Amravati on time and
            within budget. The new flooring demonstrates exceptional durability,
            handling heavy machinery, vehicular traffic, and chemical exposure
            without any signs of damage or wear. The use of GFRP rebar has
            significantly extended the lifespan of the flooring, providing a
            reliable and low-maintenance solution for the client.
          </p>
        </div>

        {/* =================== CONCLUSION =================== */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Conclusion</h3>

          <p className="text-gray-700">
            FIBERON Composites Rebar’s innovative use of GFRP rebar in
            industrial flooring projects delivers unmatched durability and cost
            savings. This project in Amravati highlights our commitment to
            providing high-quality reinforcement solutions that meet the
            specific needs of industrial clients, ensuring safer and more
            efficient facilities.
          </p>
        </div>
      </div>

      <Contect />
    </section>
  );
}
