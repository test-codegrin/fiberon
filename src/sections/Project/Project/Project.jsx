"use client";

import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/main-assets/img/project/project2_1.png",
  "/main-assets/img/project/project2_2.png",
  "/main-assets/img/project/project2_3.png",
  "/main-assets/img/project/project2_4.png",
  "/main-assets/img/project/project2_5.png",
  "/main-assets/img/project/project2_6.png",
  "/main-assets/img/project/project2_7.png",
  "/main-assets/img/project/project2_8.png",
  "/main-assets/img/project/project2_9.png",
];

const Project = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  const handleOpen = (index) => {
    setPhotoIndex(index);
  };

  useEffect(() => {
    if (photoIndex >= 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [photoIndex]);

  return (
    <section className="py-20 mt-[50px]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#347A63]">
            Our Projects
          </div>
          <p className="text-gray-500 mt-2 text-lg">
            Explore our latest completed works
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white border-b-4 border-[#347A63] rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={src}
                  alt={`project ${index + 1}`}
                  className="w-full h-64 object-cover "
                />

                {/* Number */}
                <span className="absolute top-4 left-4 bg-[#347A63] text-white text-sm px-3 py-1 rounded-full">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                {/* View Button */}
                <button
                  onClick={() => handleOpen(index)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <span className="bg-[#347A63] text-white px-5 py-2 rounded-full font-medium hover:bg-[#2c6654] transition">
                    View
                  </span>
                </button>
              </div>

              {/* Details */}
              <div className="p-6">
                <span className="text-sm text-[#347A63] font-medium">
                  Category
                </span>
                <h4 className="text-lg font-semibold mt-2 text-gray-800">
                  Project Title
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                  Building since 09,01,2024
                </p>

                <a
                  href="/pages/innerpage/project-details"
                  className="inline-flex border-2 border-[#347A63] rounded-full px-3 py-2 hover:bg-[#347A63] hover:text-white items-center gap-2 mt-2 text-[#347A63] font-medium hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-16 space-x-2">
          <button className="w-10 h-10 rounded-full bg-[#347A63] text-white font-semibold">
            01
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-[#347A63] hover:text-white transition">
            02
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-[#347A63] hover:text-white transition">
            03
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {photoIndex >= 0 && (
        <Lightbox
          open={photoIndex >= 0}
          close={() => setPhotoIndex(-1)}
          slides={images.map((src) => ({ src }))}
          index={photoIndex}
        />
      )}
    </section>
  );
};

export default Project;
