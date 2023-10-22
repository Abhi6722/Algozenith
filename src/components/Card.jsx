import React from "react";
import TextWithIcon from "./TextWithIcon";

const Card = () => {
  // Define the URL of your background image
  const backgroundImageUrl = "url(cardbg.png)";
  const matrixImageUrl = "url(matrix.png)";

  return (
    <div className="bg-[#043C53] rounded-2xl my-5 border shadow-[0_35px_60px_-15px_rgba(207,241,255,1)]">
      <div className="bg-white grid grid-cols-2 md:grid-cols-2 gap-2">
        <div>
          <div className="pl-7 py-8">
            <h3 className="text-sm sm:text-3xl lg:text-lg font-semibold pb-3">
              Premium Victory Batch
            </h3>
            <p className="text-3xl sm:text-4xl lg:text-4xl font-bold line-through text-gray-500 pb-2">
              ₹19,999
            </p>
            <p className="text-4xl z-50 sm:text-4xl lg:text-5xl font-extrabold text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-[#3F6FC1] to-[#05445E]">
              ₹13,999
            </p>
          </div>
        </div>
        <div
          className="bg-cover bg-center h-48 md:h-auto z-10"
          style={{
            backgroundImage: backgroundImageUrl,
          }}
        ></div>
      </div>
      
      <div className="bg-cover p-8 rounded-lg relative">
  <div
    className="absolute inset-0 opacity-20 mix-blend-color-dodge"
    style={{
      backgroundImage: matrixImageUrl,
    }}
  ></div>
  <div className="grid grid-cols-1 gap-4">
    <TextWithIcon icon="icon-1" text="100+ Hrs Live Content" />
    <TextWithIcon icon="icon-2" text="50+ Hrs Contest" />
    <TextWithIcon icon="icon-2" text="500+ Problems" />
    <TextWithIcon icon="icon-2" text="Includes an interview bootcamp and access to a mentor network" />
    <TextWithIcon icon="icon-2" text="Enjoy access to our content for one year (paid extensions available)" />
    <TextWithIcon icon="icon-2" text="Flexible payment options, including no-cost EMI, are available." />
  </div>
</div>
      
      <div className="text-center py-6 mx-8">
        <button className="w-full bg-gradient-to-b from-white to-[#DFF6FF] text-[#043C53] text-lg px-6 rounded-md hover:bg-blue-700">
          Join Now <span className="ml-2">➔</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
