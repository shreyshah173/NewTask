import React from "react";
import Heading from "../Heading";

const tableData = [
  {
    category: "Individual & HUF (Non Audit case)",
    auditReportDueDate: "",
    itrDueDate: "31st July, 2024",
    penalty: "Upto 10,000/-",
  },
  {
    category: "Individual & HUF (Audit case)",
    auditReportDueDate: "30th September, 2024",
    itrDueDate: "31st October, 2022",
    penalty: "Upto 10,000/-",
  },
  {
    category: "Partnership firms (inc LLPs)(Non Audit case)",
    auditReportDueDate: "",
    itrDueDate: "31st July, 2024",
    penalty: "Upto 10,000/-",
  },
  {
    category: "Partnership firms (inc LLPs)(Audit case)",
    auditReportDueDate: "30th September, 2024",
    itrDueDate: "31st October, 2022",
    penalty: "Upto 10,000/-",
  },
  {
    category: "Trust colleges & political parties (Non Audit case)",
    auditReportDueDate: "",
    itrDueDate: "31st July, 2024",
    penalty: "Upto 10,000/-",
  },
  {
    category: "Trust colleges & political parties (Audit case)",
    auditReportDueDate: "30th September, 2024",
    itrDueDate: "31st October, 2022",
    penalty: "Upto 10,000/-",
  },
  {
    category: "Companies including private limited companies & OPC",
    auditReportDueDate: "30th September, 2024",
    itrDueDate: "31st October, 2022",
    penalty: "Upto 10,000/-",
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

const TaxTable = () => {
  return (
    <div className={tableDivClasses}>
      <Heading
        title={"Tax Filing Deadlines for Different Taxpayers"}
        para={"Types of ITR Filing forms are:"}
      />
      <table className={tableClasses}>
        <thead className={tableHeadRowClasses}>
          <tr>
            <th className={tableHeadClasses}>Category of Taxpayer</th>
            <th className={tableHeadClasses}>
              Due date of furnishing of audit report
            </th>
            <th className={tableHeadClasses}>Due date of filings ITR</th>
            <th className={tableHeadClasses}>Penalty</th>
          </tr>
        </thead>
        <tbody className={tableBodyClasses}>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className={tableDataClasses}>{data.category}</td>
              <td className={tableDataClasses}>{data.auditReportDueDate}</td>
              <td className={tableDataClasses}>{data.itrDueDate}</td>
              <td className={tableDataClasses}>{data.penalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;
