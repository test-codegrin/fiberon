"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, X, ArrowRight } from "lucide-react";

export default function HeaderFour() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== Top green Bar ===== */}
      <div className="bg-[#4c8b78] text-white text-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 py-2">
          <span className="hidden md:block">
            ALL INDIA FIRST BIS License holder for GFRP Bars
          </span>
          <span className="font-semibold">ISO 9001:2015 CERTIFIED</span>
        </div>
      </div>

      {/* ===== Contact Info Bar ===== */}
      <div className="bg-white border-b text-sm">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center px-4 xl:px-0 py-3">
          <div className="flex flex-wrap gap-6 text-gray-600">
            <span>📞 +91 96595 89896</span>
            <span>✉️ india@mrg-composites.com</span>
            <span>📦 We Ship Worldwide</span>
          </div>

          <div className="">
            <Link
              href="#"
              className="text-[#4c8b78] font-medium hover:underline"
            >
              Download Company Profile
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Main Header ===== */}
      <header
        className={`w-full bg-white transition-all duration-300 ${
          isSticky ? "fixed top-0 z-50 shadow-md" : "relative"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/main-assets/img/logo.svg"
              alt="MRG Composites"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden text-[18px] lg:flex items-center gap-8 text-[#4c8b78] font-medium">
            <Link href="/" className="hover:text-[#4c8b78]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#4c8b78]">
              About
            </Link>
            <Link href="/products" className="hover:text-[#4c8b78]">
              GFRP Rebar Products
            </Link>
            <Link href="/applications" className="hover:text-[#4c8b78]">
              Application
            </Link>
            <Link href="/contact" className="hover:text-[#4c8b78]">
              Contact Us
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 flex item-center gap-2 hover:text-[#4c8b78]">
              Search
              <Search size={20} />
            </button>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#4c8b78] text-white px-5 py-2 font-semibold hover:bg-[#4c8b78] transition"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenu(true)} className="lg:hidden p-2">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ===== Mobile Menu ===== */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="bg-white w-72 h-full p-6">
            <div className="flex justify-between items-center mb-6">
              <img src="/main-assets/img/logo.svg" alt="logo" className="h-8" />
              <button onClick={() => setMobileMenu(false)}>
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 font-medium text-[#4c8b78]">
              <Link href="/">Home</Link>
              <Link href="/about">Company</Link>
              <Link href="/products">GFRP Rebar Products</Link>
              <Link href="/applications">Application</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>

            <Link
              href="/contact"
              className="mt-6 inline-block bg-[#4c8b78] px-4 py-2 font-semibold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}

      {/* Spacer for sticky header */}
      {isSticky && <div className="h-[88px]" />}
    </>
  );
}
