import React from "react";

// Shared Tailwind CSS classes
const cardClasses = "bg-card p-4 rounded-lg shadow-md";

const ITRForm = ({ id, title, description }) => (
  <div className={cardClasses}>
    <div className="flex mb-2">
      <div className="text-blue-950 font-bold  text-4xl">
        <div className="border border-green-500 bg-blue-950 mr-4">
          <div className="border-2 border-white bg-white rounded-full">
            <h1 className="border-blue-900 border-4 px-2 rounded-full m-2 bg-white">
              {id}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

const Types = () => {
  const forms = [
    {
      id: 1,
      title: "ITR 1 (Sahaj)",
      description:
        "Individuals with income from a salary, a single-family home, agriculture, or other means. Individual inhabitants with total revenue of up to Rs. Fifty lakhs and agricultural income of up to Rs. 5,000 must complete this form.",
    },
    {
      id: 2,
      title: "ITR 2",
      description:
        "This form is intended for individuals and HUFs generating income from sources other than PGBP (profits and gain of business or profession).",
    },
    {
      id: 3,
      title: "ITR 3",
      description:
        "Individuals & HUFs earn money via company or professional profits and gains. Therefore, it must also be reported by persons with income as a firm partner.",
    },
    {
      id: 4,
      title: "ITR 4 (Sugam)",
      description:
        "Individuals, HUFs, and Firms (other than LLP) with a total income of Rs.50 lakhs from business or profession are considered residents.",
    },
    {
      id: 5,
      title: "ITR 5",
      description:
        "Firms, LLPs, the Association of Persons, Bois (Body of Individuals), and other entities file ITR 5.",
    },
    {
      id: 6,
      title: "ITR 6",
      description:
        "Companies other than those demanding exemption u/s 11 submit ITR 6. (Income from property held for charitable or religious purposes).",
    },
    {
      id: 7,
      title: "ITR 7",
      description:
        "It must be submitted by those who fall under section 139(4A), section 139 (4B), section 139 (4C), or section 139 4(D), which might be an individual or a corporation.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-[7%]">
      {forms.map((form) => (
        <ITRForm
          key={form.id}
          id={form.id}
          title={form.title}
          description={form.description}
        />
      ))}
    </div>
  );
};

export default Types;

{
  /* <Heading title={"Types Of ITR Filling Form"} /> */
}
