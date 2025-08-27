"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";

const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const pathParts = pathName.split("/");
  const pathStart = pathParts.length > 1 ? pathParts[1] : "";

  const navItems = [
    { name: "About" },
    { name: "Resume" },
    { name: "Music" },
    { name: "Blog" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(navItems[0].name);

  const selectedLabel =
    navItems.find((item) => item.name === selectedItem)?.name || "Select";

  const handleItemClick = (item: { name: string }) => {
    setSelectedItem(item.name);
    setIsOpen(false);
    router.push(`/${item.name.toLowerCase()}`);
  };

  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Section Header */}
        <div className="relative flex justify-center">
          {/* Mobile Dropdown (hidden on md and above) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between text-secondary-text hover:text-gray-900 px-3 py-2 bg-secondary-bg rounded-lg hover:bg-gray-100"
            >
              <div className="font-medium">{selectedLabel}</div>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-secondary-bg border border-tertiary-border rounded-lg shadow-lg z-50">
                <div className="py-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleItemClick(item)}
                      className={`w-full text-center px-4 py-2 hover:bg-tertiary-bg ${
                        selectedItem === item.name
                          ? "bg-fill-bg text-fill-text font-medium hover:text-secondary-text"
                          : "text-secondary-text"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Navigation Row */}
          <div className="hidden md:flex md:items-baseline md:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => router.push(`/${item.name.toLowerCase()}`)}
                className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                  pathStart == item.name.toLowerCase() ||
                  (pathStart == "" && item.name == navItems[0].name)
                    ? "bg-fill-bg text-fill-text font-bold"
                    : "text-tertiary-text font-medium hover:bg-fill-bg-hover hover:text-fill-text-hover"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
