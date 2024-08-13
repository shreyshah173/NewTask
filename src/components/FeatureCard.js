// FeatureCard.js
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="items-start p-4 ">
      <div className="flex items-start justify-start">
        <img src={icon} alt={title} className="h-24 w-24 mb-4 items-start " />
      </div>

      <h3 className="text-2xl py-4 font-bold text-[#160c51]">{title}</h3>
      <p className="text-black font-semibold mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
