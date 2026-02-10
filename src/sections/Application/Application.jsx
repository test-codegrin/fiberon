import React from "react";

export default function Application() {
  return (
    <div>
      {/* ================= APPLICATION GRID ================= */}
      <section className="py-24 max-w-350 mx-auto px-6">
        {/* Section Title */}
        <div className="text-center text-3xl font-bold text-[#347A64] mb-16">
          GFRP Rebar Applications
        </div>

        {/* Application Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Parking Areas",
              img: "/main-assets/img/product/parking-area.jpg",
            },
            {
              title: "Concrete Slabs",
              img: "/main-assets/img/product/concrete-slab.jpg",
            },
            {
              title: "Industrial Roofing",
              img: "/main-assets/img/product/industrial-roffting.avif",
            },
            {
              title: "RCC Roads",
              img: "/main-assets/img/product/rcc-roads.avif",
            },
            {
              title: "Drainage Systems",
              img: "/main-assets/img/product/drainage-system.jpg",
            },
            {
              title: "Pavements",
              img: "/main-assets/img/product/pavements.avif",
            },
            {
              title: "Friction Slabs",
              img: "/main-assets/img/product/pavements.avif",
            },
            {
              title: "Foundations",
              img: "/main-assets/img/product/foundations.jpg",
            },
            {
              title: "Precaste Elements",
              img: "/main-assets/img/product/precaste elements.avif",
            },
            {
              title: "Crash Barriers",
              img: "/main-assets/img/product/crash-barriers.jpg",
            },
            {
              title: "Chemical Plants",
              img: "/main-assets/img/product/chemical plants.avif",
            },
            {
              title: "Walls",
              img: "/main-assets/img/product/walls.avif",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group border rounded-2xl overflow-hidden text-center hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="w-full h-51 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-2 border-b-3 border-[#347A64] rounded-2xl">
                <div className="font-semibold text-md text-[#347A64] ">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
