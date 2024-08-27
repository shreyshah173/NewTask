// Heading.js
import React from "react";

const Heading = ({ title, para }) => {
  return (
    <div className="flex flex-col  mx-auto p-4">
      <h1 className="text-4xl text-blue-950 font-bold mb-4 text-center">
        {title}
      </h1>
      <div className="border-b-4 max-w-2xl mx-[35%]  border-yellow-500 mb-4 "></div>
      <p className="text-center text-blue-900 font-bold text-lg">{para}</p>
    </div>
  );
};

export default Heading;
