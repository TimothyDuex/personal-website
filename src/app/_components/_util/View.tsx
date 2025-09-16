"use client";

import React from "react";

interface ViewProps {
  children: React.ReactNode;
  className?: string;
}

const View: React.FC<ViewProps> = ({ children, className = "" }) => {
  return (
    <div className="p-[1px] rounded-lg bg-gradient-to-br from-secondary-border via-secondary-bg to-secondary-bg z-1">
      <div className={`glass-card-secondary ${className}`}>{children}</div>
    </div>
  );
};

export default View;
