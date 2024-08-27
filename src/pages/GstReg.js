import React from "react";
import GstForm from "../components/GSTreg/GstForm";
import Body1 from "../components/GSTreg/Body1";
import PricingSection from "../components/GSTreg/PricingSection";
import DocsReqReg from "../components/GSTreg/DocsReqReg";
import Body2GSTReg from "../components/GSTreg/Body2GSTReg";
import DropdownGSTReg from "../components/GSTreg/DropdownGSTReg";
import GSTLimitsTable from "../components/GSTreg/GSTLimitsTable";
import ComplianceTable from "../components/GSTreg/ComplianceTable";
import ComplianceTable2 from "../components/GSTreg/ComplianceTable2";
import ComplianceTable3 from "../components/GSTreg/ComplianceTable3";

function GstReg() {
  return (
    <div>
      <GstForm />
      <Body1 />
      <PricingSection />
      <DocsReqReg />
      <Body2GSTReg />
      <DropdownGSTReg />
      <GSTLimitsTable />
      <ComplianceTable />
      <ComplianceTable2 />
      <ComplianceTable3 />
    </div>
  );
}

export default GstReg;
