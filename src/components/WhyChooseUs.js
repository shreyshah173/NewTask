import React from "react";
import FeatureCard from "./FeatureCard";
import section from "../images/section.webp";
// Import your icons and main image
import icon1 from "../images/path-to-icon1.png";
import icon2 from "../images/path-to-icon2.png";
import icon3 from "../images/path-to-icon-3.png";
import icon4 from "../images/path-to-icon4.webp";
import mainImage from "../images/path-to-main.webp";

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-center text-2xl lg:text-4xl font-bold text-[#160c51]">
        Why Choose Us
      </h2>
      <div className="flex justify-center">
        <div className="w-4/12 lg:w-2/12 border-t-0 border-4 border-l-0 border-r-0 border-yellow-400 h-4"></div>
      </div>

      <p className="text-center text-base lg:text-lg text-[#160c51] font-bold mt-4">
        Why do you trust us with what you see and do?
      </p>
      <div className="flex flex-col lg:flex-row justify-start mx-4 lg:mx-20">
        <div className="flex flex-col items-start justify-start w-full lg:w-4/12 mb-8 lg:mb-0">
          <FeatureCard
            icon={icon1}
            title="Client-Focused Solutions"
            description="Our goal is simple: to provide our clients with top-notch service at a reasonable cost. We prioritize client satisfaction above all else, ensuring successful outcomes for every representation."
          />
          <FeatureCard
            icon={icon2}
            title="24/7 Support Provider"
            description="We’re always here to help, day or night. Our friendly experts are always available, even outside of normal office hours. We keep in touch with our clients and they know they can count on us for reliable service and trustworthy business practices."
          />
        </div>
        <div className="w-full lg:w-4/12 mb-8 lg:mb-0">
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-auto lg:h-full object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full lg:w-4/12">
          <FeatureCard
            icon={icon3}
            title="Values-Driven Flexibility"
            description="Our team’s experience allows us to give clients the focus and dedication they need. We collaborate with clients to address their requirements and goals, providing a value-driven approach to each case."
          />
          <FeatureCard
            icon={icon4}
            title="Skilled Professionals"
            description="Our experts specialize in taxation and legal services throughout India. They assist with licensing, compliance, dispute resolution, and problem analysis. They possess a strong understanding of the legal industry and offer reliable counsel."
          />
        </div>
      </div>
      {/* <div className="m-32">
        <img src={section} />
      </div> */}
      <div className="m-8 lg:m-32">
        <img
          src={section}
          className="w-full h-auto object-cover shadow-lg" 
        />
      </div>


    </div>
  );
};

export default WhyChooseUs;
