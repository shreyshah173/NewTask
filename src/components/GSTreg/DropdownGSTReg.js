import React, { useState } from "react";

function DropdownGSTReg() {
  const cardClass = "bg-blue-500 w-full text-white p-4 rounded-lg shadow-md";
  const iconClass = "w-6 h-6 cursor-pointer"; // Adjusted for SVG size
  const titleClass = "font-bold text-lg ml-2";
  const textClass = "mt-2";

  const DropdownCard = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <div
          className={`flex items-center cursor-pointer`}
          onClick={toggleDescription}
        >
          <div className={cardClass}>
            <div className="flex">
              <img
                src={
                  !isOpen
                    ? "https://www.svgrepo.com/show/80156/down-arrow.svg"
                    : "https://www.svgrepo.com/show/93813/up-arrow.svg"
                }
                alt={isOpen ? "Up Arrow" : "Down Arrow"}
                className={iconClass}
              />
              <h3 className={titleClass}>{title}</h3>
            </div>
          </div>
        </div>
        {isOpen && <p className={textClass}>{description}</p>}
      </div>
    );
  };

  const DropdownCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mx-[7%]">
        <DropdownCard
          title="Easy Loan Approval"
          description="Paying taxes promptly enhances your financial record and elevates credit scores. This indicates to creditors that you are dependable and reliable, amplifying the likelihood of being approved for loans and financial services."
        />
        <DropdownCard
          title="Quick Visa Processing"
          description="Visitors need proof as immigration centers check paperwork and tax returns."
        />
        <DropdownCard
          title="Avoid Penalties"
          description="Failing to file tax returns can lead to large penalties, so it's wise to file to avoid legal issues."
        />
        <DropdownCard
          title="Easy Loan Approval"
          description="Filing your taxes on time can improve your financial history and boost credit scores. It shows lenders that you are responsible and trustworthy, increasing your chances of approval for loans and financial products."
        />
      </div>
    );
  };

  return (
    <div>
      <DropdownCards />
    </div>
  );
}

export default DropdownGSTReg;
