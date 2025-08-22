import React, { useEffect, useRef, useState } from "react";

interface SlideInOnScrollProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}

const SlideInOnScroll: React.FC<SlideInOnScrollProps> = ({
  children,
  direction = "left",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directionClasses: Record<string, string> = {
    left: "translate-x-[-50px]",
    right: "translate-x-[50px]",
    up: "translate-y-[50px]",
    down: "translate-y-[-50px]",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionClasses[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideInOnScroll;
