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
    speed: 1200,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  return (
    <section className="w-full py-16 sm:py-20 mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ================= LEFT : TESTIMONIALS ================= */}
          <div>
            {/* TITLE */}
            <div className="mb-8 sm:mb-10 text-center xl:text-left">
              <span className="inline-flex items-center gap-2 text-[#347A64] font-semibold text-sm sm:text-lg uppercase">
                Testimonials
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#347A64]">
                Our Happy Customers
              </h2>
            </div>

            {/* SLIDER */}
            <Slider ref={sliderRef} {...settings}>
              {[1, 2, 3].map((item) => (
                <div key={item}>
                  <div className="bg-white border-b-4 border-[#347A64] rounded-2xl p-6 sm:p-8 relative min-h-[260px] sm:min-h-[330px]">

                    {/* QUOTE */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-8 bg-[#347A64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white text-4xl sm:text-6xl">
                      <span className="-mt-6">,,</span>
                    </div>

                    {/* PROFILE */}
                    <div className="flex items-center gap-4 sm:gap-5 mt-4 mb-6">
                      <img
                        src={`/main-assets/img/testimonial/testi_1_${item === 2 ? 2 : 1}.png`}
                        alt="user"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-lg sm:text-xl text-gray-900">
                          Aleesha Brown
                        </div>
                        <span className="text-sm sm:text-md text-gray-500">
                          CEO at Construz
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#347A64] mb-3">
                      Best Company!
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-md">
                      Tortor posuere ac ut consequat. Tellusi elem isis etum
                      sagittis vitae et leo duis ut diam. Odio ut sem nulla phar.
                      Purus sit ame nus mas do eiusmod.
                    </p>
                  </div>
                </div>
              ))}
            </Slider>

            {/* CONTROLS */}
            <div className="flex justify-center xl:justify-start gap-4 mt-8 sm:mt-10">
              <button
                onClick={goToPrev}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#347A64] text-[#347A64] hover:bg-[#347A64] hover:text-white font-bold transition"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#347A64] text-[#347A64] hover:bg-[#347A64] hover:text-white transition"
              >
                →
              </button>
            </div>
          </div>

          {/* ================= RIGHT : CTA CARD ================= */}
          <div className="bg-[#347A64] text-white rounded-2xl p-8 sm:p-10 text-center xl:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Have you any questions?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-8">
              Podcasting operational change management inside of making this
              the first true generator.
            </p>

            <Link
              href="landing-assets/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#347A64] px-6 py-3 rounded-full font-semibold transition hover:scale-105"
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
