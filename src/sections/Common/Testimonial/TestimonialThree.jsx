"use client";

import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

const TestimonialThree = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  return (
    <section className="w-full py-20 mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT : TESTIMONIALS ================= */}
          <div>
            {/* TITLE */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-[#347A64] font-semibold text-lg uppercase">
                Testimonials
              </span>
              <div className="mt-2 text-3xl md:text-4xl font-bold text-[#347A64]">
                Our Happy Customers
              </div>
            </div>

            {/* SLIDER */}
            <Slider ref={sliderRef} {...settings}>
              {[1, 2, 3].map((item) => (
                <div key={item}>
                  <div className="bg-white border-b-4 border-[#347A64] h-[330px] rounded-2xl p-5 relative">

                    {/* QUOTE */}
                    <div className="absolute top-5 right-8 bg-[#347A64] w-12 h-12 flex items-center justify-center rounded-full">
                      <img
                        src="/main-assets/img/icon/quote.svg"
                        alt="quote"
                        className="w-6 h-6"
                      />
                    </div>

                    {/* PROFILE */}
                    <div className="flex items-center gap-5 mt-5 mb-6">
                      <img
                        src={`/main-assets/img/testimonial/testi_1_${item === 2 ? 2 : 1}.png`}
                        alt="user"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-xl text-gray-900">
                          Aleesha Brown
                        </div>
                        <span className="text-md text-gray-500">
                          CEO at Construz
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="text-2xl font-semibold text-[#347A64] mb-3">
                      Best Company!
                    </div>
                    <p className="text-gray-600 leading-relaxed text-md">
                      Tortor posuere ac ut consequat. Tellusi elem isis etum
                      sagittis vitae et leo duis ut diam. Odio ut sem nulla phar.
                      Purus sit ame nus mas do eiusmod.
                    </p>
                  </div>
                </div>
              ))}
            </Slider>

            {/* CONTROLS */}
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-4">
                <button
                  onClick={goToPrev}
                  className="w-12 h-12 rounded-full border border-[#347A64] text-[#347A64] hover:bg-[#347A64] hover:text-white font-bold transition"
                >
                  ←
                </button>
                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full border border-[#347A64] text-[#347A64] hover:bg-[#347A64] hover:text-white transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT : CTA CARD ================= */}
          <div className="bg-[#347A64] text-white rounded-2xl p-10">
            <div className="text-2xl font-bold mb-4">
              Have you any questions?
            </div>
            <p className="text-white/90 mb-8">
              Podcasting operational change management inside of making this
              the first true generator.
            </p>

            <Link
              href="landing-assets/contact"
              className="inline-flex items-center gap-2 bg-white text-[#347A64] px-6 py-3 rounded-full font-semibold transition"
            >
              Contact With Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialThree;
