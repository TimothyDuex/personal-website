"use client";

import React, { useEffect, useState } from "react";

interface StaggeredListProps {
  items: React.ReactNode[];
  delay?: number;
  className?: string;
}

const StaggeredList: React.FC<StaggeredListProps> = ({
  items,
  delay = 200,
  className = "",
}) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    items.forEach((_, index: number) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * delay);
    });
  }, [items]);

  return (
    <div className={className}>
      {items.map((item: React.ReactNode, index: number) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-out ${
            visibleItems.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default StaggeredList;
