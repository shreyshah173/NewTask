import React from "react";
import Heading from "../Heading";

function ComplianceTable3() {
  const taxRatesData = [
    {
      goodsAndServices:
        "Essential goods and services (e.g., food, beverages, educational services)",
      rate: "5%",
    },
    {
      goodsAndServices:
        "Most goods and services (e.g., clothing, electronics, household appliances)",
      rate: "12%",
    },
    {
      goodsAndServices:
        "Luxury goods and services (e.g., cars, jewellery, hotels)",
      rate: "18%",
    },
    {
      goodsAndServices:
        "Demerit goods and services (e.g., cigarettes, alcohol, gambling)",
      rate: "28%",
    },
  ];

  return (
    <div>
      <Heading title={"GST Tax Rates"} />
      <div className="container mx-auto p-4 px-[7%]">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                Goods and services
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                GST rate
              </th>
            </tr>
          </thead>
          <tbody>
            {taxRatesData.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-gray-50 hover:bg-gray-200"
                    : "bg-white hover:bg-gray-200"
                }
              >
                <td className="border border-gray-300 px-4 py-2">
                  {item.goodsAndServices}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplianceTable3;
