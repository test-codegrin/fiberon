const FooterThree = () => {
  return (
    <footer className="bg-white text-[#4c8b78]">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-[1400px]  mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* ================= ABOUT ================= */}
          <div>
            <a href="/pages/homepage/home-1" className="inline-block mb-6">
              <img
                src="/main-assets/img/logo.svg"
                alt="Construz"
                className="h-10"
              />
            </a>

            <p className="text-base leading-relaxed text-[#4c8b78]">
              Holisticly underwhelm ethical solutions whereas maintainable
              strategic theme areas. Uniquely optimize quality interface before
              resource.
            </p>

            <div className="mt-4 text-2xl text-[#4c8b78] font-semibold">Since 2000</div>
          </div>

          {/* ================= USEFUL LINKS ================= */}
          <div>
            <div className="text-[25px] text-[#4c8b78] font-semibold mb-6">
              Useful Links
            </div>

            <div className="grid grid-cols-2 w-[400px] gap-4 text-base">
              <ul className="space-y-3">
                <li>
                  <a href="/pages/innerpage/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/innerpage/service"
                    className="hover:underline"
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/innerpage/service"
                    className="hover:underline"
                  >
                    News & Article
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/innerpage/service"
                    className="hover:underline"
                  >
                    Success Story
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/innerpage/service"
                    className="hover:underline"
                  >
                    FAQ’s
                  </a>
                </li>
              </ul>

              <ul className="space-y-3">
                <li>
                  <a href="/pages/innerpage/team" className="hover:underline">
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/innerpage/service"
                    className="hover:underline"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/innerpage/service"
                    className="hover:underline"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/innerpage/contact"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/innerpage/contact"
                    className="hover:underline"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div>
            <div className="text-[25px] font-semibold mb-6">Newsletter</div>
            <p className="text-sm text-[#4c8b78] mb-5">
              Subscribe for the latest news. Stay updated on the latest trends.
            </p>

            <form className="space-y-4">
              <div className="rounded-md border-2 border-[#4c8b78]">
                <input
                  type="email"
                  placeholder="Email Address..."
                  required
                  className="w-full px-4 py-3 text-gray-800 "
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#4c8b78] text-white font-semibold py-3 rounded-md transition"
              >
                SUBMIT NOW
                <span className="text-lg">↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-[#4c8b78] py-6">
        <p className="text-center text-sm text-[#4c8b78]">
          © 2024{" "}
          <a href="#" className="font-semibold hover:underline">
            Construz
          </a>{" "}
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterThree;
