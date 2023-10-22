import React from "react";
import InfoWithIcon from "./TextWithIcon";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#05445E] to-[#022534] text-white pt-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-1 flex-row">
          <div>
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-center md:text-start mb-4">
              Be better at DSA & CP
            </h1>
            <p className="text-base sm:text-lg text-center md:text-start lg:text-start mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <button className="hidden md:inline-block bg-gradient-to-b from-white to-[#DFF6FF] text-[#05445E] text-md rounded-lg items-center justify-center border shadow-[0_5px_60px_-15px_rgba(207,241,255,1)]">
              Join Now <span className="ml-2">➔</span>
            </button>
            <button className="hidden md:inline-block bg-gradient-to-b from-[#033042] to-[#005C83] text-white text-md rounded-lg items-center justify-center">
              View Curriculum
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <InfoWithIcon icon="icon-1" text="Lorem ipsum dolor sit amet" />
            <InfoWithIcon icon="icon-1" text="Lorem ipsum dolor sit amet" />
            <InfoWithIcon icon="icon-1" text="Lorem ipsum dolor sit amet" />
            <InfoWithIcon icon="icon-1" text="Lorem ipsum dolor sit amet" />
          </div>

          <div className="lg:hidden md:hidden flex flex-col mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <button className="bg-gradient-to-b from-white to-[#DFF6FF] text-[#05445E] text-md rounded-lg flex items-center justify-center border shadow-[0_5px_60px_-15px_rgba(207,241,255,1)]">
              Join Now <span className="ml-2">➔</span>
            </button>
            <button className="bg-gradient-to-b from-[#033042] to-[#005C83] text-white text-md rounded-lg flex items-center justify-center">
              View Curriculum
            </button>
          </div>

        </div>
        <div className="md:order-2 mb-8 md:mb-0 -m-24">
          <img
            src="herobg.png"
            alt="Hero Image"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
