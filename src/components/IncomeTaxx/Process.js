import React from "react";
import Heading from "../Heading";

function Process() {
  const steps = [
    "Go to the official site of the Income Tax Department.",
    "Create a PAN account, which will serve as your user ID. Registered users can log in by clicking 'Login Here.'",
    "Go to e-file and choose 'Income Tax Return.'",
    "Select the ITR form number and AY from the drop-down menu. You must choose 'Original/Revised Return' as your filing type and 'Prepare and Submit Online' as your submission option.",
    "Select 'Continue.'",
    "Fill in the required information on the ITR form.",
    "Determine the amount of tax due.",
    "Select the appropriate option from the 'Taxes Paid and Verification' menu.",
    "After that, click 'Preview and Submit.'",
    "Complete the verification procedure using Aadhaar OTP, electronic verification code (EVC) through bank account details, bank ATM, and Demat account details, or send a completed ITR-5 (either quick post or regular mail) to the IT Department.",
    "To complete the submission, enter the OTP/EVC that was issued to your registered cellphone number during its validity time and follow the instructions.",
  ];
  return (
    <div className="w-8/12 ">
      <Heading
        title={"Process of Income Tax Return Filing Online"}
        para={"File your ITR online in these simple steps:"}
      />
      <div className="p-6 bg-card text-card-foreground rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">
          Steps to File Income Tax Return
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="text-muted-foreground">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Process;
