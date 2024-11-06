import React from "react";
import icon from "../assets/icon.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:justify-center md:text-left">
        
        <div className="w-32 bg-black rounded-full flex items-center justify-center mb-4 md:mb-0">
          <img src={icon} alt="Logo" className="max-w-full h-auto" /> 
        </div>

        <div className="flex flex-col items-center pt-3 space-y-2 md:space-y-2  md:mb-0">
          <a href="#about" className="text-blue-600 font-serif text-sm hover:underline block">About</a>
          <a href="#terms" className="text-blue-600 font-serif text-sm hover:underline block">Terms of Use</a>
          <a href="#contact" className="text-blue-600 font-serif text-sm hover:underline block">Contact</a>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">&copy; Astro Charts 2024</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
