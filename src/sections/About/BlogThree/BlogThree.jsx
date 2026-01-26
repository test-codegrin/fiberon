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
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "10%",
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
    <section className="w-full bg-white py-12 sm:py-15 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-0 sm:px-6">
        {/* ================= HEADER ================= */}
        <div className="flex md:justify-between px-4 justify-center items-center mb-12 flex-wrap gap-4">
          <div className="col-lg-7 col-md-7">
            <div className="">
              <span className="text-[#347A64] font-semibold text-lg uppercase">
                Latest News
              </span>
              <div className="text-[#347A64] font-semibold text-[22px] md:text-4xl uppercase">Recent news and events</div>
            </div>
          </div>
          <div className="">
            <div className="hover:bg-[#347A64] hover:text-white inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#347A64] text-[#347A64] font-semibold transition">
              <Link href="/about">
                View All News <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
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
            <div key={index} className="px-4">
              <div className="bg-white border-b-4 border-[#347A64] rounded-2xl overflow-hidden h-full hover:shadow-lg transition-shadow">
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
                <div className="p-4 md:p-6 xl:p-5">
                  <div className="flex gap-4 text-xs sm:text-sm text-gray-500 mb-3">
                    <Link
                      href="/pages/innerpage/blog"
                      className="hover:text-[#347A64]"
                    >
                      By Rebecca
                    </Link>
                    <Link
                      href="/pages/innerpage/blog"
                      className="hover:text-[#347A64]"
                    >
                      Construction
                    </Link>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#347A64] mb-3">
                    <Link href="/pages/innerpage/blog-details">
                      How to hire a contractor home renovation service
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Tortor posuere ac ut consequat. Tellusi elem isis etum
                    sagittis vitae et leo duis ut diam.
                  </p>

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
