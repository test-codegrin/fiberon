"use client";

import Link from "next/link";
import { useState } from "react";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";

export default function BlogFive() {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src =
        "https://www.youtube.com/embed/Mp8IXI1kzvQ?si=UQVMsmBriHPfD6Vf";
    }
    setIsActive(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* ================= BLOG CONTENT ================= */}
            <div className="lg:col-span-8">
              <article className="space-y-8">
                {/* IMAGE */}
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/main-assets/img/blog/blog_details1_1.png"
                    alt="blog"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4 bg-[#347A63] text-white px-4 py-2 rounded-lg text-center">
                    <span className="block text-lg font-bold">22</span>
                    <span className="text-xs uppercase">Mar</span>
                    <span className="block text-xs opacity-80">2024</span>
                  </div>
                </div>

                {/* META */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <Link href="#">By Rebecca</Link>
                  <span>506 Views</span>
                  <span>Construction</span>
                  <span>02 Comments</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900">
                  Construction Process Streamlines
                </h1>

                <p className="text-gray-600">
                  Construction standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>

                <p className="text-gray-600">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi.
                </p>

                {/* BLOCKQUOTE */}
                <blockquote className="border-l-4 border-[#347A63] pl-6 italic text-gray-700 bg-gray-50 py-4 rounded-md">
                  “Tortor posuere ac ut consequat tellusi elem isis etum sagittis
                  vitae atleo duis ut diam odio ut sem nulla phar.”
                  <footer className="mt-2 text-sm font-semibold text-[#347A63]">
                    — Aleesha Brown, CEO
                  </footer>
                </blockquote>

                <h2 className="text-2xl font-semibold">
                  Growth and meaning of mechanical technology
                </h2>

                <p className="text-gray-600">
                  Construction standard dummy text ever since the when an
                  unknown printer took a galley vero eos et accusamus et iusto
                  odio dignissimos ducimus.
                </p>

                {/* IMAGE GRID */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <img
                    src="/main-assets/img/blog/blog_details1_2.png"
                    className="rounded-lg"
                    alt=""
                  />
                  <img
                    src="/main-assets/img/blog/blog_details1_3.png"
                    className="rounded-lg"
                    alt=""
                  />
                </div>

                <h2 className="text-2xl font-semibold">
                  Engineering and mechanics money for a better future
                </h2>

                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Powerful Product Strategy</li>
                  <li>Quality Control System</li>
                  <li>Professional Team Works</li>
                </ul>

                {/* VIDEO */}
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/main-assets/img/blog/blog_details1_4.png"
                    alt=""
                    className="w-full"
                  />
                  <button
                    onClick={openPopup}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="w-16 h-16 rounded-full bg-[#347A63] text-white flex items-center justify-center text-3xl hover:scale-110 transition">
                      ▶
                    </span>
                  </button>
                </div>

                {/* TAGS + SOCIAL */}
                <div className="flex flex-wrap justify-between items-center gap-6 pt-6 border-t">
                  <div className="flex flex-wrap gap-2">
                    {["Factory", "Metallurgy", "Construction", "Industry"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm border rounded-full hover:bg-[#347A63] hover:text-white transition"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  <div className="flex gap-4 text-xl text-gray-600">
                    <Link href="#">𝕏</Link>
                    <Link href="#">IG</Link>
                    <Link href="#">FB</Link>
                    <Link href="#">IN</Link>
                  </div>
                </div>

                {/* AUTHOR */}
                <div className="flex gap-6 bg-gray-50 p-6 rounded-xl">
                  <img
                    src="/main-assets/img/blog/blog-author.png"
                    alt=""
                    className="w-24 h-24 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">John Maxwell</h3>
                    <p className="text-sm text-[#347A63]">
                      CEO of Construz
                    </p>
                    <p className="text-gray-600 mt-2">
                      Blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:col-span-4 space-y-8">
              {/* SEARCH */}
              <div className="border rounded-xl p-5">
                <h3 className="font-semibold mb-4">Search</h3>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-md px-4 py-2 focus:outline-[#347A63]"
                />
              </div>

              {/* CATEGORIES */}
              <div className="border rounded-xl p-5">
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Construction",
                    "Architecture",
                    "Business",
                    "Engineering",
                    "Building",
                  ].map((cat) => (
                    <li
                      key={cat}
                      className="flex justify-between hover:text-[#347A63]"
                    >
                      <span>{cat}</span>
                      <span>•</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TAGS */}
              <div className="border rounded-xl p-5">
                <h3 className="font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Architecture",
                    "Building",
                    "Home",
                    "Factory",
                    "Construction",
                    "Business",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border rounded-full text-sm hover:bg-[#347A63] hover:text-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PopupVideo
        popup={popup}
        setPopup={setPopup}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}
    