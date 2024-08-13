import React from "react";
import backgroundImage from "../images/istock.jpg";
import legal from "../images/legal.png";
import tax from "../images/tax.png";
import ca from "../images/ca.png";
import { Checkmark } from "react-checkmark";
const Hero = () => {
  return (
    // <section className="relative bg-gray-100 py-16">
    //   {/* <div className="container mx-auto text-center">
    //     <h2 className="text-4xl font-bold mb-4">Your Legal Service Platform</h2>
    //     <p className="mb-8">Providing expert legal and tax services</p>
    //     <div className="flex justify-center space-x-4">
    //       <ServiceButton icon="⚖️" text="Legal" />
    //       <ServiceButton icon="💼" text="Tax" />
    //       <ServiceButton icon="📊" text="Compliance" />
    //     </div>
    //   </div> */}
    // </section>
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Content inside the div (optional) */}
      <div className="w-6/12  flex flex-col items-start p-20 pb-4">
        <h1 className="text-6xl text-white font-bold py-4">
          India's Largest Legal
        </h1>
        <h1 className="text-7xl text-white font-bold">SERVICE PLATFORM</h1>
        <h1 className="py-4 mt-4 text-white">
          <div className="flex">
            <Checkmark size="medium" color="#0091ff" />{" "}
            <h1 className="px-2 text-xl font-bold">
              {" "}
              India's leading startup's legal service provider
            </h1>
          </div>
        </h1>
        <h1 className="py-4 text-white">
          <div className="flex">
            <Checkmark size="medium" color="#0091ff" />{" "}
            <h1 className="px-2 text-xl font-bold">
              {" "}
              100% Money back guarantee on professional service
            </h1>
          </div>
        </h1>
        <h1 className="py-4 text-white">
          <div className="flex">
            <Checkmark size="medium" color="#0091ff" />{" "}
            <h1 className="px-2 text-xl font-bold">
              {" "}
              Expertise in Tax Advisory, Compliance & Litigation Service in
              India
            </h1>
          </div>
        </h1>
      </div>
      <div className=" flex justify-center items-center  mx-24">
        <div className="w-4/12 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={legal} className="w-14 h-14" />
            <h1 className="py-3 text-white text-4xl font-bold">Legal</h1>
            <h1 className="pt-2 text-white text-lg font-semibold">
              Expert lawyers handle all your documents, contracts,
            </h1>
            <h1 className="pb-2 text-white text-lg font-semibold">
              and registrations.
            </h1>
          </div>
        </div>
        <div className="w-4/12 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={tax} className="w-14 h-14" />
            <h1 className="py-3 text-white text-4xl font-bold">Tax</h1>
            <h1 className="pt-2 text-white text-lg font-semibold"></h1>
            <h1 className="pb-2 text-white text-lg font-semibold">
              Help to file your return with expert in easier way
            </h1>
          </div>
        </div>
        <div className="w-4/12 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={ca} className="w-14 h-14" />
            <h1 className="py-3 text-white text-4xl font-bold">Compliance</h1>
            <h1 className="pt-2 text-white text-lg font-semibold"></h1>
            <h1 className="pb-2 text-white text-lg font-semibold">
              Our CA & CS will keep your books in order.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceButton = ({ icon, text }) => (
  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center">
    <span className="mr-2">{icon}</span>
    {text}
  </button>
);

export default Hero;
