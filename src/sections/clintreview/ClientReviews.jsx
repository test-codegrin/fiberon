"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Suresh",
    role: "DASHLANK PVT LTD",
    text: "MRG Composites' GFRP rebar made a remarkable difference in our project. Lightweight yet strong, it sped up installation effortlessly.",
  },
  {
    name: "Raj",
    role: "Founder & CEO",
    text: "Working with MRG Composites Rebar was a game-changer for us. Their expertise and dedication helped us achieve our goals faster.",
  },
  {
    name: "Kacey",
    role: "Purchase Manager",
    text: "MRG Composites truly understands our needs. Their personalized approach and attention to detail made all the difference.",
  },
];

// Duplicate data for seamless loop
const sliderData = [...reviews, ...reviews];

export default function ClientReviews() {
  const sliderRef = useRef(null);
  let position = 0;

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const animate = () => {
      position -= 2; // speed control (smaller = slower)

      // Reset seamlessly at half width
      if (Math.abs(position) >= slider.scrollWidth / 2) {
        position = 0;
      }

      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full py-20 bg-gray-50 mb-[50px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="text-[#347A64] font-semibold uppercase tracking-wide">
            Testimonials
          </div>
          <div className="text-4xl font-bold text-[#347A64] mt-2">
            Client Reviews
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div ref={sliderRef} className="flex w-max">
            {sliderData.map((item, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[380px] lg:w-[420px] px-4 flex-shrink-0"
              >
                <div className="h-full bg-white rounded-xl hover:shadow-lg p-8 border-t-4 border-[#347A64]">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#347A64] text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 max-h-[120px] h-full leading-relaxed mb-8">
                    {item.text}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[#347A64] font-medium">
                        {item.role}
                      </p>
                    </div>

                    <div className="w-[45px] w-[60px] h-[60px] text-6xl rounded-full bg-[#347A64] text-white font-bold">
                      <div className="flex pt-2.5 items-center justify-center">
                        “
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
