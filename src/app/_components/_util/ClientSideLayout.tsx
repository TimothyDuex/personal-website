"use client";

import React, { useRef } from "react";
import VinylBackground from "../VinylBackground";

interface ClientSideLayoutProps {
  children: React.ReactNode;
}

const ClientSideLayout: React.FC<ClientSideLayoutProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative z-10 min-h-screen flex flex-col px-4"
    >
      <VinylBackground containerRef={containerRef} />
      <div className="max-w-4xl m-1 sm:m-2 md:m-4 lg:m-6 px-2 md:px-4 lg:px-6 py-2 md:py-4 glass-card-primary">
        {/* Respective Content to NavBar Selection */}
        <div className="max-w-4xl mx-auto px-2 md:px-4 lg:px-6 py-2 z-1 relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ClientSideLayout;
