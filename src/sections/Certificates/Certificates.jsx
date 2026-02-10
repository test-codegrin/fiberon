"use client";

import { useState } from "react";
import Image from "next/image";

const tabsData = [
  {
    id: "iit",
    label: "IIT HYDERABAD",
    images: [
      "/main-assets/img/certificates/Certificates-1.jpg",
      "/main-assets/img/certificates/Certificates-2.jpg",
      "/main-assets/img/certificates/Certificates-3.jpg",
    ],
  },
  {
    id: "standards",
    label: "UGANDA NATIONAL BUREAU OF STANDARDS",
    images: [
      "/main-assets/img/certificates/Certificates-4.jpg",
      "/main-assets/img/certificates/Certificates-5.jpg",
      "/main-assets/img/certificates/Certificates-6.jpg",
      "/main-assets/img/certificates/Certificates-7.jpg",
      "/main-assets/img/certificates/Certificates-8.jpg",
    ],
  },
  {
    id: "SGS",
    label: "SGS",
    images: [
      "/main-assets/img/certificates/Certificates-9.jpg",
      "/main-assets/img/certificates/Certificates-10.jpg",
    ],
  },
  {
    id: "geo",
    label: "GEO DESIGNS & RESEARCH (P) LTD",
    images: ["/main-assets/img/certificates/Certificates-11.jpg"],
  },
  {
    id: "g.s",
    label: "SHRI G.S. INSTITUTE OF TECHNOLOGY & SCIENCE",
    images: [
      "/main-assets/img/certificates/Certificates-12.jpg",
      "/main-assets/img/certificates/Certificates-13.jpg",
    ],
  },
  {
    id: "dubai",
    label: "DUBAI MUNICIPALITY",
    images: [
      "/main-assets/img/certificates/Certificates-14.jpg",
      "/main-assets/img/certificates/Certificates-15.jpg",
    ],
  },
  {
    id: "American",
    label: "AMERICAN CONCRETE INSTITUTE",
    images: [
      "/main-assets/img/certificates/Certificates-16.jpg",
      "/main-assets/img/certificates/Certificates-17.jpg",
      "/main-assets/img/certificates/Certificates-18.jpg",
      "/main-assets/img/certificates/Certificates-19.jpg",
      "/main-assets/img/certificates/Certificates-20.jpg",
      "/main-assets/img/certificates/Certificates-21.jpg",
      "/main-assets/img/certificates/Certificates-22.jpg",
    ],
  },
];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("iit");

  const activeImages =
    tabsData.find((tab) => tab.id === activeTab)?.images || [];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-350 mx-auto px-6">
        {/* ================= TABS ================= */}
        {/* <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition
                ${
                  activeTab === tab.id
                    ? "bg-[#347A63] text-white"
                    : "bg-[#347A63] text-white"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div> */}

        {/* ================= IMAGE GRID ================= */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[450px] border-[#347A63] border-2  overflow-hidden rounded-md group"
            >
              <img
                src={img}
                alt="certificates Gallery"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div> */}

        {/* Certifications & Quality Commitment */}
        <div className="grid grid-cols-1 lg:flex lg:items-center max-w-full w-full mx-auto gap-x-14 gap-y-8">
          <div>
            <img
              src="/main-assets/img/certificates/Certificates-23.jpg"
              alt="Certificates"
              className="max-w-100 mx-auto h-auto"
            />
          </div>

          <div className="">
            <p className="text-[35px] text-[#347A63] font-bold">
              Certifications & Quality Commitment
            </p>
            <p className="text-[20px] mt-5">
              At <b className="text-[#347A63]">REBAR-X Composites Industries</b>
              , quality is not a claim - it is a system we follow every day.
            </p>
            <p className="text-[20px] mt-5">
              We are <b className="text-[#347A63]">ISO 9001:2015 certified</b>,
              demonstrating our commitment to consistent quality, controlled
              processes, and continuous improvement across all operations.
            </p>
            <p className="text-[#347A63] font-bold text-[20px] mt-5">
              ISO 9001:2015 – Quality Management System
            </p>
            <p className="text-[20px] mt-5">
              Our manufacturing and management processes have been independently
              assessed and certified to meet the requirements of{" "}
              <b className="text-[#347A63]">ISO 9001:2015</b>, the globally
              recognized standard for Quality Management Systems.
            </p>
          </div>
        </div>

        {/* This certification covers: */}
        <div className="mt-10">
          <p className="text-[30px] font-semibold text-[#347A63] mt-5">
            This certification covers :
          </p>
          <li className="text-[20px] mt-5">
            Design, manufacturing, and supply of non-metallic building and
            construction materials
          </li>

          <li className="text-[20px] mt-5">
            Glass Fiber Reinforced Polymer (GFRP) products including panels,
            sheets, pipes, bars, tanks, and gratings
          </li>

          <li className="text-[20px] mt-5">
            Roofing sheets, ducts, and allied composite construction materials
          </li>

          <li className="text-[20px] mt-5">
            Structural and decorative GFRP products for building, civil
            engineering, and industrial applications
          </li>
        </div>

        {/* What This Means for Our Customers */}
        <div className="mt-10">
          <p className="text-[30px] font-semibold text-[#347A63] mt-5">
            What This Means for Our Customers
          </p>
          <li className="text-[20px] mt-5">
            Consistent product quality across every batch
          </li>

          <li className="text-[20px] mt-5">
            Standardized and controlled manufacturing processes
          </li>

          <li className="text-[20px] mt-5">
            Strong focus on customer satisfaction
          </li>

          <li className="text-[20px] mt-5">
            Continuous improvement in quality, efficiency, and performance
          </li>

          <li className="text-[20px] mt-5">
            Reliable documentation and traceability
          </li>
        </div>

        {/* Certification Details */}
        <div className="mt-10">
          <p className="text-[30px] font-semibold text-[#347A63] mt-5">
            Certification Details
          </p>
          <li className="text-[20px] mt-5">
            <b className="text-[#347A63]">Standard:</b> ISO 9001:2015
          </li>

          <li className="text-[20px] mt-5">
            <b className="text-[#347A63]">Certifying Body:</b> Royal Assessments Pvt. Ltd.
          </li>

          <li className="text-[20px] mt-5">
            <b className="text-[#347A63]">Accreditation:</b> EGAC (Member of International Accreditation Forum – IAF)
          </li>

          <li className="text-[20px] mt-5">
            <b className="text-[#347A63]">Validity:</b> February 2029
          </li>

          <li className="text-[20px] mt-5">
            <b className="text-[#347A63]">Surveillance Audits:</b> Conducted annually to ensure ongoing compliance
          </li>
        </div>
      </div>
    </section>
  );
}
