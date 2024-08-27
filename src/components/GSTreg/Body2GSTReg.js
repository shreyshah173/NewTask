import React from "react";
import Heading from "../Heading";

function Body2GSTReg() {
  return (
    <div>
      <div className=" mx-[8%] p-6  flex flex-col  bg-background text-foreground">
        <Heading title={"What is GSTIN?"} />
        <p className="text-lg text-muted-foreground mb-4">
          GSTIN stands for Goods and Services Tax Identification Number. It is a
          unique 15-digit number assigned to every taxpayer registered under the
          GST regime in India. The GSTIN is used to identify taxpayers and to
          track their transactions.
        </p>
        <div className="">
          <p className="text-lg text-muted-foreground mb-4 ">
            The GSTIN is structured as follows:
          </p>
          <ul className="list-disc ">
            <div className="pl-8 space-y-1">
              <li className=" px-1">
                The first two digits represent the state code.
              </li>
              <li className=" px-1">
                The next ten digits are the PAN card number of the taxpayer.
              </li>
              <li className=" px-1">
                The thirteenth digit is an entity code used to distinguish
                between different types of taxpayers.
              </li>
              <li className=" px-1">
                The fourteenth digit is a fixed alphabet ‘Z’.
              </li>
              <li className=" px-1">
                The fifteenth digit is a check digit, which is used to verify
                the accuracy of the GSTIN.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className=" mx-[8%] p-6  flex flex-col  bg-background text-foreground">
        <Heading title={"Who Needs a GST Registration Service?"} />

        <ul className="list-disc pl-8 space-y-1">
          <li className="px-1">
            Any individual or business entity that carries out taxable supplies
            of goods or services
          </li>
          <li className="px-1">
            Annual turnover of the business exceeds the prescribed threshold
            limit (currently ₹20 lakhs for most businesses)
          </li>
          <li className="px-1">
            E-commerce operators that facilitate the supply of goods and
            services through their platform
          </li>
          <li className="px-1">
            Non-resident taxable persons who occasionally supply goods or
            services in India
          </li>
          <li className="px-1">
            Businesses that are involved in inter-state supply of goods or
            services
          </li>
          <li className="px-1">
            Input service distributors who distribute input tax credit to their
            branches or units
          </li>
          <li className="px-1">
            Casual taxable persons who supply goods or services occasionally in
            India
          </li>
          <li className="px-1">
            Businesses that were previously registered under the old tax regime
            (VAT, Service Tax, etc.) and have migrated to GST.
          </li>
        </ul>
      </div>
      <div className=" mx-[8%] p-6  flex flex-col  bg-background text-foreground">
        <Heading
          title={"What is the Compliance after the GST Registration ?"}
        />
        <p className="text-lg text-muted-foreground mb-4">
          After the GST Registration, each assessee has to file the GST Returns
          as per the compliance. if you are registered under the regular scheme
          of the GST then you have to file the monthly basis returns for the
          same. Composition dealers have to file the quarterly basis with some
          conditions. you can check out here all about GST Return Filing.
        </p>
      </div>
      <div className=" mx-[8%] p-6  flex flex-col  bg-background text-foreground">
        <Heading title={"GST Registration Fees"} />
        <p className="text-lg text-muted-foreground mb-4">
          Getting a GST registration is a legal process that requires you to
          submit a lot of information about your business and scanned copies of
          certain documents. CA Sumit Yadav offers a GST registration plan that
          can save you a lot of time and hassle. With our plan, a GST
          professional will help you with the entire process from start to
          finish.
        </p>
      </div>
      <div className=" mx-[8%] p-6  flex flex-col  bg-background text-foreground">
        <Heading
          title={"Benefits of Filing Income Tax Return"}
          para={"The benefits of filing income tax returns are-"}
        />
      </div>
    </div>
  );
}

export default Body2GSTReg;
