import React, { useState } from "react";

const ConsultationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consultancyPurpose, setConsultancyPurpose] = useState("");
  const [consultancyReasons, setConsultancyReasons] = useState([""]);

  const handleReasonChange = (index, value) => {
    const newReasons = [...consultancyReasons];
    newReasons[index] = value;
    setConsultancyReasons(newReasons);
  };

  const addReason = () => {
    setConsultancyReasons([...consultancyReasons, ""]);
  };

  const removeReason = (index) => {
    const newReasons = consultancyReasons.filter((_, i) => i !== index);
    setConsultancyReasons(newReasons);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row p-8 bg-background text-foreground">
        <div className="md:w-1/2 pr-8">
          <h1 className="text-4xl font-bold">Talk to an Accountant</h1>
          <h2 className="text-4xl font-bold mt-2">
            Real Experts & Reliable Advice
          </h2>
          <div className="mt-4">
            <h3 className="font-semibold">Important Deadlines:</h3>
            <ul className="list-disc pl-5">
              <li>Transfer Pricing Filing Due: November 31</li>
              <li>GSTR 9 & 9C Filing Due: December 31</li>
            </ul>
            <p className="mt-2">
              Don’t Worry! Our Experienced CAs Will Handle Everything for You.
              Stay Stress-Free and Compliant.
              <a href="#" className="text-primary underline font-bold">
                {" "}
                Book Appointment Today!
              </a>
            </p>
            <p className="mt-2">
              Maximize tax savings. Ensure timely filing of all documents.
            </p>
            <p>Never miss a deadline with our proactive approach.</p>
            <div className="flex space-x-4 mt-4">
              <button className="flex bg-secondary text-secondary-foreground p-2 rounded">
                <img src="https://assets.vakilsearch.com/live-images/available-lawyers-ttl.svg" />
                24/7 Expert Support
              </button>
              <button className="flex bg-secondary text-secondary-foreground p-2 rounded">
                <img src="https://assets.vakilsearch.com/live-images/whatsapp-icon-calls.svg" />
                Direct Calls
              </button>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center items-center mx-4">
                <button className="flex flex-col justify-center bg-gray-200 rounded-lg my-4 ">
                  <img
                    className="h-16"
                    src="https://assets.vakilsearch.com/live-images/talk-to-expert/form.svg"
                  />
                </button>
                <h1 className="font-bold">Fill The Form</h1>
              </div>
              <div className="flex flex-col justify-center items-center mx-4">
                <button className="flex flex-col justify-center bg-gray-200 rounded-lg my-4 ">
                  <img
                    className="h-16"
                    src="https://assets.vakilsearch.com/live-images/talk-to-expert/calendar.svg"
                  />
                </button>
                <h1 className="font-bold">Schedule An Appointment</h1>
              </div>
              <div className="flex flex-col justify-center items-center mx-4">
                <button className="flex flex-col justify-center bg-gray-200 rounded-lg my-4 ">
                  <img
                    className="h-16"
                    src="https://assets.vakilsearch.com/live-images/talk-to-expert/payment.svg"
                  />
                </button>
                <h1 className="font-bold">Make Payment</h1>
              </div>
              <div className="flex flex-col justify-center items-center mx-4">
                <button className="flex flex-col justify-center bg-gray-200 rounded-lg my-4 ">
                  <img
                    className="h-16"
                    src="https://assets.vakilsearch.com/live-images/talk-to-expert/phone.svg"
                  />
                </button>
                <h1 className="font-bold">Expert Will Call You</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold">LET'S GET STARTED</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className="block mb-1" htmlFor="name">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-zinc-300 p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-zinc-300 p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="consultancyPurpose">
                Consultancy Purpose
              </label>
              <select
                id="consultancyPurpose"
                value={consultancyPurpose}
                onChange={(e) => setConsultancyPurpose(e.target.value)}
                className="border border-zinc-300 p-2 w-full rounded"
              >
                <option value="">Select Consultancy Purpose</option>
                <option value="tax">Tax Consultation</option>
                <option value="audit">Audit Services</option>
                <option value="compliance">Compliance Assistance</option>
              </select>
            </div>
            {consultancyReasons.map((reason, index) => (
              <div key={index} className="mb-4 flex items-center">
                <select
                  value={reason}
                  onChange={(e) => handleReasonChange(index, e.target.value)}
                  className="border border-zinc-300 p-2 w-full rounded"
                >
                  <option value="">Select Consultancy Reason</option>
                  <option value="itr_individuals">
                    ITR filling for Individuals
                  </option>
                  <option value="itr_companies">
                    ITR filling for Companies
                  </option>
                  <option value="gst_registration">GST Registration</option>
                  <option value="gst_return">GST Return</option>
                  <option value="business_registration">
                    Business Registration
                  </option>
                  <option value="trademark">Trademark/patent</option>
                  <option value="tax_notices">Income Tax Notices</option>
                  <option value="other">Other</option>
                </select>
                <button
                  type="button"
                  onClick={() => removeReason(index)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addReason}
              className="bg-primary text-primary-foreground p-2 rounded"
            >
              Add Reason
            </button>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-accent text-accent-foreground p-2 rounded bg-gray-200"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="mt-4 text-lg">
            <span className="line-through text-gray-500">₹1999</span> <span className="text-green-500">₹299</span> for a
            consultation
          </p>
        </div>
      </div>
      <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center mx-[5%] sm:mx-[15%] space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center w-full sm:w-auto">
          <img
            aria-hidden="true"
            alt="cases-resolved"
            src="https://openui.fly.dev/openui/24x24.svg?text=📄"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">90500+</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Cases resolved</p>
          </div>
        </div>
        <div className="flex items-center w-full sm:w-auto">
          <img
            aria-hidden="true"
            alt="consulting-minutes"
            src="https://openui.fly.dev/openui/24x24.svg?text=📞"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">7 Million+</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Consulting minutes</p>
          </div>
        </div>
        <div className="flex items-center w-full sm:w-auto">
          <img
            aria-hidden="true"
            alt="google-reviews"
            src="https://openui.fly.dev/openui/24x24.svg?text=⭐"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Google Reviews</h2>
            <p className="text-sm sm:text-base text-muted-foreground">4.3/5</p>
            <p className="text-sm sm:text-base text-muted-foreground">15,500+ Happy Reviews</p>
          </div>
        </div>
      </div>
      <div className="text-center py-6 sm:py-10 px-4 sm:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
          Why <span className="text-blue-600">SUMIT YADAV TAX CONSULTANCY?</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-8 mx-0 sm:mx-[5%] md:mx-[15%]">
          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative w-full sm:w-1/3">
            <div className="absolute inset-0 top-0 left-0 right-0 border-t-4 border-yellow-500 border-l-4 border-r-4" style={{ height: "50%" }}></div>
            <div className="absolute inset-0 top-1/2 left-0 right-0 border-l-0 border-r-0 border-b-0" style={{ height: "50%" }}></div>
            <img
              aria-hidden="true"
              alt="computer-icon"
              src="https://assets.vakilsearch.com/live-images/talk-to-expert/computer.svg"
              className="mx-auto mb-4 w-16 h-16 sm:w-auto sm:h-auto"
            />
            <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-6">Completely Online</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Our team of advisors will provide you with sound advice based on your needs.
            </p>
          </div>

          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative w-full sm:w-1/3">
            <div className="absolute inset-0 top-0 left-0 right-0 border-t-4 border-yellow-500 border-l-4 border-r-4" style={{ height: "50%" }}></div>
            <div className="absolute inset-0 top-1/2 left-0 right-0 border-l-0 border-r-0 border-b-0" style={{ height: "50%" }}></div>
            <img
              aria-hidden="true"
              alt="video-call-icon"
              src="https://assets.vakilsearch.com/live-images/talk-to-expert/meet.svg"
              className="mx-auto mb-4 w-16 h-16 sm:w-auto sm:h-auto"
            />
            <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-6">Video Call</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              We offer easy solutions to busy clients via video calls with expert.
            </p>
          </div>

          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative w-full sm:w-1/3">
            <div className="absolute inset-0 top-0 left-0 right-0 border-t-4 border-yellow-500 border-l-4 border-r-4" style={{ height: "50%" }}></div>
            <div className="absolute inset-0 top-1/2 left-0 right-0 border-l-0 border-r-0 border-b-0" style={{ height: "50%" }}></div>
            <img
              aria-hidden="true"
              alt="money-icon"
              src="https://assets.vakilsearch.com/live-images/talk-to-expert/money.svg"
              className="mx-auto mb-4 w-16 h-16 sm:w-auto sm:h-auto"
            />
            <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-6">Save Money</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              No extra fees will be charged. While saving money, get excellent guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
