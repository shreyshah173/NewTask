import React from "react";
import Heading from "../Heading";

function Body1() {
  return (
    <div className=" mx-[8%] p-6 text-center flex flex-col items-center bg-background text-foreground">
      <Heading title={"GST Registration - Overview"} />
      <p className="text-lg text-muted-foreground mb-4">
        Businesses must register as regular taxable persons under the Goods and
        Services Tax (GST) if their annual revenue exceeds the threshold limit
        of Rs. 40 lakhs (in case of goods), Rs. 20 lakhs (in case of services),
        or Rs. 10 lakhs, as applicable. GST registration is the term for it. It
        is mandatory to generate the GSTIN if annual turnover exceeds the above
        prescribed limit. If the company conducts business without registering
        for GST, it is an offence and faces severe penalties.
      </p>
    </div>
  );
}

export default Body1;
