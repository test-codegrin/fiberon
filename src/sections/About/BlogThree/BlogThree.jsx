"use client";

import Link from "next/link";
import Slider from "react-slick";

const BlogThree = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full py-10 bg-white max-w-[1400px] mb-10 mx-auto overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-0">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[#347A64] font-semibold text-base uppercase">
              Latest News
            </span>
            <div className="mt-2 text-3xl md:text-4xl font-bold text-[#347A64]">
              Recent news and events
            </div>
          </div>

          <div className="hover:bg-[#347A64] hover:text-white inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#347A64] text-[#347A64] font-semibold transition">
            <Link href="/pages/innerpage/blog" className="">
              View All News →
            </Link>
          </div>
        </div>

        {/* ===== BLOG SLIDER ===== */}
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
              <div className="bg-white border-b-4 border-[#347A64] rounded-2xl hover:shadow-lg overflow-hidden">
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={img}
                    alt="blog"
                    className="w-full h-[240px] object-cover"
                  />

                  {/* DATE */}
                  <div className="absolute top-4 left-4 bg-[#347A64] text-white rounded-lg px-3 py-2 text-center">
                    <span className="block text-lg font-bold leading-none">
                      17
                    </span>
                    <span className="text-xs uppercase">Jun</span>
                    <span className="block text-xs">2024</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  {/* META */}
                  <div className="flex gap-4 text-sm text-gray-500 mb-3">
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

                  {/* TITLE */}
                  <div className="text-xl font-bold text-[#347A64] mb-3">
                    <Link href="/pages/innerpage/blog-details">
                      How to hire a contractor home renovation service
                    </Link>
                  </div>

                  {/* TEXT */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Tortor posuere ac ut consequat. Tellusi elem isis etum
                    sagittis vitae et leo duis ut diam. Odio ut sem nulla phar.
                  </p>

                  {/* BUTTON */}
                  <div className="hover:bg-[#347A64] hover:text-white cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#347A64] text-[#347A64] font-semibold transition">
                    <Link
                      href="/pages/innerpage/blog-details"
                      className="inline-flex items-center gap-2 font-semibold"
                    >
                      More Details →
                    </Link>
                  </div>
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
