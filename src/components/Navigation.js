import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Book Consultancy",
    "Income Tax",
    "GST",
    "Business Registration",
    "Legal Service",
    "Annual Service",
    "Resources",
  ];

  return (
    <nav className="bg-[#301c74] font-bold text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:py-2">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:block w-full">
            <ul className="flex justify-center items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item} className="py-2">
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden">
            {menuItems.map((item) => (
              <li key={item} className="py-2">
                <a
                  href="#"
                  className="block hover:text-yellow-300 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;