import React from "react";

const DocsReq = () => {
  const services = [
    {
      title: "Income Tax Filling",
      description: "✓ PAN Card",
      description2: "✓ Form 16",
      description3: "✓ Salary Slip for each month",
      description4:
        "✓ Detail of any investment or exemption left to be reported in form 16",
    },
    {
      title: "GST Services",
      description: "✓Pan Card & Aadhaar",
      description2: "✓ Bank Statement.",
      description3: "✓Details of Capital Gain.",
    },
    {
      title: "Company Registration",
      description: "✓Trading Report.",
      description2: "✓ Account information for a business.",
      description3: "✓If applicable, a profit and loss statement.",
    },
    {
      title: "Annual Filling",
      description: "✓ Form 10A",
      description2: "✓ Copy of Trust Deed",
      description3: "✓ Documents Evidenced for Incorportation of trust",
      description4:
        "✓ Account copy for last 3 years immediately preceding the year of applicable is deposited(If Applicable)",
    },
    {
      title: "Registration Service",
      description: "✓ Proof of the Investment.",
      description2: "✓ Sale Documents.",
      description3: "✓ TDS Certificates.",
      description4: "✓ Statements of Interest Income.",
      description5: "✓ Receipt regarding mutual funds and other investments.",
    },
    // {
    //   icon: "",
    //   title: "How Can We Assist You",
    //   description: "Quick and reliable company registration",
    // },
  ];

  return (
    <section className="py-16 ">
      <div className=" flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-8/12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          <div className=" py-6 shadow-md text-center border-[0.7vw] border-[#281c73] bg-[#241966]">
            <div className="">
              <h3 className="text-2xl p-4  font-bold mb-2 text-white">
                How Can We Assist You ?
              </h3>
              <h1 className="text-xl text-white">
                Get in touch with our experts for more information about our
                services.
              </h1>
            </div>

            <button className="border-2 bg-white border-white mt-6 rounded w-full">
              <button className=" bg-white text-[#281c73] font-bold text-2xl py-6 rounded">
                +91-8851505094
              </button>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
  description2,
  description3,
  description4,
  description5,
}) => (
  <div className="p-4 py-6 shadow-md text-start border-[0.7vw] border-[#281c73] bg-[#dadfff] group rounded-xl">
    <div className="hover:text-blue-400 gst">
      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#2575fc]">
        {title}
      </h3>
    </div>

    <p className="text-xl py-2">{description}</p>
    <p className="text-xl py-2">{description3}</p>
    <p className="text-xl py-2">{description2}</p>
    <p className="text-xl py-2">{description4}</p>
    <p className="text-xl py-2">{description5}</p>
  </div>
);

export default DocsReq;
