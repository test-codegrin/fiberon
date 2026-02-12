import React from "react";

export default function PackagingDetails() {
  return (
    <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#347A63]">
        TYPES OF PACKING
      </div>

      {/* Cards Section */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8 justify-center">
        {/* FRP REBAR COIL PACKING */}
        <div className="border-2 border-[#347A63] rounded-xl p-6 flex flex-col sm:flex-row items-center w-full lg:w-1/2">
          <img
            src="/main-assets/img/product/FRP COIL.jpg"
            alt="FRP Coil Packing"
            className="w-full sm:w-56 h-56 xl:w-70 xl:h-70 object-cover rounded-xl"
          />

          <div className="bg-[#347A63] text-white flex items-center justify-center text-center px-4 py-6 w-full">
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[38px] font-semibold">
              FRP REBAR COIL PACKING
            </p>
          </div>
        </div>

        {/* FRP REBAR BAR PACKING */}
        <div className="border-2 border-[#347A63] rounded-xl p-6 flex flex-col sm:flex-row items-center w-full lg:w-1/2">
          <img
            src="/main-assets/img/product/BAR PACKING.webp"
            alt="FRP Bar Packing"
            className="w-full sm:w-56 h-56 xl:w-70 xl:h-70 object-cover rounded-xl"
          />

          <div className="bg-[#347A63] text-white flex items-center justify-center text-center px-4 py-6 w-full">
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[38px] font-semibold">
              FRP REBAR BAR PACKING
            </p>
          </div>
        </div>
      </div>

      {/* Specification Section */}
      <div className="mt-12 bg-[#347A63] py-2 px-4 sm:px-8 xl:px-35">
        <div className="flex flex-col md:flex-row justify-between xl:px-35 xl:py-0 gap-4 text-white text-base sm:text-lg text-center">
          <li>6 mm to 12 mm - 40 ft Length - Round</li>
          <li>6 mm to 12 mm - 40 ft Length - Straight</li>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center">
        <div className="">
          <div className="text-white bg-[#347A63] font-bold text-lg px-6 py-2 flex items-center justify-center xl:text-[20px]">Notes</div>
        </div>

        <div className="border-2 border-[#347A63] ">
          <div className="xl:text-[20px] text-[#347A63] py-2 px-3 font-semibold text-center">Also Can Supply in Customized Length</div>
        </div>
      </div>
    </div>
  );
}