"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, X, ArrowRight, ChevronDown } from "lucide-react";

export default function HeaderFour() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== Top Bar ===== */}
      <div className="bg-[#347A64] text-white text-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 py-2">
          <span className="hidden md:block">
            ALL INDIA FIRST BIS License holder for GFRP Bars
          </span>
          <span className="font-semibold">ISO 9001:2015 CERTIFIED</span>
        </div>
      </div>

      {/* ===== Contact Bar ===== */}
      <div className="bg-white border-b text-sm">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center px-4 py-3">
          <div className="flex gap-6 text-gray-600">
            <span>📞 +91 96595 89896</span>
            <span>✉️ india@mrg-composites.com</span>
            <span>📦 We Ship Worldwide</span>
          </div>
          <Link href="#" className="text-[#347A64] font-medium hover:underline">
            Download Company Profile
          </Link>
        </div>
      </div>

      {/* ===== Main Header ===== */}
      <header
        className={`w-full bg-white transition-all duration-300 ${
          isSticky ? "fixed top-0 z-50 shadow-md" : "relative"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/main-assets/img/hero/Fibron_Logo_Black_New.png"
              alt="MRG Composites"
              className="h-[150px] w-[150px] object-contain"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden lg:flex items-center gap-8 text-[#347A64] font-medium text-[18px]">
            <Link href="/">Home</Link>
            <Link href="/pages/innerpage/about">About</Link>

            {/* ===== FIXED DROPDOWN ===== */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdown(true)}
              onMouseLeave={() => setDesktopDropdown(false)}
            >
              <button className="flex items-center gap-1 cursor-pointer">
                GFRP Rebar Products <ChevronDown size={18} />
              </button>

              {desktopDropdown && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-md overflow-hidden">
                  <Link
                    href="/section/home/product/Gfrp"
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                  >
                    GFRP Rebar
                  </Link>
                  <Link
                    href="/product/gfrp-mesh"
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                  >
                    GFRP Mesh
                  </Link>
                  <Link
                    href="/product/gfrp-bent-bars"
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                  >
                    Bent Bars
                  </Link>
                </div>
              )}
            </div>

            <Link href="/applications">Application</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 hover:text-[#347A64]">
              Search <Search size={20} />
            </button>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#347A64] text-white px-5 py-2 font-semibold hover:opacity-90"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenu(true)} className="lg:hidden">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="bg-white w-72 h-full p-6">
            <div className="flex justify-between items-center mb-6">
              <img
                src="/main-assets/img/hero/Fibron_Logo_Black_New.png"
                alt="logo"
                className="h-10"
              />
              <button onClick={() => setMobileMenu(false)}>
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 font-medium text-[#347A64]">
              <Link href="/">Home</Link>
              <Link href="/about">Company</Link>

              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center justify-between"
              >
                GFRP Rebar Products
                <ChevronDown
                  size={18}
                  className={`${productOpen ? "rotate-180" : ""} transition`}
                />
              </button>

              {productOpen && (
                <div className="ml-4 flex flex-col gap-2 text-sm">
                  <Link href="/products/gfrp-rebar">GFRP Rebar</Link>
                  <Link href="/products/gfrp-mesh">GFRP Mesh</Link>
                  <Link href="/products/gfrp-bent-bars">Bent Bars</Link>
                </div>
              )}

              <Link href="/applications">Application</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>
      )}

      {/* Spacer */}
      {isSticky && <div className="h-[96px]" />}
    </>
  );
}
