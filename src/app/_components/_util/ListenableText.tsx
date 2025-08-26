"use client";

import React, { useState, useRef, JSX } from "react";
import { useTextToSpeech } from "../../_hooks/useTextToSpeech";
import { CirclePause, Volume2 } from "lucide-react";
import LoadingCircle from "./LoadingCircle";

interface ListenableTextProps {
  children: React.ReactNode;
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const ListenableText: React.FC<ListenableTextProps> = ({
  children,
  text,
  className = "",
  as: Component = "div",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { speak, isPlaying, isLoading, currentText } = useTextToSpeech();

  const isCurrentTextPlaying = currentText === text && isPlaying;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay to prevent flickering when moving to button
    setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    speak(text);
  };

  return React.createElement(
    Component,
    {
      ref: containerRef,
      className: `relative transition-all duration-200 ${className}`,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    children,
    (isHovered || isCurrentTextPlaying) && (
      <button
        className={`cursor-pointer absolute z-50 -top-5 right-2 px-2 py-1 text-xs font-medium text-primary-text rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 ${
          isLoading
            ? "bg-secondary-bg cursor-not-allowed"
            : "bg-secondary-bg hover:bg-tertiary-bg hover:border hover:border-tertiary-border"
        }
                        `}
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        disabled={isLoading}
      >
        <div className="flex items-center gap-2">
          {isLoading ? (
            <LoadingCircle w={4} h={4} />
          ) : isCurrentTextPlaying ? (
            <CirclePause className="w-4 h-4 text-secondary-text" />
          ) : (
            <Volume2 className="w-4 h-4 text-secondary-text" />
          )}
        </div>
      </button>
    ),
  );
};
