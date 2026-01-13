"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterThree = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="w-full max-w-[1200px] bg-[#347A64] rounded-2xl mx-auto py-20 mt-16"
    >
      <div className="max-w-7xl mx-auto px-10 py-25">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

          {/* ===== ITEM 1 ===== */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white">
              {inView && <CountUp start={0} end={26} />}k+
            </div>
            <p className="mt-3 text-white font-medium">
              Projects Completed
            </p>
          </div>

          {/* ===== ITEM 2 ===== */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white">
              {inView && <CountUp start={0} end={98} />}%
            </div>
            <p className="mt-3 text-white font-medium">
              Customers Satisfied
            </p>
          </div>

          {/* ===== ITEM 3 ===== */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white">
              {inView && <CountUp start={0} end={20} />}M
            </div>
            <p className="mt-3 text-white font-medium">
              Special Machinery
            </p>
          </div>

          {/* ===== ITEM 4 ===== */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white">
              {inView && <CountUp start={0} end={30} />}+
            </div>
            <p className="mt-3 text-white font-medium">
              Years in Business
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CounterThree;
