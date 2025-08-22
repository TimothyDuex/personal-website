import React from "react";

interface FloatingIconProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  children,
  delay = 0,
  duration = 3,
}) => {
  const animationStyle: React.CSSProperties = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  };

  return (
    <div className="inline-block animate-bounce" style={animationStyle}>
      {children}
    </div>
  );
};

export default FloatingIcon;
