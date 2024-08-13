import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-white py-4 px-4 sm:py-6 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-col sm:flex-row items-center">
            <h1 className="text-4xl sm:text-6xl bg-[#301c74] font-bold px-1 mx-1">
              Sumit
            </h1>
            <h1 className="text-4xl sm:text-6xl text-[#301c74] font-bold">
              Yadav
            </h1>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-black font-bold text-sm sm:text-base">
              ──TAX | Legal | Registrations | Accounting──
            </h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-start items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
          <h1 className="text-[#301c74] font-extrabold text-sm sm:text-base">
            <div className="flex items-center">
              <div className="mr-1">📞</div>8851505094
            </div>
          </h1>
          <h1 className="text-[#301c74] font-extrabold text-sm sm:text-base">
            <div className="flex items-center">
              <div className="mr-1">✉️</div> Welcome@casumityadav.com
            </div>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
