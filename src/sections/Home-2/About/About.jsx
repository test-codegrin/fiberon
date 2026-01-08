"use client";

import Link from "next/link";
import CountUp from "react-countup";

const About = () => {
  return (
    <section id="about-sec" className="relative overflow-hidden py-20 bg-white">
      {/* Background Shapes */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('/main-assets/img/shape/global-line-shape1.png')",
        }}
      />
      <div
        className="absolute inset-0 bg-no-repeat opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('/main-assets/img/shape/global-line-shape2.png')",
        }}
      />

      <div className="relative h-[1000px] py-50 max-w-[1600px] mx-auto px-6 xl:px-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="relative flex justify-between">
            <div className="h-[800px]">
              <img
                src="/main-assets/img/normal/about_2-1.png"
                alt="About"
                className="w-full max-w-[200px] rounded-xl shadow-lg"
              />
            </div>

            {/* Experience Counter */}
            <div className="absolute bottom-0 w-[250px] h-[210px] right-10 bg-[#508A76] rounded-xl px-0 py-5 shadow-md">
              <div className="flex justify-center gap-4">
                <div className="w-25 h-25">
                  <img
                    src="/main-assets/img/hero/trusted-white.webp"
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold w-auto text-white">
                    <CountUp start={0} end={40} duration={1} /> +
                  </h3>
                  <p className="text-sm text-white">Business Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-md font-semibold text-[#508A76] uppercase">
              {/* <img
                src="/main-assets/img/icon/section-subtitle-icon.svg"
                alt="icon"
                className="w-8 h-8"
              /> */}
              About Us
            </span>

            {/* <h2 className="text-4xl font-bold text-black leading-tight mb-4">
              We Build Everything That You Needed
            </h2> */}

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#508A76]">
              <p className="text-gray-700 mb-6">
                <b className="text-[#508A76]">REBAR-X</b> was founded with a
                single vision to redefine how the world build strength. We are a
                new-generation manufacturer of GFRP (Glass Fiber Reinforced
                Polymer) Rebars,engineered for unmatched durability, tensile
                power, and long-lasting performance.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#508A76]">
              <p>
                <b className="text-[#508A76]">Driven by a team</b> of passionate
                enginners and innovators,{" "}
                <b className="text-[#508A76]">REBAR-X</b> combines advanced
                materials, cutting-edge technology, and a deep understanding of
                modern construction challenge. Our rebars are four times lighter
                than steel yet completely resistant to corrosion, rust, and
                chemicals, making them ideal for bridges, highways, and marine
                infrastructure.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#508A76]">
              <p>
                <b className="text-[#508A76]">Over the years, REBAR-X</b> has
                earned trust across India's infrastructure sector for
                engineering reliabilty that endures generations.Every bar we
                produce is enhanced with nanocomposite reinforcement
                technology,delivering superior strength. flexibility,and
                sustainability.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#508A76]">
              <p>
                <b className="text-[#508A76]">With</b> an unwavering commitment
                to quality and innovation.we aim to help India build
                stronger,smarter,and more enduring structures.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#508A76]">
              <p>
                <b className="text-[#508A76]">At REBAR-X,</b>we do not just make
                rebars;we engineer confidence and durability in every bar.
              </p>
            </div>

            <div className="bg-[#508A76] p-1.5 text-center text-white text-[19px] my-6 border-l-4 border-[#508A76]">
              <p className="max-w-[590px] mx-auto">
                GFRP REBAR IS APPROVED BY HYDERABAD IIT'-'MUMBAI IIT' AND ALSO
                APPROVED BY GOVT OF INDIA
              </p>
            </div>

            {/* Checklist */}
            {/* <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-black">
                <img
                  src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                  alt="check"
                  className="w-5 h-5 mt-1"
                />
                Providing solutions for construction & management
              </li>
              <li className="flex items-start gap-3 text-black">
                <img
                  src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                  alt="check"
                  className="w-5 h-5 mt-1"
                />
                Engineers design and build strong structures
              </li>
            </ul> */}

            {/* Mission */}
            {/* <div className="flex gap-1.5 mb-6">
              <img
                src="/main-assets/img/icon/about-grid-icon1-1.svg"
                alt="mission"
                className="w-12 h-12"
              />
              <div>
                <h4 className="text-lg font-semibold text-black mb-1">
                  Our Mission
                </h4>
                <p className="text-gray-700">
                  To create reliable, modern, and efficient digital solutions.
                </p>
              </div>
            </div> */}

            {/* Vision */}
            {/* <div className="flex gap-1.5 mb-10">
              <img
                src="/main-assets/img/icon/about-grid-icon1-2.svg"
                alt="vision"
                className="w-12 h-12"
              />
              <div>
                <h4 className="text-lg font-semibold text-black mb-1">
                  Our Vision
                </h4>
                <p className="text-gray-700">
                  To be a trusted partner delivering impactful digital products.
                </p>
              </div>
            </div> */}

            {/* CTA Button */}
            <Link
              href="/pages/innerpage/about"
              className="inline-flex items-center gap-1.5 px-8 py-3 text-white font-semibold rounded-md bg-[#508A76] transition"
            >
              Explore Our Company
              <i className="ri-arrow-right-up-line text-[20px]"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
