import React from "react";
import birthchartprint from "../assets/birthchartprint.png";

const BirthChartPrint = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#f9f6f2] py-16 px-6 md:px-12">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">

        <img
          src={birthchartprint} 
          alt="Birth Chart Print"
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left md:pl-12">
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          The Birth Chart Print
        </h3>

        <p className="text-gray-600 mb-6">
          Display the unique planetary positions of a birth chart with this
          custom wall print.
        </p>

        <button className="px-6 py-3 bg-black text-white font-semibold rounded-md shadow-md hover:bg-gray-900 transition">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default BirthChartPrint;
