import React from "react";
import handshake from "../../images/handshake.png";
const PricingCard = ({ title, price, features, isMiddle }) => (
  <div
    className={`bg-yellow-400 rounded-lg overflow-hidden shadow-lg ${
      isMiddle ? "scale-105" : ""
    }`}
  >
    <div className="p-6">
      <div className="flex justify-center mb-4">
        <div className=" rounded-full p-2">
          <img src={handshake} />
        </div>
      </div>
      <h2 className="text-center text-xl font-bold mb-4">{title}</h2>
      <div className="bg-indigo-800 text-white text-center py-2 rounded-full mb-6">
        <span className="text-2xl font-bold">₹{price}/-</span>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-indigo-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6">
      <button className="w-full bg-indigo-800 text-white py-2 rounded-full font-bold hover:bg-indigo-700 transition duration-200">
        Register Now
      </button>
    </div>
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "299",
      features: [
        "Application filing for GSTIN",
        "Generate ARN & TRN number",
        "Personally assigned GST Expert",
        "Call, Chat, Email Support",
      ],
    },
    {
      title: "Premium Plan",
      price: "2999",
      features: [
        "GST Registration absolutely FREE",
        "GST Return Filing for 12 Months",
        "Personally assigned GST Expert",
        "Call, Chat, Email Support",
      ],
    },
    {
      title: "Standard Plan",
      price: "1999",
      features: [
        "GST Registration absolutely FREE",
        "GST Return Filing for 6 Months",
        "Personally assigned GST Expert",
        "Call, Chat, Email Support",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-800 to-blue-500 py-8 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl px-2">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} isMiddle={index === 1} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
