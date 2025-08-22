import React, { useState } from "react";
import LoadingCircle from "./LoadingCircle";

interface IframeWithLoadingProps {
  src: string;
  width?: string | number;
  height?: string | number;
  allow?: string;
  loading?: "lazy" | "eager" | undefined;
  className?: string;
}

const IframeWithLoading: React.FC<IframeWithLoadingProps> = ({
  src,
  width = "100%",
  height = "300px",
  allow = "autoplay",
  loading = "lazy",
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Loading Circle */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative">
            <LoadingCircle w={10} h={10} />
          </div>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src={src}
        width={width}
        height={height}
        allow={allow}
        loading={loading}
        className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default IframeWithLoading;
