import Link from "next/link";

const blogs = [
  {
    id: 1,
    img: "/main-assets/img/blog/blog_1_1.png",
    day: "17",
    month: "JUN",
    year: "2024",
    title: "How to hire a contractor home renovation service",
  },
  {
    id: 2,
    img: "/main-assets/img/blog/blog_1_2.png",
    day: "06",
    month: "JUN",
    year: "2024",
    title: "Started to develop a specific testing programs",
  },
  {
    id: 3,
    img: "/main-assets/img/blog/blog_1_3.png",
    day: "12",
    month: "JUN",
    year: "2024",
    title: "How to stay motivated until a project is finished",
  },
  {
    id: 4,
    img: "/main-assets/img/blog/blog_1_4.png",
    day: "05",
    month: "JUN",
    year: "2024",
    title: "Home improvements that will save you money this winter",
  },
  {
    id: 5,
    img: "/main-assets/img/blog/blog_1_5.png",
    day: "15",
    month: "JUN",
    year: "2024",
    title: "Panelized construction streamline process",
  },
  {
    id: 6,
    img: "/main-assets/img/blog/blog_1_6.png",
    day: "24",
    month: "JUN",
    year: "2024",
    title: "Renovations that add the most resale value to your home",
  },
];

export default function BlogFour() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* BLOG GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border-[#347A63] border-b-4 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={blog.img}
                  alt="blog"
                  className="w-full h-56 object-cover"
                />

                {/* DATE */}
                <div className="absolute top-0 left-0 bg-[#347A63] text-white px-3 py-2 text-center rounded-t-r-lg">
                  <span className="block text-lg font-bold">{blog.day}</span>
                  <span className="text-xs uppercase">{blog.month}</span>
                  <span className="block text-xs opacity-80">{blog.year}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex gap-4 text-sm text-gray-500 mb-3">
                  <Link href="/pages/innerpage/blog" className="hover:text-[#347A63]">
                    By Rebecca
                  </Link>
                  <Link href="/pages/innerpage/blog" className="hover:text-[#347A63]">
                    Construction
                  </Link>
                </div>

                <h4 className="text-lg mb-3 leading-snug">
                  <Link
                    href="/pages/innerpage/blog-details"
                    className="text-[#347A63] font-semibold"
                  >
                    {blog.title}
                  </Link>
                </h4>

                <p className="text-gray-600 text-sm mb-5">
                  Tortor posuere ac ut consequat. Tellusi elem isis etum sagittis
                  vitae et leo duis ut diam.
                </p>

                <Link
                  href="/pages/innerpage/blog-details"
                  className="inline-flex items-center gap-2 text-[#347A63] font-semibold hover:underline"
                >
                  More Details
                  <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-14">
          <ul className="flex gap-4">
            <li>
              <Link
                href="#"
                className="px-4 py-2 rounded-md bg-[#347A63] text-white font-semibold"
              >
                01
              </Link>
            </li>
            <li>
              <Link
                href="/pages/innerpage/blog"
                className="px-4 py-2 rounded-md border hover:bg-[#347A63] hover:text-white transition"
              >
                02
              </Link>
            </li>
            <li>
              <Link
                href="/pages/innerpage/blog"
                className="px-4 py-2 rounded-md border hover:bg-[#347A63] hover:text-white transition"
              >
                03
              </Link>
            </li>
            <li>
              <Link
                href="/pages/innerpage/blog"
                className="px-4 py-2 rounded-md border hover:bg-[#347A63] hover:text-white transition"
              >
                →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
