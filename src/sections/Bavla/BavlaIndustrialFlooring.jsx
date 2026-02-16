import React from "react";
import Contect from "../Contact";
import Link from "next/link";

export default function BavlaIndustrialFlooring() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* =================== TITLE =================== */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Bavla Industrial Flooring
        </h2>

        <p className="text-gray-700 mb-10">
          FIBERON Composites Rebar collaborated with an industrial facility in
          Bavla to create a durable flooring solution that meets the demands of
          a high-traffic manufacturing environment. The facility required
          flooring that could endure constant mechanical wear, resist chemicals,
          and provide a long-term, cost-effective solution. To meet these needs,
          we supplied <b>Glass Fiber Reinforced Polymer</b> (GFRP) rebar, a
          material known for its strength, corrosion resistance, and ease of
          installation.
        </p>

        {/* =================== IMAGE + CHALLENGES =================== */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* IMAGE */}
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img
              src="/main-assets/img/product/Industrial Flooring.avif"
              alt="RCC Road Construction Ahmedabad"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* CHALLENGES */}
          <div>
            <h3 className="text-xl font-bold mb-4">Challenges Faced</h3>

            <ol className="space-y-4 text-gray-700 list-decimal pl-5">
              <li>
                <span className="font-bold">Constant Mechanical Wear:</span>
                <br />
                The facility’s operations involve continuous movement of heavy
                equipment and forklifts. The flooring needed to withstand these
                conditions without developing cracks or surface damage.
              </li>

              <li>
                <span className="font-bold">Chemical Spills and Stains:</span>
                <br />
                The industrial processes carried out in the facility often
                involve chemicals that could spill onto the floor, posing a risk
                of corrosion to traditional steel reinforcement.
              </li>

              <li>
                <span className="font-bold">
                  Quick Turnaround Requirement:{" "}
                </span>
                <br />
                To minimize production downtime, the facility required a rapid
                installation process that could be completed within a tight
                schedule.
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
              <span className="font-bold">Application of GFRP Rebar:</span>
              <br />
              We chose GFRP rebar for its exceptional tensile strength and
              resistance to corrosion. GFRP is also non-conductive and
              non-magnetic, making it ideal for environments where equipment is
              sensitive to electrical conductivity and magnetic interference.
            </li>

            <li>
              <span className="font-bold">Fast Installation: </span>
              <br />
              The lightweight nature of GFRP rebar allowed for faster handling
              and installation, significantly reducing the time required to lay
              the flooring. This helped us meet the client’s strict timeline,
              minimizing operational downtime.
            </li>

            <li>
              <span className="font-bold">
                Resistance to Chemical Exposure:
              </span>
              <br />
              GFRP rebar does not react with chemicals, ensuring that spills
              would not compromise the integrity of the flooring. This attribute
              also meant the flooring would maintain its structural integrity
              longer than traditional steel-reinforced options.
            </li>
          </ol>
        </div>

        {/* =================== PROJECT OUTCOME =================== */}
        <div className="mt-14">
          <h3 className="text-xl font-bold mb-4">Project Outcome</h3>

          <p className="text-gray-700">
            We completed the industrial flooring project in Bavla efficiently,
            ahead of schedule, and within budget. The new flooring has shown
            excellent resilience to mechanical wear and chemical exposure,
            demonstrating no signs of cracking or damage. The use of GFRP rebar
            has reduced maintenance costs and enhanced the facility’s overall
            productivity due to its durability and reliability.
          </p>
        </div>

        {/* =================== CONCLUSION =================== */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Conclusion</h3>

          <p className="text-gray-700">
            By implementing GFRP rebar, FIBERON Composites Rebar provided a robust
            and innovative solution for industrial flooring in Bavla. Our
            approach ensured quick installation, high durability, and resistance
            to challenging conditions, showcasing our commitment to delivering
            effective and long-lasting reinforcement solutions for industrial
            environments.
          </p>
        </div>
      </div>

      <Contect />
    </section>
  );
}
