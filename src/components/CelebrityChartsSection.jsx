import React from "react";
import aries from "../assets/aries.webp";
// import tauras from "../assets/tauras.webp";
import gemini from "../assets/gemini.webp";
import cancer from "../assets/cancer.webp";
import leo from "../assets/leo.webp";
import virgo from "../assets/virgo.webp";
import libra from "../assets/libra.webp";
import scorpio from "../assets/scorpio.webp";
import sagittarius from "../assets/sagittarius.webp";
import capricorn from "../assets/capricorn.webp";
import aquarius from "../assets/aquarius.webp";
import pisces from "../assets/pisces.webp";



// Sample images for each sign (replace with actual paths or import statements)
const zodiacSigns = [
  { name: "Aries", image: aries },
//   { name: "Taurus", image: tauras },
  { name: "Gemini", image: gemini },
  { name: "Cancer", image: cancer },
  { name: "Leo", image: leo },
  { name: "Virgo", image: virgo },
  { name: "Libra", image: libra },
  { name: "Scorpio", image: scorpio},
  { name: "Sagittarius", image: sagittarius },
  { name: "Capricorn", image: capricorn },
  { name: "Aquarius", image: aquarius},
  { name: "Pisces", image: pisces },
];

const CelebrityChartsSection = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        <h3 className="text-lg font-semibold text-gray-700 uppercase mb-6">
          Celebrity Charts by Sun Sign
        </h3>

        <hr className="mb-8 border-t border-gray-300" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8">
          {zodiacSigns.map((sign) => (
            <div key={sign.name} className="flex items-center space-x-4">
              

              <div className="w-14 h-14 rounded-full bg-[#d9cbbd] flex items-center justify-center">
                <img
                  src={sign.image}
                  alt={`${sign.name} icon`}
                  className="w-10 h-10 object-cover rounded-full scale-150"
                />
              </div>

              <span className="text-lg font-medium text-gray-700">{sign.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CelebrityChartsSection;
