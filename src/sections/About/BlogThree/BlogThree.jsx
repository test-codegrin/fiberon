"use client";

import Link from "next/link";
import Slider from "react-slick";

const BlogThree = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1200,
    pauseOnHover: true,
    slidesToScroll: 1,

    // Desktop default
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "8%",

    responsive: [
      {
        breakpoint: 1280, // laptop
        settings: {
          slidesToShow: 2,
          centerPadding: "6%",
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "6%",
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

  return (
    <section className="w-full bg-white py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 sm:mb-14">
          <div className="text-center lg:text-left">
            <span className="block text-[#347A64] font-semibold text-sm sm:text-base uppercase">
              Latest News
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#347A64]">
              Recent news and events
            </h2>
          </div>

          <div className="">
            <Link
            href="/pages/innerpage/blog"
            className="mx-auto lg:mx-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#347A64] text-[#347A64] font-semibold transition hover:bg-[#347A64] hover:text-white"
          >
            View All News →
          </Link>
          </div>
        </div>

        {/* ================= BLOG SLIDER ================= */}
        <Slider {...settings}>
          {[
            "/main-assets/img/blog/blog_1_1.png",
            "/main-assets/img/blog/blog_1_2.png",
            "/main-assets/img/blog/blog_1_3.png",
            "/main-assets/img/blog/blog_1_1.png",
            "/main-assets/img/blog/blog_1_2.png",
            "/main-assets/img/blog/blog_1_3.png",
          ].map((img, index) => (
            <div key={index} className="px-3 sm:px-4">
              <div className="bg-white border-b-4 border-[#347A64] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={img}
                    alt="blog"
                    className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
                  />

                  {/* DATE */}
                  <div className="absolute top-4 left-4 bg-[#347A64] text-white rounded-lg px-3 py-2 text-center">
                    <span className="block text-base sm:text-lg font-bold leading-none">
                      17
                    </span>
                    <span className="text-xs uppercase">Jun</span>
                    <span className="block text-xs">2024</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6">
                  {/* META */}
                  <div className="flex gap-4 text-xs sm:text-sm text-gray-500 mb-3">
                    <Link href="/pages/innerpage/blog" className="hover:text-[#347A64]">
                      By Rebecca
                    </Link>
                    <Link href="/pages/innerpage/blog" className="hover:text-[#347A64]">
                      Construction
                    </Link>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#347A64] mb-3">
                    <Link href="/pages/innerpage/blog-details">
                      How to hire a contractor home renovation service
                    </Link>
                  </h3>

                  {/* TEXT */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Tortor posuere ac ut consequat. Tellusi elem isis etum
                    sagittis vitae et leo duis ut diam.
                  </p>

                  {/* BUTTON */}
                  <Link
                    href="/pages/innerpage/blog-details"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#347A64] text-[#347A64] font-semibold transition hover:bg-[#347A64] hover:text-white"
                  >
                    More Details →
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

export default BlogThree;
