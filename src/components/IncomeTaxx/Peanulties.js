import React from "react";
import Heading from "../Heading";

function Peanulties() {
  const tableData = [
    {
      category: "Upto 31 stJuly 2024",
      auditReportDueDate: "0",
      itrDueDate: "5000/-",
    },
    {
      category: "Between 31 st July to 31 st December 2024",
      auditReportDueDate: "0",
      itrDueDate: "1000/-",
    },
  ];

  const tableHeadClasses =
    "px-6 py-3 text-left text-sm font-bold bg-gray-300 border-2 border-gray-400";
  const tableDataClasses =
    "px-6 py-4 text-sm text-muted-foreground border-2 border-gray-400";
  const tableDivClasses = "overflow-x-auto mx-[7%]";
  const tableClasses =
    "min-w-full divide-y divide-border border-2 border-gray-400";
  const tableHeadRowClasses =
    "bg-background text-foreground border-2 border-gray-400";
  const tableBodyClasses =
    "bg-card divide-y divide-border border-2 border-gray-400";

  return (
    <div>
      <Heading title={"Penalties for Non Filing ITR"} />
      <div className={tableDivClasses}>
        <table className={tableClasses}>
          <thead className={tableHeadRowClasses}>
            <tr>
              <th className={tableHeadClasses}>E-filing Date</th>
              <th className={tableHeadClasses}>Income Below Rs 5,00,000/-</th>
              <th className={tableHeadClasses}>Income Above Rs 5,00,000/-</th>
            </tr>
          </thead>
          <tbody className={tableBodyClasses}>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className={tableDataClasses}>{data.category}</td>
                <td className={tableDataClasses}>{data.auditReportDueDate}</td>
                <td className={tableDataClasses}>{data.itrDueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Peanulties;
