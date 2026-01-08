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

const Process = () => {
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
    <section className="w-full text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= ADVANTAGES ================= */}
        <div className="mb-20">
          <span className="inline-block bg-[#508A76] px-4 py-2 text-sm font-semibold tracking-wide mb-10">
            ADVANTAGES
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
      {advantages.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#F5F5F5] p-1.5 border-l-4 border-[#508A76]"
          >
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <div className="bg-[#508A76] w-10 h-10 rounded-full border border-[#508A76] flex items-center justify-center">
                <Icon className="w-6 h-6 text-white " />
              </div>
            </div>
            <div>
              <div className="font-semibold text-[#508A76] text-[23px]">{item.title}</div>
              <div className="text-base text-[#508A76]">
                {item.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
        </div>

        {/* ================= PROJECTS ================= */}
        <div>
          <span className="inline-block bg-[#508A76] px-4 py-2 text-sm font-semibold tracking-wide mb-10">
            REBAR-X in Real-World Projects
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Parking Areas",
              "Concrete Slabs",
              "Industrial Roofing",
              "RCC Roads",
              "Drainage Systems",
              "Pavements",
              "Friction Slabs",
              "Foundations",
              "Precast Elements",
              "Crash Barriers",
              "Chemical Plants",
              "Walls",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="p-3 text-center">
                  <div className="text-sm font-semibold text-gray-900">
                    {title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
