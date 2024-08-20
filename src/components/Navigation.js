import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGstDropdownOpen, setIsGstDropdownOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Book Consultancy", path: "/book-consultancy" },
    { name: "Income Tax", path: "/income-tax" },
    {
      name: "GST",
      path: "#", // Keeping it as '#' since it's a dropdown
      subMenu: [
        { name: "GST Registration", path: "/gst-registration" },
        { name: "GST Return Filing", path: "/gst-return-filing" },
        { name: "GST Cancellation", path: "/gst-cancellation" },
      ],
    },
    { name: "Business Registration", path: "/business-registration" },
    { name: "Legal Service", path: "/legal-service" },
    { name: "Annual Service", path: "/annual-service" },
    { name: "Resources", path: "/resources" },
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
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:block w-full">
            <ul className="flex justify-center items-center space-x-8">
              {menuItems.map(({ name, path, subMenu }) => (
                <li
                  key={name}
                  className="relative py-2"
                  onMouseEnter={() => subMenu && setIsGstDropdownOpen(true)}
                  onMouseLeave={() => subMenu && setIsGstDropdownOpen(false)}
                >
                  <a
                    href={path}
                    className={`${
                      location.pathname === path
                        ? "text-yellow-300"
                        : "hover:text-yellow-300"
                    } transition duration-300`}
                  >
                    {name}
                  </a>
                  {subMenu && isGstDropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-[#301c74] text-white shadow-lg z-10">
                      {subMenu.map(({ name, path }) => (
                        <li key={name}>
                          <a
                            href={path}
                            className={`block px-4 py-2 whitespace-nowrap ${
                              location.pathname === path
                                ? "text-yellow-300"
                                : "hover:text-yellow-300"
                            } transition duration-300`}
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden">
            {menuItems.map(({ name, path }) => (
              <li key={name} className="py-2">
                <a
                  href={path}
                  className={`block ${
                    location.pathname === path
                      ? "text-yellow-300"
                      : "hover:text-yellow-300"
                  } transition duration-300`}
                >
                  {name}
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
