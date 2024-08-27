import React from "react";
import Heading from "../Heading"; // Assuming Heading is a component you have already created

function ComplianceTable2() {
  const gstStatusCodes = [
    { code: "01", description: "Return filed successfully" },
    { code: "02", description: "Return pending for review" },
    { code: "03", description: "Return rejected" },
    { code: "04", description: "Refund processed" },
    { code: "05", description: "Refund rejected" },
    { code: "06", description: "Refund pending for review" },
    { code: "07", description: "Refund on hold" },
    { code: "08", description: "Refund cancelled" },
    { code: "09", description: "Refund reversed" },
    { code: "10", description: "Notice issued" },
    { code: "11", description: "Notice complied with" },
    { code: "12", description: "Notice pending for compliance" },
  ];

  return (
    <div>
      <Heading title={"GST Status Codes"} />

      <div className="container mx-auto p-4 px-[7%]">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                Status code
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {gstStatusCodes.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-white hover:bg-gray-200"
                    : "bg-gray-50 hover:bg-gray-200"
                }
              >
                <td className="border border-gray-300 px-4 py-2">
                  {item.code}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplianceTable2;
