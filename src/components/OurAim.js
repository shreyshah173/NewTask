import React from "react";
import moneyback from "../images/moneybabk.png";

const OurAim = () => {
  return (
    <section className="py-4 bg-white">
      <div className="mx-auto">
        <h1 className="mx-4 lg:mx-14 text-2xl lg:text-4xl font-bold text-center mb-2 text-[#160c51]">
          Our Main AIM - Customer Satisfaction
        </h1>
        <div className="flex justify-center">
          <div className="w-3/12 border-t-0 border-4 border-l-0 border-r-0 border-yellow-400 h-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center my-2">
          <div className="w-full lg:w-1/2 pr-0 p-4 lg:pr-8 lg:ml-20">
            <h3 className="text-lg lg:text-xl font-bold mb-4">
              MONEY BACK GUARANTEE
            </h3>
            <p className="mb-4 font-semibold text-base lg:text-lg">
              Our top priority is always our clients’ satisfaction. That’s why
              we offer a comprehensive 100% money-back guarantee on all our
              services. You can try us risk-free and if for any reason you’re
              not completely satisfied, we’ll give you a full refund. We’re
              committed to ensuring our customers are happy and satisfied with
              everything we do. Please note, certain terms and conditions apply.
            </p>
            <button className="bg-yellow-500 text-indigo-900 px-4 lg:px-6 py-2 rounded shadow-2xl">
              Know More
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
            <img
              src={moneyback}
              alt="Guarantee"
              className="w-3/4 lg:w-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAim;
