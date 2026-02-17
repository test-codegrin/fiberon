"use client";

import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  "/main-assets/img/projects/Project-1.jpeg",
  "/main-assets/img/projects/Project-2.jpeg",
  "/main-assets/img/projects/Project-3.jpeg",
];

const videos = [
  "/main-assets/img/projects/Project-video-1.mp4",
  "/main-assets/img/projects/Project-video-2.mp4",
];

const GalleryPage = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [videoIndex, setVideoIndex] = useState(-1);

  // Disable body scroll when modal open
  useEffect(() => {
    if (photoIndex >= 0 || videoIndex >= 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [photoIndex, videoIndex]);

  return (
    <section className="py-20 mt-12.5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#347A63]">
            PROJECTS
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Explore our latest media gallery
          </p>
        </div>

        {/* PHOTOS */}
        <div className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((src, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => setPhotoIndex(index)}
              >
                <img
                  src={src}
                  alt={`photo ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="bg-[#347A63] text-white px-6 py-2 rounded-full font-medium">
                    View Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIDEOS */}
        <div>
          <div className="grid sm:grid-cols-2 gap-8">
            {videos.map((src, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => setVideoIndex(index)}
              >
                <video src={src} className="w-full h-64 object-cover" muted />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="bg-[#347A63] text-white px-6 py-2 rounded-full font-medium">
                    Play Video
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PHOTO LIGHTBOX */}
      {photoIndex >= 0 && (
        <Lightbox
          open={photoIndex >= 0}
          close={() => setPhotoIndex(-1)}
          slides={photos.map((src) => ({ src }))}
          index={photoIndex}
        />
      )}

      {/* VIDEO MODAL */}
      {videoIndex >= 0 && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setVideoIndex(-1)} // ✅ close on outside click
        >
          <div
            className="relative w-[20%] max-w-4xl"
            onClick={(e) => e.stopPropagation()} // ✅ prevent close when clicking video
          >
            <button
              onClick={() => setVideoIndex(-1)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
            <video
              src={videos[videoIndex]}
              controls
              autoPlay
              loop // ✅ continue playing
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
