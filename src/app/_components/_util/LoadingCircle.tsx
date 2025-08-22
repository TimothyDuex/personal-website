import React from "react";

interface LoadingCircleProps {
  w: number;
  h: number;
}

const LoadingCircle = ({ w, h }: LoadingCircleProps) => {
  return (
    <div
      className={`w-${w} h-${h} border-2 border-white border-t-transparent rounded-full animate-spin`}
    />
  );
};

export default LoadingCircle;
