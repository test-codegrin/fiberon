/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

const WhyChooseThree = () => {
  return (
    <section className="w-full mt-[40px] md:mt-0 lg:py-0 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ===== SECTION TITLE ===== */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-[#347A64] font-semibold text-md uppercase tracking-wide">
            Why Choose Us
          </span>

          <div className="mt-4 text-xl md:text-2xl text-[#347A64] font-bold">
            At Fiberon, we are more than just a manufacturer – we are a trusted
            partner in building stronger, smarter, and future-ready
            infrastructure. 
            
            With a commitment to quality, innovation, and
            customer satisfaction, we deliver reinforcement solutions that meet
            the highest industry standards.
          </div>

          {/* <p className="mt-4 max-w-2xl mx-auto text-gray-600"></p> */}
          <p className="mt-4 max-w-4xl mx-auto text-gray-600">
            Our focus is not only on supplying products, but on supporting
            projects with reliability, expertise, and long-term value.
          </p>
        </div>

        {/* ===== CONTENT GRID ===== */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-center">
          {/* ===== LEFT FEATURES ===== */}
          <div className="space-y-8">
            {[
              {
                title: "Trusted Industry Expertise",
                text: "Years of experience in advanced composite reinforcement, Fiberon brings deep knowledge and technical understanding to every project, ensuring dependable reinforcement solutions.",
                icon: "/main-assets/img/icon/why-icon1-1.svg",
              },
              {
                title: "Quality-First Manufacturing",
                text: "Precision production with strict quality control. We follow high manufacturing standards to deliver consistent, reliable products that perform in the toughest conditions.",
                icon: "/main-assets/img/icon/why-icon1-2.svg",
              },
              {
                title: "Customer-Centric Approach",
                text: "Your project success is our priority. From inquiry to delivery, we provide responsive support, guidance, and customized solutions for every client.",
                icon: "/main-assets/img/icon/why-icon1-3.svg",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 150}
                className="flex items-start gap-4 p-6 rounded-xl border-2 border-[#347A64]"
              >
                <div className="flex items-center justify-center min-w-12 min-h-12 rounded-lg bg-[#347A64]/10">
                  <img src={item.icon} width={32} height={32} alt="icon" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#347A64]">
                    {item.title}
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== CENTER IMAGE ===== */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src="/main-assets/img/normal/why_1-1.png"
              width={420}
              height={420}
              alt="Why Choose Us"
              className="rounded-2xl"
            />
          </div>

          {/* ===== RIGHT FEATURES ===== */}
          <div className="space-y-8">
            {[
              {
                title: "Reliable Supply & On-Time Delivery",
                text: "Strong production capacity with dependable logistics. We ensure timely delivery and smooth supply for projects of all sizes, from local developments to major infrastructure works.",
                icon: "/main-assets/img/icon/why-icon1-4.svg",
              },
              {
                title: "Quality-First Manufacturing",
                text: "Precision production with strict quality control. We follow high manufacturing standards to deliver consistent, reliable products that perform in the toughest conditions.",
                icon: "/main-assets/img/icon/why-icon1-5.svg",
              },
              {
                title: "Commitment to Long-Term Partnerships",
                text: "More than a supplier – a trusted partner. We believe in building lasting relationships through transparency, service excellence, and consistent performance.",
                icon: "/main-assets/img/icon/why-icon1-6.svg",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 150}
                className="flex items-start gap-4 p-6 rounded-xl border-2 border-[#347A64]"
              >
                <div className="flex items-center justify-center min-w-12 min-h-12 rounded-lg bg-[#347A64]/10">
                  <img src={item.icon} width={32} height={32} alt="icon" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#347A64]">
                    {item.title}
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseThree;
