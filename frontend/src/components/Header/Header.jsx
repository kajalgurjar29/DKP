import React, { useState, useEffect, useRef } from "react";
import { CgProfile } from "react-icons/cg";

function Header({ title = "Dashboard" }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <header className="flex justify-between items-center bg-white shadow-xl h-20 px-5">
      {/* Title */}
      <h2 className="font-semibold text-2xl text-gray-900">{title}</h2>

      {/* Profile Dropdown */}
      <div ref={dropdownRef} className="relative">
        <button
          className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-40"
          onClick={toggleDropdown}
          aria-expanded={dropdownOpen}
        >
          <CgProfile className="size-5" />
          <span>Username</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
            <a
              href="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
