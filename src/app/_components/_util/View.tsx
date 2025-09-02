"use client";

import React from "react";

interface ViewProps {
  children: React.ReactNode;
}

const View: React.FC<ViewProps> = ({ children }) => {
  return (
    <div className="p-[1px] rounded-lg bg-gradient-to-br from-secondary-border via-secondary-bg to-secondary-bg">
      <div className="bg-secondary-bg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
        {children}
      </div>
    </div>
  );
};

export default View;
