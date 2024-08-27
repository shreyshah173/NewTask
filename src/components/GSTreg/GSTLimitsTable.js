import React from "react";
import Heading from "../Heading";

function GSTLimitsTable() {
  const TableRow = ({
    aggregateTurnover,
    registrationRequired,
    applicability,
  }) => (
    <tr className="border-1 hover:bg-gray-300 ">
      <td className="py-2 px-4 border ">{aggregateTurnover}</td>
      <td className="py-2 px-4 border">{registrationRequired}</td>
      <td className="py-2 px-4 border">{applicability}</td>
    </tr>
  );

  const TableSection = ({ title, rows }) => (
    <>
      <tr className="bg-gray-100 border hover:bg-gray-300 ">
        <th colSpan="3" className="py-6 px-6 text-2xl text-left font-semibold">
          {title}
        </th>
      </tr>
      {rows.map((row, index) => (
        <TableRow key={index} {...row} />
      ))}
    </>
  );

  const data = [
    {
      title: "Earlier Limits for Sale of Goods/Providing Services",
      rows: [
        {
          aggregateTurnover: "Exceeds ₹20 lakh",
          registrationRequired: "Yes – For Normal Category States",
          applicability: "Upto 31 March 2019",
        },
        {
          aggregateTurnover: "Exceeds ₹10 lakh",
          registrationRequired: "Yes – For Special Category States",
          applicability: "Upto 31 March 2019",
        },
      ],
    },
    {
      title: "New Limits for Sale of Goods",
      rows: [
        {
          aggregateTurnover: "Exceeds ₹40 lakh",
          registrationRequired: "Yes – For Normal Category States",
          applicability: "From 1 April 2019",
        },
        {
          aggregateTurnover: "Exceeds ₹20 lakh",
          registrationRequired: "Yes – For Special Category States",
          applicability: "From 1 April 2019",
        },
      ],
    },
    {
      title: "New Limits for Providing Services",
      rows: [
        {
          aggregateTurnover: "Exceeds ₹40 lakh",
          registrationRequired: "Yes – For Normal Category States",
          applicability: "Upto 31 March 2019",
        },
        {
          aggregateTurnover: "Exceeds ₹20 lakh",
          registrationRequired: "Yes – For Special Category States",
          applicability: "Upto 31 March 2019",
        },
      ],
    },
    {
      title: "For Service Provider",
      rows: [
        {
          aggregateTurnover: "Exceeds ₹20 lakh",
          registrationRequired: "Yes – For Normal Category States",
          applicability: "From 1st April 2019",
        },
        {
          aggregateTurnover: "Exceeds ₹20 lakh",
          registrationRequired: "Yes – For Special Category States",
          applicability: "From 1st April 2019",
        },
      ],
    },
  ];

  return (
    <div>
      <div className=" mx-[8%] p-6  flex flex-col  bg-background text-foreground">
        <Heading
          title={"GST Registration Threshold Limits"}
          para={
            "GST registration is mandatory for businesses that have a turnover of ₹40 lakhs for the sale of goods in normal category states and ₹20 lakhs for the sale of goods in special category states."
          }
        />
      </div>
      <div className="container mx-auto border-red-500 border-1 p-4 px-[7%] ">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-white">
              <th className="py-2 px-4 text-left border border-gray-300">
                Aggregate Turnover
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Registration Required
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Applicability
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((section, index) => (
              <TableSection
                key={index}
                title={section.title}
                rows={section.rows}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GSTLimitsTable;
