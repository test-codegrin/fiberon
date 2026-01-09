"use client";

import Link from "next/link";
import CountUp from "react-countup";

const About = () => {
  return (
    <section id="about-sec" className="relative overflow-hidden max-w-[1400px] mx-auto py-20 bg-white">
      <div className="relative md:h-[1000px] py-50 max-w-[1400px] mx-auto px-6 xl:px-0">
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
            <div className="absolute bottom-30 md:bottom-0 w-[250px] h-[210px] right-10 bg-[#4c8b78] rounded-xl px-0 py-5 shadow-md">
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
            <div className="flex justify-center md:justify-start underline leading-2 items-center gap-1.5 text-2xl font-semibold text-[#4c8b78] uppercase">
              About Us
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#4c8b78]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#4c8b78]">REBAR-X</b> was founded with a
                single vision to redefine how the world build strength. We are a
                new-generation manufacturer of GFRP (Glass Fiber Reinforced
                Polymer) Rebars,engineered for unmatched durability, tensile
                power, and long-lasting performance.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#4c8b78]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#4c8b78]">Driven by a team</b> of passionate
                enginners and innovators,{" "}
                <b className="text-[#4c8b78]">REBAR-X</b> combines advanced
                materials, cutting-edge technology, and a deep understanding of
                modern construction challenge. Our rebars are four times lighter
                than steel yet completely resistant to corrosion, rust, and
                chemicals, making them ideal for bridges, highways, and marine
                infrastructure.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#4c8b78]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#4c8b78]">Over the years, REBAR-X</b> has
                earned trust across India's infrastructure sector for
                engineering reliabilty that endures generations.Every bar we
                produce is enhanced with nanocomposite reinforcement
                technology,delivering superior strength. flexibility,and
                sustainability.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#4c8b78]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#4c8b78]">With</b> an unwavering commitment
                to quality and innovation.we aim to help India build
                stronger,smarter,and more enduring structures.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-1.5 my-6 border-l-4 border-[#4c8b78]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                <b className="text-[#4c8b78]">At REBAR-X,</b>we do not just make
                rebars;we engineer confidence and durability in every bar.
              </p>
            </div>

            <div className="bg-[#4c8b78] p-1.5 text-center text-white text-[19px] my-6 border-l-4 border-[#4c8b78]">
              <p className="text-gray-700 mb-6 max-w-[280px] mx-auto mt-3 md:mt-0 md:max-w-full md:w-full">
                GFRP REBAR IS APPROVED BY HYDERABAD IIT'-'MUMBAI IIT' AND ALSO
                APPROVED BY GOVT OF INDIA
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/pages/innerpage/about"
              className="inline-flex items-center gap-1.5 px-8 py-3 text-white font-semibold rounded-md bg-[#4c8b78] transition"
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
