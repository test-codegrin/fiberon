"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [advantagesOpen, setAdvantagesOpen] = useState(false);
  // Desktop dropdown states
  const [companyOpen, setCompanyOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);

  // Mobile dropdown
  const [productOpenMobile, setProductOpenMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#347A64] text-white text-sm px-4">
        <div className="max-w-350 mx-auto flex justify-between items-center py-2">
          <span className="hidden md:block">
            ALL INDIA FIRST BIS License holder for GFRP Bars
          </span>
          <span className="font-semibold">ISO 9001:2015 CERTIFIED</span>
        </div>
      </div>

      {/* ================= CONTACT BAR ================= */}
      <div className="bg-white border-b text-sm hidden md:block">
        <div className="max-w-350 mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex gap-6 text-gray-600">
            <span className="flex gap-2">
              <Phone size={18} className="text-[#347A63]" /> +91 92748 31310
            </span>
            <span className="flex gap-2">
              <Mail size={18} className="text-[#347A63]" /> info@fiberonrebar.com
            </span>
            <span className="flex gap-2">
              <Box size={18} className="text-[#347A63]" /> We Ship Worldwide
            </span>
          </div>
          <Link href="#" className="text-[#347A64] font-medium hover:underline">
            Download Company Profile
          </Link>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header
        className={`bg-white transition-all duration-300 ${
          isSticky ? "fixed top-0 z-999 w-full shadow-md" : "relative"
        }`}
      >
        <div className="max-w-350 mx-auto flex justify-between items-center px-4 py-2">
          {/* LOGO */}
          <div className="h-30">
            <Link href="/">
            <img
              src="/main-assets/img/hero/Fibron_Logo_Black_New.png"
              alt="logo"
              className="h-26 object-contain"
            />
          </Link>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden xl:flex items-center gap-8 text-[#347A64] font-medium text-lg">
            <Link href="/">Home</Link>

            {/* ================= COMPANY MEGA MENU ================= */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => {
                setCompanyOpen(false);
              }}
            >
              <button className="flex items-center gap-1">
                Company <ChevronDown size={18} />
              </button>

              {companyOpen && (
                <div className="absolute left-0 top-full mt-0 z-50 bg-white shadow-xl rounded-lg flex">
                  {/* LEFT COLUMN */}
                  <div className="w-64">
                    <Link
                      href="/pages/innerpage/about"
                      className="block px-6 py-4 hover:bg-[#347A64]/10"
                    >
                      About Us
                    </Link>

                    <button
                      onMouseEnter={() => setAdvantagesOpen(true)}
                      
                      className="w-full flex items-center gap-1 text-left px-6 py-4 text-[#347A63] hover:bg-[#347A64]/10"
                    >
                      Advantages <ChevronDown size={18} />
                    </button>

                    <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="#">
                      Projects
                    </Link>
                    <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="#">
                      Achievement
                    </Link>
                    <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="#">
                      Certificates
                    </Link>
                    <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="#">
                      GFRP Rebar Video
                    </Link>
                    <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="#">
                      GFRP Rebar Blog
                    </Link>
                    <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="#">
                      GFRP Rebar FAQs
                    </Link>
                  </div>

                  {/* RIGHT COLUMN – ADVANTAGES */}
                  {advantagesOpen && (
                    <div className="w-72" onMouseLeave={() => setAdvantagesOpen(false)}>
                      <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="/pages/innerpage/cost">
                        Cost Effective
                      </Link>
                      <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="/pages/innerpage/corrosion">
                        Corrosion Resistant
                      </Link>
                      <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="/pages/innerpage/Durable">
                        Durable
                      </Link>
                      <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="/pages/innerpage/lighter">
                        Lighter
                      </Link>
                      <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="/pages/innerpage/strength">
                        Strength
                      </Link>
                      <Link className="block px-6 py-4 hover:bg-[#347A64]/10" href="/pages/innerpage/non-Conductive">
                        Non Conductive
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1">
                GFRP FIBERON Products <ChevronDown size={18} />
              </button>
              {productsOpen && (
                <div className="absolute left-0 z-999 top-full w-56 bg-white shadow-lg rounded-md overflow-hidden">
                  <Link className="block px-4 py-3 hover:bg-[#347A64]/10" href="/pages/innerpage/shop">
                    GFRP FIBERON
                  </Link>
                  <Link className="block px-4 py-3 hover:bg-[#347A64]/10" href="/pages/innerpage/gfrp-mesh">
                    GFRP Bent Bars
                  </Link>
                </div>
              )}
            </div>

            {/* APPLICATION */}
            <div
              className="relative"
              onMouseEnter={() => setApplicationOpen(true)}
              onMouseLeave={() => setApplicationOpen(false)}
            >
              <button className="flex items-center gap-1">
                Application <ChevronDown size={18} />
              </button>
              {applicationOpen && (
                <div className="absolute left-0 z-999  top-full w-56 bg-white shadow-lg rounded-md overflow-hidden">
                  <Link className="block px-4 py-3 hover:bg-[#347A64]/10" href="/applications">
                    Applications
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pages/innerpage/contact">Contact Us</Link>
          </nav>

          {/* ACTIONS */}
          <div className="hidden xl:flex gap-4">
            <button className="border-2 border-[#347A64] text-[#347A64] px-5 py-2 rounded-full hover:bg-[#347A64] hover:text-white transition flex gap-2">
              Search <Search size={18} />
            </button>
            <Link
              href="/contact"
              className="border-2 border-[#347A64] text-[#347A64] px-5 py-2 rounded-full hover:bg-[#347A64] hover:text-white transition flex gap-2"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setMobileMenu(true)} className="xl:hidden">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="bg-white w-72 h-full p-6">
            <div className="flex justify-between mb-6">
              <img src="/main-assets/img/hero/Fibron_Logo_Black_New.png" className="h-10" />
              <button onClick={() => setMobileMenu(false)}>
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-[#347A64] font-medium text-center">
              <Link href="/">Home</Link>
              <Link href="/pages/innerpage/about">About</Link>

              <button
                onClick={() => setProductOpenMobile(!productOpenMobile)}
                className="flex justify-center items-center gap-2"
              >
                Products <ChevronDown
                  className={`${productOpenMobile ? "rotate-180" : ""}`}
                />
              </button>

              {productOpenMobile && (
                <div className="flex flex-col gap-2 text-sm">
                  <Link href="/pages/innerpage/shop">GFRP FIBERON</Link>
                  <Link href="/pages/innerpage/gfrp-mesh">GFRP Mesh</Link>
                </div>
              )}

              <Link href="/applications">Application</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      )}

      {isSticky && <div className="h-24" />}
    </>
  );
}
