/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";

const ProjectDetails = () => {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full py-24">

      {/* ================= PROJECT DETAILS SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-350 mx-auto">

          {/* Top Image + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10 mb-16">

            {/* Main Image */}
            <div className="lg:col-span-2">
              <img
                src="/main-assets/img/project/project_details1_1.png"
                alt="Project"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Sidebar */}
            <div className="bg-[#347A63]/5 p-6 rounded-2xl shadow-md border border-[#347A63]/20">
              <h3 className="text-xl font-semibold mb-6 text-[#347A63]">
                Project Info
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li><span className="font-semibold text-black">Client:</span> Rebecca Tylor</li>
                <li><span className="font-semibold text-black">Category:</span> Building</li>
                <li><span className="font-semibold text-black">Location:</span> New York to London</li>
                <li><span className="font-semibold text-black">Date:</span> 12 January, 2024</li>
                <li><span className="font-semibold text-black">Status:</span> Completed</li>
                <li><span className="font-semibold text-black">Budget:</span> $200,560</li>
              </ul>
            </div>
          </div>

          {/* Overview */}
          <h2 className="text-3xl font-bold mb-6 text-[#347A63]">
            Project Overview
          </h2>
          <p className="text-gray-600 leading-relaxed mb-16">
            Industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Full Principal Contractor service",
                icon: "/main-assets/img/icon/service-icon1-1.png",
              },
              {
                title: "Full-time Onsite Supervision",
                icon: "/main-assets/img/icon/service-icon1-2.png",
              },
              {
                title: "Timber and steel frame construction",
                icon: "/main-assets/img/icon/service-icon1-3.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-[#347A63] border transition duration-300"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-14 mb-4"
                />
                <h4 className="text-lg font-semibold mb-2 text-[#347A63]">
                  <Link href="/pages/innerpage/service-details">
                    {item.title}
                  </Link>
                </h4>
                <p className="text-gray-500 text-sm">
                  There are many passages of lorem ipsum available
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="bg-gray-50 p-8 rounded-2xl italic text-gray-700 border-l-4 border-[#347A63]">
            “Tortor posuere ac ut consequat tellusi elem isis etum sag ittis vitae
            atleo duis ut diam odio ut sem nulla phar. Purus sit ame nus mas
            highly efficient solution whereas open-source application.”
            <div className="mt-4 font-semibold not-italic text-[#347A63]">
              Aleesha Brown
              <span className="block text-sm text-gray-500 font-normal">
                Company, CEO
              </span>
            </div>
          </blockquote>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      {/* <section className="py-16 bg-[#347A63]/5 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 max-w-3xl mx-auto">
            Industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </p>
        </div>
      </section> */}

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-350 pt-24 mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>
            <h2 className="text-3xl text-center font-bold mb-8 text-[#347A63]">
              Features of Project
            </h2>
            <img
              src="/main-assets/img/normal/process-thumb2-1.png"
              alt="Feature"
              className="rounded-2xl mt-50"
            />
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {[
              "Advanced Technology",
              "Trusted Company",
              "Professional Teams",
              "Stylistic formula method",
            ].map((feature, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-[#347A63]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#347A63]">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    We craft unique digital experiences. With more years of expertise we design.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetails;
