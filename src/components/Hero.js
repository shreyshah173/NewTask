import React from "react";
import backgroundImage from "../images/istock.jpg";
import legal from "../images/legal.png";
import tax from "../images/tax.png";
import ca from "../images/ca.png";
import { Checkmark } from "react-checkmark";

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-cover bg-center min-h-screen">
      <div className="container mx-10 px-4 py-12 md:py-20">
        <div className="md:w-8/12 lg:w-6/12 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl text-white font-bold py-2 md:py-4">
            India's Largest Legal
          </h1>
          <h1 className="text-5xl md:text-7xl text-white font-bold">SERVICE PLATFORM</h1>
          {["India's leading startup's legal service provider",
            "100% Money back guarantee on professional service",
            "Expertise in Tax Advisory, Compliance & Litigation Service in India"].map((text, index) => (
            <div key={index} className="flex items-center py-2 md:py-4 text-white">
              <Checkmark size="medium" color="#0091ff" />
              <h2 className="px-2 text-lg md:text-xl font-bold">{text}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-24 py-8">
        {[
          { icon: legal, title: "Legal", description: "Expert lawyers handle all your documents, contracts, and registrations." },
          { icon: tax, title: "Tax", description: "Help to file your return with expert in easier way" },
          { icon: ca, title: "Compliance", description: "Our CA & CS will keep your books in order." }
        ].map((service, index) => (
          <div key={index} className="w-full md:w-4/12 flex justify-center mb-8 md:mb-0">
            <div className="flex flex-col justify-center items-center text-center">
              <img src={service.icon} className="w-12 h-12 md:w-14 md:h-14" alt={service.title} />
              <h3 className="py-3 text-white text-3xl md:text-4xl font-bold">{service.title}</h3>
              <p className="text-white text-base md:text-lg font-semibold px-4">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;