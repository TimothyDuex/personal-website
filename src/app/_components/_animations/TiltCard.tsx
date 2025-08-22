import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

interface TiltState {
  x: number;
  y: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  onClick,
  className = "",
}) => {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const tiltX = (e.clientY - centerY) / 10;
    const tiltY = (centerX - e.clientX) / 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = (): void => {
    setTilt({ x: 0, y: 0 });
  };

  const transformStyle: React.CSSProperties = {
    transform: `perspective(1000px) rotateX(${tilt.x / 10}deg) rotateY(${tilt.y / 10}deg)`,
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={transformStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TiltCard;
