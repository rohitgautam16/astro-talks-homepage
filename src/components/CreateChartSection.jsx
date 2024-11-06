import React from "react";
import girls from "../assets/girls.png";

const CreateChartSection = () => {
  return (
    <div className="bg-[#f6f0e7] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
 
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">
            Create Your Astrology Birth Chart
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Create your free, personalized, and highly customizable birth chart (natal chart) by filling in the form below. Using our tools, you can hide/show planets and asteroids, choose a house system, customize orbs, show declinations, sidereal charts, and more...
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-600 mb-4 uppercase">Fill in Your Details</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">My name is:</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">I was born in:</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black" 
                  placeholder="City, state, country" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">My date of birth is:</label>
                <div className="flex space-x-2">
                  <input type="text" placeholder="MM" className="w-1/3 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black" />
                  <input type="text" placeholder="DD" className="w-1/3 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black" />
                  <input type="text" placeholder="YYYY" className="w-1/3 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time of birth:</label>
                <div className="flex items-center space-x-2">
                  <input type="text" placeholder="hh" className="w-1/3 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black" />
                  <span>:</span>
                  <input type="text" placeholder="mm" className="w-1/3 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black" />
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center">
                      <input type="radio" name="ampm" className="text-black focus:ring-black" />
                      <span className="ml-1 text-sm">AM</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="ampm" className="text-black focus:ring-black" />
                      <span className="ml-1 text-sm">PM</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-black text-white rounded-md font-semibold">Create Chart</button>
            </form>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={girls} 
              alt="Astrology Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChartSection;
