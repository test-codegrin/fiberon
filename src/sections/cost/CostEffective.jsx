"use client";
import {
  Feather,
  Droplets,
  PiggyBank,
  Dumbbell,
  Flame,
  Leaf,
  Wrench,
  Layers,
  ZapOff,
  ShieldCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CostEffectivePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const advantages = [
    {
      title: "Lightweight & Durable",
      desc: "Strong yet easy to handle",
      icon: Feather,
    },
    {
      title: "Corrosion & Water Resistant",
      desc: "No rust, no decay",
      icon: Droplets,
    },
    {
      title: "Cost Effective & Low Maintenance",
      desc: "Saves money for decades",
      icon: PiggyBank,
    },
    {
      title: "High Strength & Flexible",
      desc: "Performs under heavy stress",
      icon: Dumbbell,
    },
    {
      title: "Thermal & Chemical Stable",
      desc: "Withstands heat and chemicals",
      icon: Flame,
    },
  ];

  const advantage = [
    {
      title: "Eco-Friendly & Sustainable",
      desc: "Greener, energy-efficient choice",
      icon: Leaf,
    },
    {
      title: "Easy Handling & Installation",
      desc: "Quick and safe setup",
      icon: Wrench,
    },
    {
      title: "Reduced Concrete Coverage",
      desc: "Saves material and cost",
      icon: Layers,
    },
    {
      title: "Non-Conductive & Radio Safe",
      desc: "Ideal for sensitive sites",
      icon: ZapOff,
    },
    {
      title: "Long Life & Reliable",
      desc: "Built to last generations",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full bg-white py-0">
      <div className="max-w-350 mx-auto px-6">
        {/* ================= ADVANTAGES ================= */}
        <div className="mb-0">
          <div className="text-[#347A64] text-[35px] text-center px-4 py-2 text-sm font-semibold tracking-wide mb-10">
            ADVANTAGES
          </div>

          <div className="flex flex-col max-w-[1400px] md:flex-row gap-20">
            <div className="grid grid-cols-1 max-w-full w-full mx-auto gap-x-14 gap-y-8">
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2  md:gap-4 bg-[#F5F5F5] p-1.5 border-l-4 border-[#347A64]"
                  >
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                      <div className="bg-[#347A64] w-10 h-10 rounded-full border border-[#347A64] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white " />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#347A64] md:text-[23px]">
                        {item.title}
                      </div>
                      <div className="text-base text-[#347A64]">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 max-w-full w-full mx-auto gap-x-14 gap-y-8">
              {advantage.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2 max-w-full w-full md:gap-4 bg-[#F5F5F5] p-1.5 border-l-4 border-[#347A64]"
                  >
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                      <div className="bg-[#347A64] w-10 h-10 rounded-full border border-[#347A64] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white " />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#347A64] md:text-[23px]">
                        {item.title}
                      </div>
                      <div className="text-base text-[#347A64]">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= TITLE ================= */}
        <h1 className="text-3xl pt-4 md:pt-0 md:text-4xl font-bold text-[#347A64] mb-6">
          Cost Effective
        </h1>

        {/* ================= INTRO ================= */}
        <div className="text-2xl md:text-2xl text-[#347A63] font-semibold mb-3">
          What is GFRP Rebar?
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          As construction demand evolves, there is an increment of durable,
          cost-effective, reliable construction materials. This led to the
          popularity of{" "}
          <span className="font-semibold text-[#347A63]">
            glass fiber reinforced polymer bars
          </span>{" "}
          in construction. Unlike steel reinforcement bars, GFRP bars come with
          the best properties such as corrosion resistance, strength,
          lightweight, non-conductive, etc.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          GFRP Rebar is made of Glass Fiber Polymer Resin. Glass fiber is
          embedded in the polymer resin. This combination creates a lightweight,
          non-corrosive and highly durable reinforcement material. Compared to
          steel reinforcement bars, GFRP does not rust and corrode with water,
          chemicals, and environmental effects and provides a longer lifespan of
          construction.
        </p>

        {/* ================= WHY CHOOSE ================= */}
        <div className="px-3">
          <li className="text-2xl md:text-2xl xl:text-3xl text-[#347A63] font-semibold mb-4">
            Why Choose GFRP Rebar for Cost Savings?
          </li>
        </div>

        <div className="px-2">
          <ol className="list-decimal pl-5 space-y-5 text-gray-700 leading-relaxed mb-10">
            <li>
              <span className="font-semibold text-[#347A63]">
                Non-Corrosive Properties Reduce Maintenance Costs:
              </span>{" "}
              One of the standard advantages of GFRP Rebar is
              <span className="font-semibold text-[#347A63]">
                {" "}
                corrosion resistance
              </span>
              . GFRP does not rust and corrode to chemicals, water, salt, etc.
              It increases the lifespan of construction and eliminates frequent
              maintenance and replacement costs.
            </li>

            <li>
              <span className="font-semibold text-[#347A63]">
                Lightweight and Easy to Install:
              </span>{" "}
              GFRP Rebar is{" "}
              <span className="font-semibold text-[#347A63]">4x lighter</span>{" "}
              than traditional steel reinforcement bars. Transportation and
              installation are easier, reducing labor time and overall project
              cost.
            </li>

            <li>
              <span className="font-semibold text-[#347A63]">Durable:</span>{" "}
              GFRP Rebar is a durable construction material due to its
              properties. Stronger, lighter, and corrosion-resistant, GFRP
              reduces long-term repair and replacement needs, extending value
              beyond initial construction.
            </li>
          </ol>

          {/* ================= COMPARISON ================= */}
          <div className="px-2">
            <li className="text-2xl md:text-2xl xl:text-3xl text-[#347A63] font-semibold mb-4">
              GFRP Rebar vs. Steel Rebar: A Cost Comparison
            </li>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            When we compare GFRP Rebar vs steel rebar for cost, steel rebar may
            appear cheaper initially, but steel rebar has certain disadvantages.
            Steel rebars are not compatible with water, leading to rust and
            corrosion that damages construction.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Steel reinforcement bars require regular maintenance and
            replacement. On the other hand, GFRP Rebar solves corrosion issues
            completely. By using GFRP bars, construction does not require
            frequent maintenance.
          </p>

          <p className="text-gray-700 leading-relaxed">
            GFRP Rebar is{" "}
            <span className="font-semibold text-[#347A63]">
              two times stronger
            </span>{" "}
            and <span className="font-semibold text-[#347A63]">¼ lighter</span>{" "}
            than traditional steel reinforcement bars. It improves structural
            strength while reducing weight, making it highly effective for
            applications such as bridge construction and other infrastructure
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}
