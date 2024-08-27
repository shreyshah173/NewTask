import React from "react";
import Heading from "../Heading";

function ComplianceTable() {
  const complianceData = [
    { compliance: "File GSTR-1 (Sales return)", frequency: "Monthly" },
    { compliance: "File GSTR-3B (Summary return)", frequency: "Monthly" },
    { compliance: "Pay GST liability", frequency: "Monthly" },
    { compliance: "File GSTR-2 (Purchase return)", frequency: "Quarterly" },
    { compliance: "File GSTR-4 (E-commerce return)", frequency: "Quarterly" },
    {
      compliance: "File GSTR-5 (Non-resident return)",
      frequency: "Quarterly",
    },
    {
      compliance: "File GSTR-6 (Input service distributor return)",
      frequency: "Quarterly",
    },
    { compliance: "File GSTR-7 (Tax credit return)", frequency: "Quarterly" },
    {
      compliance: "File GSTR-8 (E-commerce return for e-commerce aggregators)",
      frequency: "Quarterly",
    },
    { compliance: "File GSTR-9 (Annual return)", frequency: "Annual" },
    {
      compliance: "File GSTR-9C (Reconciliation statement)",
      frequency: "Annual",
    },
    {
      compliance: "Issue invoices and credit notes",
      frequency: "As required",
    },
    { compliance: "Maintain GST records", frequency: "As required" },
    { compliance: "File GST refunds", frequency: "As required" },
    { compliance: "Respond to GST notices", frequency: "As required" },
    {
      compliance:
        "E-invoicing (for businesses with a turnover of more than ₹20 crores)",
      frequency: "Monthly",
    },
    {
      compliance:
        "Electronic waybill (EWB) (for all inter-state and intra-state movement of goods worth more than ₹50,000)",
      frequency: "As required",
    },
  ];

  return (
    <div>
      <Heading title={"GST Compliances"} />

      <div className="container mx-auto p-4 px-[7%]">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                Compliance
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                Frequency
              </th>
            </tr>
          </thead>
          <tbody>
            {complianceData.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-gray-50 hover:bg-gray-200"
                    : "bg-white hover:bg-gray-200"
                }
              >
                <td className="border border-gray-300 px-4 py-2">
                  {item.compliance}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.frequency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplianceTable;
