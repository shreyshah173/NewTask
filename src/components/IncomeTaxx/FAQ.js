import React, { useState } from "react";
import Heading from "../Heading";

// Shared Tailwind CSS class strings
const sharedClasses = {
  container: "max-w-6xl mx-auto p-6",
  title: "text-2xl font-bold text-primary mb-4",
  paragraph: "text-muted-foreground mb-6",
  questionContainer: "border rounded-lg font-bold",
  questionButton:
    "flex justify-between items-center w-full p-4 text-left bg-card text-card-foreground hover:bg-blue-850 ",
  answerContainer: "p-4 border-t border-border bg-muted text-muted-foreground",
};

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const questions = [
    {
      question: "What is Income Tax Return?",
      answer:
        "Income tax returns or ITR are the tax forms used to declare the details of your income to the Income Tax Department to assess the amount you need to pay as income tax in a financial year.",
    },
    {
      question: "Who is required to file an ITR?",
      answer:
        "Every Indian citizen whose gross total income exceeds the taxable limit must file an ITR. This implies, individuals and Hindu Undivided Families (HUFs) with total annual income exceeding Rs. 2,50,000 are required to file the income tax returns. For senior citizens (individuals between 60 years and 80 years of age) the threshold is Rs 3,00,000, and that for very senior citizens (aged above 80 years) it is Rs 5.00,000.",
    },
    {
      question:
        "Is it mandatory to file an income tax return if my earning is below Rs 2,50,000?",
      answer:
        "No, it is not mandatory to file an income tax return if your annual income is below Rs 2,50,000.",
    },
    {
      question:
        "What are the Advantages of filing an income tax return online?",
      answer:
        "There are many advantages of filing ITR online. Some of the benefits are as follows:" +
        "1.Quick processing: You will get the acknowledgement of ITR promptly. Refunds, if any, are processed faster online than paper-filed returns." +
        "2.Accuracy: E-filing software minimizes errors" +
        "3.Convenience: E-filing facility is available and can be done at your convenience" +
        "4.Privacy: The data entered by you are safe as they cannot be accessed by anyone" +
        "5.Record of past ITRs: It is easier to access previous data, should you need them at any time in future.",
    },
    {
      question: "Do I need to maintain any records or proof of earnings?",
      answer:
        "Yes, in case of Income Tax Return filing, it is mandatory for every source of income you have to maintain proof of earning as specified under the Income-tax Act 1961.",
    },
    {
      question:
        "Is it easier to file your income tax return online or offline?",
      answer:
        "It is easy to file your income tax returns online using the Income Tax e-Filing system. You only need a few documents to file your income tax return online. If you search for 'how to apply for ITR', you will find that e-filing is an easier process.",
    },
    {
      question: "What happens if you file your ITR late?",
      answer:
        "If you don't file your tax statements on time, you could be charged a penalty ranging from Rs. 10,000 to Rs. 1,00,000. In addition, there is a daily fee of Rs. 200 until you pay your taxes. This is under Section 234E.",
    },
    {
      question: "What is Form 15G and 15H?",
      answer:
        "Forms 15G and 15H are self-declaration forms that an individual sends to the bank to request that TDS on interest income not be deducted since their income falls below the basic exemption level.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={sharedClasses.container}>
      <Heading title={"FAQ"} />
      <div className="space-y-4">
        {questions.map((item, index) => (
          <Question
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleDropdown(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Question Component
const Question = ({ question, answer, isOpen, onClick }) => (
  <div className={sharedClasses.questionContainer}>
    <button
      className={`${sharedClasses.questionButton} ${
        isOpen ? "bg-blue-950 text-white" : ""
      }`}
      onClick={onClick}
    >
      <span>{question}</span>
      <span>{isOpen ? "▲" : "▼"}</span>
    </button>
    {isOpen && <div className={sharedClasses.answerContainer}>{answer}</div>}
  </div>
);

export default FAQ;
