"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We provide full construction services including project management, onsite supervision, structural development, and end-to-end contractor solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on size and complexity. Small projects may take 2-3 months, while large-scale projects can take 6-12 months.",
  },
  {
    question: "Do you offer customized solutions?",
    answer:
      "Yes, we specialize in tailored construction and design solutions based on your project requirements and budget.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing depends on project scope, materials, labor, and timeline. We provide transparent cost breakdowns before starting any project.",
  },
  {
    question: "How can I request a consultation?",
    answer:
      "You can contact us through our website contact form or call our support team to schedule a consultation.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#347A63] py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Find answers to the most common questions about our services,
            pricing, and project process.
          </p>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left transition duration-300 ${
                  activeIndex === index
                    ? "bg-[#347A63] text-white"
                    : "bg-white text-[#347A63]"
                }`}
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96 p-6" : "max-h-0"
                } bg-gray-50`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-[#347A63]/5 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#347A63] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help you with any additional information you need.
          </p>
          <a href="/contact">
            <button className="bg-[#347A63] text-white px-8 py-3 rounded-xl hover:bg-[#2c6652] transition">
            Contact Us
          </button>
          </a>
        </div>
      </section>

    </div>
  );
};

export default FAQPage;
