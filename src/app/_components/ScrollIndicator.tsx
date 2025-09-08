"use client";

import React from "react";

const ScrollIndicator = ({ scrollY }: { scrollY: number }) => {
  let indicatorClass =
    "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out ";

  if (scrollY > 300) {
    indicatorClass += "opacity-0 translate-y-5";
  } else if (scrollY > 100) {
    indicatorClass += "opacity-15 translate-y-4";
  } else if (scrollY > 50) {
    indicatorClass += "opacity-30 translate-y-3";
  } else if (scrollY > 25) {
    indicatorClass += "opacity-65 translate-y-2";
  } else {
    indicatorClass += "opacity-100 translate-y-0";
  }

  return (
    <div className={indicatorClass}>
      <div className="flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-tertiary-text text-sm font-light">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
