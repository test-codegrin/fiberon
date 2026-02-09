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

  // Desktop dropdowns
  const [companyOpen, setCompanyOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [technicalOpen, setTechnicalOpen] = useState(false);

  // Mobile dropdowns
  const [mobileCompany, setMobileCompany] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileTechnical, setMobileTechnical] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      {/* <div className="bg-[#347A64] text-white text-xs px-4 xl:px-0">
        <div className="max-w-350 mx-auto flex justify-between py-2">
          <span className="hidden md:block">
            ALL INDIA FIRST BIS License holder for GFRP Bars
          </span>
          <span className="font-semibold">ISO 9001:2015 CERTIFIED</span>
        </div>
      </div> */}

      {/* ================= CONTACT BAR ================= */}
      <div className="bg-white border-b text-sm hidden md:block">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center md:px-0 px-3 py-3">
          <div className="flex gap-6 text-gray-600">
            <span className="flex gap-2">
              <Phone size={18} className="text-[#347A63]" /> +91 9274831310
            </span>

            <span className="flex gap-2">
              <Mail size={18} className="text-[#347A63]" />
              info@fiberonrebar.com
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
          isSticky ? "fixed top-0 z-50 w-full shadow-md" : "relative"
        }`}
      >
        <div className="max-w-350 mx-auto flex justify-between items-center px-4 py-3">
          {/* LOGO */}
          <Link href="/">
            <img
              src="/main-assets/img/hero/Fibron_Logo_Black_New.png"
              alt="logo"
              className="h-18 xl:h-28 object-contain"
            />
          </Link>
          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center gap-8 text-[#347A64] font-medium text-lg">
            <Link href="/">Home</Link>

            {/* COMPANY */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1">
                Company <ChevronDown size={18} />
              </button>

              {companyOpen && (
                <div className="absolute left-0 z-999 top-full bg-white shadow-xl rounded-lg">
                  <div className="w-64">
                    <Link
                      className="block px-6 py-4 hover:bg-[#347A64]/10"
                      href="/about"
                    >
                      About Us
                    </Link>
                    <Link
                      className="block px-6 py-4 hover:bg-[#347A64]/10"
                      // href="/Certificate.pdf"
                      // target="_blank"
                      // rel="noopener noreferrer"
                      href="/certificates"
                    >
                      Certificates
                    </Link>
                    <Link
                      className="block px-6 py-4 hover:bg-[#347A64]/10"
                      href="/pages/innerpage/project"
                    >
                      Projects
                    </Link>
                  </div>
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
                Products <ChevronDown size={18} />
              </button>
              {productsOpen && (
                <div className="absolute z-999 top-full w-56 bg-white shadow-lg rounded-md">
                  <Link
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                    href="/shop"
                  >
                    GFRP REBAR
                  </Link>
                  <Link
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                    href="/gfrp-mesh"
                  >
                    GFRP BENT REBAR
                  </Link>
                  <Link
                    className="block px-4 py-3 hover:bg-[#347A64]/10"
                    href="/advantages/cost"
                  >
                    ADVANTAGES
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/applications">Application</Link>

            {/* TECHNICAL SPECIFICATION */}
            <div
              className="relative"
              onMouseEnter={() => setTechnicalOpen(true)}
              onMouseLeave={() => setTechnicalOpen(false)}
            >
              <button className="flex items-center gap-1">
                Technical Specification <ChevronDown size={18} />
              </button>
              {technicalOpen && (
                <div className="absolute z-999 top-full w-72 bg-white shadow-lg rounded-md">
                  <Link className="block px-4 py-3 hover:bg-[#347A64]/10" href="#">
                    Comparison Steel Bar vs GFRP
                  </Link>
                  <Link className="block px-4 py-3 hover:bg-[#347A64]/10" href="#">
                    Tensile Strength Steel Bar vs GFRP
                  </Link>
                  <Link className="block px-4 py-3 hover:bg-[#347A64]/10" href="#">
                    Packaging Details
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact">Contact Us</Link>
          </nav>
          
          {/* ACTIONS */}
          <div className="hidden xl:flex gap-4">
            {/* <button className="border-2 border-[#347A64] text-[#347A64] px-5 py-2 rounded-full hover:bg-[#347A64] hover:text-white transition flex gap-2">
              Search <Search className="mt-1" size={18} />
            </button> */}
            <Link
              href="/contact"
              className="border-2 border-[#347A64] text-[#347A64] px-5 py-2 rounded-full hover:bg-[#347A64] hover:text-white transition flex gap-2"
            >
              Get a Quote <ArrowRight className="mt-1" size={18} />
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
          <div className="bg-white w-[85%] max-w-sm h-full p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <img
                src="/main-assets/img/hero/Fibron_Logo_Black_New.png"
                className="h-15"
              />
              <button onClick={() => setMobileMenu(false)}>
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-[#347A64] font-medium text-base">
              <Link href="/">Home</Link>

              {/* COMPANY */}
              <button
                onClick={() => setMobileCompany(!mobileCompany)}
                className="flex justify-between items-center"
              >
                Company
                <ChevronDown
                  size={18}
                  className={`transition ${mobileCompany ? "rotate-180" : ""}`}
                />
              </button>

              {mobileCompany && (
                <div className="pl-4 flex flex-col gap-3 text-sm">
                  <Link href="/about">About Us</Link>
                  <Link
                    href="/Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificates
                  </Link>
                  <Link href="/pages/innerpage/project">Projects</Link>
                </div>
              )}

              {/* PRODUCTS */}
              <button
                onClick={() => setMobileProducts(!mobileProducts)}
                className="flex justify-between items-center"
              >
                Products
                <ChevronDown
                  size={18}
                  className={mobileProducts ? "rotate-180" : ""}
                />
              </button>

              {mobileProducts && (
                <div className="pl-4 flex flex-col gap-2 text-sm">
                  <Link href="/shop">GFRP REBAR</Link>
                  <Link href="/gfrp-mesh">GFRP BENT REBAR</Link>
                  <Link href="/advantages/cost">Advantages</Link>
                </div>
              )}

              <Link href="/applications">Application</Link>

              {/* TECHNICAL SPECIFICATION */}
              <button
                onClick={() => setMobileTechnical(!mobileTechnical)}
                className="flex justify-between items-center"
              >
                Technical Specification
                <ChevronDown
                  size={18}
                  className={mobileTechnical ? "rotate-180" : ""}
                />
              </button>

              {mobileTechnical && (
                <div className="pl-4 flex flex-col gap-2 text-sm">
                  <Link href="#">Comparison Steel Bar vs GFRP</Link>
                  <Link href="#">Tensile Strength Steel Bar vs GFRP</Link>
                  <Link href="#">Packaging Details</Link>
                </div>
              )}

              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>
      )}

      {isSticky && <div className="h-24" />}
    </>
  );
}
