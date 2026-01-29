"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import PopupVideo from "../../Common/PopupVideo/PopupVideo";

const ProcessThree = () => {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  
  return (
    <>
      {/* ===== PROCESS SECTION ===== */}
      <section className="relative w-full max-w-[1400px] mt-14 xl:mt-25 mx-auto rounded-2xl py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* ===== HEADER ===== */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div className="w-full">
              <span className="flex items-center justify-center text-[#347A64] text-md font-semibold uppercase tracking-wide">
                Work Process
              </span>

              <div className="mt-4 text-3xl md:text-4xl font-bold text-center text-[#347A64]">
                Our Services That We Provide
              </div>
            </div>
          </div>

          {/* ===== PROCESS STEPS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Meet & Consult",
                text: "Discuss project goals and understand requirements clearly.",
              },
              {
                step: "02",
                title: "Design & Planning",
                text: "Create structured planning and modern product design.",
              },
              {
                step: "03",
                title: "Testing & Quality",
                text: "Ensure reliability with strict testing and quality checks.",
              },
              {
                step: "04",
                title: "Final Delivery",
                text: "Complete execution and successful project handover.",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                className="bg-white border-b-4 border-[#347A64] hover:border-[#347A64] hover:border-2 rounded-2xl p-8 text-center hover:shadow-xl transition"
              >
                <div className="mb-6 flex flex-col items-center">
                  <span className="text-4xl font-bold text-[#347A64]">
                    {item.step}
                  </span>
                  <span className="text-sm font-semibold text-gray-500 uppercase">
                    Step
                  </span>
                </div>

                <div className="text-2xl font-semibold text-[#347A64]">
                  {item.title}
                </div>

                <p className="mt-3 text-gray-600 text-md leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPUP VIDEO ===== */}
      {/* <PopupVideo
        popup={popup}
        setPopup={setPopup}
        isActive={isActive}
        setIsActive={setIsActive}
      /> */}
    </>
  );
};

export default ProcessThree;
