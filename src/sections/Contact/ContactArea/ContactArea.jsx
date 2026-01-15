"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    city: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#347A64] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? Reach out to us and our team will
            get back to you shortly.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT INFO */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#347A64] text-white flex items-center justify-center text-xl">
                <MapPin />
              </div>
              <div>
                <p className="text-gray-600 max-w-[350px]">
                  Behind Hotel Fern, 8 /A National Highway, Kandla Road,
                  Mahendrnagar, Morbi - 363641.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-[#347A64] text-white flex items-center justify-center text-xl">
                <Phone />
              </div>
              <div>
                <p className="text-gray-600 mt-2">+91 92748 31310</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#347A64] text-white flex items-center justify-center text-xl">
                <Mail />
              </div>
              <div>
                <p className="text-gray-600 mt-2">info@fiberonrebar.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-md space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-4">  
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <div className="text-[#347A63] border border-[#347A64] rounded-lg focus:outline-none focus:border-[#347A64]">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full text-[#347A63] rounded-lg px-4 py-3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  last Name
                </label>
                <div className="text-[#347A63] border border-[#347A64] rounded-lg focus:outline-none focus:border-[#347A64]">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.lname}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full rounded-lg px-4 py-3"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <div className="border border-[#347A64] rounded-lg text-[#347A63] focus:outline-none focus:border-[#347A64]">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="border border-[#347A64] rounded-lg text-[#347A63] focus:outline-none focus:border-[#347A64]">
                <input
                  type="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <div className="border border-[#347A64] rounded-lg text-[#347A63] focus:outline-none focus:border-[#347A64]">
                <input
                  type="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full px-4 py-3"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <div className="text-[#347A63] border border-[#347A64] rounded-lg focus:outline-none focus:border-[#347A64]">
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full rounded-lg px-4 py-3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#347A64] text-white py-3 rounded-lg font-semibold hover:bg-[#2d6a58] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}