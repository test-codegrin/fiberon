"use client";

import { useEffect } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contect() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <section className="relative max-w-350 mt-25 mb-12.5 rounded-xl mx-auto bg-[#347A64] py-12 text-white">
        {/* Decorative Overlay */}
        <div className="relative max-w-325 mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* ================= LEFT INFO ================= */}
          <div
            data-aos="fade-right"
            className="space-y-6 md:mt-37.5 ml-auto max-w-137.5 w-full"
          >
            <div className="text-4xl font-bold mb-6">Contact Us</div>

            <p className="text-white/90 mb-10 text-lg max-w-md">
              Get high-performance GFRP composite solutions designed for
              durability, safety, and long-term cost savings.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  <MapPin />
                </span>
                <span>Morbi, Gujrat, India</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">
                  <Mail />
                </span>
                <span>info@fiberonrebar.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">
                  <Phone />
                </span>
                <span>+91 92748 31310</span>
              </div>
            </div>

            <button className="mt-10 border-white border text-[#FFF] px-10 py-3 font-semibold rounded-lg hover:bg-gray-100 transition">
              Download Brochure
            </button>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div
            data-aos="fade-left"
            className="bg-white p-3 rounded-2xl shadow-2xl text-black"
          >
            <h3 className="text-2xl font-bold text-[#347A64] mb-6">
              Send Us a Message
            </h3>

            <form className="gap-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="rounded-lg h-15 border border-[#347A64]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="col-span-2 w-full md:col-span-1 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#347A64]"
                  />
                </div>

                <div className="rounded-lg h-15 border border-[#347A64]">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="col-span-2 w-full md:col-span-1 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#347A64]"
                  />
                </div>
              </div>

              <div className="rounded-lg h-15 mt-3 border border-[#347A64]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="col-span-2 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#347A64]"
                />
              </div>

              <div className="rounded-lg mt-3 h-15 border border-[#347A64]">
                <input
                  type="phone"
                  placeholder="Phone Number"
                  className="col-span-2 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#347A64]"
                />
              </div>

              <div className="rounded-lg mt-3 h-15 border border-[#347A64]">
                <input
                  type="city"
                  placeholder="City"
                  className="col-span-2 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#347A64]"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Your Message"
                className="col-span-2 p-4 w-full mt-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#347A64]"
              ></textarea>

              <div className="w-full mt-4">
                <button
                  type="submit"
                  className="col-span-2 w-full bg-[#347A64] px-3 text-white py-3 font-semibold rounded-lg hover:opacity-90 transition"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
