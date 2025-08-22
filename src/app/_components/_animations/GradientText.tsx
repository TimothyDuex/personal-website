import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
}) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)",
    animation: "gradient-shift 3s ease-in-out infinite",
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <span
        className={`bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse ${className}`}
        style={gradientStyle}
      >
        {children}
      </span>
    </>
  );
};

export default GradientText;
