"use client";

import Link from "next/link";
import Slider from "react-slick";

const PortfolioThree = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "12%",

    responsive: [
      {
        breakpoint: 1280, // laptops
        settings: {
          slidesToShow: 2,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  const projects = [
    "/main-assets/img/project/project1_1.png",
    "/main-assets/img/project/project1_2.png",
    "/main-assets/img/project/project1_3.png",
    "/main-assets/img/project/project1_1.png",
    "/main-assets/img/project/project1_2.png",
    "/main-assets/img/project/project1_3.png",
  ];

  return (
    <section className="w-full py-10 mt-14 xl:mt-22 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-14 px-3">
          <span className="inline-block text-[#347A64] font-semibold uppercase tracking-wide">
            Recent Work
          </span>

          <h2 className="mt-2 text-xl md:text-4xl font-bold text-[#347A64]">
            Check our Latest Projects
          </h2>

          {/* <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            We are the best construction agency in the world
          </p> */}
        </div>

        {/* ===== SLIDER ===== */}
        <Slider {...settings}>
          {projects.map((img, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl border-b-4 border-[#347A64] overflow-hidden transition-all hover:shadow-xl">

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={img}
                    alt="project"
                    className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 text-left">
                  <span className="text-sm font-semibold text-[#347A64] uppercase">
                    Building
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-gray-900">
                    <Link href="/pages/innerpage/project-details">
                      General Construction
                    </Link>
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Building since 09,01,2024
                  </p>

                  <Link
                    href="/pages/innerpage/project-details"
                    className="inline-flex items-center justify-center mt-5 px-6 py-3 bg-[#347A64] text-white font-semibold rounded-md hover:bg-[#2e6b58] transition"
                  >
                    Explore Service →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioThree;
