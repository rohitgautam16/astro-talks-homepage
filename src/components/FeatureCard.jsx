import React from "react";

const FeatureCard = ({ title, description, linkText, linkUrl, illustration }) => {
  return (
    <div className="feature-card p-4 bg-[#f3e9df5f] rounded-md text-center">
      <img src={illustration} alt={`${title} Illustration`} className="w-24 h-auto mx-auto mb-4 rounded-full" />
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-black text-sm mb-4">{description}</p>
      <a href={linkUrl} className="text-black text-sm font-semibold hover:underline">{linkText} &gt;</a>
    </div>
  );
};

export default FeatureCard;
