"use client";

import Link from "next/link";
import Slider from "react-slick";
import { useEffect } from "react";

const PortfolioThree = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       centerMode: false,
    //       centerPadding: "10%",
    //       dots: false,
    //     },
    //   },
    // ],
  };

  // useEffect(() => {
  //   const dots = document.querySelector(".slick-dots");
  //   if (dots) {
  //     dots.classList.add(
  //       "w-[100px]",
  //       "flex",
  //       "justify-center",
  //       "gap-3",
  //       "mt-8"
  //     );
  //   }
  // }, []);

  return (
    <section className="w-full py-20 mt-10 rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#347A64] font-semibold text-md uppercase">
            Recent Work
          </span>

          <div className="mt-4 text-3xl md:text-4xl font-bold text-[#347A64]">
            Check our latest projects
          </div>

          <p className="mt-3 text-gray-600">
            We are the best construction agency in the world
          </p>
        </div>

        {/* ===== SLIDER ===== */}
        <div className="overflow-hidden">
          <Slider {...settings}>
            {[
              "/main-assets/img/project/project1_1.png",
              "/main-assets/img/project/project1_2.png",
              "/main-assets/img/project/project1_3.png",
              "/main-assets/img/project/project1_1.png",
              "/main-assets/img/project/project1_2.png",
              "/main-assets/img/project/project1_3.png",
            ].map((img, index) => (
              <div key={index} className="px-4">
                <div className="bg-white border-b-4 border-[#347A64] rounded-2xl hover:shadow-lg overflow-hidden">

                  {/* IMAGE */}
                  <div className="relative group">
                    <img
                      src={img}
                      alt="project"
                      className="w-full h-[280px] object-cover"
                    />

                    {/* <Link
                      href={img}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                    >
                      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#347A64] text-xl font-bold">
                        👁
                      </span>
                    </Link> */}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 text-left">
                    <span className="text-base font-semibold text-[#347A64]">
                      Building
                    </span>

                    <div className="mt-2 text-lg font-bold text-gray-900">
                      <Link href="/pages/innerpage/project-details">
                        General Construction
                      </Link>
                    </div>

                    <p className="mt-2 text-sm text-gray-600">
                      Building since 09,01,2024
                    </p>

                    <div className="bg-[#347A64] w-[200px] h-[50px]">
                      <Link
                      href="/pages/innerpage/project-details"
                      className="flex items-center justify-center pt-[12px] font-semibold text-white hover:underline"
                    >
                      Explore Service {""} →
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default PortfolioThree;
