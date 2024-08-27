import React from "react";

const DocsReqReg = () => {
  const services = [
    {
      title: "For Individual/Proprietorship​​",
      description: "✓ PAN Card",
      description2: "✓ Address Proof of the Proprietor",
      description3: "✓ Any other firm registration certificate",
      description4:
        "✓ Detail of any investment or exemption left to be reported in form 16",
    },
    {
      title: "For LLP",
      description: "✓PAN Card of LLP",
      description2: "✓ LLP Agreement",
      description3: "✓Partner's names and address proof",
      description4: "✓Director’s Proof (Any 2 from the below)",
    },
    {
      title: "For Private Limited Company",
      description: "✓Certificate of Incorporation",
      description2: "✓ PAN card of Company.",
      description3: "✓Articles of Association (AOA)",
      description4: "✓ Memorandum of Association (MOA)",
      description5: "✓ Resolution signed by board members",
      description6: "✓ Identity and address proof of directors",
      description7: "✓ Digital Signature",
      description8: "✓ Director’s Proof (Any 2 from the below)",
    },
    {
      title: "For Partnership Firm",
      description: "✓ Form 10A",
      description2: "✓ Copy of Trust Deed",
      description3: "✓ Documents Evidenced for Incorportation of trust",
      description4:
        "✓ Account copy for last 3 years immediately preceding the year of applicable is deposited(If Applicable)",
    },
    {
      description:
        "Apart from the above docs its required the bank statement copy or passbook and proper business place electricity bill copy with the NOC or sale deed etc.",
      description2:
        "Director's Proof (Any 2 to be shown as proof of address of a director)",
      description3: "✓Telephone or Electricity Bill",
      description4: "✓Driving License",
      description5: "✓Bank Account Statement",
      description6: "✓Ration Card",
      description7: "✓Passport",
      description8: "✓Voter Identity Card",
      description9: "✓Aadhar Card",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-8/12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          <div className=" py-6 shadow-md text-center border-[0.7vw] border-[#281c73] bg-[#241966]">
            <div className="group">
              <h3 className="text-2xl p-4  font-bold mb-2 text-white group-hover:text-[#2575fc]">
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
  description6,
  description7,
  description8,
  description9,
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
    <p className="text-xl py-2">{description6}</p>
    <p className="text-xl py-2">{description7}</p>
    <p className="text-xl py-2">{description8}</p>
    <p className="text-xl py-2">{description9}</p>
  </div>
);

export default DocsReqReg;
