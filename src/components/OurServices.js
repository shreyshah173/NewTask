import React from "react";

const OurServices = () => {
  const services = [
    {
      icon: "📑",
      title: "Document Filing",
      description: "Easy and efficient document filing services",
    },
    {
      icon: "🧾",
      title: "Tax Services",
      description: "Expert tax consultation and filing",
    },
    {
      icon: "🏢",
      title: "Business Registration",
      description: "Quick and reliable company registration",
    },
    {
      icon: "🏢",
      title: "Business Registration",
      description: "Quick and reliable company registration",
    },
    {
      icon: "🏢",
      title: "Business Registration",
      description: "Quick and reliable company registration",
    },
    {
      icon: "🏢",
      title: "Business Registration",
      description: "Quick and reliable company registration",
    },
    {
      icon: "🏢",
      title: "Business Registration",
      description: "Quick and reliable company registration",
    },
    {
      icon: "🏢",
      title: "Business Registration",
      description: "Quick and reliable company registration",
    },
    {
      icon: "🏢",
      title: "Business Registration",
      description: "Quick and reliable company registration",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
    <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
      Learn More
    </button>
  </div>
);

export default OurServices;
