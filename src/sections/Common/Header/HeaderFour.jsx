"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Menu,
  Search,
  X,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  Box,
} from "lucide-react";

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
      <div className="bg-[#347A64] max-w-full mx-auto text-white text-sm px-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center xl:px-4 py-2">
          <span className="hidden md:block">
            ALL INDIA FIRST BIS License holder for GFRP Bars
          </span>
          <div className="font-semibold">ISO 9001:2015 CERTIFIED</div>
        </div>
      </div>

      {/* ===== Contact Bar ===== */}
      <div className="bg-white border-b text-sm">
        <div className="max-w-[1400px] mx-auto md:flex flex-wrap justify-between items-center px-4 xl:px-0 py-3">
          <div className="md:flex hidden gap-6 text-gray-600">
            <span className="flex gap-2">
              <Phone size={18} className="text-[#347A63]" /> +91 92748 31310
            </span>
            <span className="flex gap-2">
              <Mail size={18} className="text-[#347A63]" />{" "}
              info@fiberonrebar.com
            </span>
            <span className="flex gap-2">
              <Box size={18} className="text-[#347A63]" /> We Ship Worldwide
            </span>
          </div>

          <div className="text-center hidden md:block mt-2 md:mt-0">
            <Link
              href="#"
              className="text-[#347A64] font-medium hover:underline"
            >
              Download Company Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="block md:hidden max-w-[100%] mx-auto bg-white border-b text-sm py-2">
        <div className="flex md:hidden max-w-[100%] w-[90%] mx-auto justify-between md:gap-6 text-gray-600">
          <span className="flex gap-2">
            <Phone size={18} className="text-[#347A63]" /> +91 92748 31310
          </span>
          <span className="flex gap-2">
            <Mail size={18} className="text-[#347A63]" /> info@fiberonFIBERON.com
          </span>
        </div>
        <div className="flex items-center justify-center block md:hidden gap-2 text-gray-600 mt-2">
          <Box size={18} className="text-[#347A63]" /> We Ship Worldwide
        </div>
        <div className="text-center mt-2 md:mt-0">
          <Link href="#" className="text-[#347A64] font-medium hover:underline">
            Download Company Profile
          </Link>
        </div>
      </div>

      {/* ===== Main Header ===== */}
      <header
        className={`w-full bg-white mx-auto transition-all px-4 py-2 duration-300 ${
          isSticky ? "fixed top-0 z-50 shadow-md mx-auto" : "relative"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-0 px-0 lg:px-0">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/main-assets/img/hero/Fibron_Logo_Black_New.png"
              alt="MRG Composites"
              height={150}
              width={150}
              className="h-[130px] w-[150px] object-contain"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden xl:flex items-center gap-8 text-[#347A64] font-medium text-[18px]">
            <Link href="/">Home</Link>
            <Link href="/pages/innerpage/about">About</Link>

            {/* ===== FIXED DROPDOWN ===== */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdown(true)}
              onMouseLeave={() => setDesktopDropdown(false)}
            >
              <button className="flex items-center gap-1 cursor-pointer">
                GFRP FIBERON Products <ChevronDown size={18} />
              </button>

              {desktopDropdown && (
                <div className="absolute left-0 z-999 top-full mt-0 w-56 bg-white shadow-lg rounded-md overflow-hidden">
                  <Link
                    href="/pages/innerpage/shop"
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                  >
                    GFRP FIBERON
                  </Link>
                  <Link
                    href="/pages/innerpage/gfrp-mesh"
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                  >
                    GFRP Bent Bars
                  </Link>
                  <Link
                    href="/product/gfrp-bent-bars"
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                  >
                    GFRP Mesh
                  </Link>
                </div>
              )}
            </div>

            <Link href="/applications">Application</Link>
            <Link href="/pages/innerpage/contact">Contact Us</Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-4">
            <button className="flex items-center justify-center border-2 border-[#347A64] text-[#347A64] font-semibold w-[150px] py-2 rounded-full gap-2 hover:text-white hover:bg-[#347A64] transition">
              Search <Search size={20} />
            </button>
            <div className="">
              <Link
                href="/contact"
                className="flex items-center rounded-full gap-2 hover:bg-[#347A64] border-2 border-[#347A64] text-[#347A64] hover:text-white px-3 py-2 font-semibold"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenu(true)} className="xl:hidden">
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

            <nav className="flex flex-col text-center gap-4 font-medium text-[#347A64]">
              <Link href="/">Home</Link>
              <Link href="/pages/innerpage/about">About</Link>

              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center justify-center gap-2 w-[100%]"
              >
                GFRP FIBERON Products
                <ChevronDown
                  size={18}
                  className={`${productOpen ? "rotate-180" : ""} transition`}
                />
              </button>

              {productOpen && (
                <div className="flex flex-col gap-2 text-sm">
                  <Link href="/pages/innerpage/shop">GFRP FIBERON</Link>
                  <Link href="/pages/innerpage/gfrp-mesh">GFRP Mesh</Link>
                  <Link href="/pages/innerpage/gfrp-bent-bars">Bent Bars</Link>
                </div>
              )}

              <Link href="/applications">Application</Link>
              <Link href="/contact">Contact Us</Link>

              <div className="space-y-4">
                <div className="">
                  <button className="flex items-center justify-center border-2 w-[100%] border-[#347A64] text-[#347A64] font-semibold py-2 rounded-full gap-2 hover:text-white hover:bg-[#347A64] transition">
                  Search <Search size={20} />
                </button>
                </div>
                <div className="">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center rounded-full gap-2 hover:bg-[#347A64] border-2 border-[#347A64] text-[#347A64] hover:text-white px-3 py-2 font-semibold"
                  >
                    Get a Quote <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Spacer */}
      {isSticky && <div className="h-[96px]" />}
    </>
  );
}
