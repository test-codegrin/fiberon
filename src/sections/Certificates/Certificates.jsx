"use client";

import Image from "next/image";

export default function Certificates() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Certifications Section ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/main-assets/img/certificates/Certificates-23.jpg"
              alt="Certificates"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#347A63] leading-snug">
              Certifications & Quality Commitment
            </h2>

            <p className="text-base sm:text-lg lg:text-xl mt-4">
              At <span className="text-[#347A63] font-semibold">
                REBAR-X Composites Industries
              </span>, quality is not a claim – it is a system we follow every day.
            </p>

            <p className="text-base sm:text-lg lg:text-xl mt-4">
              We are <span className="text-[#347A63] font-semibold">
                ISO 9001:2015 certified
              </span>, demonstrating our commitment to consistent quality,
              controlled processes, and continuous improvement across all operations.
            </p>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#347A63] mt-6">
              ISO 9001:2015 – Quality Management System
            </h3>

            <p className="text-base sm:text-lg lg:text-xl mt-4">
              Our manufacturing and management processes have been independently
              assessed and certified to meet the requirements of{" "}
              <span className="text-[#347A63] font-semibold">
                ISO 9001:2015
              </span>, the globally recognized standard for Quality Management Systems.
            </p>
          </div>
        </div>

        {/* ================= Certification Coverage ================= */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#347A63]">
            This Certification Covers:
          </h3>

          <ul className="list-disc pl-11 mt-6 space-y-4 text-base sm:text-lg lg:text-xl">
            <li>
              Design, manufacturing, and supply of non-metallic building and construction materials
            </li>
            <li>
              Glass Fiber Reinforced Polymer (GFRP) products including panels,
              sheets, pipes, bars, tanks, and gratings
            </li>
            <li>
              Roofing sheets, ducts, and allied composite construction materials
            </li>
            <li>
              Structural and decorative GFRP products for building, civil engineering,
              and industrial applications
            </li>
          </ul>
        </div>

        {/* ================= Customer Benefits ================= */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#347A63]">
            What This Means for Our Customers
          </h3>

          <ul className="list-disc pl-11 mt-6 space-y-4 text-base sm:text-lg lg:text-xl">
            <li>Consistent product quality across every batch</li>
            <li>Standardized and controlled manufacturing processes</li>
            <li>Strong focus on customer satisfaction</li>
            <li>Continuous improvement in quality, efficiency, and performance</li>
            <li>Reliable documentation and traceability</li>
          </ul>
        </div>

        {/* ================= Certification Details ================= */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#347A63]">
            Certification Details
          </h3>

          <ul className="list-disc pl-11 mt-6 space-y-4 text-base sm:text-lg lg:text-xl">
            <li>
              <span className="text-[#347A63] font-semibold">Standard:</span> ISO 9001:2015
            </li>
            <li>
              <span className="text-[#347A63] font-semibold">Certifying Body:</span>{" "}
              Royal Assessments Pvt. Ltd.
            </li>
            <li>
              <span className="text-[#347A63] font-semibold">Accreditation:</span>{" "}
              EGAC (Member of International Accreditation Forum – IAF)
            </li>
            <li>
              <span className="text-[#347A63] font-semibold">Validity:</span> February 2029
            </li>
            <li>
              <span className="text-[#347A63] font-semibold">Surveillance Audits:</span>{" "}
              Conducted annually to ensure ongoing compliance
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
