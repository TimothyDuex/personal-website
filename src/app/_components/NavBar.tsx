import React from "react";

const NavBar = ({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) => {
  const navItems = [
    { id: 0, name: "About" },
    { id: 1, name: "Resume" },
    { id: 2, name: "Music" },
  ];

  return (
    <nav className="">
      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Section Header */}
        <div className="flex justify-center">
          {/* Navigation Row */}
          <div className="flex items-baseline space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setPage(item.id)}
                className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                  page == item.id
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
