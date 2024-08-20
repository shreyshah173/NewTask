import React from "react";
import Heading from "../Heading";

const GstForm = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#0a84a5] to-[#032c37] text-white px-20 py-4">
        <h1 className="text-3xl font-bold mb-4 bg-[#180972] rounded-lg text-center">
          File Your Income Tax Return online easily from anywhere and anytime
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col space-y-4 mx-4">
            <div className="flex items-center py-2">
              <span className="text-3xl">⏰</span>
              <p className="ml-2 text-xl font-semibold ">
                Guaranteed GST filing at the government portal within 6hrs by
                top CA’s
              </p>
            </div>
            <div className="flex items-center py-2">
              <span className="text-2xl">🔒</span>
              <p className="ml-2 text-xl font-semibold">
                Completely Secured + Encrypted online GST Registrations
              </p>
            </div>
            <div className="flex items-center py-2">
              <span className="text-2xl">👨‍⚖️</span>
              <p className="ml-2 text-xl font-semibold">
                Over 45+ Income Tax Advocates, CAs & CS Experts - Ready to
                Assist.
              </p>
            </div>
            <div className="flex items-center py-2">
              <span className="text-2xl">🔍</span>
              <p className="ml-2 text-xl font-semibold">
                Data modeling in Excel & Tally
              </p>
            </div>
            <div className="flex items-center py-4">
              <span className="text-2xl">🔍</span>
              <p className="ml-2 text-xl font-semibold">
                Processing over 500+ e return filing Requests Daily from all
                over India.
              </p>
            </div>
            <div className=" flex flex-col items-center">
              <h1 className="text-7xl font-bold border-0 border-b-2 border-green-200">
                100000+
              </h1>
              <p className="text-xl font-bold text-green-200">
                GST Return Filling Through Us
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mx-4">
            <div className="flex items-center py-2">
              <span className="text-3xl">⏰</span>
              <p className="ml-2 text-xl font-semibold ">
                24/7 Tax Expert available to help with your questions.
              </p>
            </div>
            <div className="flex items-center py-2">
              <span className="text-2xl">🔒</span>
              <p className="ml-2 text-xl font-semibold">
                Customer Support Available in 6 Languages including English.
              </p>
            </div>
            <div className="flex items-center py-2">
              <span className="text-2xl">👨‍⚖️</span>
              <p className="ml-2 text-xl font-semibold">
                We Provide Top Notch Tax Compliance Services Across the County
              </p>
            </div>
            <div className="flex items-center py-2">
              <span className="text-2xl">🔍</span>
              <p className="ml-2 text-xl font-semibold">GST Refund</p>
            </div>
            <div className="flex items-center py-4">
              <span className="text-2xl">🔍</span>
              <p className="ml-2 text-xl font-semibold">Money back Policy</p>
            </div>
            <div className="flex items-center p-4 bg-card rounded-lg shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google Logo"
                className="w-10 h-10 mr-3 "
              />
              <div className="flex flex-col text-xl my-6">
                <span className="text-xl font-semibold text-foreground">
                  Google Reviews
                </span>
                <div className="flex items-center">
                  <span className="text-yellow-400">
                    {"★".repeat(4)}
                    {"☆"}
                  </span>
                  <span className="ml-2 text-muted-foreground">4/5</span>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <span className="text-muted-foreground">
                    10.5k+ Happy Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 text-black p-12 mb-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Get Assistance with Filing your IT Returns
            </h2>
            <form className="">
              <div className="my-8">
                <label className="block mb-1">
                  Applicant Full Name / आवेदन का पूर्ण नाम *
                </label>
                <input
                  type="text"
                  className="border border-zinc-300 p-2 w-full rounded"
                  placeholder="Applicant Full Name"
                  required
                />
              </div>
              <div className="my-8">
                <label className="block mb-1">Email Address / ईमेल पता *</label>
                <input
                  type="email"
                  className="border border-zinc-300 p-2 w-full rounded"
                  placeholder="your@gmail.com"
                  required
                />
              </div>
              <div className="my-8">
                <label className="block mb-1">Mobile / मोबाइल *</label>
                <input
                  type="tel"
                  className="border border-zinc-300 p-2 w-full rounded"
                  placeholder="98XXXXXXXX(Without 0 or +91)"
                  required
                />
              </div>
              <div className="my-8">
                <label className="block mb-1">GST Registration Plan</label>

                <div className="flex flex-col space-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gstPlan"
                      value="basic"
                      className="form-radio text-indigo-600"
                      required
                    />
                    <span className="ml-2">Basic plan</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gstPlan"
                      value="standard"
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2">Standard plan</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gstPlan"
                      value="premium"
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2">Premium plan</span>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <input type="checkbox" required />
                <label className="ml-2">
                  I have read and agree to the Terms and Conditions, Refund
                  Policy and Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-950 text-white font-bold hover:bg-opacity-75 p-2 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" mx-[8%] p-6 text-center flex flex-col items-center bg-background text-foreground">
        <Heading title={"Income Tax Return Filing"} />
        <p className="text-lg text-muted-foreground mb-4">
          Every responsible Indian citizen is required by law to file income
          taxes with the government. However, you may file your income tax
          online using today’s technologies. This procedure is quick and
          precise, with no time limits.
        </p>
        <p className="text-lg text-muted-foreground">
          However, submitting an income tax return in India via the official
          website necessitates the completion of ITR forms. Individuals must
          complete a different ITR form than salaried employees. This is an
          important activity since the income tax agency has a variety of
          documents designated ITR 1 through ITR 7. Each form serves a unique
          purpose and belongs to a distinct category.
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <Heading
          title={"Documents Required for ITR Filing Online"}
          para={
            "To fulfil IT filing in India, the following documents are necessary"
          }
        />
      </div>
    </div>
  );
};

export default GstForm;
