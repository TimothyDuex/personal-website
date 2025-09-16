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
      className="relative z-10 min-h-screen flex flex-col px-8"
    >
      <VinylBackground containerRef={containerRef} />
      <div className="max-w-4xl mx-6 my-6 px-6 py-4 glass-card-primary">
        {/* Respective Content to NavBar Selection */}
        <div className="max-w-4xl mx-auto px-6 py-2 z-1 relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ClientSideLayout;
